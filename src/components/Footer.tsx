import { useNavigate } from 'react-router-dom'
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { NAV } from '@/data/nav'
import { useApp } from '@/context/useApp'

const env = import.meta.env

export function Footer() {
  const { lang } = useApp()
  const navigate = useNavigate()

  const profileName = (env.VITE_PROFILE_NAME as string) || 'Andriamihaja Taratra'
  const github = (env.VITE_GITHUB_URL as string) || 'https://github.com/'
  const linkedin = (env.VITE_LINKEDIN_URL as string) || '#'
  const email = (env.VITE_CONTACT_EMAIL as string) || ''
  const phone = (env.VITE_CONTACT_PHONE_DISPLAY as string) || ''
  const location = (env.VITE_CONTACT_LOCATION as string) || 'Antananarivo, Madagascar'

  const go = (item: (typeof NAV)[number]) => {
    if (item.id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(item.id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else navigate(item.to)
  }

  const textTertiary = 'text-gray-400 dark:text-gray-500'
  const accent = 'text-emerald-600 dark:text-emerald-400'
  const borderClass = 'border-gray-200 dark:border-gray-800'

  return (
    <footer className={`relative z-10 border-t ${borderClass} bg-gray-50/60 transition-colors duration-300 dark:bg-gray-950/40`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-3 lg:px-8 lg:py-16">
        <div>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{profileName}</p>
          <p className={`mt-2 max-w-xs text-sm leading-relaxed ${textTertiary}`}>
            {lang === 'fr'
              ? 'Développeur Full Stack — applications web & mobile, API, vision par ordinateur.'
              : 'Full Stack Developer — web & mobile apps, APIs, computer vision.'}
          </p>
        </div>

        <div>
          <p className={`mb-4 text-xs font-semibold uppercase tracking-wider ${textTertiary}`}>
            {lang === 'fr' ? 'Navigation' : 'Navigation'}
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {NAV.map(item => (
              <button
                key={item.to}
                onClick={() => go(item)}
                className={`w-fit text-left text-sm transition-colors ${textTertiary} hover:text-emerald-600 dark:hover:text-emerald-400`}
              >
                {item[lang]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className={`mb-4 text-xs font-semibold uppercase tracking-wider ${textTertiary}`}>
            {lang === 'fr' ? 'Contact' : 'Contact'}
          </p>
          <ul className="space-y-3 text-sm">
            {email && (
              <li className="flex items-center gap-2.5">
                <Mail className={`h-4 w-4 flex-shrink-0 ${accent}`} />
                <a href={`mailto:${email}`} className={`${textTertiary} transition-colors hover:text-emerald-600 dark:hover:text-emerald-400`}>
                  {email}
                </a>
              </li>
            )}
            {phone && (
              <li className="flex items-center gap-2.5">
                <Phone className={`h-4 w-4 flex-shrink-0 ${accent}`} />
                <span className={textTertiary}>{phone}</span>
              </li>
            )}
            <li className="flex items-center gap-2.5">
              <MapPin className={`h-4 w-4 flex-shrink-0 ${accent}`} />
              <span className={textTertiary}>{location}</span>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={`flex h-9 w-9 items-center justify-center rounded-lg border ${borderClass} ${textTertiary} transition-colors hover:border-emerald-300 hover:text-emerald-600 dark:hover:border-emerald-700 dark:hover:text-emerald-400`}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.36-.27-4.84-1.18-4.84-5.25 0-1.16.41-2.11 1.09-2.85-.11-.27-.48-1.36.1-2.83 0 0 .89-.29 2.91 1.09a10.16 10.16 0 0 1 5.3 0c2.02-1.38 2.91-1.09 2.91-1.09.58 1.47.21 2.56.1 2.83.68.74 1.09 1.69 1.09 2.85 0 4.08-2.48 4.98-4.85 5.24.38.33.72.98.72 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={`flex h-9 w-9 items-center justify-center rounded-lg border ${borderClass} ${textTertiary} transition-colors hover:border-emerald-300 hover:text-emerald-600 dark:hover:border-emerald-700 dark:hover:text-emerald-400`}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={`border-t ${borderClass}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <p className={`text-xs ${textTertiary}`}>
            © {new Date().getFullYear()} {profileName}. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label={lang === 'fr' ? 'Retour en haut' : 'Back to top'}
            className={`flex h-9 w-9 items-center justify-center rounded-lg border ${borderClass} ${textTertiary} transition-colors hover:border-emerald-300 hover:text-emerald-600 dark:hover:border-emerald-700 dark:hover:text-emerald-400`}
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}