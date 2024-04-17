from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SyndicateViewSet, SyndicateLeadViewSet, SyndicateMemberViewSet
from .views import SyndicateManagementAPIView, ExploreSyndicatesAPIView

router = DefaultRouter()
router.register(r'syndicates', SyndicateViewSet)
router.register(r'leads', SyndicateLeadViewSet)
router.register(r'members', SyndicateMemberViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('manageSyndicate/', SyndicateManagementAPIView.as_view(), name='manage-syndicate'),
    path('explore-syndicates/', ExploreSyndicatesAPIView.as_view(), name='explore-syndicates'),
]

"""To test the URLs or API

curl -X POST http://127.0.0.1:8000/syndicates/manageSyndicate/\
    -H "Authorization: Token YOUR_TOKEN_HERE" \  (لازم نضيف التوكين)
    -H "Content-Type: application/json" \
    -d '{
        "syndicate_name": "Tech Innovators",
        "sectors": "Technology, Healthcare",
        "about": "Focused on innovative startups in technology and healthcare sectors."
    }'                      

curl -X PUT http://127.0.0.1:8000/syndicates/manageSyndicate/ \
    -H "Authorization: Token YOUR_TOKEN_HERE" \ (لازم نضيف التوكين)
    -H "Content-Type: application/json" \
    -d '{
        "syndicate_name": "Tech and Health Innovators",
        "sectors": "Technology, Healthcare, Biotech",
        "about": "Expanding focus to include biotechnological advancements."
    }'



    How to Test Using Postman
        1- Set Up for Creating a Syndicate:

        URL: http://127.0.0.1:8000/syndicates/manageSyndicate/
        Method: POST
        Headers:
        Key: Authorization
        Value: Token YOUR_TOKEN_HERE (لازم نضيف التوكين)
        Key: Content-Type
        Value: application/json
        Body: (select 'raw' and 'JSON') 
            {
            "syndicate_name": "Tech Innovators",
            "sectors": "Technology, Healthcare",
            "about": "Focused on innovative startups in technology and healthcare sectors."
            }
        

        
        2- Set Up for Updating a Syndicate:

        URL: Same as above.
        Method: PUT
        Follow the same header setup.
        Body: (select 'raw' and 'JSON') 
                {
        "syndicate_name": "Tech and Health Innovators",
        "sectors": "Technology, Healthcare, Biotech",
        "about": "Expanding focus to include biotechnological advancements."
    }


        

"""
