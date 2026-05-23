import styles from "@/styles/Hero.module.css"
import { Abhaya_Libre } from "@next/font/google"
import React from "react"

const abhaya = Abhaya_Libre({ weight: "400", subsets: ["latin"] })

interface HeroProps {
  title: string;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export default function Hero({ title, children, className }: HeroProps) {
  return (
    <div className={`${className} ${styles.hero}`}>
      <h2 className={abhaya.className}>{title}</h2>
      {children}
    </div>
  )
}
