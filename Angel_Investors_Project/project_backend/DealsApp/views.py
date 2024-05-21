from rest_framework import viewsets
from .models import Deal, DealMember, DealUpdate
from .serializers import DealSerializer, DealMemberSerializer, DealUpdateSerializer
from SyndicateApp.models import Syndicate
from SyndicateApp.permissions import IsSyndicateLeadOrMember
from django.db.models import Sum

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from .serializers import DealSerializer, DealDetailSerializer
from rest_framework import status
from .serializers import DealListSerializer
from .serializers import MemberDealsSerializer
from SyndicateApp.models import SyndicateMember
from .serializers import DealMemberSerializer, InvestorDealsSerializer, MemberInvestmentSerializer


class DealViewSet(viewsets.ModelViewSet):
    queryset = Deal.objects.all()
    serializer_class = DealSerializer

class DealMemberViewSet(viewsets.ModelViewSet):
    queryset = DealMember.objects.all()
    serializer_class = DealMemberSerializer

class DealUpdateViewSet(viewsets.ModelViewSet):
    queryset = DealUpdate.objects.all()
    serializer_class = DealUpdateSerializer



class AddDealView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            syndicate = Syndicate.objects.get(syndicate_lead=request.user)
        except Syndicate.DoesNotExist:
            return Response({"message": "No syndicate found or not authorized as lead."}, status=status.HTTP_403_FORBIDDEN)

        serializer = DealSerializer(data=request.data, context={'syndicate': syndicate})
        if serializer.is_valid():
            serializer.save(syndicate=syndicate)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    



class DealDetailView(APIView):
    permission_classes = [IsAuthenticated, IsSyndicateLeadOrMember]

    def get(self, request, pk):
        try:
            deal = Deal.objects.get(pk=pk)
            self.check_object_permissions(request, deal)
            serializer = DealDetailSerializer(deal, context={'request': request})
            return Response(serializer.data)
        except Deal.DoesNotExist:
            return Response({"message": "Deal not found."}, status=404)
        except PermissionDenied:
            return Response({"message": "You do not have permission to view this deal."}, status=403)
        

    def handle_exception(self, exc):
        if isinstance(exc, PermissionDenied):
            # Return a custom response for PermissionDenied
            return Response({"detail": "You do not have permission to access this resource."}, status=403)
        # For all other exceptions, use the default handler provided by DRF
        return super().handle_exception(exc)
    


class SyndicateDealsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            # Assuming the user is linked to their syndicate through a 'led_syndicate' related name
            syndicate = request.user.led_syndicate
            deals = Deal.objects.filter(syndicate=syndicate)
            serializer = DealListSerializer(deals, many=True)
            return Response(serializer.data)
        except Syndicate.DoesNotExist:
            return Response({"message": "Syndicate not found or you are not the lead."}, status=404)
        

class InvestorDealsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Get all syndicates where the user is a member
        member_syndicates = SyndicateMember.objects.filter(investor__user=request.user).values_list('syndicate', flat=True)
        # Get all deals from these syndicates
        deals = Deal.objects.filter(syndicate__in=member_syndicates).distinct()
        serializer = MemberDealsSerializer(deals, many=True)
        return Response(serializer.data)
    


class InvestInView(APIView):
    permission_classes = [IsAuthenticated, IsSyndicateLeadOrMember]

    def post(self, request):
        serializer = DealMemberSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            deal_member = serializer.save()
            return Response({
                "message": "Investment successful",
                "deal_member_id": deal_member.id
            })
        return Response(serializer.errors, status=400)
    

class InvestorInvestmentsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Get investments linked to the current user
        investments = DealMember.objects.filter(syndicate_member__investor__user=request.user)
        serializer = InvestorDealsSerializer(investments, many=True)
        return Response(serializer.data)
    

class DealInvestmentsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, deal_id):
        try:
            deal = Deal.objects.get(id=deal_id)
            # Check if the request.user is the syndicate lead for the syndicate of the deal
            if deal.syndicate.syndicate_lead != request.user:
                return Response({"message": "Unauthorized access."}, status=403)

            investments = DealMember.objects.filter(deal=deal)
            serializer = MemberInvestmentSerializer(investments, many=True)

            # Calculate the total invested amount
            total_invested = investments.aggregate(Sum('invested_amount'))['invested_amount__sum']

            return Response({
                'investments': serializer.data,
                'total_invested': total_invested
            })

        except Deal.DoesNotExist:
            return Response({"message": "Deal not found."}, status=404)
