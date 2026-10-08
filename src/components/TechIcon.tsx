import { TECH_ICONS } from '@/lib/tech-icons'

/** Raha maizina loatra ny lokon'ny marika dia aseho amin'ny currentColor. */
function isDarkHex(hex: string) {
  const value = hex.replace('#', '')
  if (value.length < 6) return false
  const r = parseInt(value.slice(0, 2), 16) / 255
  const g = parseInt(value.slice(2, 4), 16) / 255
  const b = parseInt(value.slice(4, 6), 16) / 255
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return luminance < 0.32
}

export function TechIcon({ name, className = 'h-4 w-4' }: { name: string; className?: string }) {
  const icon = TECH_ICONS[name]
  if (!icon) return null

  const dark = isDarkHex(icon.hex)
  return (
    <svg
      role="img"
      aria-label={name}
      viewBox="0 0 24 24"
      className={`${className} ${dark ? 'text-gray-900 dark:text-white' : ''}`.trim()}
      style={dark ? undefined : { color: `#${icon.hex}` }}
    >
      <path fill="currentColor" d={icon.path} />
    </svg>
  )
}
