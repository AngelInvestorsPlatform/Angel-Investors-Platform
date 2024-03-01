from django.contrib import admin
from django.urls import path, include
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('form/', include('app.urls')),
    path('auth/', include('authentication.urls')),
]
