from rest_framework import viewsets
from .models import investor, SyndicateMembership, Investment
from .serializers import InvestorSerializer, SyndicateMembershipSerializer, InvestmentSerializer

#for Investor Registration View
from django.contrib.auth import get_user_model
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import InvestorSerializer 
from authentication.serializers import UserSerializer

#for Viewing and Updating Investor Profile:
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated
from .serializers import InvestorSerializer
from .models import investor


class InvestorViewSet(viewsets.ModelViewSet):
    queryset = investor.objects.all()
    serializer_class = InvestorSerializer

class SyndicateMembershipViewSet(viewsets.ModelViewSet):
    queryset = SyndicateMembership.objects.all()
    serializer_class = SyndicateMembershipSerializer

class InvestmentViewSet(viewsets.ModelViewSet):
    queryset = Investment.objects.all()
    serializer_class = InvestmentSerializer


#for Investor Registration View 
User = get_user_model()

class InvestorRegistrationAPIView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            investor_data = {**request.data, 'user': user.pk}
            investor_serializer = InvestorSerializer(data=investor_data)
            if investor_serializer.is_valid():
                investor_serializer.save()
                return Response(investor_serializer.data, status=status.HTTP_201_CREATED)
            else:
                user.delete()  # Roll back user creation if investor creation fails
                return Response(investor_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

#for Viewing and Updating Investor Profile:
class InvestorProfileAPIView(RetrieveUpdateAPIView):
    serializer_class = InvestorSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
       # Retrieve and return the authenticated user's investor profile
        try:
            return self.request.user.investor_profile  # Ensure 'investor_profile' is the correct related_name
        except investor.DoesNotExist:
            # Handle the case where an investor profile does not exist
            raise NotFound("Investor profile not found.")