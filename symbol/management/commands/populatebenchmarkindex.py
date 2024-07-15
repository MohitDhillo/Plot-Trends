from typing import Any

from django.core.management.base import BaseCommand

from symbol.models import Symbol

benchmark_indexes = [
    {"name": "SPDR S&P 500 ETF Trust", "symbol": "SPY", "is_crypto": False},
    {
        "name": "Invesco QQQ Trust Series 1",
        "symbol": "QQQ",
        "is_crypto": False,
    },
]


class Command(BaseCommand):
    help = (
        "This command will populate the benchmark indexes we support into db"
    )

    def handle(self, *args: Any, **options: Any) -> str | None:
        for index in benchmark_indexes:
            symbol, created = Symbol.objects.get_or_create(
                symbol=index["symbol"]
            )
            if created:
                symbol.name = index["name"]
                symbol.is_crypto = index["is_crypto"]
                symbol.save()
        self.stdout.write(self.style.SUCCESS("Benchmark indexes Added"))
