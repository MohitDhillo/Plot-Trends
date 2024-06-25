import { NextRequest, NextResponse } from 'next/server';
// import fetch from 'node-fetch';

const ALPHA_VANTAGE_API_KEY = 'your_alpha_vantage_api_key'; // Replace with your Alpha Vantage API key

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const symbol = searchParams.get('symbol');

    if (!symbol) {
        return NextResponse.json({ error: 'Symbol query parameter is missing' }, { status: 400 });
    }

    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`);
        const result = await response.json();

        if (result['Error Message']) {
            return NextResponse.json({ error: 'Error fetching stock data from Alpha Vantage' }, { status: 500 });
        }

        const timeSeries = result['Time Series (Daily)'];
        const stockData = Object.keys(timeSeries).map(date => ({
            date,
            open: parseFloat(timeSeries[date]['1. open']),
            high: parseFloat(timeSeries[date]['2. high']),
            low: parseFloat(timeSeries[date]['3. low']),
            close: parseFloat(timeSeries[date]['4. close']),
            volume: parseInt(timeSeries[date]['5. volume']),
        }));

        return NextResponse.json(stockData);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        return NextResponse.json({ error: 'Error fetching stock data' }, { status: 500 });
    }
}