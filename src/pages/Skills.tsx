import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Brain, 
  Code2, 
  Database, 
  Globe, 
  Layout, 
  Network, 
  Settings,
  Sparkles,
  Zap,
  Cpu,
  Layers,
  Cloud,
  Smartphone,
  Container,
  Eye,
  GitBranch,
  Terminal,
  Workflow,
  MessageSquare,
  Server,
  Shield,
  HardDrive,
  Upload,
  Mail,
  Wifi
} from 'lucide-react'

const skillCategories = [
  {
    title: { fr: 'Langages', en: 'Languages' },
    icon: Code2,
    skills: {
      fr: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'PHP'],
      en: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'PHP'],
    },
  },
  {
    title: { fr: 'Frameworks', en: 'Frameworks' },
    icon: Layout,
    skills: {
      fr: ['FastAPI', 'React', 'Ionic', 'Angular', 'Vite', 'Tailwind CSS', 'Laravel'],
      en: ['FastAPI', 'React', 'Ionic', 'Angular', 'Vite', 'Tailwind CSS', 'Laravel'],
    },
  },
  {
    title: { fr: 'Bases de données', en: 'Databases' },
    icon: Database,
    skills: {
      fr: ['PostgreSQL', 'Supabase', 'MySQL', 'MongoDB'],
      en: ['PostgreSQL', 'Supabase', 'MySQL', 'MongoDB'],
    },
  },
  {
    title: { fr: 'IA & Vision', en: 'AI & Vision' },
    icon: Brain,
    skills: {
      fr: ['YOLO', 'OpenCV', 'TensorFlow', 'Détection objets'],
      en: ['YOLO', 'OpenCV', 'TensorFlow', 'Object Detection'],
    },
  },
  {
    title: { fr: 'DevOps & Outils', en: 'DevOps & Tools' },
    icon: Settings,
    skills: {
      fr: ['Docker', 'Git', 'GitHub', 'Linux', 'CI/CD', 'Nginx'],
      en: ['Docker', 'Git', 'GitHub', 'Linux', 'CI/CD', 'Nginx'],
    },
  },
  {
    title: { fr: 'Hébergement & Déploiement', en: 'Hosting & Deployment' },
    icon: Cloud,
    skills: {
      fr: ['cPanel', 'VPS', 'WHM', 'FTP', 'DNS', 'SSL/TLS', 'Apache', 'Nginx'],
      en: ['cPanel', 'VPS', 'WHM', 'FTP', 'DNS', 'SSL/TLS', 'Apache', 'Nginx'],
    },
  },
  {
    title: { fr: 'Services Web', en: 'Web Services' },
    icon: Globe,
    skills: {
      fr: ['API REST', 'WebSockets', 'Base de données temps réel', 'Auth (JWT/OAuth)'],
      en: ['REST API', 'WebSockets', 'Real-time DB', 'Auth (JWT/OAuth)'],
    },
  },
  {
    title: { fr: 'Méthodes & Gestion', en: 'Methods & Management' },
    icon: Workflow,
    skills: {
      fr: ['Workflows', 'Git Flow', 'Automatisation', 'Documentation', 'Tests'],
      en: ['Workflows', 'Git Flow', 'Automation', 'Documentation', 'Tests'],
    },
  },
  {
    title: { fr: 'Email & Communication', en: 'Email & Communication' },
    icon: Mail,
    skills: {
      fr: ['cPanel Email', 'SMTP', 'Webmail', 'DNS (MX/SPF/DKIM)', 'PHPMailer'],
      en: ['cPanel Email', 'SMTP', 'Webmail', 'DNS (MX/SPF/DKIM)', 'PHPMailer'],
    },
  },
  {
    title: { fr: 'Langues', en: 'Languages' },
    icon: MessageSquare,
    skills: {
      fr: ['Français (B2)', 'Anglais (B1 technique)', 'Malgache (natif)'],
      en: ['French (B2)', 'English (B1 technical)', 'Malagasy (native)'],
    },
  },
]

// Icônes pour chaque compétence
const skillIcons: Record<string, React.ReactNode> = {
  "Python": <Code2 className="h-3 w-3" />,
  "TypeScript": <Code2 className="h-3 w-3" />,
  "JavaScript": <Code2 className="h-3 w-3" />,
  "SQL": <Database className="h-3 w-3" />,
  "PHP": <Code2 className="h-3 w-3" />,
  "PHPMailer": <Mail className="h-3 w-3" />,
  "FastAPI": <Zap className="h-3 w-3" />,
  "React": <Code2 className="h-3 w-3" />,
  "Ionic": <Smartphone className="h-3 w-3" />,
  "Angular": <Code2 className="h-3 w-3" />,
  "Vite": <Zap className="h-3 w-3" />,
  "Tailwind CSS": <Layers className="h-3 w-3" />,
  "Laravel": <Code2 className="h-3 w-3" />,
  "PostgreSQL": <Database className="h-3 w-3" />,
  "Supabase": <Cloud className="h-3 w-3" />,
  "MySQL": <Database className="h-3 w-3" />,
  "MongoDB": <Database className="h-3 w-3" />,
  "YOLO": <Eye className="h-3 w-3" />,
  "OpenCV": <Eye className="h-3 w-3" />,
  "TensorFlow": <Brain className="h-3 w-3" />,
  "Détection objets": <Eye className="h-3 w-3" />,
  "Object Detection": <Eye className="h-3 w-3" />,
  "Docker": <Container className="h-3 w-3" />,
  "Git": <GitBranch className="h-3 w-3" />,
  "GitHub": <GitBranch className="h-3 w-3" />,
  "Linux": <Terminal className="h-3 w-3" />,
  "CI/CD": <Workflow className="h-3 w-3" />,
  "Nginx": <Server className="h-3 w-3" />,
  "cPanel": <Server className="h-3 w-3" />,
  "VPS": <HardDrive className="h-3 w-3" />,
  "WHM": <Server className="h-3 w-3" />,
  "FTP": <Upload className="h-3 w-3" />,
  "DNS": <Network className="h-3 w-3" />,
  "SSL/TLS": <Shield className="h-3 w-3" />,
  "Apache": <Server className="h-3 w-3" />,
  "API REST": <Globe className="h-3 w-3" />,
  "REST API": <Globe className="h-3 w-3" />,
  "WebSockets": <Wifi className="h-3 w-3" />,
  "Base de données temps réel": <Database className="h-3 w-3" />,
  "Real-time DB": <Database className="h-3 w-3" />,
  "Auth (JWT/OAuth)": <Shield className="h-3 w-3" />,
  "Workflows": <Workflow className="h-3 w-3" />,
  "Git Flow": <GitBranch className="h-3 w-3" />,
  "Automatisation": <Settings className="h-3 w-3" />,
  "Automation": <Settings className="h-3 w-3" />,
  "Documentation": <Layout className="h-3 w-3" />,
  "Tests": <Shield className="h-3 w-3" />,
  "cPanel Email": <Mail className="h-3 w-3" />,
  "SMTP": <Mail className="h-3 w-3" />,
  "Webmail": <Mail className="h-3 w-3" />,
  "DNS (MX/SPF/DKIM)": <Shield className="h-3 w-3" />,
  "Français (B2)": <MessageSquare className="h-3 w-3" />,
  "French (B2)": <MessageSquare className="h-3 w-3" />,
  "Anglais (B1 technique)": <MessageSquare className="h-3 w-3" />,
  "English (B1 technical)": <MessageSquare className="h-3 w-3" />,
  "Malgache (natif)": <MessageSquare className="h-3 w-3" />,
  "Malagasy (native)": <MessageSquare className="h-3 w-3" />,
}

type SkillsProps = {
  lang: 'fr' | 'en'
  theme?: 'light' | 'dark'
}

export function Skills({ lang, theme = 'light' }: SkillsProps) {
  const isDark = theme === 'dark'

  const t = {
    fr: {
      section: 'Compétences',
      title: 'Stack Technique',
      subtitle: 'Technologies, outils et services maîtrisés pour des projets complets, du développement au déploiement.',
      categoryCount: 'catégories',
      skillCount: 'compétences',
      tools: 'outils',
      footer: 'Stack évolutive — toujours en apprentissage de nouvelles technologies',
    },
    en: {
      section: 'Skills',
      title: 'Tech Stack',
      subtitle: 'Technologies, tools, and services mastered for complete projects, from development to deployment.',
      categoryCount: 'categories',
      skillCount: 'skills',
      tools: 'tools',
      footer: 'Evolving stack — always learning new technologies',
    },
  } as const

  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills[lang].length, 0)

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
  const cardHover = "hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-lg hover:shadow-emerald-500/5"

  return (
    <section id="skills" className={`relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 ${bgClass} transition-colors duration-300`}>
      
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

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className={`inline-flex items-center gap-2 rounded-full border-2 ${accentBorder} ${accentBg} px-4 py-2 mb-6`}>
            <Sparkles className={`h-4 w-4 ${accent}`} />
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
          
          {/* Stats rapides */}
          <div className="flex justify-center gap-8 mt-8">
            <div className={`flex items-center gap-3 ${textSecondary}`}>
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentBg} border-2 ${accentBorder}`}>
                <Layout className={`h-5 w-5 ${accent}`} />
              </div>
              <div className="text-left">
                <p className={`text-2xl font-black ${textPrimary}`}>{skillCategories.length}</p>
                <p className="text-xs uppercase tracking-wider font-semibold">{t[lang].categoryCount}</p>
              </div>
            </div>
            <div className="h-10 w-px bg-gray-200 dark:bg-gray-800" />
            <div className={`flex items-center gap-3 ${textSecondary}`}>
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentBg} border-2 ${accentBorder}`}>
                <Cpu className={`h-5 w-5 ${accent}`} />
              </div>
              <div className="text-left">
                <p className={`text-2xl font-black ${textPrimary}`}>{totalSkills}</p>
                <p className="text-xs uppercase tracking-wider font-semibold">{t[lang].skillCount}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grille de compétences */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title.en} 
                className={`group/card relative overflow-hidden rounded-2xl border-2 ${cardBorder} ${cardBg} transition-all duration-300 ${cardHover}`}
              >
                {/* Barre supérieure */}
                <div className="absolute left-0 top-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-60 group-hover/card:opacity-100 transition-all duration-300 group-hover/card:h-2" />
                
                <CardHeader className="pb-3 pt-5">
                  <CardTitle className={`flex items-center gap-3 text-base font-bold ${textPrimary}`}>
                    <div className={`p-2 rounded-xl ${accentBg} border-2 ${accentBorder} transition-transform duration-300 group-hover/card:scale-110`}>
                      <Icon className={`h-5 w-5 ${accent}`} />
                    </div>
                    {category.title[lang]}
                  </CardTitle>
                  <div className="mt-2">
                    <Badge className={`rounded-lg border-2 ${accentBorder} ${accentBg} ${accent} text-[10px] font-semibold`}>
                      {category.skills[lang].length} {t[lang].tools}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pb-5">
                  <div className="flex flex-wrap gap-2">
                    {category.skills[lang].map((skill, i) => (
                      <Badge 
                        key={i} 
                        className={`group/badge flex items-center gap-1.5 rounded-lg border-2 ${borderClass} ${subtleBg} text-xs py-1.5 px-3 font-medium transition-all duration-300 hover:border-emerald-200 dark:hover:border-emerald-800 hover:scale-105 hover:shadow-md cursor-default`}
                      >
                        <span className={`${accent} transition-transform duration-300 group-hover/badge:scale-125`}>
                          {skillIcons[skill] || <Code2 className="h-3 w-3" />}
                        </span>
                        <span className={`${textSecondary} group-hover/badge:text-emerald-600 dark:group-hover/badge:text-emerald-400 transition-colors`}>
                          {skill}
                        </span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Note en bas */}
        <div className="mt-12 text-center">
          <p className={`inline-flex items-center gap-2 text-xs font-medium ${textTertiary} ${subtleBg} rounded-full px-5 py-2.5 border-2 ${borderClass}`}>
            <Zap className={`h-3.5 w-3.5 ${accent}`} />
            {t[lang].footer}
          </p>
        </div>
      </div>
    </section>
  )
}