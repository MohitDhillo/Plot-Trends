import { NextRequest, NextResponse } from "next/server";

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const symbol = searchParams.get("keyword");

    if (!symbol) {
        return NextResponse.json(
            { error: "Symbol query parameter is missing" },
            { status: 400 }
        );
    }

    try {
        const response = await fetch(
            `https://finnhub.io/api/v1/stock/revenue-estimate?symbol=${symbol}&metric=all&token=${FINNHUB_API_KEY}`
        );
        const result = await response.json();

        if (!result.data) {
            return NextResponse.json(
                { error: "Error fetching revenue data from Finnhub" },
                { status: 500 }
            );
        }

        const timelineData = result.data.map((item: { period: string, revenueAvg: number }) => ({
            timestamp: Math.floor((new Date(item.period)).getTime()),
            value: item.revenueAvg,
        }));

        return NextResponse.json(timelineData);
    } catch (error) {
        console.error("Error fetching stock data:", error);
        return NextResponse.json(
            { error: "Error fetching stock data" },
            { status: 500 }
        );
    }
}
