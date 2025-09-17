import time
from django import forms
from .models import Articles
from supabase import create_client, Client
from dotenv import load_dotenv
load_dotenv()