import styles from "@/styles/Header.module.css"
import Line from "./line"

interface HeaderProps {
  title?: string;
}
export default function Header({ title = "Charlotte Breton Schreiner" }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Line pct={30} />
      <h1>{title}</h1>
    </header>
  )
}
