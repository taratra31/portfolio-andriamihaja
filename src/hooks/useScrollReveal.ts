import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Observateur global: manisy ".is-inview" amin'ny singa ".reveal" sy
 * ".stagger-grid" rehefa tafiditra ao amin'ny viewport. Averina isaky ny
 * fiovan'ny pejy (satria miforona indray ny DOM).
 */
export function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal, .stagger-grid'),
    )
    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach(el => el.classList.add('is-inview'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-inview')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])
}
