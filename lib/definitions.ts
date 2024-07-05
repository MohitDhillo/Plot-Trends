export type QueryParams = {
  [key: string]: string;
};

export interface DataPoint {
  timestamp?: number;
  value: number;
  date?: Date;
  data?: { [key: string]: string };
}

export interface Series {
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
