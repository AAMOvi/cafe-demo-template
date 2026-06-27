import { Cafe } from '@/types/cafe'
import { makeInstagramLink } from '@/lib/links'

interface MenuHighlightsProps {
  cafe: Cafe
}

const roundedMap = {
  none: 'rounded-none',
  md: 'rounded-md',
  xl: 'rounded-xl',
  full: 'rounded-full',
}

export default function MenuHighlights({ cafe }: MenuHighlightsProps) {
  const rounded = roundedMap[cafe.brandStyle.rounded]

  return (
    <section className="py-10">
      {/* Title + swipe hint — centered within content width */}
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-2 text-center text-3xl font-bold">Menu Highlights</h2>
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest opacity-40">
          Swipe to explore menu highlights
        </p>
      </div>

      {/* Horizontal scroll row */}
      <div className="no-scrollbar menu-scroll-fade flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4">
        {cafe.popularItems.map((item, i) => (
          <div
            key={item.name}
            className={`animate-fade-up w-[80vw] shrink-0 snap-start p-5 sm:w-80 transition duration-200 hover:-translate-y-1 hover:shadow-md ${rounded}`}
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid rgba(0,0,0,0.08)',
              animationDelay: `${i * 0.1}s`,
            }}
          >
            <h3 className="mb-1 font-semibold">{item.name}</h3>
            {item.price && (
              <p className="mb-1 text-sm font-medium text-accent">{item.price}</p>
            )}
            {item.description && (
              <p className="text-sm opacity-60">{item.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 px-4 text-center">
        <a
          href={makeInstagramLink(cafe.instagramUrl)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block border border-accent px-6 py-3 font-semibold text-accent ${rounded}`}
        >
          View full menu on Instagram
        </a>
      </div>
    </section>
  )
}
