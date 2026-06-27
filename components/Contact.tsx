import { Cafe } from '@/types/cafe'
import {
  makeCallLink,
  makeWhatsAppLink,
  makeGoogleMapsLink,
  makeInstagramLink,
} from '@/lib/links'

interface ContactProps {
  cafe: Cafe
}

const roundedMap = {
  none: 'rounded-none',
  md: 'rounded-md',
  xl: 'rounded-xl',
  full: 'rounded-full',
}

export default function Contact({ cafe }: ContactProps) {
  const rounded = roundedMap[cafe.brandStyle.rounded]

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h2 className="mb-6 text-center text-3xl font-bold">Get in Touch</h2>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
        <a
          href={makeCallLink(cafe.phone)}
          className={`flex items-center justify-center px-6 py-3 font-semibold opacity-80 hover:opacity-100 ${rounded}`}
          style={{ border: '1px solid currentColor' }}
        >
          Call Us
        </a>
        {cafe.whatsapp && (
          <a
            href={makeWhatsAppLink(cafe.whatsapp, cafe.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center bg-accent px-6 py-3 font-semibold text-white ${rounded}`}
          >
            WhatsApp
          </a>
        )}
        <a
          href={makeInstagramLink(cafe.instagramUrl)}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center px-6 py-3 font-semibold opacity-80 hover:opacity-100 ${rounded}`}
          style={{ border: '1px solid currentColor' }}
        >
          Instagram
        </a>
        <a
          href={makeGoogleMapsLink(cafe.googleMapsUrl)}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center px-6 py-3 font-semibold opacity-80 hover:opacity-100 ${rounded}`}
          style={{ border: '1px solid currentColor' }}
        >
          Google Maps
        </a>
      </div>
    </section>
  )
}
