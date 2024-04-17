from rest_framework import serializers
from .models import Startup, InvestmentRound, Offer

class StartupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Startup
        fields = '__all__'

class InvestmentRoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentRound
        fields = '__all__'

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = '__all__'
