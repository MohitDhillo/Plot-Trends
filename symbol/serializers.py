from rest_framework import serializers
from django.db.models import Q

from symbol.models import Symbol, CryptoExchange, CryptoExchangeSymbol


class SymbolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Symbol
        fields = ["id", "name", "symbol", "is_crypto"]


class SymbolInSerializer(serializers.Serializer):
    """
    This serializer is used to validate the symbol used in tools
    """

    symbol = serializers.CharField()
    exchange = serializers.CharField(allow_blank=True)

    def __init__(
        self, instance=None, data=..., allow_crypto_symbol=True, **kwargs
    ):
        super().__init__(instance, data, **kwargs)
        self.allow_crypto_symbol = allow_crypto_symbol

    def validate_exchange(self, value: str) -> str | CryptoExchange:
        if value:
            try:
                return CryptoExchange.objects.get(name=value.upper())
            except CryptoExchange.DoesNotExist:
                raise serializers.ValidationError(
                    "Invalid crypto exchange name"
                )
        return value

    def validate(self, attrs):
        has_fiat_currency_part = False
        symbol = attrs["symbol"].split("-")
        if len(symbol) > 1 and symbol[1].upper() in ["USD", "USDT"]:
            has_fiat_currency_part = True
        symbol = symbol[0]
        try:
            if has_fiat_currency_part or isinstance(
                attrs["exchange"], CryptoExchange
            ):
                symbol = Symbol.objects.get(
                    symbol=symbol.upper(), is_crypto=True
                )
            else:
                symbol = Symbol.objects.get(symbol=symbol.upper())
            if not self.allow_crypto_symbol and symbol.is_crypto:
                raise serializers.ValidationError(
                    {"symbol": "Crypto symbol is not allowed for this tool"}
                )
        except Symbol.DoesNotExist:
            raise serializers.ValidationError(
                {"symbol": "Symbol is not valid"}
            )
        except Symbol.MultipleObjectsReturned:
            symbol = Symbol.objects.get(symbol=symbol.upper(), is_crypto=False)
            other_symbol = Symbol.objects.get(
                symbol=symbol.symbol, is_crypto=True
            )
            attrs["other_symbol"] = {
                "name": other_symbol.name,
                "symbol": other_symbol.symbol,
            }
            attrs["symbol_used"] = {
                "name": symbol.name,
                "symbol": symbol.symbol,
            }
        if symbol.is_crypto:
            if attrs["exchange"]:
                crypto_exchange_symbol = (
                    attrs["exchange"]
                    .symbols.filter(
                        Q(display_symbol=f"{symbol.symbol}/USD")
                        | Q(display_symbol=f"{symbol.symbol}/USDT")
                    )
                    .first()
                )
            else:
                crypto_exchange_symbol = CryptoExchangeSymbol.objects.filter(
                    Q(display_symbol=f"{symbol.symbol}/USD")
                    | Q(display_symbol=f"{symbol.symbol}/USDT")
                ).first()
            if not crypto_exchange_symbol:
                raise serializers.ValidationError(
                    "This symbol is not available on the selected exchange"
                )
            attrs["symbol"] = crypto_exchange_symbol.symbol
        else:
            attrs["symbol"] = symbol.symbol
        return attrs
