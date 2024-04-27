from rest_framework import serializers
from .models import investor, SyndicateMembership, Investment
from SyndicateApp.models import Syndicate, SyndicateMember
from SyndicateApp.serializers import SyndicateMemberSerializer

class InvestorSerializer(serializers.ModelSerializer):
    class Meta:
        model = investor
        fields = '__all__'

    def create(self, validated_data):
        # Optionally handle related data creation here if needed
        return investor.objects.create(**validated_data)

class SyndicateMembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = SyndicateMembership
        fields = '__all__'

class InvestmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investment
        fields = '__all__'

class SyndicateSerializer(serializers.ModelSerializer):
    lead_name = serializers.SerializerMethodField()
    sectors = serializers.CharField(read_only=True)
    status = serializers.CharField(read_only=True)
    active_deals = serializers.SerializerMethodField()
    members_count = serializers.SerializerMethodField()
    about = serializers.CharField(read_only=True)
    members = serializers.SerializerMethodField()

    class Meta:
        model = Syndicate
        fields = ['id', 'syndicate_name', 'lead_name', 'sectors', 'status', 'active_deals', 'members_count', 'about', 'members']

    def get_active_deals(self, obj):
        return obj.deals.count()

    def get_members_count(self, obj):
        return obj.members.count()

    def get_members(self, obj):
        members = SyndicateMember.objects.filter(syndicate=obj)
        return SyndicateMemberSerializer(members, many=True).data
    
    def get_lead_name(self, obj):
        # Assuming there is a related_name 'investor_profile' linking User to Investor
        investor_profile = getattr(obj.syndicate_lead, 'investor_profile', None)
        return investor_profile.full_name if investor_profile  else 'Unknown Lead'