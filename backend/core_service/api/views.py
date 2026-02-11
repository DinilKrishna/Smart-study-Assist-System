from rest_framework import generics, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model

from .serializers import (
    UserRegistrationSerializer,
    UserSerializer,
)
from .token_serializers import EmailTokenObtainPairSerializer

User = get_user_model()


class UserRegistrationView(generics.CreateAPIView):
    """
    POST /api/auth/register/
    Registers a new user account.
    Authentication:
        - Not required (public endpoint)
    Request Body (application/json):
        {
            "email": "dinil@example.com",
            "full_name": "Example Dinil",
            "password": "StrongPass@123",
            "password2": "StrongPass@123"
        }
    Success Response (201 Created):
        {
            "email": "dinil@example.com",
            "full_name": "Example Dinil"
        }
    Error Responses:
        - 400 Bad Request (validation errors)
    """
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserRegistrationSerializer


class UserLoginView(TokenObtainPairView):
    """
    POST /api/auth/login/
    Authenticates a user using email and password and issues JWT tokens.
    Authentication:
        - Not required (public endpoint)
    Request Body (application/json):
        {
            "email": "dinil@example.com",
            "password": "StrongPass@123"
        }
    Success Response (200 OK):
        {
            "access": "<jwt_access_token>",
            "refresh": "<jwt_refresh_token>"
        }
    Error Responses:
        - 401 Unauthorized (invalid credentials)
    """
    permission_classes = (permissions.AllowAny,)
    serializer_class = EmailTokenObtainPairSerializer


class CurrentUserView(APIView):
    """
    GET /api/auth/current-user/
    Returns the profile details of the currently authenticated user.
    Authentication:
        - Required (JWT access token)
    Request Headers:
        Authorization: Bearer <jwt_access_token>
    Success Response (200 OK):
        {
            "id": 1,
            "email": "dinil@example.com",
            "full_name": "Example Dinil",
            "is_staff": false,
            "is_active": true,
            "date_joined": "2025-02-12T10:15:00Z"
        }
    Error Responses:
        - 401 Unauthorized (missing or invalid token)
    """
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class UserLogoutView(APIView):
    """
    POST /api/auth/logout/
    Logs out the currently authenticated user by blacklisting
    the provided refresh token.
    Authentication:
        - Required (JWT access token)
    Request Headers:
        Authorization: Bearer <jwt_access_token>
    Request Body (application/json):
        {
            "refresh": "<jwt_refresh_token>"
        }
    Success Response:
        - 205 Reset Content
    Error Responses:
        - 400 Bad Request (invalid or missing refresh token)
        - 401 Unauthorized (missing or invalid access token)
    """
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception:
            return Response(
                {"detail": "Invalid or missing refresh token."},
                status=status.HTTP_400_BAD_REQUEST,
            )
