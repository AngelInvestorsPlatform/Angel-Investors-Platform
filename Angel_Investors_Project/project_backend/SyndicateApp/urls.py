from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SyndicateViewSet, SyndicateLeadViewSet, SyndicateMemberViewSet
from .views import SyndicateManagementAPIView, ExploreSyndicatesAPIView
from .views import JoinSyndicateView, ManageJoinRequestsView, ManageSyndicateMembersView

router = DefaultRouter()
router.register(r'syndicates', SyndicateViewSet)
router.register(r'leads', SyndicateLeadViewSet)
router.register(r'members', SyndicateMemberViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('manageSyndicate/', SyndicateManagementAPIView.as_view(), name='manage-syndicate'),
    path('explore-syndicates/', ExploreSyndicatesAPIView.as_view(), name='explore-syndicates'),
    path('join/<int:syndicate_id>/', JoinSyndicateView.as_view(), name='join-syndicate'),
    path('manage-join-requests/', ManageJoinRequestsView.as_view(), name='view-manage-join-requests'),
    path('manage-join-requests/<int:join_request_id>/', ManageJoinRequestsView.as_view(), name='manage-join-requests'),
    path('manageSyndicateMembers/', ManageSyndicateMembersView.as_view(), name='manage-syndicate-members'),
]

"""To test the URLs or API

1- curl -X POST http://127.0.0.1:8000/syndicates/manageSyndicate/\
    -H "Authorization: Token YOUR_TOKEN_HERE" \  (لازم نضيف التوكين)
    -H "Content-Type: application/json" \
    -d '{
        "syndicate_name": "Tech Innovators",
        "sectors": "Technology, Healthcare",
        "about": "Focused on innovative startups in technology and healthcare sectors."
    }'                      

2- curl -X PUT http://127.0.0.1:8000/syndicates/manageSyndicate/ \
    -H "Authorization: Token YOUR_TOKEN_HERE" \ (لازم نضيف التوكين)
    -H "Content-Type: application/json" \
    -d '{
        "syndicate_name": "Tech and Health Innovators",
        "sectors": "Technology, Healthcare, Biotech",
        "about": "Expanding focus to include biotechnological advancements."
    }'
3- curl -X GET \
  http://127.0.0.1:8000/syndicates/explore-syndicates/ \
  -H 'Authorization: Token YOUR_TOKEN_HERE'


  #To test sending a join request to a syndicate:
4- curl -X POST \
  http://127.0.0.1:8000/syndicates/join/1/ \ (نضع رقم الايدي للنقابة)
  -H 'Authorization: Token YOUR_TOKEN_HERE'

 #ManageJoinRequestsView To accept or reject a join request: 
5- curl -X PUT \
  http://127.0.0.1:8000/syndicates/manage-join-requests/1/ \ (نضع الايدي للريكويست)
  -H 'Authorization: Token YOUR_TOKEN_HERE' \
  -H 'Content-Type: application/json' \
  -d '{"action": "accepted"}'
 
#To list all members of a specific lead syndicate:
6- curl -X GET \
  http://127.0.0.1:8000/syndicates/manageSyndicateMembers/ \
  -H 'Authorization: Token YOUR_TOKEN_HERE'


  


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
