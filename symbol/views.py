from django.db.models import Q

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from symbol.models import Symbol, CryptoExchange
from symbol.serializers import SymbolSerializer


class SymbolView(APIView):

    def get(self, request, format=None):
        if request.query_params.get("query"):
            query = Q(
                symbol__istartswith=request.query_params.get("query")
            ) | Q(name__istartswith=request.query_params.get("query"))
            if (
                request.query_params.get("exclude_crypto")
                and request.query_params.get("exclude_crypto") == "true"
            ):
                query &= Q(is_crypto=False)
            symbols = Symbol.objects.filter(query)[:15]
            return Response(
                SymbolSerializer(symbols, many=True).data,
                status=status.HTTP_200_OK,
            )
        return Response(
            {"query": ["this param is required"]},
            status=status.HTTP_400_BAD_REQUEST,
        )


class SymbolExchangesView(APIView):

    def get(self, request, format=None):
        symbol = request.query_params.get("symbol")
        if symbol:
            return Response(
                {
                    "symbol": symbol,
                    "exchanges": [
                        exchange.name
                        for exchange in CryptoExchange.objects.all()
                    ],
                },
                status=status.HTTP_200_OK,
            )
        return Response(
            {"symbol": ["this param is required"]},
            status=status.HTTP_400_BAD_REQUEST,
        )
