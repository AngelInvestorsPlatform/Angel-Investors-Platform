# authentication/serializers.py

from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'email', 'role', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # Extract email and password from validated data
        email = validated_data['email']
        password = validated_data['password']
        first_name = validated_data.pop('first_name') 
        role = validated_data.pop('role')        

        # Create user with email as username and provided first name
        user = User.objects.create_user(email=email, username=email, password=password, first_name=first_name, role=role)
        return user