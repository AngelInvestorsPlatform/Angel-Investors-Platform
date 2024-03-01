# users/urls.py
from django.urls import path
from authentication.views import UserRegistrationView, UserLoginView, UserLogoutView

urlpatterns = [
	path('register', UserRegistrationView.as_view(), name='user-registration'),
    path('login', UserLoginView.as_view(), name='user-login'),
    path('logout', UserLogoutView.as_view(), name='user-logout'), 
]
