import { useEffect, useState } from 'react'

type TypewriterProps = {
  phrases: readonly string[]
  className?: string
}

export function Typewriter({ phrases, className }: TypewriterProps) {
  const reduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return
    const current = phrases[phraseIndex]

    if (!deleting) {
      if (text.length < current.length) {
        const id = window.setTimeout(() => setText(current.slice(0, text.length + 1)), 55)
        return () => window.clearTimeout(id)
      }
      const id = window.setTimeout(() => setDeleting(true), 1700)
      return () => window.clearTimeout(id)
    }

    if (text.length > 0) {
      const id = window.setTimeout(() => setText(current.slice(0, text.length - 1)), 28)
      return () => window.clearTimeout(id)
    }

    const id = window.setTimeout(() => {
      setDeleting(false)
      setPhraseIndex((phraseIndex + 1) % phrases.length)
    }, 250)
    return () => window.clearTimeout(id)
  }, [deleting, phraseIndex, phrases, reduced, text.length])

  if (reduced) return <span className={className}>{phrases[0]}</span>

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] animate-pulse bg-current align-baseline" />
    </span>
  )
}