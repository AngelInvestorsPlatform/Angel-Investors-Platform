from rest_framework import viewsets
from .models import Startup, InvestmentRound, Offer
from .serializers import StartupSerializer, InvestmentRoundSerializer, OfferSerializer

#for Startup Registration 
from django.contrib.auth import get_user_model
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import StartupSerializer
from authentication.serializers import UserSerializer

#for Viewing and Updating Startup Profile
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated
from .serializers import StartupSerializer
from .models import Startup
 

class StartupViewSet(viewsets.ModelViewSet):
    queryset = Startup.objects.all()
    serializer_class = StartupSerializer

class InvestmentRoundViewSet(viewsets.ModelViewSet):
    queryset = InvestmentRound.objects.all()
    serializer_class = InvestmentRoundSerializer

class OfferViewSet(viewsets.ModelViewSet):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer



#for Startup Registration 
User = get_user_model()

class StartupRegistrationAPIView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            startup_data = {**request.data, 'user': user.pk}
            startup_serializer = StartupSerializer(data=startup_data)
            if startup_serializer.is_valid():
                startup_serializer.save()
                return Response(startup_serializer.data, status=status.HTTP_201_CREATED)
            user.delete()  # Roll back user creation if startup fails
            return Response(startup_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

#for Viewing and Updating Startup Profile
class StartupProfileAPIView(RetrieveUpdateAPIView):
    serializer_class = StartupSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Retrieve and return the authenticated user's startup profile
         try:
            return self.request.user.startup_profile
         except Startup.DoesNotExist:
             raise NotFound("Startup profile not found.")