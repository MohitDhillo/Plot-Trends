from .base import *

DEBUG = True

ALLOWED_HOSTS = ["*"]

INSTALLED_APPS += ["corsheaders"]

MIDDLEWARE.insert(2, "corsheaders.middleware.CorsMiddleware")

# CORS
FRONTEND_HOST = "localhost:3000"  # Adjust this to match your frontend's address
CORS_ORIGIN_WHITELIST = [f"http://{FRONTEND_HOST}"]

CORS_ALLOW_HEADERS = (
    "x-requested-with",
    "content-type",
    "accept",
    "origin",
    "authorization",
    "x-csrftoken",
    "access-token",
)
