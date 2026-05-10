import { useState } from 'react'
import type { FormEvent } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Mail, 
  Globe, 
  Link, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  Briefcase, 
  CheckCircle2,
  User,
  Zap
} from 'lucide-react'

type ContactProps = {
  lang: 'fr' | 'en'
  theme?: 'light' | 'dark'
}

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
const PROFILE_NAME = import.meta.env.VITE_PROFILE_NAME || 'Andriamihaja Taratra'
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'andriamtaratra5@gmail.com'
const CONTACT_PHONE_DISPLAY = import.meta.env.VITE_CONTACT_PHONE_DISPLAY || '+261 38 05 431 68'
const CONTACT_PHONE_LINK = import.meta.env.VITE_CONTACT_PHONE_LINK || '+261380543168'
const CONTACT_LOCATION = import.meta.env.VITE_CONTACT_LOCATION || 'Antananarivo, Madagascar'
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || 'https://github.com/taratra31'
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/taratra-andriam'

export function Contact({ lang, theme = 'light' }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const isDark = theme === 'dark'

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
      success: '✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.',
      error: '❌ Une erreur est survenue. Veuillez réessayer.',
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
      success: '✅ Message sent successfully! I will get back to you shortly.',
      error: '❌ An error occurred. Please try again.',
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

    const isValidEndpoint = FORMSPREE_ENDPOINT && 
      FORMSPREE_ENDPOINT.includes('formspree.io/f/') && 
      !FORMSPREE_ENDPOINT.includes('your-form-id')

    const sendViaEmail = () => {
      const subject = lang === 'fr' ? 'Contact Portfolio - ' + name : 'Portfolio Contact - ' + name
      const body = `${lang === 'fr' ? 'Nom' : 'Name'}: ${name}\n${lang === 'fr' ? 'Email' : 'Email'}: ${email}\n\n${lang === 'fr' ? 'Message' : 'Message'}:\n${message}`
      const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
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
        headers: {
          Accept: 'application/json',
        },
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

  // Classes du thème
  const bgClass = "bg-white dark:bg-gray-950"
  const textPrimary = "text-gray-900 dark:text-gray-100"
  const textSecondary = "text-gray-600 dark:text-gray-300"
  const textTertiary = "text-gray-400 dark:text-gray-500"
  const borderClass = "border border-gray-200 dark:border-gray-800"
  const subtleBg = "bg-gray-50 dark:bg-gray-900/50"
  const accent = "text-emerald-600 dark:text-emerald-400"
  const accentBg = "bg-emerald-50 dark:bg-emerald-900/20"
  const accentBorder = "border-emerald-200 dark:border-emerald-800"
  const cardBg = "bg-white dark:bg-gray-900"
  const cardBorder = "border-gray-200 dark:border-gray-800"
  const cardHover = "hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-xl hover:shadow-emerald-500/5"
  const inputClass = `w-full rounded-xl border-2 ${borderClass} ${subtleBg} px-4 py-3 text-sm ${textPrimary} placeholder:${textTertiary} focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 dark:focus:border-emerald-600 transition-all duration-300`

  return (
    <section id="contact" className={`relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 ${bgClass} transition-colors duration-300`}>
      
      {/* Fond subtil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-400/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-emerald-600/5 blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, #10b981 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className={`inline-flex items-center gap-2 rounded-full border-2 ${accentBorder} ${accentBg} px-4 py-2 mb-6`}>
            <Mail className={`h-4 w-4 ${accent}`} />
            <span className={`text-xs font-bold uppercase tracking-[0.3em] ${accent}`}>
              {t[lang].section}
            </span>
          </div>
          
          <h2 className={`mb-4 text-4xl sm:text-5xl font-black tracking-tight ${textPrimary}`}>
            {t[lang].title}
          </h2>
          <p className={`mx-auto max-w-2xl text-base ${textSecondary} font-light`}>
            {t[lang].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left Card - Contact Info */}
          <Card className={`group/card md:col-span-2 relative overflow-hidden rounded-2xl border-2 ${cardBorder} ${cardBg} transition-all duration-300 ${cardHover}`}>
            {/* Barre supérieure */}
            <div className="absolute left-0 top-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-60 group-hover/card:opacity-100 transition-all duration-300 group-hover/card:h-2" />
            
            <CardHeader className="pb-3 pt-5">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${accentBg} border-2 ${accentBorder}`}>
                  <User className={`h-5 w-5 ${accent}`} />
                </div>
                <div>
                  <CardTitle className={`text-xl font-bold ${textPrimary}`}>
                    {t[lang].infoTitle}
                  </CardTitle>
                  <CardDescription className={`text-xs mt-0.5 ${textTertiary}`}>
                    {t[lang].infoDesc}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Availability */}
              <div>
                <p className={`mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] ${textTertiary}`}>
                  <Clock className={`h-3.5 w-3.5 ${accent}`} />
                  {t[lang].availability}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t[lang].availabilityItems.map((item, i) => (
                    <Badge 
                      key={i} 
                      className={`rounded-lg border-2 ${borderClass} ${subtleBg} text-xs py-1 px-3 font-medium transition-all duration-300 hover:border-emerald-200 dark:hover:border-emerald-800 hover:scale-105 ${textSecondary}`}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <p className={`mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] ${textTertiary}`}>
                  <Briefcase className={`h-3.5 w-3.5 ${accent}`} />
                  {t[lang].services}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t[lang].servicesItems.map((item, i) => (
                    <Badge 
                      key={i} 
                      className={`rounded-lg border-2 ${accentBorder} ${accentBg} ${accent} text-xs py-1 px-3 font-medium transition-all duration-300 hover:scale-105`}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 pt-2">
                {/* Email */}
                <div className={`group/item flex items-center gap-3 rounded-xl p-3 transition-all duration-300 hover:${accentBg} hover:border-2 hover:${accentBorder}`}>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentBg} border-2 ${accentBorder} transition-all duration-300 group-hover/item:scale-110`}>
                    <Mail className={`h-4 w-4 ${accent}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">{t[lang].emailLabel}</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className={`text-sm font-medium truncate block ${textSecondary} hover:${accent} transition-colors`}>
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className={`group/item flex items-center gap-3 rounded-xl p-3 transition-all duration-300 hover:${accentBg} hover:border-2 hover:${accentBorder}`}>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentBg} border-2 ${accentBorder} transition-all duration-300 group-hover/item:scale-110`}>
                    <Phone className={`h-4 w-4 ${accent}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">{t[lang].phoneLabel}</p>
                    <a href={`tel:${CONTACT_PHONE_LINK}`} className={`text-sm font-mono ${textSecondary} hover:${accent} transition-colors`}>
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className={`group/item flex items-center gap-3 rounded-xl p-3 transition-all duration-300 hover:${accentBg} hover:border-2 hover:${accentBorder}`}>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentBg} border-2 ${accentBorder} transition-all duration-300 group-hover/item:scale-110`}>
                    <MapPin className={`h-4 w-4 ${accent}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">{t[lang].locationLabel}</p>
                    <span className={`text-sm ${textSecondary}`}>{CONTACT_LOCATION}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn flex items-center justify-center gap-2 rounded-xl border-2 ${borderClass} ${subtleBg} px-4 py-3 transition-all duration-300 hover:border-emerald-200 dark:hover:border-emerald-800 hover:scale-105 hover:shadow-md`}
                >
                  <Globe className={`h-4 w-4 ${accent} transition-transform duration-300 group-hover/btn:scale-110`} />
                  <span className={`text-sm font-semibold ${textSecondary} group-hover/btn:${accent} transition-colors`}>GitHub</span>
                </a>
                
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn flex items-center justify-center gap-2 rounded-xl border-2 ${borderClass} ${subtleBg} px-4 py-3 transition-all duration-300 hover:border-emerald-200 dark:hover:border-emerald-800 hover:scale-105 hover:shadow-md`}
                >
                  <Link className={`h-4 w-4 ${accent} transition-transform duration-300 group-hover/btn:scale-110`} />
                  <span className={`text-sm font-semibold ${textSecondary} group-hover/btn:${accent} transition-colors`}>LinkedIn</span>
                </a>
              </div>

              {/* Response Guarantee */}
              <div className={`flex items-center justify-center gap-2 rounded-xl border-2 ${accentBorder} ${accentBg} py-3 px-4`}>
                <CheckCircle2 className={`h-4 w-4 ${accent}`} />
                <span className={`text-xs font-bold ${accent}`}>{t[lang].response}</span>
              </div>
            </CardContent>
          </Card>

          {/* Right Card - Contact Form */}
          <Card className={`group/card md:col-span-3 relative overflow-hidden rounded-2xl border-2 ${cardBorder} ${cardBg} transition-all duration-300 ${cardHover}`}>
            {/* Barre supérieure */}
            <div className="absolute left-0 top-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-60 group-hover/card:opacity-100 transition-all duration-300 group-hover/card:h-2" />
            
            <CardHeader className="pb-3 pt-5">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${accentBg} border-2 ${accentBorder}`}>
                  <Send className={`h-5 w-5 ${accent}`} />
                </div>
                <div>
                  <CardTitle className={`text-xl font-bold ${textPrimary}`}>
                    {t[lang].formTitle}
                  </CardTitle>
                  <CardDescription className={`text-xs mt-0.5 ${textTertiary}`}>
                    {t[lang].formDesc}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className={`text-xs font-semibold ml-1 ${textSecondary}`}>
                    {t[lang].name} <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder={t[lang].namePlaceholder}
                    required
                    className={inputClass}
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className={`text-xs font-semibold ml-1 ${textSecondary}`}>
                    {t[lang].email} <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t[lang].emailPlaceholder}
                    required
                    className={inputClass}
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className={`text-xs font-semibold ml-1 ${textSecondary}`}>
                    {t[lang].message} <span className="text-emerald-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder={t[lang].messagePlaceholder}
                    rows={5}
                    required
                    className={`${inputClass} resize-none`}
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="group/btn w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 py-6 text-white font-bold uppercase tracking-wider text-sm shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  disabled={isSubmitting}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        {t[lang].sending}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
                        {t[lang].submit}
                      </>
                    )}
                  </span>
                </Button>

                {status === 'success' && (
                  <div className={`rounded-xl border-2 ${accentBorder} ${accentBg} p-4`}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className={`h-5 w-5 ${accent} flex-shrink-0 mt-0.5`} />
                      <p className={`text-sm font-medium ${accent}`}>{t[lang].success}</p>
                    </div>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="rounded-xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-red-600 dark:text-red-400">{t[lang].error}</p>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className={`flex items-center gap-2 text-sm ${textTertiary}`}>
              <span>© 2026</span>
              <span className={`font-bold ${accent}`}>
                {PROFILE_NAME}
              </span>
              <span className="hidden sm:inline text-gray-300 dark:text-gray-600">-</span>
              <span className="hidden sm:inline">{t[lang].copyright}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}