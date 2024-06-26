"use client";
import Chart from "@/components/client/Chart/Chart";
import Sidebar from "@/components/client/Sidebar/main";
import { useRef } from "react";
import { GraphRef } from "@/components/Graph/Graph";
export default function Main() {
  const graphRef = useRef<GraphRef>(null);
  const handleAddLineGraph = async (data: []) => {
    graphRef?.current?.appendLineGraph(data);
  };
  const handleAddBarGraph = (data: []) => {
    graphRef?.current?.appendBarGraph(data);
  };
  const handleChangeRange = (newRange: [Date, Date]) => {
    graphRef.current?.changeRange(newRange);
  };
  const handledeleteLine = (i:number) => {
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
