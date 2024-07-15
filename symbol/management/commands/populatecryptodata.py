from typing import Any
import finnhub

from django.core.management.base import BaseCommand
from django.conf import settings

from symbol.models import CryptoExchange, CryptoExchangeSymbol, Symbol


class Command(BaseCommand):
    help = "This command will fetch supported crypto exchanges"
    " and its symbols from finnhub and save"

    def handle(self, *args: Any, **options: Any) -> str | None:
        finnhub_client = finnhub.Client(api_key=settings.FINNHUB_API_KEY)
        exchanges = finnhub_client.crypto_exchanges()
        for exchange in exchanges:
            self.stdout.write(
                self.style.SUCCESS(f"Populating data for {exchange}")
            )
            exchange, _ = CryptoExchange.objects.get_or_create(name=exchange)
            exchange_symbols = finnhub_client.crypto_symbols(exchange=exchange)
            for exchange_symbol in exchange_symbols:
                if exchange_symbol.get("displaySymbol"):
                    crypto_pair = exchange_symbol["displaySymbol"].split("/")
                    if (
                        len(crypto_pair) > 1
                        and crypto_pair[1]
                        in [
                            "USD",
                            "USDT",
                        ]
                        and exchange_symbol.get("symbol")
                    ):
                        self.stdout.write(
                            self.style.SUCCESS(
                                f"Populating {exchange_symbol['symbol']}"
                            )
                        )
                        (
                            crypto_exchange_symbol,
                            _,
                        ) = CryptoExchangeSymbol.objects.get_or_create(
                            exchange=exchange, symbol=exchange_symbol["symbol"]
                        )
                        crypto_exchange_symbol.description = (
                            exchange_symbol.get("description")
                        )
                        crypto_exchange_symbol.display_symbol = (
                            exchange_symbol.get("displaySymbol")
                        )
                        crypto_exchange_symbol.save()
                        crypto_profile = finnhub_client.crypto_profile(
                            symbol=crypto_pair[0]
                        )
                        if crypto_profile.get("name"):
                            symbol, _ = Symbol.objects.get_or_create(
                                symbol=crypto_pair[0], is_crypto=True
                            )
                            symbol.name = crypto_profile.get("name")
                            symbol.is_crypto = True
                            symbol.save()
        self.stdout.write(self.style.SUCCESS("Crypto data added successfully"))
