// components/Graph.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { DataPoint } from "@/lib/definitions";
import { useGraphStore } from "@/lib/stores/store";

const Graph = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 });
  const { graphData: data, range } = useGraphStore((state) => state);

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

  // Update the graph when data or dimensions change
  useEffect(() => {
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
      return;
    }

    const svgGroup = svg.append("g");
    const xGrid = d3
      .axisBottom(x)
      .tickSize(-height + margin.top + margin.bottom)
      .tickFormat(() => "");
    const yGrid = d3
      .axisLeft(y)
      .tickSize(-width + margin.left + margin.right)
      .tickFormat(() => "");

    svgGroup
      .append("g")
      .attr("class", "x-grid")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(xGrid);

    svgGroup
      .append("g")
      .attr("class", "y-grid")
      .attr("transform", `translate(${margin.left},0)`)
      .call(yGrid);

    const xAxis = svgGroup
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    const yAxis = svgGroup
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Draw the line and bar graphs based on the data
    data.forEach((series) => {
      if (series.type === "line") {
        const line = d3
          .line<DataPoint>()
          .x((d) => x(d.timestamp!))
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
          .attr("cx", (d) => x(d.timestamp!))
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

        svgGroup
          .append("g")
          .selectAll("rect")
          .data(series.values)
          .join("rect")
          .attr("x", (d) => x(d.timestamp!))
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
          `Name: ${name}<br>Date: ${d3.timeFormat("%B %d, %Y")(
            new Date(d.timestamp)!
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

    const zoom = d3
      .zoom()
      .scaleExtent([0.5, 10])
      .translateExtent([
        [-100, -100],
        [width + 100, height + 100],
      ])
      .on("zoom", zoomed);

    svg.call(zoom as any);

    function zoomed(event: any) {
      const transform = event.transform;
      const newX = transform.rescaleX(x);
      const newY = y;

      xAxis.call(d3.axisBottom(newX));
      yAxis.call(d3.axisLeft(newY));

      svgGroup.selectAll(".graph-line").attr(
        "d",
        d3
          .line<DataPoint>()
          .x((d) => newX(d.timestamp!))
          .y((d) => newY(d.value))
      );

      svgGroup
        .selectAll("circle")
        .attr("cx", (d) => newX(d.timestamp!))
        .attr("cy", (d) => newY(d.value));

      svgGroup
        .selectAll(".graph-bar")
        .attr("x", (d) => newX(d.timestamp!))
        .attr("y", (d) => newY(d.value))
        .attr("height", (d) => newY(0) - newY(d.value));
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
      <style jsx>{`
        .x-grid .tick line,
        .y-grid .tick line {
          stroke: lightgrey;
        }
      `}</style>
    </>
  );
};

export default Graph;
