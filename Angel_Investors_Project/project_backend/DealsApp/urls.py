from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DealViewSet, DealMemberViewSet, DealUpdateViewSet

router = DefaultRouter()
router.register(r'deals', DealViewSet)
router.register(r'deal_members', DealMemberViewSet)
router.register(r'deal_updates', DealUpdateViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
