from rest_framework import viewsets
from .models import Syndicate, SyndicateMember, SyndicateLead
from .serializers import SyndicateSerializer, SyndicateMemberSerializer, SyndicateLeadSerializer, SyndicateMemberListSerializer

#for Syndicate management
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from .models import Syndicate
from .serializers import SyndicateSerializer


#For Explore Syndicate
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Syndicate
from .serializers import ExploreSyndicateSerializer

#For View to Send Join Requests
from rest_framework import views, status, permissions
from rest_framework.response import Response
from .models import JoinRequest, Syndicate
from investorApp.models import investor
from django.shortcuts import get_object_or_404
from .serializers import JoinRequestSerializer

class SyndicateViewSet(viewsets.ModelViewSet):
    queryset = Syndicate.objects.all()
    serializer_class = SyndicateSerializer

class SyndicateLeadViewSet(viewsets.ModelViewSet):
    queryset = SyndicateLead.objects.all()
    serializer_class = SyndicateLeadSerializer

class SyndicateMemberViewSet(viewsets.ModelViewSet):
    queryset = SyndicateMember.objects.all()
    serializer_class = SyndicateMemberSerializer



#View for Syndicate management : Create new Syndicate If the investor does not already lead a syndicate [POST], Show Syndicate [GET], modify Syndicate [PUT]
    
class SyndicateManagementAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Get the syndicate that the user leads
        syndicate = Syndicate.objects.filter(syndicate_lead=request.user).first()
        if syndicate:
            serializer = SyndicateSerializer(syndicate)
            return Response(serializer.data)
        else:
            return Response({"message": "No syndicate found"}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request, *args, **kwargs):
        # Ensure the investor does not already lead a syndicate
        if hasattr(request.user, 'led_syndicate'):
            raise PermissionDenied("You already lead a syndicate.")

        serializer = SyndicateSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, *args, **kwargs):
        try:
            syndicate = request.user.led_syndicate
            serializer = SyndicateSerializer(syndicate, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Syndicate.DoesNotExist:
            return Response({"message": "No syndicate found to update"}, status=status.HTTP_404_NOT_FOUND)
        


#View For Explore Syndicate
class ExploreSyndicatesAPIView(generics.ListAPIView):
    queryset = Syndicate.objects.all()
    serializer_class = ExploreSyndicateSerializer
    permission_classes = [IsAuthenticated]


#For View to Send Join Requests to a Syndicate
class JoinSyndicateView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, syndicate_id):
        # Retrieve the syndicate and investor
        syndicate = get_object_or_404(Syndicate, pk=syndicate_id)
        userInvestor = get_object_or_404(investor, user=request.user)  # Ensure there is a link from User to Investor

        # Check if already requested or a member
        if JoinRequest.objects.filter(investor=userInvestor, syndicate=syndicate).exists():
            return Response({'message': 'You have already sent a request.'}, status=status.HTTP_400_BAD_REQUEST)

        # Create the join request
        JoinRequest.objects.create(investor=userInvestor, syndicate=syndicate)
        return Response({'message': 'Request to join syndicate sent successfully.'}, status=status.HTTP_201_CREATED)
        

#For View for Syndicate Lead to Manage Join Requests
class ManageJoinRequestsView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        # Only allow leads to see their syndicate's join requests
        join_requests = JoinRequest.objects.filter(syndicate__syndicate_lead=request.user)
        serializer = JoinRequestSerializer(join_requests, many=True)
        return Response(serializer.data)

    def put(self, request, join_request_id):
        # Get the join request by ID
        join_request = get_object_or_404(JoinRequest, id=join_request_id)
        
        # Check if the current user is the lead of the syndicate for which the join request was made
        # Adjusting the check to properly reference the user field in the investor model.
        if join_request.syndicate.syndicate_lead != request.user:
            return Response({'message': 'You are not authorized to manage this join request.'}, status=status.HTTP_403_FORBIDDEN)

        action = request.data.get('action')
        if action in ['accepted', 'rejected']:
            join_request.action = action  # Update status
            if action == 'accepted':
                # Create a syndicate member only if not already a member
                if not SyndicateMember.objects.filter(syndicate=join_request.syndicate, investor=join_request.investor).exists():
                    SyndicateMember.objects.create(syndicate=join_request.syndicate, investor=join_request.investor)
            join_request.save()
            return Response({'message': f'Request {action}.'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Invalid action specified'}, status=status.HTTP_400_BAD_REQUEST)
        

""" #For View to list name of members in a syndicate.
class ListSyndicateMembersView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, syndicate_id):
        try:
            syndicate = Syndicate.objects.get(id=syndicate_id)
            members = syndicate.members.all()
            serializer = SyndicateMemberListSerializer(members, many=True)
            return Response(serializer.data)
        except Syndicate.DoesNotExist:
            return Response({'error': 'Syndicate not found'}, status=404) """


#view for list all members of that syndicate allow only for lead at manage member
class ManageSyndicateMembersView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Find the syndicate where the current user is the lead
        syndicate = get_object_or_404(Syndicate, syndicate_lead=request.user)

        # Retrieve all members of this syndicate
        members = SyndicateMember.objects.filter(syndicate=syndicate).select_related('investor')
        serializer = SyndicateMemberSerializer(members, many=True)
        return Response(serializer.data)

