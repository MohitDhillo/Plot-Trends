export type QueryParams = {
  [key: string]: string;
};

export interface DataPoint {
  timestamp: number;
  value: number;
}

export interface Series {
  name: string;
  symbol?: string;
  type: "line" | "bar";
  category: "trends" | "stocks" | string;
  values: DataPoint[];
  color: string;
  feature?: string;
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
