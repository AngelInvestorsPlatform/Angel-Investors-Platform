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
method = POST
{
    "email": "Startup@example.com",
    "password": "securepassword123",
    "first_name": "warQ",
    "startup_name": "John Doe",
    "full_name": "Aseel",
    "role":"startup",
    "phone": "1234567890",
    "sector": "Technology, Finance",
    "city": "qassim",
    "country": "KSA",
    "team_size": "5",
    "about": "startup seeking for funding.",
    "website": "https://translate.google.com/",
    "stage": "Seed",
    "job_position": "CEO"
}

2- /startups/profile/
method = GET 
-H "Authorization: Token YOUR_TOKEN_HERE"

Using Postman  == Under the Headers tab, add a new header:
Key: Authorization
Value: Token YOUR_TOKEN_HERE
Replace YOUR_TOKEN_HERE with the actual token you received.

3- /startups/profile/
method = PATCH    (means update)
 -H "Authorization: Token YOUR_TOKEN_HERE"
 -d '{
    "stage": "Pre-Seed",
    "country": "Canada"
}


Using Postman  == Under the Headers tab, add a new header:
Key: Authorization
Value: Token YOUR_TOKEN_HERE
Replace YOUR_TOKEN_HERE with the actual token you received from login.

in body :
{
    "stage": "Pre-Seed",
    "country": "Canada"
}

// Same as in investor file i'm sorry not in mood to write a lot

"""