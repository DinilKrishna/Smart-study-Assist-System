"""
Custom JWT token serializers.
"""

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class EmailTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    Custom JWT serializer that authenticates users using email
    instead of username and adds extra user claims to the token.
    """

    username_field = "email"

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Optional custom claims
        token["email"] = user.email
        token["full_name"] = user.full_name
        return token
