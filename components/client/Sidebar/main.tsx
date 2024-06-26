"use client";
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from "@nextui-org/autocomplete";
import { getTrendsData } from "@/lib/utils/TrendsUtils";
import styles from "./bar.module.css";
import { useAsyncList } from "@react-stately/data";

type autocompleteData = { query: string; value: number };
export default function Sidebar({ handleLine }) {
  const trendsData = [{ name: "Dog" }, { name: "Cat" }];
  let list = useAsyncList<autocompleteData>({
    async load({ signal, filterText }) {
      let data: [] = [];
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
  const onSelectionChange = async (Key: any) => {
    if (!Key) return;
    const params = { keyword: Key };
    const result = await getTrendsData(params);
    handleLine(result);
    list.setFilterText("");
  };
  return (
    <aside className={styles.container}>
      <section>
        <div>
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
        <div></div>
      </section>
    </aside>
  );
}
