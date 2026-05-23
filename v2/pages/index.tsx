import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import Signature from "@/components/signature"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Link from "next/link"

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
        <Header />
        <Hero title="Hi, I&apos;m a designer." className={styles.hero}>
          <nav>
            <ol>
              <li>About me</li>
              <li>Product design</li>
              <li>
                <Link href="/interior">Interior design</Link>
              </li>
              <li>Lifestyle & finances</li>
              <li>Contact</li>
            </ol>
          </nav>
        </Hero>
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
