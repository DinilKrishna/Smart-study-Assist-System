import uuid
from django.db import models


class BaseModel(models.Model):
    """
    Abstract base model providing common fields for all models.

    Fields:
        - id: UUID primary key
        - created_at: record creation timestamp
        - updated_at: record last update timestamp
        - is_deleted: soft delete flag
    """

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        editable=False,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    is_deleted = models.BooleanField(
        default=False,
    )

    class Meta:
        abstract = True
