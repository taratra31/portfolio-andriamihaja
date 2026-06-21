import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Hero } from './pages/Hero'
import { Experience } from './pages/Experience'
import { Projects } from './pages/Projects'
import { Skills } from './pages/Skills'
import { Education } from './pages/Education'
import { Contact } from './pages/Contact'

type Lang = 'fr' | 'en'
type Theme = 'light' | 'dark'

// Theme Context (mitovy foana)
interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
})
export const useTheme = () => useContext(ThemeContext)

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') return (localStorage.getItem('theme') as Theme) || 'light'
    return 'light'
  })
  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

//const DISPLAY_NAME = 'Andriamihaja'

function AppContent() {
  const { theme, toggleTheme } = useTheme()
  const [lang, setLang] = useState<Lang>('fr')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const sections = useMemo(
    () => ['hero', 'experience', 'projects', 'skills', 'education', 'contact'],
    [],
  )

  const nav = {
    fr: { experience: 'Expérience', projects: 'Projets', skills: 'Compétences', education: 'Formation', contact: 'Contact' },
    en: { experience: 'Experience', projects: 'Projects', skills: 'Skills', education: 'Education', contact: 'Contact' },
  } as const

  // Détection du scroll (pour l'ombre légère du header)
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const hero = document.getElementById('hero')
      if (hero) setScrolled(scrollY > hero.offsetHeight - 80)

      const viewportMark = scrollY + window.innerHeight * 0.4
      let current = 'hero'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= viewportMark) current = id
      }
      setActiveSection(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  const isDark = theme === 'dark'

  // Style minimal sans gradient ni glow
  const rootBg = 'bg-white dark:bg-gray-950'
  const textPrimary = 'text-gray-900 dark:text-gray-100'
  const textSecondary = 'text-gray-500 dark:text-gray-400'
  const borderColor = 'border-gray-200 dark:border-gray-800'
  const accent = 'text-emerald-600 dark:text-emerald-400'
  const accentBg = 'bg-emerald-50 dark:bg-emerald-900/20'
  const hoverAccent = 'hover:text-emerald-600 dark:hover:text-emerald-400'
  const activeLinkClass = (id: string) =>
    activeSection === id
      ? 'text-emerald-600 dark:text-emerald-400 font-medium'
      : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'

  return (
    <div className={`min-h-screen ${rootBg} ${textPrimary} font-sans antialiased transition-colors duration-300`}>
      {/* Header */}
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b ' + borderColor
            : 'bg-transparent border-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo texte uniquement, police serif */}
          <a href="#hero" onClick={e => { e.preventDefault(); scrollToSection('hero') }} className="font-serif text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {DISPLAY_NAME}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {sections.slice(1).map(s => (
              <button key={s} onClick={() => scrollToSection(s)} className={`text-sm transition-colors ${activeLinkClass(s)}`}>
                {nav[lang][s as keyof typeof nav.fr]}
              </button>
            ))}
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-800" />
            <div className="flex items-center gap-2">
              <button onClick={() => setLang('fr')} className={`text-xs font-medium ${lang === 'fr' ? accent : textSecondary}`}>FR</button>
              <span className={textSecondary}>|</span>
              <button onClick={() => setLang('en')} className={`text-xs font-medium ${lang === 'en' ? accent : textSecondary}`}>EN</button>
            </div>
            <button onClick={toggleTheme} className={`p-1.5 rounded-lg transition-colors ${textSecondary} hover:bg-gray-100 dark:hover:bg-gray-800`}>
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden p-2 rounded-lg transition-colors ${textSecondary} hover:bg-gray-100 dark:hover:bg-gray-800`}
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* Mobile overlay (effet plus sobre) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className={`absolute right-0 top-0 bottom-0 w-72 ${rootBg} border-l ${borderColor} shadow-2xl p-6 flex flex-col`}>
            <div className="flex justify-between items-center mb-8">
              <span className="font-serif text-lg font-bold">Menu</span>
              <button onClick={() => setMobileOpen(false)} className={`p-1.5 rounded ${textSecondary} hover:bg-gray-100 dark:hover:bg-gray-800`}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {sections.slice(1).map(s => (
                <button
                  key={s}
                  onClick={() => scrollToSection(s)}
                  className={`text-left text-sm py-1.5 border-b ${borderColor} ${activeSection === s ? accent : textSecondary} ${hoverAccent} transition-colors`}
                >
                  {nav[lang][s as keyof typeof nav.fr]}
                </button>
              ))}
            </nav>
            <div className="mt-auto pt-6 border-t flex justify-between items-center">
              <div className="flex gap-2">
                <button onClick={() => setLang('fr')} className={`text-xs font-medium ${lang === 'fr' ? accent : textSecondary}`}>FR</button>
                <span className={textSecondary}>/</span>
                <button onClick={() => setLang('en')} className={`text-xs font-medium ${lang === 'en' ? accent : textSecondary}`}>EN</button>
              </div>
              <button onClick={toggleTheme} className={`p-1.5 rounded ${textSecondary} hover:bg-gray-100 dark:hover:bg-gray-800`}>
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main>
        {/* On passe le thème via props pour que les composants s’adaptent */}
        <Hero lang={lang} theme={theme} />
        <Experience lang={lang} theme={theme} />
        <Projects lang={lang} theme={theme} />
        <Skills lang={lang} theme={theme} />
        <Education lang={lang} theme={theme} />
        <Contact lang={lang} theme={theme} />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
