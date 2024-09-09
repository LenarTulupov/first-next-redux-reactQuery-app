import Page from "./(pages)/home/page";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Page/>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
