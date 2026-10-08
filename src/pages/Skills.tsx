import type { ReactNode } from 'react'
import {
  Braces,
  Cloud,
  Code2,
  Container,
  Database,
  Eye,
  GitBranch,
  Globe,
  HardDrive,
  Layers,
  Lock,
  Mail,
  Network,
  Server,
  Settings,
  ShieldCheck,
  Smartphone,
  Terminal,
  Wifi,
  Zap,
} from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { TechIcon } from '@/components/TechIcon'
import { TechMarquee } from '@/components/TechMarquee'
import { hasTechIcon } from '@/lib/tech-icons'
import { useApp } from '@/context/useApp'
import { skillGroups } from '@/data/skills'

const skillIcons: Record<string, ReactNode> = {
  PHP: <Braces className="h-3 w-3" />,
  Laravel: <Code2 className="h-3 w-3" />,
  PHPMailer: <Mail className="h-3 w-3" />,
  SMTP: <Mail className="h-3 w-3" />,
  'API REST': <Globe className="h-3 w-3" />,
  cPanel: <Settings className="h-3 w-3" />,
  'Node.js': <Server className="h-3 w-3" />,
  TypeScript: <Code2 className="h-3 w-3" />,
  JavaScript: <Code2 className="h-3 w-3" />,
  Express: <Server className="h-3 w-3" />,
  WebSockets: <Wifi className="h-3 w-3" />,
  Python: <Code2 className="h-3 w-3" />,
  FastAPI: <Zap className="h-3 w-3" />,
  YOLO: <Eye className="h-3 w-3" />,
  OpenCV: <Eye className="h-3 w-3" />,
  TensorFlow: <Zap className="h-3 w-3" />,
  React: <Code2 className="h-3 w-3" />,
  Angular: <Code2 className="h-3 w-3" />,
  Ionic: <Smartphone className="h-3 w-3" />,
  Vite: <Zap className="h-3 w-3" />,
  'Tailwind CSS': <Layers className="h-3 w-3" />,
  'HTML/CSS': <Code2 className="h-3 w-3" />,
  PostgreSQL: <Database className="h-3 w-3" />,
  MySQL: <Database className="h-3 w-3" />,
  MongoDB: <Database className="h-3 w-3" />,
  SQL: <Database className="h-3 w-3" />,
  Supabase: <Cloud className="h-3 w-3" />,
  Docker: <Container className="h-3 w-3" />,
  Git: <GitBranch className="h-3 w-3" />,
  GitHub: <GitBranch className="h-3 w-3" />,
  Linux: <Terminal className="h-3 w-3" />,
  'CI/CD': <Zap className="h-3 w-3" />,
  Nginx: <Network className="h-3 w-3" />,
  Apache: <Network className="h-3 w-3" />,
  VPS: <HardDrive className="h-3 w-3" />,
  WHM: <Settings className="h-3 w-3" />,
  FTP: <HardDrive className="h-3 w-3" />,
  DNS: <Network className="h-3 w-3" />,
  'SSL/TLS': <Lock className="h-3 w-3" />,
  "Détection d'objets": <Eye className="h-3 w-3" />,
  'Base temps réel': <Wifi className="h-3 w-3" />,
  'Auth (JWT/OAuth)': <ShieldCheck className="h-3 w-3" />,
}

export function Skills() {
  const { lang } = useApp()

  const t = {
    fr: {
      section: 'Compétences',
      title: 'Stack technique',
      subtitle: 'Mes technologies regroupées par langage et outil : PHP, JavaScript/TypeScript (Node.js), Python, front-end, bases de données, DevOps et IA.',
    },
    en: {
      section: 'Skills',
      title: 'Tech stack',
      subtitle: 'My technologies grouped by language and tool: PHP, JavaScript/TypeScript (Node.js), Python, front-end, databases, DevOps and AI.',
    },
  } as const

  const accent = 'text-emerald-600 dark:text-emerald-400'
  const textPrimary = 'text-gray-900 dark:text-white'
  const textSecondary = 'text-gray-600 dark:text-gray-300'
  const textTertiary = 'text-gray-500 dark:text-gray-400'
  const borderClass = 'border-gray-200 dark:border-gray-800'
  const subtleBg = 'bg-gray-50 dark:bg-gray-900/50'
  const accentBorder = 'border-emerald-200 dark:border-emerald-800'
  const accentBg = 'bg-emerald-50 dark:bg-emerald-900/20'

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <PageHeader eyebrow={t[lang].section} title={t[lang].title} subtitle={t[lang].subtitle} />

        <div className="grid gap-5 sm:grid-cols-2 stagger-grid">
          {skillGroups.map(group => {
            return (
              <div
                key={group.key}
                className={`group/card rounded-xl border ${borderClass} bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 dark:bg-gray-900/40 dark:hover:border-emerald-700`}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${accentBg}`}>
                    <TechIcon name={group.logo} className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className={`text-base font-semibold ${textPrimary}`}>{group.title[lang]}</h2>
                      <span className={`text-xs font-medium ${textTertiary}`}>{group.skills.length}</span>
                    </div>
                    <p className={`mt-1 text-xs leading-relaxed ${textTertiary}`}>{group.blurb[lang]}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className={`inline-flex items-center gap-1.5 rounded-md border ${borderClass} ${subtleBg} px-2.5 py-1.5 text-xs font-medium transition-colors hover:border-emerald-300 dark:hover:border-emerald-700`}
                    >
                      {hasTechIcon(skill) ? (
                        <TechIcon name={skill} className="h-3.5 w-3.5" />
                      ) : (
                        <span className={accent}>{skillIcons[skill] || <Code2 className="h-3.5 w-3.5" />}</span>
                      )}
                      <span className={textSecondary}>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className={`mt-12 flex items-center justify-center gap-2 rounded-full border ${accentBorder} ${accentBg} px-5 py-2.5 text-xs font-medium ${accent}`}>
          <Zap className="h-3.5 w-3.5" />
          {lang === 'fr' ? 'Apprentissage continu et veille technologique permanente.' : 'Continuous learning and constant tech watch.'}
        </div>

        <TechMarquee />
      </div>
    </section>
  )
}
