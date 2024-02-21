from django.urls import path
from django.conf.urls.static import static

from django.conf import settings
from app import views

""" 
Here we put the path links URL that call each view. If a specific URL link is written,
the mentioned view will be called, and so on

These links are specific to the APP folder
so this file should be included in the main project URL file
 """

urlpatterns = [
    path('Investors/', views.InvestorsApi, name='investors_api'),
    path('Investors/<int:id>',views.InvestorsApi, name='investors_api'),

    path('Startup/', views.StartupApi, name='startup_api'),
    path('Startup/<int:id>',views.StartupApi, name='startup_api'),

    # path('Startup/img', views.SaveFile),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
