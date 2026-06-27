import { Cafe } from '@/types/cafe'
import { makeGoogleMapsLink } from '@/lib/links'

interface ReviewHighlightsProps {
  cafe: Cafe
}

const roundedMap = {
  none: 'rounded-none',
  md: 'rounded-md',
  xl: 'rounded-xl',
  full: 'rounded-full',
}

export default function ReviewHighlights({ cafe }: ReviewHighlightsProps) {
  const rounded = roundedMap[cafe.brandStyle.rounded]
  const stars = Math.round(cafe.rating)

  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-5 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest opacity-50">
          What Guests Say
        </p>
        <div className="text-5xl font-bold">{cafe.rating}</div>
        <div className="my-2 text-2xl text-accent">
          {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
        </div>
        <p className="text-sm opacity-60">
          Based on {cafe.reviewCount} Google Reviews
        </p>
      </div>
      <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {cafe.reviewHighlights.map((review, i) => (
          <div
            key={i}
            className={`p-4 transition duration-200 hover:-translate-y-1 hover:shadow-md ${rounded}`}
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <p className="leading-relaxed">{review.text}</p>
            {review.author && (
              <p className="mt-2 text-sm font-medium text-accent">— {review.author}</p>
            )}
          </div>
        ))}
      </div>
      <div className="text-center">
        <a
          href={makeGoogleMapsLink(cafe.googleMapsUrl)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline opacity-70 hover:opacity-100"
        >
          Read all reviews on Google Maps
        </a>
      </div>
    </section>
  )
}
