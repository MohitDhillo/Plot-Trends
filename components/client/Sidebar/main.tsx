"use client";
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from "@nextui-org/autocomplete";
import { getTrendsData } from "@/lib/utils/TrendsUtils";
import styles from "./bar.module.css";
import { useAsyncList } from "@react-stately/data";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Accordion, AccordionItem } from "@nextui-org/react";
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

type autocompleteData = { query: string; value: number };
export default function Sidebar({
  handleLine,
  handleBar,
  handleRange,
  handleDeleteLine,
}: {
  handleLine: (result: any) => void;
  handleBar: (result: any) => void;
  handleRange: (result: any) => void;
  handleDeleteLine: (result: any) => void;
}) {
  let list = useAsyncList<autocompleteData>({
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
        const response = await fetch(fullUrl, { signal });

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
  const [trends, setTrends] = useState([]);
  const onSelectionChange = async (Key: key) => {
    if (!Key) return;
    const params = { keyword: Key };
    const result = await getTrendsData(params);
    handleLine(result);
    list.setFilterText("");
    setTrends([...trends, Key]);
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
          label="Stay duration"
          className="max-w-xs"
        />
        <div className="mt-2">
          <Autocomplete
            label="Search Trends"
            placeholder="Add Trends"
            className="max-w-xs"
            items={list.items}
            inputValue={list.filterText}
            onInputChange={list.setFilterText}
            onSelectionChange={onSelectionChange}
            isLoading={list.isLoading}
          >
            {(item) => (
              // <AutocompleteSection showDivider title={item.title}>
              <AutocompleteItem key={item.query} className="capitalize">
                {item.query}
              </AutocompleteItem>
              // </AutocompleteSection>
            )}
          </Autocomplete>
        </div>
        <div className={styles.activeGraph}>
          <header>
            <h3>Active Plots</h3>
          </header>
          {trends.map((trend, index) => (
            <div className={styles.trend}>
              <p>{trend}</p>
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
                  // selectedKeys={selectedKeys}
                  onAction={(key) => handleDeleteGraph(key, index)}
                >
                  {/* <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem> */}
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
