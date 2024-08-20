"use client";
import { getData } from "@/lib/utils/apiUtils";
import { useAsyncList } from "@react-stately/data";
import { parseDate, today, getLocalTimeZone } from "@internationalized/date";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Autocomplete,
  AutocompleteItem,
  DateRangePicker,
  AutocompleteSection,
} from "@nextui-org/react";
import { useState } from "react";
import styles from "./bar.module.css";
import { useGraphStore } from "@/lib/stores/store";
import { randomColor } from "@/lib/colors/rcol";
import { categories as MetricData } from "@/lib/metrics";
import toast from "react-hot-toast";

type autocompleteData = { symbol?: string; query: string; value: number };
export default function Sidebar() {
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
          toast.error("Some Error Occured");
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        data = await response.json();
      } catch (error) {
        toast.error("Some Error Occured");
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
          toast.error("Some Error Occured");
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        data = await response.json();
      } catch (error) {
        toast.error("Some Error Occured");
        console.error("Error fetching data:", error);
      }

      return {
        items: data,
      };
    },
  });
  let cryptolist = useAsyncList<autocompleteData>({
    async load({ signal, filterText }) {
      let data: autocompleteData[] = [];
      if (!filterText) {
        return { items: [] };
      }
      try {
        const baseUrl = "/api/crypto/auto-complete"; // Include the protocol
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
  const {
    graphData: data,
    range,
    appendGraph,
    appendMetric,
    removeGraph,
    changeRange,
    updateGraph,
  } = useGraphStore((state) => state);
  const [plot, setPlot] = useState("");
  const [active, setActive] = useState(false);
  const [color, setColor] = useState("");
  const onSelectionChange = async (Key: any) => {
    if (!Key || !plot) {
      toast.error("Please enter a Key");
      return;
    }
    const params = { keyword: Key };
    const result = await getData(plot, params);
    if (!result || result.error) {
      toast.error(result.error);
      result;
    }
    // add error functions
    let metricmap = new Map();
    let feature =
      plot == "stocks" ? "Price" : plot === "crypto" ? "Rate" : "Values";
    metricmap.set(feature, {
      plot_type: "line",
      values: result,
      color: randomColor(),
      feature: feature,
    });
    appendGraph({
      name: Key.toString(),
      metrics: metricmap,
      category: plot,
    });
    gtrendlist.setFilterText("");
    stocklist.setFilterText("");
    // cryptolist.setFilterText("");
    setPlot("");
  };
  const onMetricSelectionChange = async (Key: any) => {
    if (!Key) {
      toast.error("Please enter a Key");
      return;
    }
    // console.log("metric", Key);
    appendMetric("stocks", Key);
    // console.log(data);
  };
  const onRangeChange = (range: any) => {
    if (!range) return;
    const newRange: [Date, Date] = [range.start.toDate(), range.end.toDate()];
    changeRange(newRange);
  };
  const handleDropdown = (key: any, index: number, param: string) => {
    if (key == "delete") {
      removeGraph(index, param);
    } else if (key == "color") {
      console.log("color");
      updateGraph(index, param, color ? color : randomColor());
    }
  };
  return (
    <main className={styles.container}>
      <h3>Trends</h3>
      <aside
        className={
          active ? `${styles.wrapper} ${styles.active}` : styles.wrapper
        }
      >
        <section className="dark">
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
            <Dropdown backdrop="blur" className="w-full">
              <DropdownTrigger>
                <Button variant="shadow" color="primary" className="w-full">
                  Add Plot
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Static Actions"
                onAction={(key) => setPlot(key.toString())}
              >
                <DropdownItem key="trends">Trends</DropdownItem>
                <DropdownItem key="stocks">Stocks</DropdownItem>
                <DropdownItem key="crypto">Crypto</DropdownItem>
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
                onSelectionChange={onSelectionChange}
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
                onSelectionChange={onSelectionChange}
                isLoading={stocklist.isLoading}
              >
                {/* <AutocompleteItem key="AAPL">Apple</AutocompleteItem> */}
                {(item) => (
                  <AutocompleteItem key={item.symbol || ""}>
                    {item.query}
                  </AutocompleteItem>
                )}
              </Autocomplete>
            </div>
          )}
          {plot === "crypto" && (
            <div className="mt-2">
              <Autocomplete
                label="Search Crypto"
                placeholder="Add Crypto"
                className="max-w-xs"
                items={cryptolist.items}
                inputValue={cryptolist.filterText}
                onInputChange={cryptolist.setFilterText}
                onSelectionChange={onSelectionChange}
                isLoading={cryptolist.isLoading}
              >
                {/* <AutocompleteItem key="BINANCE:BTCUSDT">
                  Bitcoin
                </AutocompleteItem> */}
                {(item) => (
                  <AutocompleteItem key={item.symbol || ""}>
                    {item.query}
                  </AutocompleteItem>
                )}
              </Autocomplete>
            </div>
          )}
          <div className="mt-2">
            <Autocomplete
              label="Search Stock Metrics"
              placeholder="Add Metric"
              className="max-w-xs"
              onSelectionChange={onMetricSelectionChange}
            >
              {MetricData.map((section) => (
                <AutocompleteSection title={section.title} key={section.title}>
                  {section.metrics.map((item) => (
                    <AutocompleteItem key={item.metricKey}>
                      {item.metricName}
                    </AutocompleteItem>
                  ))}
                </AutocompleteSection>
              ))}
            </Autocomplete>
          </div>
          <div className={styles.activeGraph}>
            <header>
              <h3>Active Plots</h3>
            </header>
            {data.map((trend, index) => (
              <div className={styles.trend} key={trend.name}>
                <div className={styles.contentContainer}>
                  <div className={styles.content}>
                    <h3>{trend.name}</h3>
                    {Array.from(trend.metrics).map((metric) => (
                      <div className={styles.metric}>
                        <p>{metric[0]}</p>
                        <div>
                          <div
                            style={{
                              backgroundColor: metric[1].color,
                              width: "10px",
                              height: "10px",
                              borderRadius: "9999px",
                            }}
                          ></div>
                          <Dropdown backdrop="blur">
                            <DropdownTrigger>
                              <Button
                                // variant="bordered"
                                className="text-white min-w-8 h-6 rounded-md bg-transparent hover:bg-gray-900"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="0px"
                                  y="0px"
                                  width="15"
                                  height="15"
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
                              closeOnSelect={false}
                              onAction={(key) =>
                                handleDropdown(key, index, metric[0])
                              }
                            >
                              <DropdownItem
                                key="color"
                                description="Click to update Color"
                              >
                                <div className="flex items-center justify-between gap-8">
                                  <span>Change Color</span>

                                  <input
                                    className="w-6 h-4 p-0"
                                    type="color"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                  />
                                </div>
                              </DropdownItem>
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </aside>
    </main>
  );
}
