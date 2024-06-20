// pages/index.tsx
"use client";
import { useRef } from "react";
import Graph from "@/components/Graph/Graph";
import styles from "./charts.module.css";
import {getTrendsData} from "@/app/api/trends/getTrendsData";

// Define types for data points
export interface DataPoint {
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

export default function Home() {
  const graphRef = useRef<GraphRef>(null);

  // Function to append line graph data
  const handleAddLineGraph1 = async () => {
    let result = await getTrendsData("USA");
    let r2: DataPoint[] = [];
    let co = 0 ;
    for(let i = 0 ; i<result.length; i++)
    {
      if(result[i].timestamp >= 1600059200000 && co <7)
      {
        r2.push(result[i]);
        co = co+1 ;
      }
    }
    graphRef.current?.appendLineGraph(r2);
  };

  const handleAddLineGraph2 = () => {
    graphRef.current?.appendLineGraph(dataLine2);
  };

  // Function to append bar graph data
  const handleAddBarGraph = () => {
    graphRef.current?.appendBarGraph(dataBar);
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
}
