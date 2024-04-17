from rest_framework import viewsets
from .models import Deal, DealMember, DealUpdate
from .serializers import DealSerializer, DealMemberSerializer, DealUpdateSerializer

class DealViewSet(viewsets.ModelViewSet):
    queryset = Deal.objects.all()
    serializer_class = DealSerializer

class DealMemberViewSet(viewsets.ModelViewSet):
    queryset = DealMember.objects.all()
    serializer_class = DealMemberSerializer

class DealUpdateViewSet(viewsets.ModelViewSet):
    queryset = DealUpdate.objects.all()
    serializer_class = DealUpdateSerializer
