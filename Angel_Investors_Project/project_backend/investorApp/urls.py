from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import InvestorViewSet, SyndicateMembershipViewSet, InvestmentViewSet
from .views import InvestorRegistrationAPIView, InvestorProfileAPIView
from .views import JoinedSyndicatesView

router = DefaultRouter()
router.register(r'investors', InvestorViewSet)
router.register(r'memberships', SyndicateMembershipViewSet)
router.register(r'investments', InvestmentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', InvestorRegistrationAPIView.as_view(), name='investor-register'),
    path('profile/', InvestorProfileAPIView.as_view(), name='investor-profile'),
    path('joined-syndicates/', JoinedSyndicatesView.as_view(), name='joined-syndicates'),
]


""" to test the URLs or API

1- /investors/register/
method = POST
{
    "email": "john.doe@example.com",
    "password": "securepassword123",
    "first_name": "John",
    "full_name": "John Doe",
    "role":"investor",
    "phone": "123-456-7890",
    "sectors": "Technology, Finance",
    "experience": "10 years in tech startups",
    "country": "USA",
    "income": "100000",
    "about": "Experienced investor interested in new technology ventures."
}

2- /investors/profile/
method = GET 
-H "Authorization: Token 1cb36a14f7d3472b18382508a0ff0350097584df"

Using Postman  == Under the Headers tab, add a new header:
Key: Authorization
Value: Token YOUR_TOKEN_HERE
Replace YOUR_TOKEN_HERE with the actual token you received.

3- /investors/profile/
method = PATCH    (means update)
 -H "Authorization: Token YOUR_TOKEN_HERE"
 -d '{
    "phone": "050085005",
    "country": "KSA"
}

Using Postman  == Under the Headers tab, add a new header:
Key: Authorization
Value: Token YOUR_TOKEN_HERE
Replace YOUR_TOKEN_HERE with the actual token you received from login.

in body :
{
    "phone": "050085005",
    "country": "KSA"
}

4- /investors/joined-syndicates/

method = GET
 -H "Authorization: Token YOUR_TOKEN_HERE"

 Using Postman  == Under the Headers tab, add a new header:
Key: Authorization
Value: Token YOUR_TOKEN_HERE
Replace YOUR_TOKEN_HERE with the actual token you received.
 """