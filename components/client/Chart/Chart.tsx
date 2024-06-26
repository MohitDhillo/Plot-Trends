// pages/index.tsx
"use client";
import { useRef, Ref, forwardRef } from "react";
import Graph, { GraphRef } from "@/components/Graph/Graph";
import styles from "./charts.module.css";

import { QueryParams, getTrendsData } from "@/lib/utils/TrendsUtils";
// Define types for data points
interface DataPoint {
  timestamp: number;
  value: number;
}

const dataLine1: DataPoint[] = [
  { timestamp: 1609459200000, value: 30 }, // Jan 1, 2021
  { timestamp: 1612137600000, value: 80 }, // Feb 1, 2021
  { timestamp: 1614556800000, value: 45 }, // Mar 1, 2021
  { timestamp: 1617235200000, value: 60 }, // Apr 1, 2021
  { timestamp: 1619827200000, value: 20 }, // May 1, 2021
  { timestamp: 1622505600000, value: 90 }, // Jun 1, 2021
  { timestamp: 1625097600000, value: 55 }, // Jul 1, 2021
];
const dataLine2: DataPoint[] = [
  { timestamp: 1609459200000, value: 310 }, // Jan 1, 2021
  { timestamp: 1612137600000, value: 80 }, // Feb 1, 2021
  { timestamp: 1614556800000, value: 445 }, // Mar 1, 2021
  { timestamp: 1617235200000, value: 60 }, // Apr 1, 2021
  { timestamp: 1619827200000, value: 20 }, // May 1, 2021
  { timestamp: 1622505600000, value: 90 }, // Jun 1, 2021
  { timestamp: 1625097600000, value: 53 }, // Jul 1, 2021
];

const dataBar: DataPoint[] = [
  { timestamp: 1600059200000, value: 50 }, // Jan 1, 2021
  { timestamp: 1612137600000, value: 60 }, // Feb 1, 2021
  { timestamp: 1614556800000, value: 70 }, // Mar 1, 2021
  { timestamp: 1617235200000, value: 40 }, // Apr 1, 2021
  { timestamp: 1619827200000, value: 80 }, // May 1, 2021
  { timestamp: 1622505600000, value: 20 }, // Jun 1, 2021
  { timestamp: 1625097600000, value: 90 }, // Jul 1, 2021
];

const Home = forwardRef((props, graphRef: Ref<GraphRef>) => {
  // const graphRef = useRef<GraphRef>(null);

  // Function to append line graph data
  const handleAddLineGraph = async (data: []) => {
    graphRef?.current?.appendLineGraph(data);
  };
  const handleAddLineGraph1 = async () => {
    const params = { keyword: "India" };
    const result = await getTrendsData(params);
    graphRef?.current?.appendLineGraph(result);
  };
  const handleAddLineGraph2 = async () => {
    const params = { keyword: "USA" };
    const result = await getTrendsData(params);
    graphRef?.current?.appendLineGraph(result);
  };

  // Function to append bar graph data
  const handleAddBarGraph = () => {
    graphRef?.current?.appendBarGraph(dataBar);
  };

  // Function to change the data range
  const handleChangeRange = () => {
    const newRange: [Date, Date] = [
      new Date(2019, 0, 1), // Jan 1, 2021
      new Date(2021, 6, 1), // Jul 1, 2021
    ];
    graphRef.current?.changeRange(newRange);
  };

  return (
    <main className={styles.container}>
      <div className={styles.graphContainer}>
        <Graph ref={graphRef} />
      </div>
      <button onClick={handleAddLineGraph1}>Add Line Graph</button>
      <button onClick={handleAddLineGraph2}>Add Line Graph</button>
      <button onClick={handleAddBarGraph}>Add Bar Graph</button>
      <button onClick={handleChangeRange}>Change Range</button>
    </main>
  );
});
export default Home;
