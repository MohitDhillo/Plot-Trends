export const categories = [
    {
        title: "Profitability Ratios",
        metrics: [
            { metricKey: "grossMargin", metricName: "Gross Margin (Annual)", path: "/stocks/basic-financials", frequency: "annual" },
            { metricKey: "grossMargin", metricName: "Gross Margin (TTM)", path: "/stocks/basic-financials", frequency: "quarterly" },
            {
                metricKey: "operatingMargin", metricName: "Operating Margin (Annual)", path: "/stocks/basic-financials", frequency: "annual"  },
            { metricKey: "operatingMargin", metricName: "Operating Margin (TTM)", path: "/stocks/basic-financials", frequency: "quarterly" },
            {
                metricKey: "netProfitMarginAnnual",
                metricName: "Net Profit Margin (Annual)",
            },
            {
                metricKey: "netProfitMarginTTM",
                metricName: "Net Profit Margin (TTM)",
            },
            { metricKey: "pretaxMargin", metricName: "Pretax Margin (Annual)", path: "/stocks/basic-financials", frequency: "annual" },
            { metricKey: "pretaxMargin", metricName: "Pretax Margin (TTM)", path: "/stocks/basic-financials", frequency: "quarterly" },
            { metricKey: "roa", metricName: "ROA (Return on Assets) (RFY)", path: "/stocks/basic-financials", frequency: "annual"  },
            { metricKey: "roaTTM", metricName: "ROA (Return on Assets) (TTM)", path: "/stocks/basic-financials", frequency: "quarterly"  },
            { metricKey: "roe", metricName: "ROE (Return on Equity) (RFY)", path: "/stocks/basic-financials", frequency: "annual" },
            { metricKey: "roeTTM", metricName: "ROE (Return on Equity) (TTM)", path: "/stocks/basic-financials", frequency: "quarterly" },
            {
                metricKey: "roic",
                metricName: "ROI (Return on Invested Capital) (Annual)", path: "/stocks/basic-financials", frequency: "annual"
            },
            { metricKey: "roicTTM", metricName: "ROI (Return on Invested Capital) (TTM)", path: "/stocks/basic-financials", frequency: "quarterly"  },
        ],
    },
    {
        title: "Valuation Ratios",
        metrics: [
            {
                metricKey: "pe",
                metricName: "P/E (Price to Earnings) Ratio (Annual)", path: "/stocks/basic-financials", frequency: "annual"
            },
            { metricKey: "peTTM", metricName: "P/E (Price to Earnings) Ratio (TTM)", path: "/stocks/basic-financials", frequency: "quarterly" },
            {
                metricKey: "peExclExtraAnnual",
                metricName: "P/E Ratio Excluding Extra Items (Annual)",
            },
            {
                metricKey: "peExclExtraTTM",
                metricName: "P/E Ratio Excluding Extra Items (TTM)",
            },
            {
                metricKey: "pb",
                metricName: "P/B (Price to Book) Ratio (Annual)", path: "/stocks/basic-financials", frequency: "annual"
            },
            {
                metricKey: "pb",
                metricName: "P/B (Price to Book) Ratio (Quarterly)", path: "/stocks/basic-financials", frequency: "quarterly"
            },
            {
                metricKey: "ps",
                metricName: "P/S (Price to Sales) Ratio (Annual)", path: "/stocks/basic-financials", frequency: "annual"
            },
            { metricKey: "psTTM", metricName: "P/S (Price to Sales) Ratio (TTM)", path: "/stocks/basic-financials", frequency: "quarterly" },
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
                metricKey: "pfcf",
                metricName: "P/FCF (Price to Free Cash Flow) Ratio (Annual)", path: "/stocks/basic-financials", frequency: "annual"
            },
            {
                metricKey: "pfcfTTM",
                metricName: "P/FCF (Price to Free Cash Flow) Ratio (TTM)", path: "/stocks/basic-financials", frequency: "quarterly"
            },
        ],
    },
    {
        title: "Liquidity Ratios",
        metrics: [
            { metricKey: "currentRatio", metricName: "Current Ratio (Annual)", path: "/stocks/basic-financials", frequency: "annual"},
            {
                metricKey: "currentRatio",
                metricName: "Current Ratio (Quarterly)", path: "/stocks/basic-financials", frequency: "quarterly"
            },
            { metricKey: "quickRatio", metricName: "Quick Ratio (Annual)", path: "/stocks/basic-financials", frequency: "annual" },
            {
                metricKey: "quickRatio",
                metricName: "Quick Ratio (Quarterly)", path: "/stocks/basic-financials", frequency: "quarterly"
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
                metricKey: "assetTurnover",
                metricName: "Asset Turnover (Annual)", path: "/stocks/basic-financials", frequency: "annual"
            },
            { metricKey: "assetTurnoverTTM", metricName: "Asset Turnover (TTM)" , path: "/stocks/basic-financials", frequency: "quarterly"},
            {
                metricKey: "inventoryTurnover",
                metricName: "Inventory Turnover (Annual)", path: "/stocks/basic-financials", frequency: "annual"
            },
            {
                metricKey: "inventoryTurnoverTTM",
                metricName: "Inventory Turnover (TTM)", path: "/stocks/basic-financials", frequency: "quarterly"
            },
            {
                metricKey: "receivablesTurnover",
                metricName: "Receivables Turnover (Annual)", path: "/stocks/basic-financials", frequency: "annual"
            },
            {
                metricKey: "receivablesTurnoverTTM",
                metricName: "Receivables Turnover (TTM)", path: "/stocks/basic-financials", frequency: "quarterly"
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
                metricName: "EPS (Earnings Per Share) (Annual)", path: "/stocks/basic-financials", frequency: "annual"
            },
            { metricKey: "epsTTM", metricName: "EPS (Earnings Per Share) (TTM)", path: "/stocks/basic-financials", frequency: "quarterly" },
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
            { metricKey: "payoutRatio", metricName: "Payout Ratio (Annual)", path: "/stocks/basic-financials", frequency: "annual" }
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
