import Container from "@/components/ui/Container/Container";
import styles from "./page.module.css";
import Products from "./products/Products";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Container>
          <Products />
        </Container>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
