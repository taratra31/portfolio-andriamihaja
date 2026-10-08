import type { ReactNode } from 'react'
import { useInView } from '@/lib/useInView'

type RevealProps = {
  children: ReactNode
  variant?: 'up' | 'left' | 'right' | 'scale'
  delay?: number
  className?: string
}

/** Animated element: mipoitra rehefa tafiditra ao amin'ny viewport. */
export function Reveal({ children, variant = 'up', delay = 0, className = '' }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>()
  const variantClass = variant === 'up' ? '' : `reveal-${variant}`
  return (
    <div
      ref={ref}
      className={`reveal ${variantClass} ${inView ? 'is-inview' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
