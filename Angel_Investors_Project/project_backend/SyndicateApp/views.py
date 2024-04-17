from rest_framework import viewsets
from .models import Syndicate, SyndicateMember, SyndicateLead
from .serializers import SyndicateSerializer, SyndicateMemberSerializer, SyndicateLeadSerializer

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
        # Check if the investor already leads a syndicate
        try:
            syndicate = request.user.led_syndicate
            serializer = SyndicateSerializer(syndicate)
            return Response(serializer.data)
        except Syndicate.DoesNotExist:
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