from django.contrib import admin
from django.urls import path, include
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('form/', include('app.urls')),
    path('auth/', include('authentication.urls')),
    path('startups/', include('StartupApp.urls')),
    path('investors/', include('investorApp.urls')),
    path('syndicates/', include('SyndicateApp.urls')),
    path('deals/', include('DealsApp.urls')),
]
