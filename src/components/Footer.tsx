import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Dúvidas, sugestões ou atualizações?{" "}
        <Link href="https://www.linkedin.com/in/acdayane/">Contate-nos!</Link>
      </p>
      <p>Feito com ❤. Dayane Piccoli ©2023.</p>
    </div>
  );
}
