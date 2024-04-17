from rest_framework import serializers
from .models import investor, SyndicateMembership, Investment

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
