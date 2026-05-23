import Article from "@/components/article"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import styles from "@/styles/Interior.module.css"

export default function Interior() {
  return (
    <>
      {/* <Head>
        <title>Charlotte Breton Schreiner</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Header title="Charlotte Interiors" />

      <Hero title="Yes, great interior design can be afforable, practical and timely." />

      <Article
        title="Happy cat, happy life."
        year={2022}
        subtitle="San Francisco"
        image="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
      />
      <Article
        title="And... breathe."
        year={2022}
        subtitle="London"
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3400&q=80"
        reverse
      />

      <Hero title="Services">
        <ul>
          <li>worldpay</li>
          <li>Euler Hermes</li>
        </ul>
      </Hero>

      <Hero title="Contact">
        <p className={styles.contactContent}>
          Currently, I work as a Lead Product Designer at Meta where I define the foundational
          messaging and calling experiences for Messenger, Instagram, Facebook and Horizon.<br />
          <br />
          On the side, I offer portfolio reviews and design critique of your product.
        </p>
      </Hero>

      <Footer />
    </>
  )
}
