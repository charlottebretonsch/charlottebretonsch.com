import React, { useEffect, useState } from "react"

interface DarkContextProps {
  isDark: boolean;
}

export const DarkContext = React.createContext<DarkContextProps>({ isDark: false })

export function DarkContextProvider({ children }: React.PropsWithChildren) {
  const [isDark, setIsDark] = useState(false)
  useEffect(
    () => {
      const media = window.matchMedia("(prefers-color-scheme: dark)")
      setIsDark(media.matches)
      media.addEventListener("change", function(e) {
        setIsDark(e.matches)
      })
    },
    [setIsDark],
  )

  return <DarkContext.Provider value={{ isDark }}>{children}</DarkContext.Provider>
}
