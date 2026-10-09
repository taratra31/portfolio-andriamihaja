import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useApp } from '@/context/useApp'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { PageTransition, ScrollToTop } from '@/components/PageTransition'
import { CookieBanner } from '@/components/CookieBanner'

const NAV = [
  { to: '/', fr: 'Accueil', en: 'Home' },
  { to: '/experience', fr: 'Expérience', en: 'Experience' },
  { to: '/projects', fr: 'Projets', en: 'Projects' },
  { to: '/skills', fr: 'Compétences', en: 'Skills' },
  { to: '/education', fr: 'Formation', en: 'Education' },
  { to: '/contact', fr: 'Contact', en: 'Contact' },
] as const

export function RootLayout() {
  const { lang, setLang, isDark, toggleTheme } = useApp()
  const [mobileOpen, setMobileOpen] = useState(false)

  useScrollReveal()

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  const accent = 'text-emerald-600 dark:text-emerald-400'
  const textSecondary = 'text-gray-500 dark:text-gray-400'
  const borderColor = 'border-gray-200 dark:border-gray-800'

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm transition-colors ${
      isActive
        ? 'text-emerald-600 dark:text-emerald-400 font-medium nav-active'
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
    }`

  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-900 antialiased transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="animate-blob absolute -top-40 -right-24 h-[36rem] w-[36rem] rounded-full bg-emerald-500/5 blur-3xl blob-delay-neg-6 dark:bg-emerald-500/10" />
        <div className="animate-blob-slow absolute top-1/3 -left-24 h-[28rem] w-[28rem] rounded-full bg-emerald-400/5 blur-3xl dark:bg-emerald-400/5" />
        <div className="animate-blob absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-teal-400/5 blur-3xl blob-delay-neg-12 dark:bg-teal-400/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      </div>

      <ScrollToTop />

      <header className={`fixed top-0 z-40 w-full border-b ${borderColor} bg-white/90 backdrop-blur-md transition-colors duration-300 dark:bg-gray-950/90`}>
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div aria-hidden className="h-9" />

          <div className="hidden items-center gap-8 md:flex">
            {NAV.map(item => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navClass}>
                {item[lang]}
              </NavLink>
            ))}
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-800" />
            <div className="flex items-center gap-2">
              <button onClick={() => setLang('fr')} className={`text-xs font-medium ${lang === 'fr' ? accent : textSecondary}`}>FR</button>
              <span className={textSecondary}>|</span>
              <button onClick={() => setLang('en')} className={`text-xs font-medium ${lang === 'en' ? accent : textSecondary}`}>EN</button>
            </div>
            <button onClick={toggleTheme} aria-label="Toggle theme" className={`rounded-lg p-1.5 transition-colors ${textSecondary} hover:bg-gray-100 dark:hover:bg-gray-800`}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className={`rounded-lg p-2 transition-colors md:hidden ${textSecondary} hover:bg-gray-100 dark:hover:bg-gray-800`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/40" onClick={() => setMobileOpen(false)} />
          <aside className="absolute right-0 top-0 bottom-0 flex w-72 flex-col border-l border-gray-200 bg-white p-6 shadow-2xl dark:border-gray-800 dark:bg-gray-950">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className={`rounded p-1.5 ${textSecondary} hover:bg-gray-100 dark:hover:bg-gray-800`}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {NAV.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `border-b py-1.5 text-left text-sm transition-colors ${borderColor} ${
                      isActive ? accent : `${textSecondary} hover:text-gray-900 dark:hover:text-gray-100`
                    }`
                  }
                >
                  {item[lang]}
                </NavLink>
              ))}
            </nav>
            <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-6 dark:border-gray-800">
              <div className="flex gap-2">
                <button onClick={() => setLang('fr')} className={`text-xs font-medium ${lang === 'fr' ? accent : textSecondary}`}>FR</button>
                <span className={textSecondary}>/</span>
                <button onClick={() => setLang('en')} className={`text-xs font-medium ${lang === 'en' ? accent : textSecondary}`}>EN</button>
              </div>
              <button onClick={toggleTheme} aria-label="Toggle theme" className={`rounded p-1.5 ${textSecondary} hover:bg-gray-100 dark:hover:bg-gray-800`}>
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
          </aside>
        </div>
      )}

      <main className="relative z-10 pt-16">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      <CookieBanner />
    </div>
  )
}
