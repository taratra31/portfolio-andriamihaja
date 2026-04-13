import { useEffect, useMemo, useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { Hero } from './pages/Hero'
import { Experience } from './pages/Experience'
import { Projects } from './pages/Projects'
import { Skills } from './pages/Skills'
import { Education } from './pages/Education'
import { Contact } from './pages/Contact'

type Lang = 'fr' | 'en'

const DISPLAY_NAME = 'Andriamihaja' // Anarana fohy ho an'ny logo

function App() {
  const [lang, setLang] = useState<Lang>('fr')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  const sections = useMemo(
    () => ['hero', 'experience', 'projects', 'skills', 'education', 'contact'],
    [],
  )

  const nav = {
    fr: { 
      experience: 'Expérience', 
      projects: 'Projets', 
      skills: 'Compétences', 
      education: 'Formation', 
      contact: 'Contact' 
    },
    en: { 
      experience: 'Experience', 
      projects: 'Projects', 
      skills: 'Skills', 
      education: 'Education', 
      contact: 'Contact' 
    },
  } as const

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, progress)))

      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setScrolled(scrollTop > heroBottom - 100)
      }

      const viewportMark = scrollTop + window.innerHeight * 0.35
      let current = 'hero'

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= viewportMark) {
          current = id
        }
      }

      setActiveSection(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sections])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setMobileOpen(false)
  }

  const navItemClass = (id: string) =>
    `relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
      activeSection === id
        ? 'text-indigo-400'
        : 'text-slate-400 hover:text-indigo-300'
    }`

  const navIndicatorClass = (id: string) =>
    activeSection === id
      ? 'absolute -bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full'
      : 'hidden'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header 
        className={`fixed top-0 z-40 w-full transition-all duration-500 ${
          scrolled 
            ? 'bg-slate-900/95 backdrop-blur-xl border-b border-indigo-500/20 shadow-2xl shadow-indigo-900/20' 
            : 'bg-transparent'
        }`}
      >
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-indigo-500/20">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo - Andriamihaja */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('hero')
            }}
            className="group flex items-center gap-2"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600">
                <Code2 className="h-4 w-4 text-white" />
              </div>
            </div>
            <span className="font-serif text-base font-semibold tracking-wide bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {DISPLAY_NAME}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {sections.slice(1).map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={navItemClass(section)}
              >
                {nav[lang][section as keyof typeof nav.fr]}
                <span className={navIndicatorClass(section)} />
              </button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 rounded-full border border-indigo-500/30 bg-slate-800/50 backdrop-blur-sm p-1">
              <button
                type="button"
                onClick={() => setLang('fr')}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                  lang === 'fr' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-indigo-300'
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                  lang === 'en' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-indigo-300'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-lg border border-indigo-500/30 bg-slate-800/50 p-2 text-slate-300 transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-400 md:hidden"
              aria-label="Open navigation"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* CTA Button Desktop */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {lang === 'fr' ? 'Me contacter' : 'Contact me'}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md transition-all duration-300 md:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
      />
      
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-80 border-l border-indigo-500/20 bg-slate-900/95 backdrop-blur-xl shadow-2xl transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-indigo-500/20 p-5">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600">
              <Code2 className="h-4 w-4 text-white" />
            </div>
            <p className="text-sm font-semibold text-white">Menu</p>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-2 text-slate-400 transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-400"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-2 p-5">
          {sections.slice(1).map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                activeSection === section
                  ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-indigo-400 border border-indigo-500/30'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-indigo-300'
              }`}
            >
              {nav[lang][section as keyof typeof nav.fr]}
            </button>
          ))}
          
          <div className="mt-4 pt-4 border-t border-indigo-500/20">
            <button
              onClick={() => {
                scrollToSection('contact')
                setMobileOpen(false)
              }}
              className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
            >
              {lang === 'fr' ? 'Me contacter' : 'Contact me'}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main>
        <Hero lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Skills lang={lang} />
        <Education lang={lang} />
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      {/* <footer className="border-t border-indigo-500/20 bg-slate-900/50 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Andriamihaja. 
            {lang === 'fr' ? ' Tous droits réservés.' : ' All rights reserved.'}
          </p>
        </div>
      </footer> */}
    </div>
  )
}

export default App