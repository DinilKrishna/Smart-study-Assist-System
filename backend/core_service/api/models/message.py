from django.db import models
from .base import BaseModel

class Message(BaseModel):
    content = models.TextField()
