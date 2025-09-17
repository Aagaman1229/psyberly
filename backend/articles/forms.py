# backend/articles/forms.py

import time
from django import forms
from .models import Articles

# Import the pre-configured Supabase client
from articles.supabase import supabase

class ArticlesAdminForm(forms.ModelForm):
    upload_image = forms.ImageField(required=True)
    upload_file = forms.FileField(required=True)

    class Meta:
        model = Articles
        fields = ["title", "description", "upload_image", "upload_file"]

    def save(self, commit=True):
        instance = super().save(commit=False)
        file_upload = self.cleaned_data.get("upload_file")
        image_upload = self.cleaned_data.get("upload_image")

        if image_upload:
            image_name = f"articles/images/{int(time.time())}_{image_upload.name}"
            supabase.storage.from_("images").upload(
                image_name, image_upload.read(), {"content-type": image_upload.content_type}
            )
            instance.cover_image = supabase.storage.from_("images").get_public_url(image_name)

        if file_upload:
            file_name = f"articles/files/{int(time.time())}_{file_upload.name}"
            supabase.storage.from_("files").upload(
                file_name, file_upload.read(), {"content-type": file_upload.content_type}
            )
            instance.article_file = supabase.storage.from_("files").get_public_url(file_name)

        if commit:
            instance.save()
        return instance