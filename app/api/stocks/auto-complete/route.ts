import { NextRequest, NextResponse } from "next/server";

const ALPHA_VANTAGE_API_KEY = process.env.API_KEY;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");
  console.log("keyword", keyword);

  if (!keyword) {
    return NextResponse.json(
      { error: "Keyword query parameter is missing" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${ALPHA_VANTAGE_API_KEY}`
    );
    const result = await response.json();
    console.log(ALPHA_VANTAGE_API_KEY);
    console.log("result", result);
    if (result["Error Message"]) {
      return NextResponse.json(
        { error: "Error fetching autocomplete data from Alpha Vantage" },
        { status: 500 }
      );
    }

    const autocompleteData = result["bestMatches"].map((match: any) => ({
      query: `${match["2. name"]} (${match["1. symbol"]})`,
      symbol: match["1. symbol"],
    }));

    return NextResponse.json(autocompleteData);
  } catch (error) {
    console.error("Error fetching autocomplete data:", error);
    return NextResponse.json(
      { error: "Error fetching autocomplete data" },
      { status: 500 }
    );
  }
}
