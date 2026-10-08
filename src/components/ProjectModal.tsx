import { Dialog } from 'radix-ui'
import { X } from 'lucide-react'
import { ProjectDetails } from '@/components/ProjectDetails'
import type { Project } from '@/data/projects'
import type { Lang } from '@/context/app-context'

type ProjectModalProps = {
  project: Project | null
  lang: Lang
  onClose: () => void
}

export function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  return (
    <Dialog.Root open={!!project} onOpenChange={open => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-gray-950/40 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex max-h-[90vh] w-[calc(100vw-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl outline-none data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 dark:border-gray-800 dark:bg-gray-950">
          {project && (
            <>
              <Dialog.Title className="sr-only">{project.name}</Dialog.Title>
              <Dialog.Description className="sr-only">{project.tagline[lang]}</Dialog.Description>

              <div className="relative flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{project.name}</p>
                <Dialog.Close
                  aria-label={lang === 'fr' ? 'Fermer' : 'Close'}
                  className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  <X className="h-5 w-5" />
                </Dialog.Close>
              </div>

              <div className="overflow-y-auto px-6 py-6">
                <ProjectDetails project={project} lang={lang} variant="modal" />
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
