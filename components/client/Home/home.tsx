"use client";
import Chart from "@/components/client/Chart/Chart";
import Sidebar from "@/components/client/Sidebar/main";
import { useRef } from "react";
import { GraphRef } from "@/components/Graph/Graph";
import { DataPoint } from "@/components/Graph/Graph";
export default function Main() {
  const graphRef = useRef<GraphRef>(null);
  const handleAddLineGraph = (val: {
    newData: DataPoint[];
    category: string;
    name: string;
  }): string => {
    console.log("Adding line graph", val);
    const color = graphRef?.current?.appendLineGraph(val);
    return color || "white";
  };
  const handleAddBarGraph = (data: []) => {
    // graphRef?.current?.appendBarGraph(data);
  };
  const handleChangeRange = (newRange: [Date, Date]) => {
    graphRef.current?.changeRange(newRange);
  };
  const handledeleteLine = (i: number) => {
    graphRef.current?.removeGraph(i);
  };
  return (
    <div className="flex">
      <Sidebar
        handleLine={handleAddLineGraph}
        handleBar={handleAddBarGraph}
        handleRange={handleChangeRange}
        handleDeleteLine={handledeleteLine}
      />
      <Chart ref={graphRef} />
    </div>
  );
}
