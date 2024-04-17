from rest_framework import serializers
from .models import Syndicate, SyndicateMember, SyndicateLead

class SyndicateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Syndicate
        fields = ['syndicate_name', 'sectors', 'status', 'about', 'syndicate_lead']
        extra_kwargs = {
            'syndicate_lead': {'read_only': True}
        }

    def create(self, validated_data):
        # Set the lead to the current user during syndicate creation
        validated_data['syndicate_lead'] = self.context['request'].user
        return Syndicate.objects.create(**validated_data)
    


class SyndicateLeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = SyndicateLead
        fields = '__all__'

class SyndicateMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = SyndicateMember
        fields = '__all__'



class ExploreSyndicateSerializer(serializers.ModelSerializer):
    lead_name = serializers.SerializerMethodField()
    active_deals = serializers.SerializerMethodField()
    members_count = serializers.SerializerMethodField()

    class Meta:
        model = Syndicate
        fields = ['syndicate_name', 'lead_name', 'sectors', 'status', 'active_deals', 'members_count', 'about']

    def get_lead_name(self, obj):
        # Assuming there is a related_name 'investor_profile' linking User to Investor
        investor_profile = getattr(obj.syndicate_lead, 'investor_profile', None)
        return investor_profile.full_name if investor_profile else None
    
    def get_active_deals(self, obj):
        return obj.deals.count()

    def get_members_count(self, obj):
        return obj.members.count()