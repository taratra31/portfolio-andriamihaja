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
  Sparkles, 
  Clock, 
  Briefcase, 
  CheckCircle2,
  ArrowUpRight,
  User,
  Heart,
  Code2,
  Zap
} from 'lucide-react'

type ContactProps = {
  lang: 'fr' | 'en'
}

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
const PROFILE_NAME = import.meta.env.VITE_PROFILE_NAME || 'Andriamihaja Taratra'
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'andriamtaratra5@gmail.com'
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
      madeWith: 'Fait avec',
      by: 'par',
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
      madeWith: 'Made with',
      by: 'by',
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
      background: "linear-gradient(135deg, #0b0f19 0%, #131127 30%, #1a1030 60%, #0b0f19 100%)"
    }}>
      {/* Enhanced Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-rose-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-emerald-600/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-rose-500/10 blur-3xl"></div>
        
        {/* Particles subtiles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 h-1 w-1 rounded-full bg-cyan-400 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 h-1 w-1 rounded-full bg-rose-400 animate-pulse delay-700"></div>
          <div className="absolute top-2/3 right-1/3 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse delay-500"></div>
          <div className="absolute top-1/5 right-1/5 h-1 w-1 rounded-full bg-amber-400 animate-pulse delay-200"></div>
        </div>
        
        {/* Grid pattern amélioré */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 80 0 L 0 0 0 80' fill='none' stroke='url(%23gradient)' stroke-width='0.8'/%3E%3C/pattern%3E%3ClinearGradient id='gradient' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='rgba(99,102,241,0.3)'/%3E%3Cstop offset='100%25' stop-color='rgba(236,72,153,0.3)'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header - Style amélioré */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-indigo-500/40 bg-gradient-to-r from-indigo-950/80 to-purple-950/80 backdrop-blur-md px-5 py-2.5 shadow-lg shadow-indigo-500/10 mb-6">
            <Sparkles className="h-4 w-4 text-indigo-400 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent uppercase tracking-[0.2em]">
              {t[lang].section}
            </span>
          </div>
          
          <h2 className="mb-4 font-extrabold text-4xl leading-tight text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t[lang].title}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400/90 text-base font-light">
            {t[lang].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left Card - Contact Info (2 colonnes sur 5) */}
          <Card className="group/card md:col-span-2 relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md shadow-xl transition-all duration-500 hover:border-indigo-500/50 hover:from-slate-800/90 hover:to-indigo-950/80 hover:scale-[1.01] hover:shadow-2xl hover:shadow-indigo-500/10">
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            {/* Barre latérale */}
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-l-2xl opacity-60 group-hover/card:opacity-100 transition-all duration-500 group-hover/card:w-2" />
            
            <CardHeader className="pb-3 relative">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20">
                  <User className="h-5 w-5 text-indigo-300" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-white group-hover/card:text-indigo-200 transition-colors duration-300">
                    {t[lang].infoTitle}
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-xs mt-0.5">
                    {t[lang].infoDesc}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6 relative">
              {/* Availability */}
              <div>
                <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-indigo-400/80">
                  <Clock className="h-3.5 w-3.5" />
                  {t[lang].availability}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t[lang].availabilityItems.map((item, i) => (
                    <Badge 
                      key={i} 
                      className="rounded-xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/50 to-purple-950/50 backdrop-blur-sm text-indigo-300 text-xs py-1 px-3 font-medium transition-all duration-300 hover:scale-105"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-purple-400/80">
                  <Briefcase className="h-3.5 w-3.5" />
                  {t[lang].services}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t[lang].servicesItems.map((item, i) => (
                    <Badge 
                      key={i} 
                      className="rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-950/50 to-indigo-950/50 backdrop-blur-sm text-purple-300 text-xs py-1 px-3 font-medium transition-all duration-300 hover:scale-105"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 pt-2">
                <div className="group/item flex items-center gap-3 rounded-xl p-2.5 transition-all duration-300 hover:bg-indigo-500/5 hover:border hover:border-indigo-500/20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 border border-indigo-500/20 group-hover/item:from-indigo-500/30 group-hover/item:to-indigo-600/30 transition-all duration-300">
                    <Mail className="h-4 w-4 text-indigo-400 group-hover/item:text-indigo-300 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Email</p>
                    <a 
                      href={`mailto:${CONTACT_EMAIL}`} 
                      className="text-slate-300 text-sm transition-colors hover:text-indigo-400 truncate block"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                  <ArrowUpRight className="h-3 w-3 text-slate-600 group-hover/item:text-indigo-400 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all duration-300 opacity-0 group-hover/item:opacity-100" />
                </div>
                
                <div className="group/item flex items-center gap-3 rounded-xl p-2.5 transition-all duration-300 hover:bg-purple-500/5 hover:border hover:border-purple-500/20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/20 group-hover/item:from-purple-500/30 group-hover/item:to-purple-600/30 transition-all duration-300">
                    <Phone className="h-4 w-4 text-purple-400 group-hover/item:text-purple-300 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Téléphone</p>
                    <a 
                      href={`tel:${CONTACT_PHONE_LINK}`} 
                      className="text-slate-300 text-sm transition-colors hover:text-purple-400"
                    >
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </div>
                  <ArrowUpRight className="h-3 w-3 text-slate-600 group-hover/item:text-purple-400 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all duration-300 opacity-0 group-hover/item:opacity-100" />
                </div>
                
                <div className="group/item flex items-center gap-3 rounded-xl p-2.5 transition-all duration-300 hover:bg-cyan-500/5 hover:border hover:border-cyan-500/20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/20 group-hover/item:from-cyan-500/30 group-hover/item:to-cyan-600/30 transition-all duration-300">
                    <MapPin className="h-4 w-4 text-cyan-400 group-hover/item:text-cyan-300 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Localisation</p>
                    <span className="text-slate-300 text-sm">{CONTACT_LOCATION}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative overflow-hidden flex items-center justify-center gap-2 rounded-xl border border-indigo-500/30 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md px-4 py-3 transition-all duration-500 hover:border-indigo-400/60 hover:from-indigo-950/80 hover:to-purple-950/80 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  <Globe className="relative h-4 w-4 text-slate-300 group-hover/btn:text-indigo-400 transition-colors duration-300" />
                  <span className="relative text-sm font-semibold text-slate-300 group-hover/btn:text-white transition-colors">GitHub</span>
                  <ArrowUpRight className="relative h-3 w-3 text-slate-500 group-hover/btn:text-indigo-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />
                </a>
                
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative overflow-hidden flex items-center justify-center gap-2 rounded-xl border border-purple-500/30 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md px-4 py-3 transition-all duration-500 hover:border-purple-400/60 hover:from-purple-950/80 hover:to-indigo-950/80 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  <Link className="relative h-4 w-4 text-slate-300 group-hover/btn:text-purple-400 transition-colors duration-300" />
                  <span className="relative text-sm font-semibold text-slate-300 group-hover/btn:text-white transition-colors">LinkedIn</span>
                  <ArrowUpRight className="relative h-3 w-3 text-slate-500 group-hover/btn:text-purple-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />
                </a>
              </div>

              {/* Response Guarantee */}
              <div className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-gradient-to-r from-emerald-950/30 to-teal-950/30 backdrop-blur-sm py-2.5 px-4">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-medium text-emerald-300">{t[lang].response}</span>
              </div>
            </CardContent>
          </Card>

          {/* Right Card - Contact Form (3 colonnes sur 5) */}
          <Card className="group/card md:col-span-3 relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md shadow-xl transition-all duration-500 hover:border-indigo-500/50 hover:from-slate-800/90 hover:to-indigo-950/80 hover:scale-[1.01] hover:shadow-2xl hover:shadow-indigo-500/10">
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            {/* Barre latérale */}
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-l-2xl opacity-60 group-hover/card:opacity-100 transition-all duration-500 group-hover/card:w-2" />
            
            <CardHeader className="pb-3 relative">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/20">
                  <Send className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-white group-hover/card:text-indigo-200 transition-colors duration-300">
                    {t[lang].formTitle}
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-xs mt-0.5">
                    {t[lang].formDesc}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="relative">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400 ml-1">
                    {t[lang].name} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder={lang === 'fr' ? 'Ex: Jean Dupont' : 'Ex: John Doe'}
                    required
                    className="w-full rounded-xl border border-indigo-500/30 bg-slate-900/50 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300 hover:border-indigo-500/50"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400 ml-1">
                    {t[lang].email} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={lang === 'fr' ? 'Ex: jean@email.com' : 'Ex: john@email.com'}
                    required
                    className="w-full rounded-xl border border-indigo-500/30 bg-slate-900/50 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300 hover:border-indigo-500/50"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400 ml-1">
                    {t[lang].message} <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder={lang === 'fr' ? 'Décrivez votre projet, vos besoins...' : 'Describe your project, your needs...'}
                    rows={5}
                    required
                    className="w-full rounded-xl border border-indigo-500/30 bg-slate-900/50 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300 hover:border-indigo-500/50 resize-none"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 py-6 text-white font-semibold shadow-xl shadow-indigo-500/25 transition-all duration-500 hover:from-indigo-500 hover:via-purple-500 hover:to-rose-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  disabled={isSubmitting}
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity duration-500"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        {t[lang].sending}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                        {t[lang].submit}
                      </>
                    )}
                  </span>
                </Button>

                {status === 'success' && (
                  <div className="rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/50 to-teal-950/50 backdrop-blur-sm p-4 animate-fadeIn">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-emerald-300">{t[lang].success}</p>
                    </div>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="rounded-xl border border-rose-500/30 bg-gradient-to-r from-rose-950/50 to-red-950/50 backdrop-blur-sm p-4 animate-fadeIn">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-rose-300">{t[lang].error}</p>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer amélioré */}
        <div className="mt-16 pt-8 border-t border-indigo-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <span>© 2026</span>
              <span className="font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {PROFILE_NAME}
              </span>
              <span className="hidden sm:inline">-</span>
              <span className="hidden sm:inline">{t[lang].copyright}</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <span>{t[lang].madeWith}</span>
              <Heart className="h-3 w-3 text-rose-400 animate-pulse" />
              <span>{t[lang].by}</span>
              <Code2 className="h-3 w-3 text-indigo-400 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}