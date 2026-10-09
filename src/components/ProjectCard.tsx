import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  BarChart3,
  CreditCard,
  Globe,
  Layers,
  MapPin,
  Receipt,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Truck,
  Wallet,
  Wifi,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { TechIcon } from '@/components/TechIcon'
import { LivePreview } from '@/components/LivePreview'
import { hasTechIcon } from '@/lib/tech-icons'
import type { Project } from '@/data/projects'
import type { Lang } from '@/context/app-context'

const typeIcons: Record<string, React.ReactNode> = {
  Marketplace: <ShoppingBag className="h-3.5 w-3.5" />,
  'Application Web': <Globe className="h-3.5 w-3.5" />,
  'Web App': <Globe className="h-3.5 w-3.5" />,
  'Application Mobile + Web': <Smartphone className="h-3.5 w-3.5" />,
  'Mobile & Web App': <Smartphone className="h-3.5 w-3.5" />,
  'Fintech / Cartes virtuelles': <CreditCard className="h-3.5 w-3.5" />,
  'Fintech / Virtual Cards': <CreditCard className="h-3.5 w-3.5" />,
}

const featureIcons: Record<string, React.ReactNode> = {
  Géolocalisation: <MapPin className="h-3.5 w-3.5" />,
  Geolocation: <MapPin className="h-3.5 w-3.5" />,
  'Wallet & Mobile Money': <Wallet className="h-3.5 w-3.5" />,
  'Wallet & mobile money': <Wallet className="h-3.5 w-3.5" />,
  'Application Android': <Smartphone className="h-3.5 w-3.5" />,
  'Android app': <Smartphone className="h-3.5 w-3.5" />,
  'Ventes & stock': <BarChart3 className="h-3.5 w-3.5" />,
  'Sales & stock': <BarChart3 className="h-3.5 w-3.5" />,
  Facturation: <Receipt className="h-3.5 w-3.5" />,
  Invoicing: <Receipt className="h-3.5 w-3.5" />,
  'Dashboard temps réel': <Wifi className="h-3.5 w-3.5" />,
  'Real-time dashboard': <Wifi className="h-3.5 w-3.5" />,
  'Suivi de colis': <Truck className="h-3.5 w-3.5" />,
  'Parcel tracking': <Truck className="h-3.5 w-3.5" />,
  'Madagascar ↔ France': <Globe className="h-3.5 w-3.5" />,
  'Mobile + Web': <Smartphone className="h-3.5 w-3.5" />,
  'Cartes virtuelles': <CreditCard className="h-3.5 w-3.5" />,
  'Virtual cards': <CreditCard className="h-3.5 w-3.5" />,
  'Paiements sécurisés': <ShieldCheck className="h-3.5 w-3.5" />,
  'Secure payments': <ShieldCheck className="h-3.5 w-3.5" />,
  'Wallet en ligne': <Wallet className="h-3.5 w-3.5" />,
  'Online wallet': <Wallet className="h-3.5 w-3.5" />,
}

type ProjectCardProps = {
  project: Project
  lang: Lang
  onOpen?: (project: Project) => void
}

export function ProjectCard({ project, lang, onOpen }: ProjectCardProps) {
  const accent = 'text-emerald-600 dark:text-emerald-400'
  const textPrimary = 'text-gray-900 dark:text-white'
  const textSecondary = 'text-gray-600 dark:text-gray-300'
  const textTertiary = 'text-gray-500 dark:text-gray-400'
  const borderClass = 'border-gray-200 dark:border-gray-800'

  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900 sm:aspect-[16/10]">
        <img
          src={project.image}
          alt={`${project.name} — ${lang === 'fr' ? 'aperçu' : 'preview'}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {project.live && <LivePreview src={project.url} title={project.name} interactive="mobile" />}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
        <span className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-white/90 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide ${accent} dark:border-emerald-800 dark:bg-gray-950/90`}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {project.live ? (lang === 'fr' ? 'Live' : 'Live') : lang === 'fr' ? 'Aperçu' : 'Preview'}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge className={`inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-medium ${accent} dark:border-emerald-800 dark:bg-emerald-900/20`}>
            {typeIcons[project.type[lang]] || <Globe className="h-3.5 w-3.5" />}
            {project.type[lang]}
          </Badge>
        </div>

        <h3 className={`mb-2 text-xl font-semibold tracking-tight ${textPrimary}`}>{project.name}</h3>
        <p className={`mb-5 border-l border-gray-200 pl-4 text-sm leading-relaxed ${textSecondary} dark:border-gray-800`}>
          {project.description[lang]}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.features.map(item => (
            <span key={item} className={`inline-flex items-center gap-1.5 rounded-md border ${borderClass} bg-gray-50 px-2.5 py-1.5 text-xs font-medium dark:bg-gray-900/50`}>
              <span className={accent}>{featureIcons[item] || <Globe className="h-3.5 w-3.5" />}</span>
              <span className={textSecondary}>{item}</span>
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span key={tech} className={`inline-flex items-center gap-1.5 rounded-md border ${borderClass} bg-gray-50 px-2.5 py-1.5 text-xs font-medium dark:bg-gray-900/50`}>
              {hasTechIcon(tech) ? (
                <TechIcon name={tech} className="h-3.5 w-3.5" />
              ) : (
                <span className={accent}><Layers className="h-3.5 w-3.5" /></span>
              )}
              <span className={textSecondary}>{tech}</span>
            </span>
          ))}
        </div>

        <span className={`mt-6 inline-flex items-center gap-2 border-t border-gray-100 pt-5 text-sm font-medium ${accent} dark:border-gray-800`}>
          {lang === 'fr' ? 'Voir le détail' : 'View details'}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
        <span className={`ml-auto text-xs ${textTertiary}`}>{project.year}</span>
      </div>
    </>
  )

  const className = `group relative flex w-full flex-col overflow-hidden rounded-xl border text-left ${borderClass} bg-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 dark:bg-gray-900/40 dark:hover:border-emerald-700`

  if (onOpen) {
    return (
      <button type="button" onClick={() => onOpen(project)} className={className}>
        {content}
      </button>
    )
  }

  return (
    <Link to={`/projects/${project.slug}`} className={className}>
      {content}
    </Link>
  )
}
