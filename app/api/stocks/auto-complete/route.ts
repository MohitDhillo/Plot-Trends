import { NextRequest, NextResponse } from "next/server";
import {getSymbols, SymbolData} from "@/frontend/services/symbol";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");
  const abortController = new AbortController();

  if (!keyword) {
    return NextResponse.json(
        { error: "Keyword query parameter is missing" },
        { status: 400 }
    );
  }

  try {

    const result:SymbolData[] = await getSymbols(abortController, keyword, true) ;

    const autocompleteData = result.map((match: SymbolData) => ({
      query: `${match["name"]} (${match["symbol"]})`,
      symbol: match["symbol"],
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

