import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Download, FolderCode, Layers, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CountUp } from '@/components/CountUp'
import { Reveal } from '@/components/Reveal'
import { Typewriter } from '@/components/Typewriter'
import { TechMarquee } from '@/components/TechMarquee'
import { useParallax } from '@/hooks/useParallax'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useApp } from '@/context/useApp'
import cvFile from '@/assets/AndriamihajaCV.pdf'
import profilePic from '@/assets/Taratra2.png'

const PROFILE_NAME = import.meta.env.VITE_PROFILE_NAME || 'Andriamihaja Taratra'

export function Home() {
  const { lang } = useApp()
  const [imageLoaded, setImageLoaded] = useState(false)
  const photoRef = useParallax<HTMLDivElement>(0.06)
  const glowRef = useParallax<HTMLDivElement>(-0.04)
  const exploreRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const handleSectionClick = (to: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobile) return
    const id = to.replace('/', '')
    const el = document.getElementById(id)
    if (el) {
      event.preventDefault()
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const t = {
    fr: {
      greeting: 'Bonjour, je suis',
      title: 'Je transforme les idées',
      titleHighlight: 'en applications web performantes',
      roles: ['en applications web performantes', 'en applications mobiles', 'en API robustes', 'en interfaces modernes'],
      description:
        'Développeur passionné avec 5+ projets livrés. Je maîtrise React, TypeScript, Laravel et Node.js pour créer des solutions innovantes et sur mesure.',
      ctaPrimary: 'Découvrir mes projets',
      ctaSecondary: 'Télécharger mon CV',
      projects: 'Projets',
      experience: "Ans d'expérience",
      satisfaction: 'Satisfaction',
      scroll: 'Explorer',
      explore: 'Explorer',
      cards: [
        { title: 'Projets livrés', desc: 'Applications web & mobile déployées.', to: '/projects' },
        { title: 'Stack technique', desc: 'PHP, Node.js, Python, React.', to: '/skills' },
        { title: 'Parlons projet', desc: 'Disponible pour vos missions.', to: '/contact' },
      ],
    },
    en: {
      greeting: "Hello, I'm",
      title: 'Turning ideas',
      titleHighlight: 'into performant web apps',
      roles: ['into performant web apps', 'into mobile apps', 'into robust APIs', 'into modern interfaces'],
      description:
        'Passionate developer with 5+ delivered projects. I master React, TypeScript, Laravel, and Node.js to build innovative, tailor-made solutions.',
      ctaPrimary: 'Discover my projects',
      ctaSecondary: 'Download my CV',
      projects: 'Projects',
      experience: 'Years experience',
      satisfaction: 'Satisfaction',
      scroll: 'Explore',
      explore: 'Explore',
      cards: [
        { title: 'Delivered projects', desc: 'Deployed web & mobile apps.', to: '/projects' },
        { title: 'Tech stack', desc: 'PHP, Node.js, Python, React.', to: '/skills' },
        { title: 'Start a project', desc: 'Available for your missions.', to: '/contact' },
      ],
    },
  } as const

  const textPrimary = 'text-gray-900 dark:text-white'
  const textSecondary = 'text-gray-600 dark:text-gray-300'
  const textTertiary = 'text-gray-500 dark:text-gray-400'
  const accent = 'text-emerald-600 dark:text-emerald-400'
  const cardIcons = [FolderCode, Layers, Sparkles]

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-24 transition-colors duration-300 sm:px-6 lg:px-8">
      <div ref={glowRef} className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-center gap-8 lg:col-span-4 lg:items-start">
            <div className="overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
              <div ref={photoRef} className="h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                {!imageLoaded && (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-emerald-600" />
                  </div>
                )}
                <img
                  src={profilePic}
                  alt={PROFILE_NAME}
                  onLoad={() => setImageLoaded(true)}
                  className={`h-full w-full scale-110 object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
            </div>

            <div className="grid w-full max-w-xs grid-cols-3 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
              {[
                { value: 5, suffix: '+', label: t[lang].projects },
                { value: 2, suffix: '', label: t[lang].experience },
                { value: 100, suffix: '%', label: t[lang].satisfaction },
              ].map((stat, index) => (
                <div key={stat.label} className={`px-3 py-4 text-center ${index > 0 ? 'border-l border-gray-200 dark:border-gray-800' : ''}`}>
                  <p className={`text-xl font-semibold ${textPrimary}`}>
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className={`mt-1 text-[10px] uppercase tracking-wider ${textTertiary}`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:col-span-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
                {t[lang].greeting}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className={`mt-5 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl ${textPrimary}`}>
                {PROFILE_NAME.split(' ')[0]}
              </h1>
              <h2 className={`text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl ${accent}`}>
                {PROFILE_NAME.split(' ')[1]}
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <h3 className={`mt-7 text-lg font-medium sm:text-xl ${textPrimary}`}>
                {t[lang].title}{' '}
                <Typewriter phrases={t[lang].roles} className={accent} />
              </h3>
              <p className={`mt-4 max-w-xl text-base leading-relaxed ${textSecondary}`}>
                {t[lang].description}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="h-auto rounded-lg bg-emerald-600 px-6 py-5 text-sm font-medium text-white transition-colors hover:bg-emerald-700">
                  <Link to="/projects" onClick={handleSectionClick('/projects')}>
                    {t[lang].ctaPrimary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="group h-auto rounded-lg border-gray-300 px-6 py-5 text-sm font-medium text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-900"
                >
                  <a href={cvFile} target="_blank" rel="noreferrer">
                    <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                    {t[lang].ctaSecondary}
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Cartes d'exploration */}
        <div ref={exploreRef} id="explore" className="mt-20 grid gap-4 sm:grid-cols-3 stagger-grid">
          {t[lang].cards.map((card, index) => {
            const Icon = cardIcons[index]
            return (
              <Link
                key={card.to}
                to={card.to}
                onClick={handleSectionClick(card.to)}
                className="group rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 dark:border-gray-800 dark:bg-gray-900/40 dark:hover:border-emerald-700"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
                  <Icon className={`h-5 w-5 ${accent}`} />
                </div>
                <p className={`mt-4 text-sm font-semibold ${textPrimary}`}>{card.title}</p>
                <p className={`mt-1 text-xs ${textTertiary}`}>{card.desc}</p>
                <ArrowRight className={`mt-3 h-4 w-4 ${accent} transition-transform duration-300 group-hover:translate-x-1`} />
              </Link>
            )
          })}
        </div>
      </div>

      <TechMarquee />

      <button
        onClick={() => exploreRef.current?.scrollIntoView({ behavior: 'smooth' })}
        aria-label={t[lang].scroll}
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-emerald-600 dark:text-gray-500 dark:hover:bg-gray-800/60 dark:hover:text-emerald-400"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </button>
    </div>
  )
}
