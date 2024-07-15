from typing import Any
import finnhub

from django.core.management.base import BaseCommand
from django.conf import settings

from symbol.models import Symbol


class Command(BaseCommand):
    help = "This command will populate the stock symbols from finnhub to db"

    def handle(self, *args: Any, **options: Any) -> str | None:
        finnhub_client = finnhub.Client(api_key=settings.FINNHUB_API_KEY)
        for mic in ["XNAS", "XNYS"]:
            stock_symbols = finnhub_client.stock_symbols(
                exchange="US", currency="USD", mic=mic
            )
            for stock_symbol in stock_symbols:
                self.stdout.write(
                    self.style.SUCCESS(
                        f"Populating {stock_symbol['symbol']}\r"
                    )
                )
                symbol, _ = Symbol.objects.get_or_create(
                    symbol=stock_symbol["symbol"], is_crypto=False
                )
                symbol.name = stock_symbol["description"]
                symbol.save()
        self.stdout.write(self.style.SUCCESS("Stock symbols populated"))
