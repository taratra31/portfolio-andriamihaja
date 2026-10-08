import type { ReactNode } from 'react'

type PageHeaderProps = {
  eyebrow: string
  title: string
  subtitle?: string
  children?: ReactNode
}

/** En-tête de page standardisé (aligné à gauche + filet). */
export function PageHeader({ eyebrow, title, subtitle, children }: PageHeaderProps) {
  return (
    <header className="mb-12 reveal">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-gray-300">{subtitle}</p>
      )}
      {children && <div className="mt-6">{children}</div>}
      <div className="mt-8 h-px w-full bg-gray-200 dark:bg-gray-800" />
    </header>
  )
}
