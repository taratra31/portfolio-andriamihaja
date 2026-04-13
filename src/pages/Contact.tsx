import { useState } from 'react'
import type { FormEvent } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Globe, Link, Phone, MapPin, Send, Sparkles, Clock, Briefcase, CheckCircle2 } from 'lucide-react'

type ContactProps = {
  lang: 'fr' | 'en'
}

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
const PROFILE_NAME = import.meta.env.VITE_PROFILE_NAME || 'Andriamihaja Taratra'
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'andriamtaratra@gmail.com'
const CONTACT_PHONE_DISPLAY = import.meta.env.VITE_CONTACT_PHONE_DISPLAY || '+261 38 05 431 68'
const CONTACT_PHONE_LINK = import.meta.env.VITE_CONTACT_PHONE_LINK || '+261380543168'
const CONTACT_LOCATION = import.meta.env.VITE_CONTACT_LOCATION || 'Antananarivo, Madagascar'
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || 'https://github.com/taratra31'
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/taratra-andriam'

export function Contact({ lang }: ContactProps) {
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
      submit: 'Envoyer',
      sending: 'Envoi...',
      success: '✅ Message envoyé ! Je vous répondrai rapidement.',
      error: '❌ Erreur. Envoyez un email directement.',
      availability: 'Disponibilités',
      availabilityItems: ['Freelance', 'Remote', 'Démarrage rapide'],
      services: 'Services',
      servicesItems: ['Full Stack', 'Mobile (Ionic)', 'API Backend', 'Dashboard'],
      response: 'Réponse sous 24h',
      copyright: 'Tous droits réservés',
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
      submit: 'Send',
      sending: 'Sending...',
      success: '✅ Message sent! I will reply soon.',
      error: '❌ Error. Please email me directly.',
      availability: 'Availability',
      availabilityItems: ['Freelance', 'Remote', 'Fast start'],
      services: 'Services',
      servicesItems: ['Full Stack', 'Mobile (Ionic)', 'API Backend', 'Dashboard'],
      response: 'Reply within 24h',
      copyright: 'All rights reserved',
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
      const subject = lang === 'fr' ? 'Contact Portfolio' : 'Portfolio Contact'
      const body = `${lang === 'fr' ? 'Nom' : 'Name'}: ${name}\n${lang === 'fr' ? 'Email' : 'Email'}: ${email}\n\n${message}`
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

      if (!response.ok) {
        throw new Error('Request failed')
      }

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

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8" style={{
      background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)"
    }}>
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-sky-500/5 blur-3xl"></div>
        
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(99,102,241,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-indigo-400">{t[lang].section}</p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
              {t[lang].title}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400 text-sm">
            {t[lang].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card - Contact Info */}
          <Card className="group relative overflow-hidden border border-indigo-400/20 bg-slate-800/50 backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500" />
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-indigo-400" />
                <CardTitle className="text-white text-lg">{t[lang].infoTitle}</CardTitle>
              </div>
              <CardDescription className="text-slate-400 text-xs">{t[lang].infoDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {/* Availability */}
              <div>
                <p className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-400">
                  <Clock className="h-3 w-3" />
                  {t[lang].availability}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {t[lang].availabilityItems.map((item, i) => (
                    <Badge key={i} className="border-indigo-400/30 bg-indigo-500/20 text-indigo-300 text-[10px] py-0.5">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-purple-400">
                  <Briefcase className="h-3 w-3" />
                  {t[lang].services}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {t[lang].servicesItems.map((item, i) => (
                    <Badge key={i} variant="outline" className="border-purple-400/30 bg-purple-500/20 text-purple-300 text-[10px] py-0.5">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 rounded-lg p-1.5 transition-all duration-300 hover:bg-indigo-500/10">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20">
                    <Mail className="h-3.5 w-3.5 text-indigo-400" />
                  </div>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-300 text-xs transition-colors hover:text-indigo-400">
                    {CONTACT_EMAIL}
                  </a>
                </div>
                
                <div className="flex items-center gap-2 rounded-lg p-1.5 transition-all duration-300 hover:bg-indigo-500/10">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/20">
                    <Phone className="h-3.5 w-3.5 text-purple-400" />
                  </div>
                  <a href={`tel:${CONTACT_PHONE_LINK}`} className="text-slate-300 text-xs transition-colors hover:text-purple-400">
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </div>
                
                <div className="flex items-center gap-2 rounded-lg p-1.5 transition-all duration-300 hover:bg-indigo-500/10">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/20">
                    <MapPin className="h-3.5 w-3.5 text-sky-400" />
                  </div>
                  <span className="text-slate-300 text-xs">{CONTACT_LOCATION}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-1.5 rounded-lg border border-indigo-400/30 bg-slate-800/50 py-2 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-500/20 hover:scale-105"
                >
                  <Globe className="h-3.5 w-3.5 text-slate-300 group-hover:text-indigo-400" />
                  <span className="text-xs font-medium text-slate-300">GitHub</span>
                </a>
                
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-1.5 rounded-lg border border-purple-400/30 bg-slate-800/50 py-2 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:scale-105"
                >
                  <Link className="h-3.5 w-3.5 text-slate-300 group-hover:text-purple-400" />
                  <span className="text-xs font-medium text-slate-300">LinkedIn</span>
                </a>
              </div>

              {/* Response Guarantee */}
              <div className="flex items-center justify-center gap-1.5 rounded-lg border border-indigo-400/20 bg-indigo-500/5 py-2">
                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                <span className="text-[10px] text-slate-400">{t[lang].response}</span>
              </div>
            </CardContent>
          </Card>

          {/* Right Card - Contact Form */}
          <Card className="group relative overflow-hidden border border-indigo-400/20 bg-slate-800/50 backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-indigo-500" />
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">{t[lang].formTitle}</CardTitle>
              <CardDescription className="text-slate-400 text-xs">{t[lang].formDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder={t[lang].name}
                  required
                  className="w-full rounded-lg border border-indigo-400/30 bg-slate-900/50 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder={t[lang].email}
                  required
                  className="w-full rounded-lg border border-indigo-400/30 bg-slate-900/50 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                />
                
                <textarea
                  name="message"
                  placeholder={t[lang].message}
                  rows={4}
                  required
                  className="w-full rounded-lg border border-indigo-400/30 bg-slate-900/50 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 resize-none"
                ></textarea>
                
                <Button 
                  type="submit" 
                  className="w-full gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 text-sm py-2"
                  disabled={isSubmitting}
                >
                  <Send className="h-3.5 w-3.5" />
                  {isSubmitting ? t[lang].sending : t[lang].submit}
                </Button>

                {status === 'success' && (
                  <div className="rounded-lg border border-emerald-400/30 bg-emerald-500/10 p-2 text-center">
                    <p className="text-xs text-emerald-400">{t[lang].success}</p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="rounded-lg border border-rose-400/30 bg-rose-500/10 p-2 text-center">
                    <p className="text-xs text-rose-400">{t[lang].error}</p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-xs text-slate-500">
          <p>© 2026 {PROFILE_NAME} - {t[lang].copyright}</p>
        </div>
      </div>
    </section>
  )
}