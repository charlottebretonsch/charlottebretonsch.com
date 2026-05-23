import styles from "@/styles/Footer.module.css"
import Signature from "./signature"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Signature />
    </footer>
  )
}
