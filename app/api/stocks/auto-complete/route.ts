import { NextRequest, NextResponse } from 'next/server';
// import fetch from 'node-fetch';

const ALPHA_VANTAGE_API_KEY = 'your_alpha_vantage_api_key'; // Replace with your Alpha Vantage API key

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const keyword = searchParams.get('keyword');

    if (!keyword) {
        return NextResponse.json({ error: 'Keyword query parameter is missing' }, { status: 400 });
    }

    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${ALPHA_VANTAGE_API_KEY}`);
        const result = await response.json();

        if (result['Error Message']) {
            return NextResponse.json({ error: 'Error fetching autocomplete data from Alpha Vantage' }, { status: 500 });
        }

        const autocompleteData = result['bestMatches'].map(match => ({
            query: match['1. symbol'] + match['2. name']
        }));

        return NextResponse.json(autocompleteData);
    } catch (error) {
        console.error('Error fetching autocomplete data:', error);
        return NextResponse.json({ error: 'Error fetching autocomplete data' }, { status: 500 });
    }
}