from django.urls import path, include

urlpatterns = [
    path("symbol/", include("symbol.urls")),
]
