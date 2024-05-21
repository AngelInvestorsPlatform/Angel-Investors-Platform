from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DealViewSet, DealMemberViewSet, DealUpdateViewSet
from .views import AddDealView, DealDetailView, SyndicateDealsView, InvestorDealsView, InvestInView, InvestorInvestmentsView, DealInvestmentsView

router = DefaultRouter()
router.register(r'deals', DealViewSet)
router.register(r'deal_members', DealMemberViewSet)
router.register(r'deal_updates', DealUpdateViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('add-New-Deal/', AddDealView.as_view(), name='add-deal'),
    path('deal-detail/<int:pk>/', DealDetailView.as_view(), name='deal-detail'),
    path('syndicate-deals/', SyndicateDealsView.as_view(), name='syndicate-deals'),
    path('investor-deals/', InvestorDealsView.as_view(), name='investor-deals'),
    path('invest-in/', InvestInView.as_view(), name='invest-in-deal'),
    path('investor-investments/', InvestorInvestmentsView.as_view(), name='investor-investments'),
    path('investments-in-deals/<int:deal_id>/', DealInvestmentsView.as_view(), name='deal-investments'),
]

''' for API testing 
1-        curl -X POST http://localhost:8000/deals/add-New-Deal/ \
            -H "Authorization: Token YOUR_TOKEN_HERE" \
            -H "Content-Type: application/json" \
            -d '{
                "startup_id": 1,  \\if the deal belong to startup\\
                "memo": "Detailed investment proposal for early-stage startup.",
                "pitch_deck": null,
                "valuation": 5000000,
                "allocation": 100000,
                "lead_investment": 50000,
                "total_curry": 10,
                "minimum_investment": 10000,
                "deadline": "2025-01-01"
            }'
2-
        curl -X POST http://localhost:8000/deals/add-New-Deal/ \
            -H "Authorization: Token YOUR_TOKEN_HERE" \
            -H "Content-Type: application/json" \
            -d '{
                "exclusive_startup_id": 2, \\if the deal belong to exclusive startup\\
                "memo": "Investment opportunity in high-tech exclusive startup.",
                "valuation": 8000000,
                "allocation": 200000,
                "lead_investment": 100000,
                "total_curry": 10,
                "minimum_investment": 20000,
                "deadline": "2025-01-01"
            }'
3- 
        curl -X GET http://localhost:8000/deals/syndicate-deals/ \
            -H "Authorization: Token YOUR_TOKEN_HERE"

            RESULT :

                {
                    "id": 2,
                    "startup_name": "dodo",
                    "sector": "Adtech, Market, Education",
                    "stage": "seed",
                    "allocation": "100000.00",
                    "deadline": "2025-01-01"
                },
                {
                    "id": 3,
                    "startup_name": "Helath investor",
                    "sector": "Piotich",
                    "stage": "Seed",
                    "allocation": "200000.00",
                    "deadline": "2025-01-01"
                }

4- 
        curl -X GET http://localhost:8000/deals/deal-detail/2/ \
            -H "Authorization: Token YOUR_TOKEN_HERE"

            RESULT :
            {
                "startup_name": "SmartBuild Systems",
                "sector": "Construction Technology",
                "website": "",
                "syndicate_name": "Build Ventures",
                "syndicate_lead_first_name": "Ahmad Nasser",
                "memo": "Investor: Ahmad Nasser\nStartup: SmartBuild Systems\nSector: Construction Technology.",
                "valuation": "30000000.00",
                "allocation": "2000000.00",
                "lead_investment": "18000.00",
                "total_curry": "15.00",
                "minimum_investment": "10000.00",
                "deadline": "2024-05-31",
                "user_has_invested": true,
                "invested_amount": 15000.0
            }

5- 
        curl -X GET http://localhost:8000/deals/investor-deals/\
            -H "Authorization: Token YOUR_TOKEN_HERE"

            RESULT :

                {
                    "id": 3,
                    "startup_name": "Helath investor",
                    "sector": "Piotich",
                    "stage": "Seed",
                    "syndicate_name": "New Innovators Syndicate",
                    "syndicate_lead_name": "Dodo",
                    "allocation": "200000.00",
                    "deadline": "2025-01-01"
                },
                {
                    "id": 2,
                    "startup_name": "dodo",
                    "sector": "Adtech, Market, Education",
                    "stage": "seed",
                    "syndicate_name": "New Innovators Syndicate",
                    "syndicate_lead_name": "Dodo",
                    "allocation": "100000.00",
                    "deadline": "2025-01-01"
                }

6-       curl -X POST http://localhost:8000/deals/invest-in/ \
            -H "Content-Type: application/json" \
            -H "Authorization: Token YOUR_TOKEN_HERE" \
            -d '{"deal": 3, "invested_amount": "5000.00"}'

            
7- 
        curl -X GET http://localhost:8000/deals/investor-investments/\
            -H "Authorization: Token YOUR_TOKEN_HERE"

            RESULT : 
                    {
                        "startup_name": "Helath investor",
                        "syndicate_name": "New Innovators Syndicate",
                        "invested_amount": "5000.00",
                        "deal_id": 3
                    }


8- 
        curl -X GET http://localhost:8000/deals/investments-in-deals/<int:deal_id>/\
            -H "Authorization: Token YOUR_TOKEN_HERE"

        RESULT :
                {
                    "investments": [
                        {
                            "investor_name": "Omar Khaled",
                            "invested_amount": "800.00"
                        }
                    ],
                    "total_invested": 800.0
                }
'''