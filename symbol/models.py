from django.db import models
from django.utils.translation import gettext_lazy as _


class Symbol(models.Model):
    name = models.CharField(_("Name"), max_length=512, default="")
    symbol = models.CharField(_("Symbol"), max_length=64)
    is_crypto = models.BooleanField(_("Is cryptocurrency"), default=False)
    use_count = models.PositiveIntegerField(_("Use count"), default=0)
    created_on = models.DateTimeField(_("Created On"), auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.name}: {self.symbol}"


class CryptoExchange(models.Model):
    name = models.CharField(_("Name"), max_length=255)

    def __str__(self) -> str:
        return self.name


class CryptoExchangeSymbol(models.Model):
    exchange = models.ForeignKey(
        CryptoExchange, on_delete=models.CASCADE, related_name="symbols"
    )
    description = models.CharField(_("Description"), max_length=255)
    display_symbol = models.CharField(_("Display Symbol"), max_length=255)
    symbol = models.CharField(_("Symbol"), max_length=255)

    def __str__(self) -> str:
        return self.symbol
