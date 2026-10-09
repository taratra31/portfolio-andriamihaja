import { useState } from 'react'
import { Cookie } from 'lucide-react'
import { useApp } from '@/context/useApp'

const STORAGE_KEY = 'cookie-consent'

export function CookieBanner() {
  const { lang } = useApp()
  const [visible, setVisible] = useState(() => !localStorage.getItem(STORAGE_KEY))

  const decide = (value: string) => {
    localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
  }

  if (!visible) return null

  const t = {
    fr: {
      title: 'Cookies',
      text: 'Ce site utilise des cookies pour améliorer votre expérience de navigation et mesurer l’audience.',
      accept: 'Accepter',
      decline: 'Refuser',
    },
    en: {
      title: 'Cookies',
      text: 'This site uses cookies to improve your browsing experience and measure traffic.',
      accept: 'Accept',
      decline: 'Decline',
    },
  } as const

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md">
      <div className="rounded-2xl border border-gray-200 bg-white/95 p-5 shadow-2xl backdrop-blur-md transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950/95">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
            <Cookie className="text-emerald-600 dark:text-emerald-400" style={{ height: 18, width: 18 }} />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">{t[lang].title}</p>
            <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{t[lang].text}</p>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => decide('accepted')}
            className="h-auto flex-1 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            {t[lang].accept}
          </button>
          <button
            onClick={() => decide('declined')}
            className="h-auto flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
          >
            {t[lang].decline}
          </button>
        </div>
      </div>
    </div>
  )
}