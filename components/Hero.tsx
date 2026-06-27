import { Cafe } from '@/types/cafe'
import {
  makeCallLink,
  makeWhatsAppLink,
  makeGoogleMapsLink,
  makeInstagramLink,
} from '@/lib/links'

interface HeroProps {
  cafe: Cafe
}

const roundedMap = {
  none: 'rounded-none',
  md: 'rounded-md',
  xl: 'rounded-xl',
  full: 'rounded-full',
}

export default function Hero({ cafe }: HeroProps) {
  const rounded = roundedMap[cafe.brandStyle.rounded]
  const stars = Math.round(cafe.rating)
  const { primaryColor, accentColor } = cafe.brandStyle

  const bg = [
    `radial-gradient(ellipse at 28% 58%, ${accentColor}1a 0%, transparent 55%)`,
    `linear-gradient(160deg, ${primaryColor} 0%, #08040200 55%)`,
    `linear-gradient(to bottom, #0d0603, #080402)`,
  ].join(', ')

  return (
    <section className="relative flex h-[70vh] min-h-[500px] w-full flex-col items-center justify-center overflow-hidden text-center text-white">
      {/* Background with subtle zoom on load */}
      <div
        className="animate-hero-bg absolute inset-0"
        style={{ background: bg }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-center px-4">
        <p
          className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-widest text-white/40"
          style={{ animationDelay: '0s' }}
        >
          {cafe.area}&nbsp;&middot;&nbsp;{cafe.city}
        </p>
        <div
          className="animate-fade-up mb-5 h-px w-14"
          style={{ backgroundColor: accentColor, opacity: 0.55, animationDelay: '0.1s' }}
        />
        <h1
          className="animate-fade-up mb-3 text-4xl font-bold md:text-6xl"
          style={{ animationDelay: '0.2s' }}
        >
          {cafe.name}
        </h1>
        <p
          className="animate-fade-up mb-5 text-lg text-white/65 md:text-xl"
          style={{ animationDelay: '0.3s' }}
        >
          {cafe.tagline}
        </p>
        <div
          className="animate-fade-up mb-7 flex flex-wrap items-center justify-center gap-2 text-sm"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="text-accent">
            {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
          </span>
          <span className="font-semibold">{cafe.rating}</span>
          <span className="text-white/45">({cafe.reviewCount} reviews)</span>
          {cafe.priceRange && (
            <span className="text-white/45">&middot; {cafe.priceRange}</span>
          )}
        </div>
        <div
          className="animate-fade-up flex flex-wrap justify-center gap-3"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href={makeGoogleMapsLink(cafe.googleMapsUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-accent px-6 py-3 font-semibold text-white transition-opacity duration-200 hover:opacity-90 ${rounded}`}
          >
            Get Directions
          </a>
          {cafe.whatsapp ? (
            <a
              href={makeWhatsAppLink(cafe.whatsapp, cafe.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={`border border-white/35 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/10 ${rounded}`}
            >
              WhatsApp Us
            </a>
          ) : (
            <a
              href={makeCallLink(cafe.phone)}
              className={`border border-white/35 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/10 ${rounded}`}
            >
              Call Us
            </a>
          )}
          <a
            href={makeInstagramLink(cafe.instagramUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 font-semibold text-white/55 underline transition-colors duration-200 hover:text-white ${rounded}`}
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
