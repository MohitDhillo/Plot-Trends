"""NHNE Symbol Autocomplete URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin

from django.urls import path, include

from django.conf.urls.static import static
from django.conf import settings

admin.site.site_title = "NHNE Symbol Autocomplete Administration"
admin.site.site_header = "NHNE Symbol Autocomplete Administration"
admin.site.index_title = "NHNE Symbol Autocomplete Administration"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('nhne_symbol_autocomplete.api_urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
