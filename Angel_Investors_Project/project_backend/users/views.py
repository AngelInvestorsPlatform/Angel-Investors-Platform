from django.shortcuts import render

# users/views.py
from django.contrib.auth import get_user_model, login, logout
from django.contrib.auth.models import Permission
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer, SetPermissionsSerializer
from rest_framework import permissions, status
from .validations import custom_validation, validate_email, validate_password


class UserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	def post(self, request):
		clean_data = custom_validation(request.data)
		serializer = UserRegisterSerializer(data=clean_data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.create(clean_data)
			if user:
				return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,BasicAuthentication)
	##
	def post(self, request):
		data = request.data
		assert validate_email(data)
		assert validate_password(data)
		serializer = UserLoginSerializer(data=data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.check_user(data)
			login(request, user)
			return Response(serializer.data, status=status.HTTP_200_OK)


class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)


class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,BasicAuthentication)
	##
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)
	


	
class SetPermissions(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,BasicAuthentication)

	def post(self, request):
		serializer = SetPermissionsSerializer(data=request.data)
		if serializer.is_valid():
			permission_type = serializer.validated_data['permission_type']
			if permission_type == 'investor':
				permission_codename = 'is_investor'
			elif permission_type == 'startup':
				permission_codename = 'is_startup'
			else:
				return Response({'error': 'Invalid permission type'}, status=status.HTTP_400_BAD_REQUEST)

			# Get the permission object you want to add
			try:
				permission = Permission.objects.get(codename=permission_codename)
			except Permission.DoesNotExist:
				return Response({'error': 'Permission not found'}, status=status.HTTP_400_BAD_REQUEST)

			# Add the permission to the user
			request.user.user_permissions.add(permission)
			return Response({'message': 'Permissions set successfully'}, status=status.HTTP_200_OK)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	
class GetPermissions(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,BasicAuthentication)

	def get(self, request):
		has_investor_permission = request.user.has_perm('users.is_investor')
		has_startup_permission = request.user.has_perm('users.is_startup')
		if has_investor_permission:
			return Response({'permission': 'investor'}, status=status.HTTP_200_OK)
		elif has_startup_permission:
			return Response({'permission': 'startup'}, status=status.HTTP_200_OK)
		else:
			return Response({'permission': 'the user does not have a premise'}, status=status.HTTP_200_OK)