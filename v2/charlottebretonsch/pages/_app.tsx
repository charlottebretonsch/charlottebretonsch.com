import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Poppins } from "@next/font/google"
import { DarkContextProvider } from "@/components/darkscheme"

const poppins = Poppins({ weight: "500", subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkContextProvider>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </DarkContextProvider>
  )
}
