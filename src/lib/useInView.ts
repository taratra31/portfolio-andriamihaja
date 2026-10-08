import { useEffect, useRef, useState, type RefObject } from 'react'

type InViewOptions = {
  threshold?: number
  rootMargin?: string
}

/**
 * Pose la classe "is-inview" sur l'élément dès qu'il entre dans le viewport
 * (une seule fois). Les enfants portant "reveal" / "stagger-grid" s'animent
 * alors en cascade via le CSS.
 */
export function useInView<T extends HTMLElement>(
  options: InViewOptions = {},
): [RefObject<T | null>, boolean] {
  const { threshold = 0, rootMargin = '0px 0px -8% 0px' } = options
  const ref = useRef<T | null>(null)
  // Sans IntersectionObserver, tout est considéré comme visible (pas de contenu caché).
  const [inView, setInView] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}
