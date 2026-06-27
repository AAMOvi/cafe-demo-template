import { Cafe } from '@/types/cafe'

interface GalleryProps {
  cafe: Cafe
}

const categories = [
  { label: 'Coffee', icon: '☕' },
  { label: 'Interior', icon: '🏛️' },
  { label: 'Desserts', icon: '🍰' },
  { label: 'Brunch', icon: '🥐' },
  { label: 'Ambiance', icon: '🕯️' },
  { label: 'Details', icon: '✨' },
]

function PlaceholderCard({
  index,
  className = '',
}: {
  index: number
  className?: string
}) {
  const cat = categories[index % categories.length]
  return (
    <div
      className={`group overflow-hidden ${className}`}
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid rgba(0,0,0,0.07)',
      }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 transition-transform duration-300 group-hover:scale-105">
        <span className="text-3xl" aria-hidden="true">{cat.icon}</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] opacity-40">
          {cat.label}
        </span>
      </div>
    </div>
  )
}

export default function Gallery({ cafe }: GalleryProps) {
  const count = cafe.images.gallery.length
  const { imageStyle } = cafe.brandStyle

  return (
    <section className="px-4 py-10">
      {imageStyle === 'grid' && (
        <div className="mx-auto max-w-5xl grid grid-cols-3 gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <PlaceholderCard key={i} index={i} className="aspect-square" />
          ))}
        </div>
      )}

      {imageStyle === 'large' && (
        <div className="mx-auto max-w-5xl">
          <PlaceholderCard index={0} className="aspect-video w-full mb-2" />
          <div className="grid grid-cols-2 gap-2">
            <PlaceholderCard index={1} className="aspect-video" />
            <PlaceholderCard index={2} className="aspect-video" />
          </div>
        </div>
      )}

      {imageStyle === 'minimal' && (
        <div className="mx-auto max-w-5xl">
          <PlaceholderCard index={0} className="aspect-video w-full" />
        </div>
      )}

      <p className="mt-4 text-center text-xs opacity-40">
        Gallery photos are placeholders. Official photos will be used in the final website.
      </p>
    </section>
  )
}
