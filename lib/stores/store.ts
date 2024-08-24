// import { create } from "zustand";
// import { Series, Metric } from "@/lib/definitions";
// import { randomColor } from "../colors/rcol";
// type graphStore = {
//   graphData: Series[];
//   range: [Date, Date];
//   feature_set: Map<string, number>;
//   appendGraph: (data: Series) => void;
//   appendMetric: (type: string, name: string) => void;
//   updateGraph: (index: number, param: string, data: string) => void;
//   removeGraph: (index: number, param: string) => void;
//   changeRange: (newRange: [Date, Date]) => void;
// };
// export const useGraphStore = create<graphStore>((set) => ({
//   graphData: [],
//   range: [new Date(1585767650000), new Date()],
//   feature_set: new Map<string, number>(),
//   appendGraph: (data) =>
//     set((state) => {
//       const newSet = new Map(state.feature_set);
//       if (
//         newSet.has(data.metrics.keys().next().value) &&
//         newSet.get(data.metrics.keys().next().value) != undefined
//       ) {
//         newSet.set(
//           data.metrics.keys().next().value,
//           newSet.get(data.metrics.keys().next().value) + 1
//         );
//       } else {
//         newSet.set(data.metrics.keys().next().value, 1);
//       }
//       return {
//         ...state,
//         feature_set: newSet,
//         graphData: [...state.graphData, data],
//       };
//     }),
//   appendMetric: async (type, name) => {
//     set(async (state) => {
//       console.log("appending metric");
//       const updatedGraphData = await Promise.all(
//         state.graphData.map(async (series) => {
//           if (series.category === type) {
//             const apiUrl = `/api/EBITDA?keyword=${series.name}`;
//             const response = await fetch(apiUrl);
//             const newMetric = await response.json();
//             const newSeries = series;
//             newSeries.metrics.set(name, {
//               plot_type: "line",
//               color: randomColor(),
//               values: newMetric,
//               feature: name,
//             });
//             return newSeries;
//           }
//           return series;
//         })
//       );
//       console.log(updatedGraphData);
//       return {
//         ...state,
//         graphData: [...updatedGraphData],
//       };
//     });
//   },
//   updateGraph: (index, param, data) =>
//     set((state) => {
//       var updatedGraphData = state.graphData;
//       var metrics = updatedGraphData[index].metrics.get(param);
//       updatedGraphData[index].metrics.set(param, { ...metrics, color: data });
//       return { ...state, graphData: updatedGraphData };
//     }),
//   removeGraph: (index, param) =>
//     set((state) => {
//       var updatedGraphData = state.graphData;
//       var metrics = updatedGraphData[index].metrics.delete(param);
//       return { ...state, graphData: updatedGraphData };
//     }),
//   changeRange: (newRange) => set({ range: newRange }),
// }));
import { create } from "zustand";
import { Series, Metric } from "@/lib/definitions";
import { randomColor } from "../colors/rcol";

type GraphStore = {
  graphData: Series[];
  range: [Date, Date];
  feature_set: Map<string, number>;
  appendGraph: (data: Series) => void;
  appendMetric: (type: string, key: string) => Promise<void>;
  updateGraph: (index: number, param: string, data: string) => void;
  removeGraph: (index: number, param: string) => void;
  changeRange: (newRange: [Date, Date]) => void;
};

export const useGraphStore = create<GraphStore>((set) => ({
  graphData: [],
  range: [new Date(1585767650000), new Date()],
  feature_set: new Map<string, number>(),

  appendGraph: (data) =>
    set((state) => {
      const newFeatureSet = new Map(state.feature_set);
      const metricKey = data.metrics.keys().next().value;
      if (metricKey) {
        newFeatureSet.set(metricKey, (newFeatureSet.get(metricKey) || 0) + 1);
      }
      return {
        ...state,
        feature_set: newFeatureSet,
        graphData: [...state.graphData, data],
      };
    }),

  appendMetric: async (type, key) => {
    const [path, name, freq] = key.split("|");
    const state = useGraphStore.getState();
    const newFeatureSet = new Map(state.feature_set);
    newFeatureSet.set(name, (newFeatureSet.get(name) || 0) + 1);
    const updatedGraphData = await Promise.all(
      state.graphData.map(async (series) => {
        if (series.category === type) {
          const apiUrl = `/api/${path}?keyword=${series.name}&metric=${name}&freq=${freq}`;
          const response = await fetch(apiUrl);
          const newMetric = await response.json();
          const updatedSeries = {
            ...series,
            metrics: new Map(series.metrics).set(name, {
              plot_type: "line",
              color: randomColor(),
              values: newMetric,
              feature: name,
            }),
          };
          return updatedSeries;
        }
        return series;
      })
    );

    set({ feature_set: newFeatureSet, graphData: updatedGraphData });
  },

  updateGraph: (index, param, data) =>
    set((state) => {
      const updatedGraphData = [...state.graphData];
      const series = updatedGraphData[index];
      if (series && series.metrics.has(param)) {
        const metrics = series.metrics.get(param);
        if (metrics) {
          series.metrics.set(param, { ...metrics, color: data });
        }
      }
      return { graphData: updatedGraphData };
    }),

  removeGraph: (index, param) =>
    set((state) => {
      const updatedGraphData = [...state.graphData];
      const series = updatedGraphData[index];
      if (series) {
        series.metrics.delete(param);
      }
      return { graphData: updatedGraphData };
    }),

  changeRange: (newRange) => set({ range: newRange }),
}));
