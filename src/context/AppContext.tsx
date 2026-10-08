import { useEffect, useState, type ReactNode } from 'react'
import { AppContext, type Lang, type Theme } from './app-context'

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'fr'
    return (localStorage.getItem('lang') as Lang) || 'fr'
  })

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light'
    return (localStorage.getItem('theme') as Theme) || 'light'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </AppContext.Provider>
  )
}
