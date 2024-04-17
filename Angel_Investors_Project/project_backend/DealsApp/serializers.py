from rest_framework import serializers
from .models import Deal, DealMember, DealUpdate

class DealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deal
        fields = '__all__'

class DealMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = DealMember
        fields = '__all__'

class DealUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = DealUpdate
        fields = '__all__'
