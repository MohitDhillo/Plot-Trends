import { create } from "zustand";
import { Series } from "@/lib/definitions";
type graphStore = {
  graphData: Series[];
  range: [Date, Date];
  appendGraph: (data: Series) => void;
  updateGraph: (index: number, data: Series) => void;
  removeGraph: (index: number) => void;
  changeRange: (newRange: [Date, Date]) => void;
};
export const useGraphStore = create<graphStore>((set) => ({
  graphData: [],
  range: [new Date(1585767650000), new Date()],
  appendGraph: (data) =>
    set((state) => ({
      ...state,
      graphData: [...state.graphData, data],
    })),
  updateGraph: (index, data) =>
    set((state) => {
      const newData = [...state.graphData];
      if (newData[index]) {
        newData[index] = data;
      }
      return { ...state, graphData: newData };
    }),
  removeGraph: (index) =>
    set((state) => {
      const newData = [...state.graphData];
      newData.splice(index, 1);
      return { ...state, graphData: newData };
    }),
  changeRange: (newRange) => set({ range: newRange }),
}));
