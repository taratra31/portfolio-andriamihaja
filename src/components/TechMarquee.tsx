import { TechIcon } from '@/components/TechIcon'
import { TECH_ICONS } from '@/lib/tech-icons'

const ITEMS = [
  'React',
  'Node.js',
  'PHP',
  'Laravel',
  'TypeScript',
  'JavaScript',
  'Python',
  'FastAPI',
  'Tailwind CSS',
  'Vite',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Supabase',
  'Docker',
  'Git',
  'GitHub',
  'Linux',
  'Nginx',
  'Apache',
  'Angular',
  'Ionic',
  'YOLO',
  'OpenCV',
].filter(item => item in TECH_ICONS)

export function TechMarquee() {
  const copy = (keyPrefix: string) => (
    <div className="flex shrink-0 items-center gap-3 pr-3" aria-hidden={keyPrefix === 'b'}>
      {ITEMS.map(item => (
        <span
          key={`${keyPrefix}-${item}`}
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/70 px-4 py-2.5 text-sm font-medium text-gray-600 backdrop-blur-sm transition-colors hover:border-emerald-300 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-300 dark:hover:border-emerald-700"
        >
          <TechIcon name={item} className="h-5 w-5" />
          {item}
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee-hover relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="animate-marquee flex w-max items-center">
        {copy('a')}
        {copy('b')}
      </div>
    </div>
  )
}