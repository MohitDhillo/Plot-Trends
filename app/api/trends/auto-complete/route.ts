import { NextRequest, NextResponse } from "next/server";
const googleTrends = require("google-trends-api");
// import googleTrends from "google-trends-api";
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("keyword");

  if (!key) {
    return NextResponse.json(
      { error: "Keyword query parameter is missing" },
      { status: 400 }
    );
  }

  try {
    const result = await googleTrends.relatedQueries({ keyword: key });

    if (result.startsWith("<html>")) {
      throw new Error("Received HTML response instead of JSON");
    }

    const parsedResult = JSON.parse(result);

    const autocompleteData =
      parsedResult.default.rankedList[0].rankedKeyword.map((item: any) => ({
        query: item.query,
        value: item.value,
      }));

    // console.log(parsedResult);
    return NextResponse.json(autocompleteData);
  } catch (error) {
    console.error("Error fetching Google Trends data:", error);
    return NextResponse.json(
      { error: "Error fetching Google Trends data" },
      { status: 500 }
    );
  }
}
