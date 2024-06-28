// components/Graph.tsx
import {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  Ref,
} from "react";
import colors from "./colors";
import * as d3 from "d3";

// Define types for data points and the graph ref functions
export interface DataPoint {
  timestamp?: number;
  value: number;
  date?: Date;
  data?: { [key: string]: string };
}

interface Series {
  name: string;
  type: "line" | "bar";
  category: "trends" | "stocks" | string;
  values: DataPoint[];
  color: string;
}

export interface GraphRef {
  appendLineGraph: (val: {
    newData: DataPoint[];
    category: string;
    name: string;
  }) => string;
  appendBarGraph: (val: { newData: DataPoint[]; category: string }) => void;
  changeRange: (newRange: [Date, Date]) => void;
  removeGraph: (index: number) => void;
}

const Graph = forwardRef((props, ref: Ref<GraphRef>) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 });
  const [data, setData] = useState<Series[]>([]);
  const [range, setRange] = useState<[Date, Date]>([
    new Date(1585767650000),
    new Date(),
  ]);
  // Handle window resize to make the graph responsive
  useEffect(() => {
    const handleResize = () => {
      const width = svgRef.current?.parentElement?.offsetWidth || 800;
      const height = svgRef.current?.parentElement?.offsetHeight || 400;
      setDimensions({ width, height });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Assign a unique color to each series
  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const assignColor = (): string => {
    const color = colors[randomIntFromInterval(0, 400)];
    return color;
  };

  // Expose functions to the parent component
  useImperativeHandle(ref, () => ({
    appendLineGraph(val: {
      newData: DataPoint[];
      category: string;
      name: string;
    }) {
      console.log("Adding line graph", val);
      const color = assignColor();
      val.newData.forEach((d) => (d.date = new Date(d.timestamp || 0)));
      setData((currentData) => [
        ...currentData,
        {
          name: val.name,
          type: "line",
          category: val.category,
          values: val.newData,
          color: color,
        },
      ]);
      return color;
    },
    appendBarGraph(val: { newData: DataPoint[]; category: string }) {
      // val.newData.forEach((d) => (d.date = new Date(d.timestamp)));
      // const color = assignColor();
      // setData((currentData) => [
      //   ...currentData,
      //   {
      //     type: "bar",
      //     category: val.category,
      //     values: val.newData,
      //     color: color,s
      //   },
      //   ,
      // ]);
    },
    changeRange(newRange: [Date, Date]) {
      setRange(newRange);
    },
    removeGraph(index: number) {
      const newData = data.filter((_, i) => i !== index);
      setData(newData);
    },
  }));

  // Update the graph when data or dimensions change
  useEffect(() => {
    // if (!data.length) return;

    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);
    const { width, height } = dimensions;
    const margin = { top: 20, right: 30, bottom: 80, left: 40 };

    // Set up the x and y scales
    const x = d3
      .scaleTime()
      .domain(range)
      .range([margin.left, width - margin.right])
      .nice();
    x.ticks(10);

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (series) => d3.max(series.values, (d) => d.value))!,
      ])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Clear the SVG content before redrawing
    svg.selectAll("*").remove();

    if (!data.length) {
      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", height / 2)
        .attr("text-anchor", "middle")
        .attr("font-size", "24px")
        .attr("fill", "gray")
        .text("Search for trends to plot the graph");
      return; // Update: Ensure function exits if no data is present
    }
    const svgGroup = svg.append("g");

    // Determine the time format and interval based on the width
    const timeFormat = width < 500 ? "%b %d" : "%b %Y";
    const timeInterval =
      width < 500 ? d3.timeDay.every(1) : d3.timeMonth.every(1);

    // Draw the x and y axes
    svgGroup
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svgGroup
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Draw the line and bar graphs based on the data
    data.forEach((series) => {
      if (series.type === "line") {
        const line = d3
          .line<DataPoint>()
          .x((d) => x(d.date!))
          .y((d) => y(d.value));

        const path = svgGroup
          .append("path")
          .datum(series.values)
          .attr("fill", "none")
          .attr("stroke", series.color)
          .attr("stroke-width", 1.5)
          .attr("d", line)
          .attr("class", "graph-line");

        svgGroup
          .append("g")
          .selectAll("circle")
          .data(series.values)
          .join("circle")
          .attr("cx", (d) => x(d.date!))
          .attr("cy", (d) => y(d.value))
          .attr("r", 3)
          .attr("fill", series.color)
          .on("mouseover", (event, d) => handleMouseOver(event, d, series.name))
          .on("mousemove", (event, d) => handleMouseMove(event, d))
          .on("mouseout", () => handleMouseOut());

        path.on("mouseover", () => handlePathMouseOver(series.color));
        path.on("mouseout", () => handlePathMouseOut());
      } else if (series.type === "bar") {
        const barWidth =
          (width - margin.left - margin.right) / series.values.length - 1;

        const bars = svgGroup
          .append("g")
          .selectAll("rect")
          .data(series.values)
          .join("rect")
          .attr("x", (d) => x(d.date!))
          .attr("y", (d) => y(d.value))
          .attr("height", (d) => y(0) - y(d.value))
          .attr("width", barWidth)
          .attr("fill", series.color)
          .attr("class", "graph-bar")
          .on("mouseover", (event, d) => handleMouseOver(event, d, series.name))
          .on("mousemove", (event, d) => handleMouseMove(event, d))
          .on("mouseout", () => handleMouseOut());
      }
    });
    function handleMouseOver(event: any, d: DataPoint, name: string) {
      tooltip.style("display", "block");
      tooltip
        .html(
          `Name:${name}<br>Date: ${d3.timeFormat("%B %d, %Y")(
            d.date!
          )}<br>Value: ${d.value}`
        )
        .style("left", `${event.pageX}px`)
        .style("top", `${event.pageY}px`);
    }

    function handleMouseMove(event: any, d: DataPoint) {
      tooltip
        .style("left", `${event.pageX}px`)
        .style("top", `${event.pageY}px`);
    }

    function handleMouseOut() {
      tooltip.style("display", "none");
    }

    // Function to handle mouse over for paths
    function handlePathMouseOver(color: string) {
      svg.selectAll(".graph-line, .graph-bar").attr("opacity", 0.3);
      svg
        .selectAll(`[stroke="${color}"], [fill="${color}"]`)
        .attr("opacity", 1)
        .attr("stroke-width", 3); // Increase the line thickness
    }

    function handlePathMouseOut() {
      svg
        .selectAll(".graph-line, .graph-bar")
        .attr("opacity", 1)
        .attr("stroke-width", 1.5); // Reset the line thickness
    }
  }, [data, dimensions, range]);

  return (
    <>
      <svg ref={svgRef} width="100%" height="100%"></svg>
      <div
        ref={tooltipRef}
        style={{
          position: "fixed",
          display: "none",
          backgroundColor: "white",
          padding: "5px",
          borderRadius: "3px",
          pointerEvents: "none",
        }}
      ></div>
    </>
  );
});

export default Graph;
