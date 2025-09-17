
from django.contrib import admin
from .models import Articles
from .forms import ArticlesAdminForm

@admin.register(Articles)
class ArticlesAdmin(admin.ModelAdmin):
    form = ArticlesAdminForm
    list_display = ("title", "description", "cover_image", "article_file", "created_at")
    exclude = ("cover_image", "article_file")  # Hide URL fields from admin form
