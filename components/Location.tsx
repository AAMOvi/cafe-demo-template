import { Cafe } from '@/types/cafe'
import { makeGoogleMapsLink } from '@/lib/links'

interface LocationProps {
  cafe: Cafe
}

const roundedMap = {
  none: 'rounded-none',
  md: 'rounded-md',
  xl: 'rounded-xl',
  full: 'rounded-full',
}

export default function Location({ cafe }: LocationProps) {
  const rounded = roundedMap[cafe.brandStyle.rounded]

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h2 className="mb-4 text-center text-3xl font-bold">Find Us</h2>
      <p className="mb-4 text-center opacity-70">{cafe.address}</p>

      {cafe.googleMapsEmbedUrl ? (
        <div
          className={`relative mb-4 overflow-hidden ${rounded}`}
          style={{ aspectRatio: '16/9' }}
        >
          <iframe
            src={cafe.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            className="border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          />
        </div>
      ) : (
        <div
          className={`mb-4 flex items-center gap-4 p-6 ${rounded}`}
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          <span className="text-3xl" aria-hidden="true">📍</span>
          <p>{cafe.address}</p>
        </div>
      )}

      <div className="text-center">
        <a
          href={makeGoogleMapsLink(cafe.googleMapsUrl)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block bg-accent px-8 py-3 font-semibold text-white ${rounded}`}
        >
          Get Directions
        </a>
      </div>
    </section>
  )
}
