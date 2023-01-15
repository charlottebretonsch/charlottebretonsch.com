import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import { Abhaya_Libre } from "@next/font/google"
import Signature from "@/components/signature"
import Line from "@/components/line"

const abhaya = Abhaya_Libre({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Charlotte Breton Schreiner</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.fullscreen}>
        <header className={styles.header}>
          <Line />
          <h1>Charlotte Breton Schreiner</h1>
        </header>
        <main className={styles.main}>
          <h2 className={abhaya.className}>Hi, I&apos;m a designer.</h2>
          <nav>
            <ol>
              <li>About me</li>
              <li>Product design</li>
              <li>Interior design</li>
              <li>Lifestyle & finances</li>
              <li>Contact</li>
            </ol>
          </nav>
        </main>
        <Image
          src="/phone.svg"
          alt="Phone"
          width={314}
          height={681}
          className={styles.background}
        />
        <footer className={styles.footer}>
          <Signature />
        </footer>
      </div>
    </>
  )
}
