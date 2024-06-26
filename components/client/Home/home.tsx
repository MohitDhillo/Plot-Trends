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
  return (
    <div className="flex">
      <Sidebar handleLine={handleAddLineGraph} />
      <Chart ref={graphRef} />
    </div>
  );
}
