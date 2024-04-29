from rest_framework import viewsets
from .models import Startup, InvestmentRound, Offer
from .serializers import StartupSerializer, InvestmentRoundSerializer, OfferSerializer,LeadOfferReviewSerializer

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

#for Explore the Startup in lead page 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import InvestmentRound
from SyndicateApp.models import Syndicate
from .serializers import StartupInvestmentRoundSerializer, OfferReviewSerializer
from .serializers import OfferUpdateSerializer

#for Exclusive Startup
from .models import ExclusiveStartup
from .serializers import ExclusiveStartupSerializer
 

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
         


class InvestmentRoundView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = InvestmentRoundSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


class StartupInvestmentRoundsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Check if the current user is a syndicate lead
        if not Syndicate.objects.filter(syndicate_lead=request.user).exists():
            return Response({"message": "You are not authorized to view this data."}, status=status.HTTP_403_FORBIDDEN)

        # Fetch all active investment rounds
        investment_rounds = InvestmentRound.objects.filter(is_active=True)
        serializer = StartupInvestmentRoundSerializer(investment_rounds, many=True)
        return Response(serializer.data)
    


class SendOfferView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = OfferSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class OffersReviewView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        try:
            # Assuming the startup is linked to the user via a one-to-one field `startup_profile`
            startup = request.user.startup_profile
            # Ensure that startup_profile is properly set up and has an active investment round
            investment_round = InvestmentRound.objects.filter(startup=startup, is_active=True).first()
            if not investment_round:
                return Response({"message": "No active investment round found for your startup."}, status=404)

            # Fetch only pending offers for this active investment round
            offers = Offer.objects.filter(round=investment_round, action='pending')
            serializer = OfferReviewSerializer(offers, many=True)
            return Response(serializer.data)
        except Startup.DoesNotExist:
            return Response({"message": "Startup profile not found."}, status=404)
        except AttributeError:
            return Response({"message": "Error in retrieving startup profile. Ensure profile is correctly set up."}, status=404)
        




#view that handles the POST request to accept or reject offers.
class OfferDecisionView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):
        try:
            offer = Offer.objects.get(pk=pk, round__startup=request.user.startup_profile)
            action = request.data.get('action')

            if action == 'accept':
                # Accept the selected offer
                offer.action = "accepted"
                offer.round.is_active = False  # Deactivate the investment round
                offer.save()
                offer.round.save()

                # Automatically reject all other pending offers for this round
                pending_offers = Offer.objects.filter(round=offer.round, action='pending').exclude(pk=offer.pk)
                for pending_offer in pending_offers:
                    pending_offer.action = "rejected"
                    pending_offer.rejection_reason = "Another good offer has been accepted. We appreciate your interest."
                    pending_offer.save()

                return Response({'message': 'Offer accepted and investment round deactivated.'}, status=status.HTTP_200_OK)

            elif action == 'reject':
                offer.action = "rejected"
                rejection_reason = request.data.get('rejection_reason', 'No reason provided.')
                offer.rejection_reason = rejection_reason
                offer.save()
                return Response({'message': 'Offer rejected.', 'rejection_reason': rejection_reason}, status=status.HTTP_200_OK)

            else:
                return Response({'message': 'Invalid action specified.'}, status=status.HTTP_400_BAD_REQUEST)

        except Offer.DoesNotExist:
            return Response({'message': 'No offer found or not authorized.'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        


class LeadOffersReviewView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            # Fetch the lead's syndicate if they have one
            lead = Syndicate.objects.get(syndicate_lead=request.user)
            # Fetch all offers associated with this lead's syndicate
            offers = Offer.objects.filter(lead_investor=lead).select_related('round')
            serializer = LeadOfferReviewSerializer(offers, many=True)
            return Response(serializer.data)
        except Syndicate.DoesNotExist:
            return Response({"message": "You are not registered as a syndicate lead or no syndicate found."}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"message": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        


class AddExclusiveStartupView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = ExclusiveStartupSerializer(data=request.data)
        if serializer.is_valid():
            try:
                # Fetch the syndicate lead's syndicate
                syndicate = Syndicate.objects.get(syndicate_lead=request.user)
                # Save the exclusive startup with the current user's syndicate
                exclusive_startup = serializer.save(syndicate=syndicate)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            except Syndicate.DoesNotExist:
                return Response({"message": "No syndicate found for the current user."}, status=status.HTTP_403_FORBIDDEN)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        


class ListExclusiveStartupsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Ensure the user is a syndicate lead
        if not Syndicate.objects.filter(syndicate_lead=request.user).exists():
            return Response({"message": "You are not authorized as a syndicate lead."}, status=status.HTTP_403_FORBIDDEN)
        exclusive_startups = ExclusiveStartup.objects.filter(syndicate__syndicate_lead=request.user)
        serializer = ExclusiveStartupSerializer(exclusive_startups, many=True)
        return Response(serializer.data)
