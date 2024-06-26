import { Ref, forwardRef } from "react";
import Graph, { GraphRef } from "@/components/Graph/Graph";
import styles from "./charts.module.css";

const Home = forwardRef((props, graphRef: Ref<GraphRef>) => {
  return (
    <main className={styles.container}>
      <div className={styles.graphContainer}>
        <Graph ref={graphRef} />
      </div>
    </main>
  );
});
export default Home;
