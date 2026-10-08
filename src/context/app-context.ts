import { createContext } from 'react'

export type Lang = 'fr' | 'en'
export type Theme = 'light' | 'dark'

export type AppContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  theme: Theme
  toggleTheme: () => void
  isDark: boolean
}

export const AppContext = createContext<AppContextType | null>(null)
