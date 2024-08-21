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
    title: "Other Financial Metrics/  Financials as Reported",
    metrics: [
      {
        "metricKey": "common_stock,_shares_issued_(in_shares)",
        "metricName": "Common stock, shares issued (in shares) (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "common_stock,_shares_issued_(in_shares)",
        "metricName": "Common stock, shares issued (in shares) (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "net_sales",
        "metricName": "Net sales (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "net_sales",
        "metricName": "Net sales (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "selling,_general_and_administrative",
        "metricName": "Selling, general and administrative (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "selling,_general_and_administrative",
        "metricName": "Selling, general and administrative (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "effect_of_exchange_rate_changes_on_cash_and_cash_equivalents",
        "metricName": "Effect of exchange rate changes on cash and cash equivalents (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "effect_of_exchange_rate_changes_on_cash_and_cash_equivalents",
        "metricName": "Effect of exchange rate changes on cash and cash equivalents (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "commercial_paper",
        "metricName": "Commercial paper (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "commercial_paper",
        "metricName": "Commercial paper (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "vendor_non-trade_receivables",
        "metricName": "Vendor non-trade receivables (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "vendor_non-trade_receivables",
        "metricName": "Vendor non-trade receivables (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "property,_plant_and_equipment,_net",
        "metricName": "Property, plant and equipment, net (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "property,_plant_and_equipment,_net",
        "metricName": "Property, plant and equipment, net (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "other_non-current_liabilities",
        "metricName": "Other non-current liabilities (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "other_non-current_liabilities",
        "metricName": "Other non-current liabilities (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "cost_of_sales",
        "metricName": "Cost of sales (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "cost_of_sales",
        "metricName": "Cost of sales (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "net_income",
        "metricName": "Net income (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "net_income",
        "metricName": "Net income (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "net_cash_provided_by_operating_activities",
        "metricName": "Net cash provided by operating activities (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "net_cash_provided_by_operating_activities",
        "metricName": "Net cash provided by operating activities (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "total_liabilities_and_shareholders\u2019_equity",
        "metricName": "Total liabilities and shareholders\u2019 equity (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "total_liabilities_and_shareholders\u2019_equity",
        "metricName": "Total liabilities and shareholders\u2019 equity (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "marketable_securities",
        "metricName": "Marketable securities (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "marketable_securities",
        "metricName": "Marketable securities (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "other_income/(expense),_net",
        "metricName": "Other income/(expense), net (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "other_income/(expense),_net",
        "metricName": "Other income/(expense), net (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "deferred_revenue",
        "metricName": "Deferred revenue (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "deferred_revenue",
        "metricName": "Deferred revenue (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "total_current_assets",
        "metricName": "Total current assets (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "total_current_assets",
        "metricName": "Total current assets (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "basic_(in_dollars_per_share)",
        "metricName": "Basic (in dollars per share) (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "basic_(in_dollars_per_share)",
        "metricName": "Basic (in dollars per share) (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "net_cash_provided_by_(used_in)_investing_activities",
        "metricName": "Net cash provided by (used in) investing activities (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "net_cash_provided_by_(used_in)_investing_activities",
        "metricName": "Net cash provided by (used in) investing activities (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "accounts_receivable,_net",
        "metricName": "Accounts receivable, net (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "accounts_receivable,_net",
        "metricName": "Accounts receivable, net (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "diluted_(in_shares)",
        "metricName": "Diluted (in shares) (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "diluted_(in_shares)",
        "metricName": "Diluted (in shares) (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "other_current_liabilities",
        "metricName": "Other current liabilities (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "other_current_liabilities",
        "metricName": "Other current liabilities (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "total_shareholders\u2019_equity",
        "metricName": "Total shareholders\u2019 equity (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "total_shareholders\u2019_equity",
        "metricName": "Total shareholders\u2019 equity (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "term_debt",
        "metricName": "Term debt (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "term_debt",
        "metricName": "Term debt (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "other_current_assets",
        "metricName": "Other current assets (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "other_current_assets",
        "metricName": "Other current assets (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "income_before_provision_for_income_taxes",
        "metricName": "Income before provision for income taxes (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "income_before_provision_for_income_taxes",
        "metricName": "Income before provision for income taxes (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "total_other_comprehensive_income",
        "metricName": "Total other comprehensive income (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "total_other_comprehensive_income",
        "metricName": "Total other comprehensive income (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "accounts_payable",
        "metricName": "Accounts payable (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "accounts_payable",
        "metricName": "Accounts payable (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "inventories",
        "metricName": "Inventories (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "inventories",
        "metricName": "Inventories (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "change_in_fair_value_of_derivative_instruments",
        "metricName": "Change in fair value of derivative instruments (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "change_in_fair_value_of_derivative_instruments",
        "metricName": "Change in fair value of derivative instruments (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "total_change_in_unrealized_gains/losses_on_derivative_instruments",
        "metricName": "Total change in unrealized gains/losses on derivative instruments (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "total_change_in_unrealized_gains/losses_on_derivative_instruments",
        "metricName": "Total change in unrealized gains/losses on derivative instruments (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "net_cash_provided_by_(used_in)_financing_activities",
        "metricName": "Net cash provided by (used in) financing activities (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "net_cash_provided_by_(used_in)_financing_activities",
        "metricName": "Net cash provided by (used in) financing activities (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "net_increase_(decrease)_in_cash_and_cash_equivalents",
        "metricName": "Net increase (decrease) in cash and cash equivalents (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "net_increase_(decrease)_in_cash_and_cash_equivalents",
        "metricName": "Net increase (decrease) in cash and cash equivalents (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "research_and_development",
        "metricName": "Research and development (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "research_and_development",
        "metricName": "Research and development (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "total_non-current_liabilities",
        "metricName": "Total non-current liabilities (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "total_non-current_liabilities",
        "metricName": "Total non-current liabilities (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "total_current_liabilities",
        "metricName": "Total current liabilities (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "total_current_liabilities",
        "metricName": "Total current liabilities (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "total_liabilities",
        "metricName": "Total liabilities (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "total_liabilities",
        "metricName": "Total liabilities (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "change_in_foreign_currency_translation,_net_of_tax",
        "metricName": "Change in foreign currency translation, net of tax (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "change_in_foreign_currency_translation,_net_of_tax",
        "metricName": "Change in foreign currency translation, net of tax (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "change_in_unrealized_gains/losses_on_securities,_net_of_tax",
        "metricName": "Change in unrealized gains/losses on securities, net of tax (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "change_in_unrealized_gains/losses_on_securities,_net_of_tax",
        "metricName": "Change in unrealized gains/losses on securities, net of tax (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "basic_(in_shares)",
        "metricName": "Basic (in shares) (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "basic_(in_shares)",
        "metricName": "Basic (in shares) (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "accumulated_other_comprehensive_loss",
        "metricName": "Accumulated other comprehensive loss (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "accumulated_other_comprehensive_loss",
        "metricName": "Accumulated other comprehensive loss (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "common_stock,_shares_outstanding_(in_shares)",
        "metricName": "Common stock, shares outstanding (in shares) (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "common_stock,_shares_outstanding_(in_shares)",
        "metricName": "Common stock, shares outstanding (in shares) (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "total_assets",
        "metricName": "Total assets (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "total_assets",
        "metricName": "Total assets (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "accumulated_deficit",
        "metricName": "Accumulated deficit (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "accumulated_deficit",
        "metricName": "Accumulated deficit (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "other_non-current_assets",
        "metricName": "Other non-current assets (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "other_non-current_assets",
        "metricName": "Other non-current assets (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "diluted_(in_dollars_per_share)",
        "metricName": "Diluted (in dollars per share) (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "diluted_(in_dollars_per_share)",
        "metricName": "Diluted (in dollars per share) (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "total_non-current_assets",
        "metricName": "Total non-current assets (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "total_non-current_assets",
        "metricName": "Total non-current assets (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "comprehensive_income",
        "metricName": "Comprehensive income (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "comprehensive_income",
        "metricName": "Comprehensive income (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "provision_for_income_taxes",
        "metricName": "Provision for income taxes (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "provision_for_income_taxes",
        "metricName": "Provision for income taxes (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "cash_and_cash_equivalents_at_end_of_period",
        "metricName": "Cash and cash equivalents at end of period (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "cash_and_cash_equivalents_at_end_of_period",
        "metricName": "Cash and cash equivalents at end of period (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "total_operating_expenses",
        "metricName": "Total operating expenses (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "total_operating_expenses",
        "metricName": "Total operating expenses (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "cash_and_cash_equivalents",
        "metricName": "Cash and cash equivalents (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "cash_and_cash_equivalents",
        "metricName": "Cash and cash equivalents (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "gross_margin",
        "metricName": "Gross margin (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "gross_margin",
        "metricName": "Gross margin (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "common_stock_and_additional_paid-in_capital,_$0.00001_par_value:_50,400,000_shares_authorized;_15,550,061_and_15,943,425_shares_issued_and_outstanding,_respectively",
        "metricName": "Common stock and additional paid-in capital, $0.00001 par value: 50,400,000 shares authorized; 15,550,061 and 15,943,425 shares issued and outstanding, respectively (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "common_stock_and_additional_paid-in_capital,_$0.00001_par_value:_50,400,000_shares_authorized;_15,550,061_and_15,943,425_shares_issued_and_outstanding,_respectively",
        "metricName": "Common stock and additional paid-in capital, $0.00001 par value: 50,400,000 shares authorized; 15,550,061 and 15,943,425 shares issued and outstanding, respectively (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "operating_income",
        "metricName": "Operating income (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "operating_income",
        "metricName": "Operating income (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      },
      {
        "metricKey": "adjustment_for_net_(gains)/losses_realized_and_included_in_net_income",
        "metricName": "Adjustment for net (gains)/losses realized and included in net income (Quarterly)",
        "path": "/stock/financials-as-reported",
        "frequency": "quarterly"
      },
      {
        "metricKey": "adjustment_for_net_(gains)/losses_realized_and_included_in_net_income",
        "metricName": "Adjustment for net (gains)/losses realized and included in net income (Annual)",
        "path": "/stock/financials-as-reported",
        "frequency": "annual"
      }
    ]
  },
  {
    title: "Financial Statement Components - Income Statement Items",
    metrics: [
      {
        "metricKey": "costofgoodssold",
        "metricName": "Cost Of Goods Sold (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "costofgoodssold",
        "metricName": "Cost Of Goods Sold (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "dilutedaveragesharesoutstanding",
        "metricName": "Diluted Average Shares Outstanding (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "dilutedaveragesharesoutstanding",
        "metricName": "Diluted Average Shares Outstanding (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "dilutedeps",
        "metricName": "Diluted Eps (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "dilutedeps",
        "metricName": "Diluted Eps (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "ebit",
        "metricName": "Ebit (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "ebit",
        "metricName": "Ebit (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "grossincome",
        "metricName": "Gross Income (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "grossincome",
        "metricName": "Gross Income (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "interestincomeexpense",
        "metricName": "Interest Income Expense (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "interestincomeexpense",
        "metricName": "Interest Income Expense (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "netincome",
        "metricName": "Net Income (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "netincome",
        "metricName": "Net Income (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "netincomeaftertaxes",
        "metricName": "Net Income After Taxes (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "netincomeaftertaxes",
        "metricName": "Net Income After Taxes (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "pretaxincome",
        "metricName": "Pretax Income (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "pretaxincome",
        "metricName": "Pretax Income (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "provisionforincometaxes",
        "metricName": "Provisionfor Income Taxes (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "provisionforincometaxes",
        "metricName": "Provisionfor Income Taxes (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "researchdevelopment",
        "metricName": "Research Development (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "researchdevelopment",
        "metricName": "Research Development (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "revenue",
        "metricName": "Revenue (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "revenue",
        "metricName": "Revenue (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "sgaexpense",
        "metricName": "Sga Expense (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "sgaexpense",
        "metricName": "Sga Expense (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "totaloperatingexpense",
        "metricName": "Total Operating Expense (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "totaloperatingexpense",
        "metricName": "Total Operating Expense (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "totalotherincomeexpensenet",
        "metricName": "Total Other Income Expense Net (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "totalotherincomeexpensenet",
        "metricName": "Total Other Income Expense Net (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      }
    ]
  },
  {
    title: "Financial Statement Components - Balance Sheet Items",
    metrics: [
      {
        "metricKey": "accountspayable",
        "metricName": "Accounts Payable (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "accountspayable",
        "metricName": "Accounts Payable (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "accountsreceivables",
        "metricName": "Accounts Receivables (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "accountsreceivables",
        "metricName": "Accounts Receivables (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "accruedliability",
        "metricName": "Accrued Liability (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "accruedliability",
        "metricName": "Accrued Liability (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "accumulateddepreciation",
        "metricName": "Accumulated Depreciation (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "accumulateddepreciation",
        "metricName": "Accumulated Depreciation (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "additionalpaidincapital",
        "metricName": "Additional Paid In Capital (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "additionalpaidincapital",
        "metricName": "Additional Paid In Capital (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "cash",
        "metricName": "Cash (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "cash",
        "metricName": "Cash (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "cashequivalents",
        "metricName": "Cash Equivalents (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "cashequivalents",
        "metricName": "Cash Equivalents (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "cashshortterminvestments",
        "metricName": "Cash Short Term Investments (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "cashshortterminvestments",
        "metricName": "Cash Short Term Investments (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "commonstock",
        "metricName": "Common Stock (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "commonstock",
        "metricName": "Common Stock (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "currentassets",
        "metricName": "Current Assets (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "currentassets",
        "metricName": "Current Assets (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "currentliabilities",
        "metricName": "Current Liabilities (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "currentliabilities",
        "metricName": "Current Liabilities (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "currentportionlongtermdebt",
        "metricName": "Current Portion Long Term Debt (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "currentportionlongtermdebt",
        "metricName": "Current Portion Long Term Debt (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "inventory",
        "metricName": "Inventory (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "inventory",
        "metricName": "Inventory (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "liabilitiesshareholdersequity",
        "metricName": "Liabilities Shareholders Equity (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "liabilitiesshareholdersequity",
        "metricName": "Liabilities Shareholders Equity (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "longtermdebt",
        "metricName": "Long Term Debt (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "longtermdebt",
        "metricName": "Long Term Debt (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "longterminvestments",
        "metricName": "Long Term Investments (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "longterminvestments",
        "metricName": "Long Term Investments (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "netdebt",
        "metricName": "Net Debt (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "netdebt",
        "metricName": "Net Debt (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "othercurrentassets",
        "metricName": "Other Current Assets (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "othercurrentassets",
        "metricName": "Other Current Assets (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "othercurrentliabilities",
        "metricName": "Other Currentliabilities (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "othercurrentliabilities",
        "metricName": "Other Currentliabilities (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "otherequity",
        "metricName": "Other Equity (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "otherequity",
        "metricName": "Other Equity (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "otherliabilities",
        "metricName": "Other Liabilities (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "otherliabilities",
        "metricName": "Other Liabilities (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "otherlongtermassets",
        "metricName": "Other Long Term Assets (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "otherlongtermassets",
        "metricName": "Other Long Term Assets (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "otherreceivables",
        "metricName": "Other Receivables (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "otherreceivables",
        "metricName": "Other Receivables (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "propertyplantequipment",
        "metricName": "Property Plant Equipment (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "propertyplantequipment",
        "metricName": "Property Plant Equipment (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "retainedearnings",
        "metricName": "Retained Earnings (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "retainedearnings",
        "metricName": "Retained Earnings (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "sharesoutstanding",
        "metricName": "Shares Outstanding (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "sharesoutstanding",
        "metricName": "Shares Outstanding (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "shorttermdebt",
        "metricName": "Short Term Debt (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "shorttermdebt",
        "metricName": "Short Term Debt (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "shortterminvestments",
        "metricName": "Short Term Investments (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "shortterminvestments",
        "metricName": "Short Term Investments (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "tangiblebookvaluepershare",
        "metricName": "Tangible Book Valueper Share (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "tangiblebookvaluepershare",
        "metricName": "Tangible Book Valueper Share (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "totalassets",
        "metricName": "Total Assets (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "totalassets",
        "metricName": "Total Assets (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "totaldebt",
        "metricName": "Total Debt (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "totaldebt",
        "metricName": "Total Debt (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "totalequity",
        "metricName": "Total Equity (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "totalequity",
        "metricName": "Total Equity (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "totalliabilities",
        "metricName": "Total Liabilities (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "totalliabilities",
        "metricName": "Total Liabilities (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "totalreceivables",
        "metricName": "Total Receivables (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "totalreceivables",
        "metricName": "Total Receivables (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      }
    ]
  },
  {
    title: "Financial Statement Components - Cash Flow Items",
    metrics: [
      {
        "metricKey": "capex",
        "metricName": "Capex (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "capex",
        "metricName": "Capex (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "cashdividendspaid",
        "metricName": "Cash Dividends Paid (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "cashdividendspaid",
        "metricName": "Cash Dividends Paid (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "cashinterestpaid",
        "metricName": "Cash Interest Paid (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "cashinterestpaid",
        "metricName": "Cash Interest Paid (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "cashtaxespaid",
        "metricName": "Cash Taxes Paid (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "cashtaxespaid",
        "metricName": "Cash Taxes Paid (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "changeincash",
        "metricName": "Changein Cash (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "changeincash",
        "metricName": "Changein Cash (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "changesinworkingcapital",
        "metricName": "Changesin Working Capital (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "changesinworkingcapital",
        "metricName": "Changesin Working Capital (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "depreciationamortization",
        "metricName": "Depreciation Amortization (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "depreciationamortization",
        "metricName": "Depreciation Amortization (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "fcf",
        "metricName": "Fcf (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "fcf",
        "metricName": "Fcf (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "issuancereductioncapitalstock",
        "metricName": "Issuance Reduction Capital Stock (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "issuancereductioncapitalstock",
        "metricName": "Issuance Reduction Capital Stock (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "issuancereductiondebtnet",
        "metricName": "Issuance Reduction Debt Net (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "issuancereductiondebtnet",
        "metricName": "Issuance Reduction Debt Net (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "netcashfinancingactivities",
        "metricName": "Net Cash Financing Activities (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "netcashfinancingactivities",
        "metricName": "Net Cash Financing Activities (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "netincomestartingline",
        "metricName": "Net Income Starting Line (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "netincomestartingline",
        "metricName": "Net Income Starting Line (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "netinvestingcashflow",
        "metricName": "Net Investing Cash Flow (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "netinvestingcashflow",
        "metricName": "Net Investing Cash Flow (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "netoperatingcashflow",
        "metricName": "Net Operating Cash Flow (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "netoperatingcashflow",
        "metricName": "Net Operating Cash Flow (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "otherfundsfinancingitems",
        "metricName": "Other Funds Financing Items (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "otherfundsfinancingitems",
        "metricName": "Other Funds Financing Items (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "otherfundsnoncashitems",
        "metricName": "Other Funds Non Cash Items (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "otherfundsnoncashitems",
        "metricName": "Other Funds Non Cash Items (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "otherinvestingcashflowitemstotal",
        "metricName": "Other Investing Cash Flow Items Total (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "otherinvestingcashflowitemstotal",
        "metricName": "Other Investing Cash Flow Items Total (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      },
      {
        "metricKey": "stockbasedcompensation",
        "metricName": "Stock Based Compensation (Quarterly)",
        "path": "/stock/financials",
        "frequency": "quarterly"
      },
      {
        "metricKey": "stockbasedcompensation",
        "metricName": "Stock Based Compensation (Annual)",
        "path": "/stock/financials",
        "frequency": "annual"
      }
    ]
  },
];
