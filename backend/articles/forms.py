# forms.py
from django import forms
from .models import Articles
from ckeditor.widgets import CKEditorWidget
from articles.supabase import supabase
import time

class ArticlesAdminForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorWidget())  # rich text editor
    upload_image = forms.ImageField(required=False)

    class Meta:
        model = Articles
        fields = ["title", "description", "upload_image", "content"]

    def save(self, commit=True):
        instance = super().save(commit=False)
        
        upload_image = self.cleaned_data.get("upload_image")
        if upload_image:
            file_name = f"articles/images/{int(time.time())}_{upload_image.name}"
            supabase.storage.from_("images").upload(
                file_name, upload_image.read(), {"content-type": upload_image.content_type}
            )
            instance.cover_image = supabase.storage.from_("images").get_public_url(file_name)

        if commit:
            instance.save()
        return instance
