import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>Trends</div>
      </div>
    </nav>
  );
}
