import { NextRequest, NextResponse } from "next/server";

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    let symbol = searchParams.get("keyword");
    let metric = searchParams.get("metric");
    let freq = searchParams.get("freq");
    if(!metric)
    {
        metric = "pe" ;
    }
    if(!freq)
    {
        freq = "annual" ;
    }

    if (!symbol) {
        return NextResponse.json(
            { error: "Symbol query parameter is missing" },
            { status: 400 }
        );
    }

    try {
        const response = await fetch(
            `https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${FINNHUB_API_KEY}`
        );
        const result = await response.json();

        if (!result.series || !result.series[freq] || !result.series[freq][metric]) {
            return NextResponse.json(
                { error: "Error fetching metric data from Finnhub" },
                { status: 500 }
            );
        }

        const timelineData = result.series[freq][metric].map((item: { period: string, v: number }) => ({
            timestamp: Math.floor((new Date(item.period)).getTime()),
            value: item.v,
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
