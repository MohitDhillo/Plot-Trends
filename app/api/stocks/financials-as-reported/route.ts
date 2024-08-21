import { NextRequest, NextResponse } from "next/server";

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    let symbol = searchParams.get("keyword");
    let metricKey = searchParams.get("metric");
    let freq = searchParams.get("freq");
    let type = searchParams.get("type");
    if(!metricKey)
    {
        metricKey = "ebit" ;
    }
    if(!freq)
    {
        freq = "annual" ;
    }
    if(!type)
    {
        type = "bs" ;
    }

    if (!symbol) {
        return NextResponse.json(
            { error: "Symbol query parameter is missing" },
            { status: 400 }
        );
    }

    try {
        const response = await fetch(
            `https://finnhub.io/api/v1/stock/financials-reported?symbol=${symbol}&freq=${freq}&token=${FINNHUB_API_KEY}`
        );
        const result = await response.json();

        if (!result.data) {
            return NextResponse.json(
                { error: "Error fetching metric data from Finnhub" },
                { status: 500 }
            );
        }

        const timelineData = result.data.map((item: any) => ({
            timestamp: Math.floor((new Date(item.year, 0 , 1)).getTime()),
            value: item.report[type][metricKey]
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
