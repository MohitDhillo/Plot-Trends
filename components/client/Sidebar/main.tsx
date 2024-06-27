"use client";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { getTrendsData } from "@/lib/utils/TrendsUtils";
import { getStockData } from "@/lib/utils/StockUtils";
import styles from "./bar.module.css";
import { useAsyncList } from "@react-stately/data";
import { DateRangePicker } from "@nextui-org/date-picker";
import {
  parseDate,
  today,
  getLocalTimeZone,
  type CalendarDate,
  type CalendarDateTime,
  type ZonedDateTime,
} from "@internationalized/date";
import {
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { color } from "framer-motion";

type autocompleteData = { query: string; value: number };
export default function Sidebar({
  handleLine,
  handleBar,
  handleRange,
  handleDeleteLine,
}: {
  handleLine: (result: any) => string | undefined;
  handleBar: (result: any) => void;
  handleRange: (result: any) => void;
  handleDeleteLine: (result: any) => void;
}) {
  let gtrendlist = useAsyncList<autocompleteData>({
    async load({ signal, filterText }) {
      let data: autocompleteData[] = [];
      if (!filterText) {
        return { items: [] };
      }
      try {
        const baseUrl = "/api/trends/auto-complete"; // Include the protocol
        const queryParams = `keyword=${filterText}`;
        const fullUrl = `${baseUrl}?${queryParams}`;

        // Make the GET request
        const response = await fetch(fullUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        data = await response.json();
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      return {
        items: data,
      };
    },
  });
  let stocklist = useAsyncList<autocompleteData>({
    async load({ signal, filterText }) {
      let data: autocompleteData[] = [];
      if (!filterText) {
        return { items: [] };
      }
      try {
        const baseUrl = "/api/stocks/auto-complete"; // Include the protocol
        const queryParams = `keyword=${filterText}`;
        const fullUrl = `${baseUrl}?${queryParams}`;

        // Make the GET request
        const response = await fetch(fullUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        data = await response.json();
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      return {
        items: data,
      };
    },
  });

  const [trends, setTrends] = useState<
    { key: string; category: string; color: string }[]
  >([]);
  const [plot, setPlot] = useState("");

  const onSelectionTrendChange = async (Key: key) => {
    if (!Key) return;
    const params = { keyword: Key };
    const result = await getTrendsData(params);
    const col = handleLine({ newData: result, category: "trends", name: Key.toString() });
    gtrendlist.setFilterText("");
    setPlot("");
    setTrends([...trends, { key: Key, category: "trends", color: col }]);
  };
  const onSelectionStockChange = async (Key: key) => {
    if (!Key) return;
    const params = { keyword: Key };
    const result = await getStockData(params);
    const col = handleLine({ newData: result, category: "stocks", name: Key });
    gtrendlist.setFilterText("");
    setPlot("");
    setTrends([...trends, { key: Key, category: "stocks", color: col }]);
  };
  const onRangeChange = (
    range:
      | RangeValue<CalendarDate | CalendarDateTime | ZonedDateTime>
      | undefined
      | null
  ) => {
    if (!range) return;
    const newRange: [Date, Date] = [range.start.toDate(), range.end.toDate()];
    handleRange(newRange);
  };
  const handleDeleteGraph = (key: key, index: number) => {
    if (key === "delete") {
      handleDeleteLine(index);
      setTrends(trends.filter((_, i) => i !== index));
    }
  };
  return (
    <aside className={styles.container}>
      <section>
        <DateRangePicker
          // isInvalid
          defaultValue={{
            start: parseDate("2020-04-01"),
            end: today(getLocalTimeZone()),
          }}
          onChange={onRangeChange}
          label="Date Range"
          className="max-w-xs"
        />
        <div className="mt-2">
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button variant="shadow" color="primary">
                Add Plot
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              onAction={(key) => setPlot(key.toString())}
            >
              <DropdownItem key="trends">Trends</DropdownItem>
              <DropdownItem key="stocks">Stocks</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        {plot === "trends" && (
          <div className="mt-2">
            <Autocomplete
              label="Search Trends"
              placeholder="Add Trends"
              className="max-w-xs"
              items={gtrendlist.items}
              inputValue={gtrendlist.filterText}
              onInputChange={gtrendlist.setFilterText}
              onSelectionChange={onSelectionTrendChange}
              isLoading={gtrendlist.isLoading}
            >
              {(item) => (
                <AutocompleteItem key={item.query}>
                  {item.query}
                </AutocompleteItem>
              )}
            </Autocomplete>
          </div>
        )}
        {plot === "stocks" && (
          <div className="mt-2">
            <Autocomplete
              label="Search Stocks"
              placeholder="Add Stocks"
              className="max-w-xs"
              items={stocklist.items}
              inputValue={stocklist.filterText}
              onInputChange={stocklist.setFilterText}
              onSelectionChange={onSelectionStockChange}
              isLoading={stocklist.isLoading}
            >
              {(item) => (
                <AutocompleteItem key={item.symbol}>
                  {item.query}
                </AutocompleteItem>
              )}
            </Autocomplete>
          </div>
        )}
        <div className={styles.activeGraph}>
          <header>
            <h3>Active Plots</h3>
          </header>
          {trends.map((trend, index) => (
            <div
              className={styles.trend}
              style={{ backgroundColor: trend.color }}
              key={trend.key}
            >
              <div className={styles.content}>
                <h3>{trend.key}</h3>
                <p>{trend.category}</p>
              </div>
              <Dropdown backdrop="blur">
                <DropdownTrigger>
                  <Button
                    variant="bordered"
                    className="text-white min-w-8 h-6 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M18.4,2c-0.3,0-0.5,0.1-0.7,0.3l-2,2l-1.4,1.4L3,17v4h4L21.7,6.3c0.4-0.4,0.4-1,0-1.4l-2.6-2.6C18.9,2.1,18.7,2,18.4,2z M18.4,4.4l1.2,1.2l-1.3,1.3l-1.2-1.2L18.4,4.4z M15.7,7.1l1.2,1.2L6.2,19H5v-1.2L15.7,7.1z"></path>
                    </svg>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  variant="faded"
                  aria-label="Static Actions"
                  disallowEmptySelection
                  selectionMode="multiple"
                  onAction={(key) => handleDeleteGraph(key, index)}
                >
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Delete
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
