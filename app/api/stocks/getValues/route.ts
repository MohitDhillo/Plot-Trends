import { NextRequest, NextResponse } from "next/server";
// import fetch from 'node-fetch';

const FINNHUB_API_KEY = "clsbfuhr01qoidjen33gclsbfuhr01qoidjen340"; // Replace with your Finnhub API key

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
    // Set date range to cover the maximum range Finnhub provides (10 years back from now)
    const now = Math.floor(Date.now() / 1000); // current timestamp in seconds
    const tenYearsAgo = now - 20 * 365 * 24 * 60 * 60; // 10 years ago

    const response = await fetch(
        `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=M&from=${tenYearsAgo}&to=${now}&token=${FINNHUB_API_KEY}`
    );
    const result = await response.json();

    if (result.s !== "ok") {
      return NextResponse.json(
          { error: "Error fetching stock data from Finnhub" },
          { status: 500 }
      );
    }

    const timelineData = result.t.map((timestamp, index) => ({
      timestamp: timestamp * 1000, // Convert to milliseconds
      value: result.c[index], // Use closing price as the value
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