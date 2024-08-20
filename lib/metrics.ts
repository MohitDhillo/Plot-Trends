export const categories = [
  {
    title: "Profitability Ratios",
    metrics: [
      { metricKey: "grossMarginAnnual", metricName: "Gross Margin (Annual)" },
      { metricKey: "grossMarginTTM", metricName: "Gross Margin (TTM)" },
      {
        metricKey: "operatingMarginAnnual",
        metricName: "Operating Margin (Annual)",
      },
      { metricKey: "operatingMarginTTM", metricName: "Operating Margin (TTM)" },
      {
        metricKey: "netProfitMarginAnnual",
        metricName: "Net Profit Margin (Annual)",
      },
      {
        metricKey: "netProfitMarginTTM",
        metricName: "Net Profit Margin (TTM)",
      },
      { metricKey: "pretaxMarginAnnual", metricName: "Pretax Margin (Annual)" },
      { metricKey: "pretaxMarginTTM", metricName: "Pretax Margin (TTM)" },
      { metricKey: "roaRfy", metricName: "ROA (Return on Assets) (RFY)" },
      { metricKey: "roaTTM", metricName: "ROA (Return on Assets) (TTM)" },
      { metricKey: "roeRfy", metricName: "ROE (Return on Equity) (RFY)" },
      { metricKey: "roeTTM", metricName: "ROE (Return on Equity) (TTM)" },
      {
        metricKey: "roiAnnual",
        metricName: "ROI (Return on Investment) (Annual)",
      },
      { metricKey: "roiTTM", metricName: "ROI (Return on Investment) (TTM)" },
    ],
  },
  {
    title: "Valuation Ratios",
    metrics: [
      {
        metricKey: "peAnnual",
        metricName: "P/E (Price to Earnings) Ratio (Annual)",
      },
      { metricKey: "peTTM", metricName: "P/E (Price to Earnings) Ratio (TTM)" },
      {
        metricKey: "peExclExtraAnnual",
        metricName: "P/E Ratio Excluding Extra Items (Annual)",
      },
      {
        metricKey: "peExclExtraTTM",
        metricName: "P/E Ratio Excluding Extra Items (TTM)",
      },
      {
        metricKey: "pbAnnual",
        metricName: "P/B (Price to Book) Ratio (Annual)",
      },
      {
        metricKey: "pbQuarterly",
        metricName: "P/B (Price to Book) Ratio (Quarterly)",
      },
      {
        metricKey: "psAnnual",
        metricName: "P/S (Price to Sales) Ratio (Annual)",
      },
      { metricKey: "psTTM", metricName: "P/S (Price to Sales) Ratio (TTM)" },
      { metricKey: "evEbitdaAnnual", metricName: "EV/EBITDA (Annual)" },
      { metricKey: "evEbitdaTTM", metricName: "EV/EBITDA (TTM)" },
      {
        metricKey: "pCashFlowAnnual",
        metricName: "P/CF (Price to Cash Flow) Ratio (Annual)",
      },
      {
        metricKey: "pCashFlowTTM",
        metricName: "P/CF (Price to Cash Flow) Ratio (TTM)",
      },
      {
        metricKey: "pFreeCashFlowAnnual",
        metricName: "P/FCF (Price to Free Cash Flow) Ratio (Annual)",
      },
      {
        metricKey: "pFreeCashFlowTTM",
        metricName: "P/FCF (Price to Free Cash Flow) Ratio (TTM)",
      },
    ],
  },
  {
    title: "Liquidity Ratios",
    metrics: [
      { metricKey: "currentRatioAnnual", metricName: "Current Ratio (Annual)" },
      {
        metricKey: "currentRatioQuarterly",
        metricName: "Current Ratio (Quarterly)",
      },
      { metricKey: "quickRatioAnnual", metricName: "Quick Ratio (Annual)" },
      {
        metricKey: "quickRatioQuarterly",
        metricName: "Quick Ratio (Quarterly)",
      },
      {
        metricKey: "cashPerShareAnnual",
        metricName: "Cash Per Share (Annual)",
      },
      {
        metricKey: "cashPerShareQuarterly",
        metricName: "Cash Per Share (Quarterly)",
      },
    ],
  },
  {
    title: "Efficiency Ratios",
    metrics: [
      {
        metricKey: "assetTurnoverAnnual",
        metricName: "Asset Turnover (Annual)",
      },
      { metricKey: "assetTurnoverTTM", metricName: "Asset Turnover (TTM)" },
      {
        metricKey: "inventoryTurnoverAnnual",
        metricName: "Inventory Turnover (Annual)",
      },
      {
        metricKey: "inventoryTurnoverTTM",
        metricName: "Inventory Turnover (TTM)",
      },
      {
        metricKey: "receivablesTurnoverAnnual",
        metricName: "Receivables Turnover (Annual)",
      },
      {
        metricKey: "receivablesTurnoverTTM",
        metricName: "Receivables Turnover (TTM)",
      },
      {
        metricKey: "revenueEmployeeAnnual",
        metricName: "Revenue per Employee (Annual)",
      },
      {
        metricKey: "revenueEmployeeTTM",
        metricName: "Revenue per Employee (TTM)",
      },
      {
        metricKey: "netIncomeEmployeeAnnual",
        metricName: "Net Income per Employee (Annual)",
      },
      {
        metricKey: "netIncomeEmployeeTTM",
        metricName: "Net Income per Employee (TTM)",
      },
    ],
  },
  {
    title: "Debt and Solvency Ratios",
    metrics: [
      { metricKey: "debtEquityAnnual", metricName: "Debt to Equity (Annual)" },
      {
        metricKey: "debtEquityQuarterly",
        metricName: "Debt to Equity (Quarterly)",
      },
      {
        metricKey: "netInterestCoverageAnnual",
        metricName: "Net Interest Coverage (Annual)",
      },
      {
        metricKey: "netInterestCoverageTTM",
        metricName: "Net Interest Coverage (TTM)",
      },
    ],
  },
  {
    title: "Per Share Metrics",
    metrics: [
      {
        metricKey: "epsAnnual",
        metricName: "EPS (Earnings Per Share) (Annual)",
      },
      { metricKey: "epsTTM", metricName: "EPS (Earnings Per Share) (TTM)" },
      {
        metricKey: "bookValuePerShareAnnual",
        metricName: "Book Value Per Share (Annual)",
      },
      {
        metricKey: "bookValuePerShareQuarterly",
        metricName: "Book Value Per Share (Quarterly)",
      },
      {
        metricKey: "tangibleBookValuePerShareAnnual",
        metricName: "Tangible Book Value Per Share (Annual)",
      },
      {
        metricKey: "tangibleBookValuePerShareQuarterly",
        metricName: "Tangible Book Value Per Share (Quarterly)",
      },
      {
        metricKey: "cashFlowPerShareAnnual",
        metricName: "Cash Flow Per Share (Annual)",
      },
      {
        metricKey: "cashFlowPerShareQuarterly",
        metricName: "Cash Flow Per Share (Quarterly)",
      },
      {
        metricKey: "cashFlowPerShareTTM",
        metricName: "Cash Flow Per Share (TTM)",
      },
      {
        metricKey: "ebitdaPerShareAnnual",
        metricName: "EBITDA Per Share (Annual)",
      },
      { metricKey: "ebitdaPerShareTTM", metricName: "EBITDA Per Share (TTM)" },
      {
        metricKey: "revenuePerShareAnnual",
        metricName: "Revenue Per Share (Annual)",
      },
      {
        metricKey: "revenuePerShareTTM",
        metricName: "Revenue Per Share (TTM)",
      },
    ],
  },
  {
    title: "Dividend Metrics",
    metrics: [
      {
        metricKey: "dividendPerShareAnnual",
        metricName: "Dividend Per Share (Annual)",
      },
      {
        metricKey: "dividendPerShareTTM",
        metricName: "Dividend Per Share (TTM)",
      },
      {
        metricKey: "dividendYieldCurrent",
        metricName: "Dividend Yield (Current)",
      },
      {
        metricKey: "dividendYieldIndicatedAnnual",
        metricName: "Dividend Yield (Indicated Annual)",
      },
      { metricKey: "payoutRatioAnnual", metricName: "Payout Ratio (Annual)" },
    ],
  },
  {
    title: "Growth Metrics",
    metrics: [
      {
        metricKey: "epsGrowthQuarterlyYoy",
        metricName: "EPS Growth (Quarterly YoY)",
      },
      { metricKey: "epsGrowthTTMYoy", metricName: "EPS Growth (TTM YoY)" },
      {
        metricKey: "revenueGrowthQuarterlyYoy",
        metricName: "Revenue Growth (Quarterly YoY)",
      },
      {
        metricKey: "revenueGrowthTTMYoy",
        metricName: "Revenue Growth (TTM YoY)",
      },
    ],
  },
  {
    title: "Trading Metrics",
    metrics: [
      {
        metricKey: "10DayAverageTradingVolume",
        metricName: "10-Day Average Trading Volume",
      },
      {
        metricKey: "3MonthAverageTradingVolume",
        metricName: "3-Month Average Trading Volume",
      },
      {
        metricKey: "13WeekPriceReturnDaily",
        metricName: "13-Week Price Return (Daily)",
      },
      {
        metricKey: "26WeekPriceReturnDaily",
        metricName: "26-Week Price Return (Daily)",
      },
      { metricKey: "3MonthADReturnStd", metricName: "3-Month AD Return Std" },
    ],
  },
  {
    title: "Valuation Metrics",
    metrics: [
      { metricKey: "enterpriseValue", metricName: "Enterprise Value" },
      { metricKey: "marketCap", metricName: "Market Cap" },
    ],
  },
  {
    title: "Financial Statement Components",
    metrics: [
      {
        metricKey: "incomeStatementItems",
        metricName: "Income Statement Items",
      },
      { metricKey: "balanceSheetItems", metricName: "Balance Sheet Items" },
      {
        metricKey: "cashFlowStatementItems",
        metricName: "Cash Flow Statement Items",
      },
    ],
  },
  {
    title: "Other Financial Metrics",
    metrics: [
      {
        metricKey: "sharesOutstandingBasic",
        metricName: "Shares Outstanding (Basic)",
      },
      {
        metricKey: "sharesOutstandingDiluted",
        metricName: "Shares Outstanding (Diluted)",
      },
      { metricKey: "freeCashFlow", metricName: "Free Cash Flow" },
      { metricKey: "workingCapital", metricName: "Working Capital" },
    ],
  },
];
