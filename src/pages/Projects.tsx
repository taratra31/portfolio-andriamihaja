import { useState } from 'react'
import { PageHeader } from '@/components/PageHeader'
import { ProjectCard } from '@/components/ProjectCard'
import { ProjectModal } from '@/components/ProjectModal'
import { useApp } from '@/context/useApp'
import { projects, type Project } from '@/data/projects'

export function Projects() {
  const { lang } = useApp()
  const [selected, setSelected] = useState<Project | null>(null)

  const t = {
    fr: {
      section: 'Portfolio',
      title: 'Projets & Réalisations',
      subtitle: 'Des applications web et mobiles déployées, pensées pour les usages réels à Madagascar. Cliquez sur un projet pour ouvrir le détail.',
    },
    en: {
      section: 'Portfolio',
      title: 'Projects & Work',
      subtitle: 'Deployed web and mobile applications built for real-world use cases in Madagascar. Click a project to open the details.',
    },
  } as const

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <PageHeader eyebrow={t[lang].section} title={t[lang].title} subtitle={t[lang].subtitle} />

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 stagger-grid">
          {projects.map(project => (
            <ProjectCard key={project.slug} project={project} lang={lang} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} lang={lang} onClose={() => setSelected(null)} />
    </section>
  )
}
