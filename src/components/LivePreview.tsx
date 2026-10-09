import { useState } from 'react'

type LivePreviewProps = {
  src: string
  title: string
  interactive?: boolean | 'mobile'
}

export function LivePreview({ src, title, interactive = false }: LivePreviewProps) {
  const [loaded, setLoaded] = useState(false)

  const pointerClass =
    interactive === true ? '' : interactive === 'mobile' ? 'pointer-events-auto md:pointer-events-none' : 'pointer-events-none'

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
          <div className="h-7 w-7 animate-spin rounded-full border-2 border-gray-300 border-t-emerald-600" />
        </div>
      )}
      <iframe
        src={src}
        title={title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 z-10 h-full w-full border-0 bg-white ${pointerClass}`}
        style={loaded ? undefined : { visibility: 'hidden' }}
      />
    </>
  )
}