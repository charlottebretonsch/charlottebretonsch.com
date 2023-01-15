import styles from "@/styles/line.module.css"
import { useContext } from "react"
import { DarkContext } from "./darkscheme"

interface LineProps {
  type: "background" | "fill";
  width: number;
}

const colorMap = {
  light: {
    background: "#c0c0c0",
    fill: "#000000",
  },
  dark: {
    background: "#606060",
    fill: "#E0E0E0",
  },
}
function Line({ type, width }: LineProps) {
  const { isDark } = useContext(DarkContext)

  return (
    <div className={styles.lineContainer} style={{ width: width + "%" }}>
      <svg
        width="1921"
        height="6"
        viewBox="0 0 1921 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 2.33705C31.3333 1.61786 98.7 0.611002 125.5 2.33705C159 4.49461 188 4.49461 202 2.33705C213.2 0.611004 234.667 1.61786 244 2.33705C263.5 3.14613 307 4.27885 325 2.33705C347.5 -0.0902021 464 0.988578 569 3.95522C674 6.92187 818.5 0.988576 871 1.52797C923.5 2.06736 1179.5 6.65217 1217 3.41583C1254.5 0.179491 1397 6.11278 1465 2.06736C1533 -1.97807 1676 7.19156 1920.5 4.49461"
          stroke={colorMap[isDark ? "dark" : "light"][type]}
        />
      </svg>
    </div>
  )
}

export default function DynamicLine() {
  return (
    <div className={styles.container}>
      <Line type="background" width={100} />
      <Line type="fill" width={60} />
    </div>
  )
}
