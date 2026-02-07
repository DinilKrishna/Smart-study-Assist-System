from django.db import models
from .base import BaseModel

class Conversation(BaseModel):
    title = models.CharField(max_length=255)
