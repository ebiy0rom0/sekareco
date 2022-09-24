import { useState, createContext } from "react"

export const ThemeCtx = createContext<Theme>({
  darkMode: false,
  switchMode: () => undefined
})

export const useTheme = () => {
  const [ dark, setDark ] = useState(false)
  const context: Theme = {
    darkMode: dark,
    switchMode: () => setDark(!dark)
  }

  const ThemeProvider: React.FC<Props> = ({ children }) => (
    <ThemeCtx.Provider value={ context }>
      { children }
    </ThemeCtx.Provider>
  )

  return ThemeProvider
}

type Props = {
  children: React.ReactChild
}

type Theme = {
  darkMode: boolean
  switchMode: () => void
}
