import Image from "next/image";
import styles from "./page.module.css";
import CardTitle from "@/components/Card/CardTitle";

export default function Home() {
  return (
    <main className={styles.main}>
      <CardTitle />
    </main>
  );
}
