import Graph from "@/components/Graph/Graph";
import styles from "./charts.module.css";

const Home = () => {
  return (
    <main className={`${styles.container} light`}>
      <div className={styles.graphContainer}>
        <Graph />
      </div>
    </main>
  );
};
export default Home;
