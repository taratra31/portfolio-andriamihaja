import { useState } from 'react'
import type { FormEvent } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/PageHeader'
import { useApp } from '@/context/useApp'
import {
  Briefcase,
  CheckCircle2,
  Clock,
  Globe,
  Link,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  Zap,
} from 'lucide-react'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'andriamtaratra5@gmail.com'
const CONTACT_PHONE_DISPLAY = import.meta.env.VITE_CONTACT_PHONE_DISPLAY || '+261 38 05 431 68'
const CONTACT_PHONE_LINK = import.meta.env.VITE_CONTACT_PHONE_LINK || '+261380543168'
const CONTACT_LOCATION = import.meta.env.VITE_CONTACT_LOCATION || 'Antananarivo, Madagascar'
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || 'https://github.com/taratra31'
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/taratra-andriam-333b4438a/'
const PROFILE_NAME = import.meta.env.VITE_PROFILE_NAME || 'Andriamihaja Taratra'

export function Contact() {
  const { lang } = useApp()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const t = {
    fr: {
      section: 'Contact',
      title: 'Parlons de votre projet',
      subtitle: 'Disponible pour des missions full stack, développement web/mobile et automatisation de workflows.',
      infoTitle: 'Me contacter',
      infoDesc: 'Voici comment me joindre',
      formTitle: 'Envoyez-moi un message',
      formDesc: 'Décrivez votre besoin, réponse sous 24h',
      name: 'Nom complet',
      email: 'Adresse email',
      message: 'Votre message',
      submit: 'Envoyer le message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.',
      error: 'Une erreur est survenue. Veuillez réessayer.',
      availability: 'Disponibilités',
      availabilityItems: ['Freelance', 'Remote', 'Démarrage rapide'],
      services: 'Services proposés',
      servicesItems: ['Full Stack', 'Mobile (Ionic)', 'API Backend', 'Dashboard Admin', 'IA/Vision'],
      response: 'Réponse garantie sous 24h',
      copyright: 'Tous droits réservés',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      locationLabel: 'Localisation',
      namePlaceholder: 'votre nom...',
      emailPlaceholder: 'votre addresse email...',
      messagePlaceholder: 'Décrivez votre projet, vos besoins...',
    },
    en: {
      section: 'Contact',
      title: "Let's talk about your project",
      subtitle: 'Available for full stack missions, web/mobile development, and workflow automation.',
      infoTitle: 'Get in touch',
      infoDesc: "Here's how to reach me",
      formTitle: 'Send me a message',
      formDesc: 'Describe your needs, reply within 24h',
      name: 'Full name',
      email: 'Email address',
      message: 'Your message',
      submit: 'Send message',
      sending: 'Sending...',
      success: 'Message sent successfully! I will get back to you shortly.',
      error: 'An error occurred. Please try again.',
      availability: 'Availability',
      availabilityItems: ['Freelance', 'Remote', 'Fast start'],
      services: 'Services offered',
      servicesItems: ['Full Stack', 'Mobile (Ionic)', 'API Backend', 'Admin Dashboard', 'AI/Vision'],
      response: 'Guaranteed reply within 24h',
      copyright: 'All rights reserved',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      namePlaceholder: 'Your name...',
      emailPlaceholder: 'Your email address...',
      messagePlaceholder: 'Describe your project, your needs...',
    },
  } as const

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    const isValidEndpoint =
      FORMSPREE_ENDPOINT &&
      FORMSPREE_ENDPOINT.includes('formspree.io/f/') &&
      !FORMSPREE_ENDPOINT.includes('your-form-id')

    const sendViaEmail = () => {
      const subject = lang === 'fr' ? 'Contact Portfolio - ' + name : 'Portfolio Contact - ' + name
      const body = `${lang === 'fr' ? 'Nom' : 'Name'}: ${name}\n${lang === 'fr' ? 'Email' : 'Email'}: ${email}\n\n${lang === 'fr' ? 'Message' : 'Message'}:\n${message}`
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    if (!isValidEndpoint) {
      sendViaEmail()
      form.reset()
      setStatus('success')
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    try {
      setIsSubmitting(true)
      setStatus('idle')
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Request failed')
      form.reset()
      setStatus('success')
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      sendViaEmail()
      form.reset()
      setStatus('success')
      setTimeout(() => setStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const textPrimary = 'text-gray-900 dark:text-white'
  const textSecondary = 'text-gray-600 dark:text-gray-300'
  const textTertiary = 'text-gray-500 dark:text-gray-400'
  const borderClass = 'border-gray-200 dark:border-gray-800'
  const subtleBg = 'bg-gray-50 dark:bg-gray-900/50'
  const accent = 'text-emerald-600 dark:text-emerald-400'
  const accentBg = 'bg-emerald-50 dark:bg-emerald-900/20'
  const accentBorder = 'border-emerald-200 dark:border-emerald-800'
  const inputClass = `w-full rounded-lg border ${borderClass} bg-white px-4 py-3 text-sm ${textPrimary} placeholder:text-gray-400 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:bg-gray-900 dark:placeholder:text-gray-500`

  const contactRows = [
    { icon: Mail, label: t[lang].emailLabel, value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { icon: Phone, label: t[lang].phoneLabel, value: CONTACT_PHONE_DISPLAY, href: `tel:${CONTACT_PHONE_LINK}` },
    { icon: MapPin, label: t[lang].locationLabel, value: CONTACT_LOCATION, href: undefined },
  ]

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <PageHeader eyebrow={t[lang].section} title={t[lang].title} subtitle={t[lang].subtitle} />

        <div className="grid gap-8 md:grid-cols-5 stagger-grid">
          <div className={`rounded-xl border ${borderClass} bg-white p-6 transition-colors duration-300 md:col-span-2 dark:bg-gray-900/40`}>
            <div className="flex items-center gap-3">
              <div className={`rounded-lg p-2 ${accentBg}`}>
                <User className={`h-4 w-4 ${accent}`} />
              </div>
              <div>
                <p className={`text-base font-semibold ${textPrimary}`}>{t[lang].infoTitle}</p>
                <p className={`mt-0.5 text-xs ${textTertiary}`}>{t[lang].infoDesc}</p>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <p className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${textTertiary}`}>
                  <Clock className={`h-3.5 w-3.5 ${accent}`} />
                  {t[lang].availability}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t[lang].availabilityItems.map(item => (
                    <Badge key={item} className={`rounded-md border ${borderClass} ${subtleBg} px-2.5 py-1 text-xs font-medium ${textSecondary}`}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${textTertiary}`}>
                  <Briefcase className={`h-3.5 w-3.5 ${accent}`} />
                  {t[lang].services}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t[lang].servicesItems.map(item => (
                    <Badge key={item} className={`rounded-md border ${accentBorder} ${accentBg} px-2.5 py-1 text-xs font-medium ${accent}`}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-1 pt-2">
                {contactRows.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3 rounded-lg p-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${accentBg}`}>
                      <Icon className={`h-4 w-4 ${accent}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`mb-0.5 text-[10px] uppercase tracking-wider ${textTertiary}`}>{label}</p>
                      {href ? (
                        <a href={href} className={`block truncate text-sm font-medium ${textSecondary} transition-colors hover:text-emerald-600 dark:hover:text-emerald-400`}>
                          {value}
                        </a>
                      ) : (
                        <span className={`text-sm font-medium ${textSecondary}`}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { href: GITHUB_URL, label: 'GitHub', icon: Globe },
                  { href: LINKEDIN_URL, label: 'LinkedIn', icon: Link },
                ].map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 rounded-lg border ${borderClass} ${subtleBg} px-4 py-2.5 transition-colors hover:border-emerald-300 dark:hover:border-emerald-700`}
                  >
                    <Icon className={`h-4 w-4 ${accent}`} />
                    <span className={`text-sm font-medium ${textSecondary}`}>{label}</span>
                  </a>
                ))}
              </div>

              <div className={`flex items-center justify-center gap-2 rounded-lg border ${accentBorder} ${accentBg} px-4 py-2.5`}>
                <CheckCircle2 className={`h-4 w-4 ${accent}`} />
                <span className={`text-xs font-medium ${accent}`}>{t[lang].response}</span>
              </div>
            </div>
          </div>

          <div className={`rounded-xl border ${borderClass} bg-white p-6 transition-colors duration-300 md:col-span-3 dark:bg-gray-900/40`}>
            <div className="flex items-center gap-3">
              <div className={`rounded-lg p-2 ${accentBg}`}>
                <Send className={`h-4 w-4 ${accent}`} />
              </div>
              <div>
                <p className={`text-base font-semibold ${textPrimary}`}>{t[lang].formTitle}</p>
                <p className={`mt-0.5 text-xs ${textTertiary}`}>{t[lang].formDesc}</p>
              </div>
            </div>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <label className={`ml-1 text-xs font-semibold ${textSecondary}`}>
                  {t[lang].name} <span className="text-emerald-500">*</span>
                </label>
                <input type="text" name="name" placeholder={t[lang].namePlaceholder} required className={inputClass} />
              </div>

              <div className="space-y-1.5">
                <label className={`ml-1 text-xs font-semibold ${textSecondary}`}>
                  {t[lang].email} <span className="text-emerald-500">*</span>
                </label>
                <input type="email" name="email" placeholder={t[lang].emailPlaceholder} required className={inputClass} />
              </div>

              <div className="space-y-1.5">
                <label className={`ml-1 text-xs font-semibold ${textSecondary}`}>
                  {t[lang].message} <span className="text-emerald-500">*</span>
                </label>
                <textarea name="message" placeholder={t[lang].messagePlaceholder} rows={5} required className={`${inputClass} resize-none`}></textarea>
              </div>

              <Button
                type="submit"
                className="w-full rounded-lg bg-emerald-600 py-5 text-sm font-medium text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isSubmitting}
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      {t[lang].sending}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t[lang].submit}
                    </>
                  )}
                </span>
              </Button>

              {status === 'success' && (
                <div className={`rounded-lg border ${accentBorder} ${accentBg} p-4`}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className={`mt-0.5 h-5 w-5 flex-shrink-0 ${accent}`} />
                    <p className={`text-sm font-medium ${accent}`}>{t[lang].success}</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
                  <div className="flex items-start gap-3">
                    <Zap className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                    <p className="text-sm font-medium text-red-600 dark:text-red-400">{t[lang].error}</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        <footer className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className={`flex items-center gap-2 text-sm ${textTertiary}`}>
              <span>© 2026</span>
              <span className={`font-semibold ${accent}`}>{PROFILE_NAME}</span>
              <span className="hidden text-gray-300 sm:inline dark:text-gray-600">-</span>
              <span className="hidden sm:inline">{t[lang].copyright}</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
