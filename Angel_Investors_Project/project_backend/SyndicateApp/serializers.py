from rest_framework import serializers
from .models import Syndicate, SyndicateMember, SyndicateLead, JoinRequest
from DealsApp.models import DealMember
from investorApp.models import investor




class SyndicateSerializer(serializers.ModelSerializer):
    lead_name = serializers.SerializerMethodField(read_only=True)
    lead_details = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Syndicate
        fields = ['id', 'syndicate_name', 'sectors', 'status', 'about', 'syndicate_lead', 'lead_name', 'lead_details']
        extra_kwargs = {
            'syndicate_lead': {'read_only': True}
        }

    def get_lead_name(self, obj):
        # Assuming there is a related_name 'investor_profile' linking User to Investor
        # Check if the user has an investor profile linked
        if hasattr(obj.syndicate_lead, 'investor_profile'):
            return obj.syndicate_lead.investor_profile.full_name
        else:
            # Check for any other user profile that might exist
            return obj.syndicate_lead.get_full_name() if hasattr(obj.syndicate_lead, 'get_full_name') else 'Unknown Lead'
        
    def get_lead_details(self, obj):
        # Assuming `syndicate_lead` is directly linked to an `Investor`
        # and `investor_profile` is an attribute on the user model that points to the investor instance
        if hasattr(obj.syndicate_lead, 'investor_profile'):
            # If the investor_profile exists, serialize it
            investor = obj.syndicate_lead.investor_profile
            return InvestorSerializer(investor).data
        else:
            # Return a default or simplified structure if no investor profile exists
            return {'detail': 'Lead details are not available.'}

    def create(self, validated_data):
        # Set the lead to the current user during syndicate creation
        validated_data['syndicate_lead'] = self.context['request'].user
        return Syndicate.objects.create(**validated_data)
    

class InvestorSerializer(serializers.ModelSerializer):
    class Meta:
        model = investor
        fields = ['full_name', 'phone', 'country', 'experience']  # Add other relevant fields


class SyndicateLeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = SyndicateLead
        fields = ['syndicate', 'investor']  # Include other fields if necessary


class SyndicateMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = SyndicateMember
        fields = '__all__'

class SyndicateMemberListSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(source='investor.full_name', read_only=True)  # Adjust path based on your model
    
    class Meta:
        model = SyndicateMember
        fields = ['full_name']


class ExploreSyndicateSerializer(serializers.ModelSerializer):
    lead_name = serializers.SerializerMethodField()
    active_deals = serializers.SerializerMethodField()
    members_count = serializers.SerializerMethodField()
    members = SyndicateMemberListSerializer(source='members.all', many=True)  # Serialize all members

    class Meta:
        model = Syndicate
        fields = ['id','syndicate_name', 'lead_name', 'sectors', 'status', 'active_deals', 'members_count', 'about', 'members']

    def get_lead_name(self, obj):
        # Assuming there is a related_name 'investor_profile' linking User to Investor
        investor_profile = getattr(obj.syndicate_lead, 'investor_profile', None)
        return investor_profile.full_name if investor_profile  else 'Unknown Lead'
    
    def get_active_deals(self, obj):
        return obj.deals.count()

    def get_members_count(self, obj):
        return obj.members.count()
    
class JoinRequestSerializer(serializers.ModelSerializer):
    investor_name = serializers.CharField(source='investor.full_name', read_only=True)
    investor_email = serializers.CharField(source='investor.user.email', read_only=True)
    investor_sectors = serializers.CharField(source='investor.sectors', read_only=True)
    investor_about = serializers.CharField(source='investor.about', read_only=True)

    class Meta:
        model = JoinRequest
        fields = [
            'id', 'syndicate', 'investor', 'action', 
            'investor_name', 'investor_email', 'investor_sectors', 'investor_about'
        ]   


class SyndicateMemberSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(source='investor.full_name', read_only=True)
    email = serializers.EmailField(source='investor.user.email', read_only=True)
    sectors = serializers.CharField(source='investor.sectors', read_only=True)
    about = serializers.CharField(source='investor.about', read_only=True)
    deal_count = serializers.SerializerMethodField()

    class Meta:
        model = SyndicateMember
        fields = ['id', 'full_name', 'email', 'sectors', 'about', 'deal_count']
    
    def get_deal_count(self, obj):
        return DealMember.objects.filter(syndicate_member=obj).count()