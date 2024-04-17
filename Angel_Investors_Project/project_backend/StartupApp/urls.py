from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StartupViewSet, InvestmentRoundViewSet, OfferViewSet
from .views import StartupRegistrationAPIView, StartupProfileAPIView

router = DefaultRouter()
router.register(r'startups', StartupViewSet)
router.register(r'investment_rounds', InvestmentRoundViewSet)
router.register(r'offers', OfferViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', StartupRegistrationAPIView.as_view(), name='startup-register'),
    path('profile/', StartupProfileAPIView.as_view(), name='startup-profile'),
]


""" to test the URLs or API

1- /startups/register/


2- /startups/profile/

GET and PATCH 


// Same as in investor file i'm sorry not in mood to write a lot

"""