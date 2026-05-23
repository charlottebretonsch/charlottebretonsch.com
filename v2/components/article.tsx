import styles from "@/styles/Article.module.css"
import { Abhaya_Libre } from "@next/font/google"
import Image from "next/image"

const abhaya = Abhaya_Libre({ weight: "400", subsets: ["latin"] })

interface ArticleProps {
  title: string
  year: number
  subtitle: string
  image: string
  reverse?: boolean | undefined
}

export default function Article({title, year, subtitle, image, reverse}: ArticleProps) {
  return <article className={styles.article} data-reversed={reverse}>
    <main>
      <h3 className={abhaya.className}>{title}</h3>
      <p><span className={styles.year}>{year}</span>{subtitle}</p>
    </main>
    <figure>
      <Image src={image} alt={title} width={1000} height={664} />
    </figure>
  </article>
}
