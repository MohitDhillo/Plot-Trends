from .base import *

DEBUG = False

ALLOWED_HOSTS = get_env_var("ALLOWED_HOSTS").split(",")

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": get_env_var("DJANGO_DATABASE_NAME"),
        "USER": get_env_var("DJANGO_DATABASE_USERNAME"),
        "PASSWORD": get_env_var("DJANGO_DATABASE_PASSWORD"),
        "HOST": get_env_var("DJANGO_DATABASE_HOST"),
        "PORT": "",
    }
}

STATIC_URL = "/static/"

SECURE_BROWSER_XSS_FILTER = True

SESSION_COOKIE_SECURE = True

CSRF_COOKIE_SECURE = True

X_FRAME_OPTIONS = "DENY"

SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
