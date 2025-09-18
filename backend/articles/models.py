import uuid
from django.db import models

class Articles(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    cover_image = models.CharField(max_length=200)  # URL to Supabase image
    content = models.TextField()  # main article content in HTML/Markdown
    created_at = models.DateTimeField(auto_now_add=True)
