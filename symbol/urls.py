from django.urls import path

from symbol.views import SymbolView, SymbolExchangesView

urlpatterns = [
    path("", SymbolView.as_view(), name="symbol"),
    path(
        "crypto-exchanges/",
        SymbolExchangesView.as_view(),
        name="crypto-exchanges",
    ),
]
