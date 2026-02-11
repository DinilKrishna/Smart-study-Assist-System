"""
URL configuration for core_app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))

Routes all authentication-related endpoints such as:
- user registration
- login (JWT)
- logout
- current authenticated user

See:
https://docs.djangoproject.com/en/5.2/topics/http/urls/
"""

from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView
from api.views import (
    UserRegistrationView,
    UserLoginView,
    CurrentUserView,
    UserLogoutView,
)

def home(request):
    """
    Health-check endpoint for the core service.
    """
    return JsonResponse({"message": "Smart Study Assist Main Service is running!"})


urlpatterns = [
    path("", home),
    path("admin", admin.site.urls),

    # Authentication
    path("api/auth/register", UserRegistrationView.as_view(), name="auth_register"),
    path("api/auth/login", UserLoginView.as_view(), name="auth_login"),
    path("api/auth/logout", UserLogoutView.as_view(), name="auth_logout"),
    path("api/auth/current-user", CurrentUserView.as_view(), name="auth_current_user"),

    # JWT utilities
    path("api/auth/token/refresh", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/auth/token/verify", TokenVerifyView.as_view(), name="token_verify"),
]
