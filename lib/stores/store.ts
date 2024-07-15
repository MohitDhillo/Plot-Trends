import { create } from "zustand";
import { Series } from "@/lib/definitions";
type graphStore = {
  graphData: Series[];
  range: [Date, Date];
  feature_set: Map<string, number>;
  appendGraph: (data: Series) => void;
  updateGraph: (index: number, data: Series) => void;
  removeGraph: (index: number) => void;
  changeRange: (newRange: [Date, Date]) => void;
};
export const useGraphStore = create<graphStore>((set) => ({
  graphData: [],
  range: [new Date(1585767650000), new Date()],
  feature_set: new Map<string, number>(),
  appendGraph: (data) =>
    set((state) => {
      console.log(data.feature);

      const newSet = new Map(state.feature_set);
      if (newSet.has(data.feature)) {
        newSet.set(data.feature, newSet.get(data.feature) + 1);
      } else {
        newSet.set(data.feature, 1);
      }
      return {
        ...state,
        feature_set: newSet,
        graphData: [...state.graphData, data],
      };
    }),
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
