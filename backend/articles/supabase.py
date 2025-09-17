# backend/supabase.py

import os
from dotenv import load_dotenv
from supabase import create_client, Client

# This ensures the environment variables are loaded
# It's best practice to call this once, early in your app's lifecycle
load_dotenv()

# Get the environment variables
supabase_url: str = os.getenv("SUPABASE_URL")
supabase_key: str = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

# Create the client and export it
supabase: Client = create_client(supabase_url, supabase_key)