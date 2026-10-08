import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

/** Remet le scroll en haut à chaque changement de route. */
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

/** Transition d'entrée à chaque changement de page. */
export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  )
}
