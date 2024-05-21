from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StartupViewSet, InvestmentRoundViewSet, OfferViewSet
from .views import StartupRegistrationAPIView, StartupProfileAPIView
from .views import InvestmentRoundView
from .views import StartupInvestmentRoundsView
from .views import SendOfferView, OffersReviewView,OfferDecisionView, LeadOffersReviewView
from .views import AddExclusiveStartupView, ListExclusiveStartupsView

router = DefaultRouter()
router.register(r'startups', StartupViewSet)
router.register(r'investment_rounds', InvestmentRoundViewSet)
router.register(r'offers', OfferViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', StartupRegistrationAPIView.as_view(), name='startup-register'),
    path('profile/', StartupProfileAPIView.as_view(), name='startup-profile'),
    path('investment-round/', InvestmentRoundView.as_view(), name='investment-round'),
    path('Explore-investment-rounds/', StartupInvestmentRoundsView.as_view(), name='Explore-investment-rounds'),
    path('send-offer/', SendOfferView.as_view(), name='send-offer'),
    path('review-offers/', OffersReviewView.as_view(), name='review-offers'),
    path('offers-decision/<int:pk>/', OfferDecisionView.as_view(), name='offer-decision'),
    path('lead-offers/', LeadOffersReviewView.as_view(), name='lead-offers-review'),
    path('exclusive-startups/add/', AddExclusiveStartupView.as_view(), name='add-exclusive-startup'),
    path('exclusive-startups/list/', ListExclusiveStartupsView.as_view(), name='list-exclusive-startups'),
]


""" to test the URLs or API

1-   /startups/register/
        method = POST
        {
            "email": "Startup@example.com",
            "password": "securepassword123",
            "first_name": "John",
            "startup_name": "warQ",
            "full_name": "John De",
            "role":"startup",
            "phone": "1234567890",
            "sector": "Technology, Finance",
            "city": "Qassim",
            "country": "KSA",
            "team_size": "5",
            "about": "startup seeking for funding.",
            "website": "https://translate.google.com/",
            "stage": "Seed",
            "job_position": "CEO"
        }

2-  /startups/profile/
        method = GET 
        -H "Authorization: Token YOUR_TOKEN_HERE"

        Using Postman  == Under the Headers tab, add a new header:
        Key: Authorization
        Value: Token YOUR_TOKEN_HERE
        Replace YOUR_TOKEN_HERE with the actual token you received.

3-  /startups/profile/
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


4-   curl -X POST http://localhost:8000/startups/investment-round/ \
        -H "Content-Type: application/json" \
        -H "Authorization: Token YOUR_TOKEN_HERE" \
        -d '{"ask": "100000.00", "valuation": "1000000.00"}'

5- 
        method = GET http://localhost:8000/startups/Explore-investment-rounds/
        -H "Authorization: Token YOUR_TOKEN_HERE"

        result = {
            {
                "id": 5,
                "startup_name": "warQ",
                "job_position": "CEO",
                "full_name": "John De",
                "sector": "Technology, Finance",
                "stage": "Seed",
                "phone": "1234567890",
                "email": "Startup@example.com",
                "ask": "100000.00",
                "valuation": "1000000.00"
            }
        }


6-      curl -X POST http://localhost:8000/startups/send-offer/ \
     -H "Content-Type: application/json" \
     -H "Authorization: Token YOUR_AUTH_TOKEN_HERE" \
     -d '{
         "round": 1,
         "post": "We are excited to propose an investment opportunity for your startup. We believe your vision aligns perfectly with our goals."
     }'

7-       method = GET http://localhost:8000/startups/review-offers/
        -H "Authorization: Token YOUR_TOKEN_HERE"

        

8-      curl -X POST http://localhost:8000/startups/offers-decision/<int:pk>/ \
            -H "Authorization: Token YOUR_TOKEN_HERE" \
            -H "Content-Type: application/json" \
            -d '{"action": "accept"}'
    or

        curl -X POST http://localhost:8000/startups/offers-decision/<int:pk>/  \
            -H "Authorization: Token YOUR_TOKEN_HERE" \
            -H "Content-Type: application/json" \
            -d '{"action": "reject", "rejection_reason": "The terms do not meet our current needs."}'

9-      method = GET http://localhost:8000/startups/lead-offers/
        -   H "Authorization: Token YOUR_TOKEN_HERE"


10-     curl -X POST http://localhost:8000/startups/exclusive-startups/add/ \
            -H "Authorization: Token YOUR_TOKEN_HERE" \
            -H "Content-Type: application/json" \
            -d '{
                "startup_name": "Innovatech Ltd",
                "sector": "Technology",
                "city": "San Francisco",
                "country": "USA",
                "phone": "555-1234",
                "team_size": 15,
                "website": "http://www.innovatech.com",
                "stage": "Seed",
                "email": "contact@innovatech.com",
                "about": "Pioneering new technologies in the AI sector.",
                "full_name": "John Doe",
                "job_position": "CEO"
                }'




11-     curl -X GET http://localhost:8000/startups/exclusive-startups/list/ \
            -H "Authorization: Token YOUR_TOKEN_HERE"


"""