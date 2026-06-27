import { Cafe } from '@/types/cafe'
import {
  makeCallLink,
  makeWhatsAppLink,
  makeGoogleMapsLink,
  makeInstagramLink,
} from '@/lib/links'

interface MobileStickyCTAProps {
  cafe: Cafe
}

export default function MobileStickyCTA({ cafe }: MobileStickyCTAProps) {
  const primaryLink = cafe.whatsapp
    ? makeWhatsAppLink(cafe.whatsapp, cafe.whatsappMessage)
    : makeCallLink(cafe.phone)
  const primaryLabel = cafe.whatsapp ? 'WhatsApp' : 'Call'
  const primaryIsExternal = Boolean(cafe.whatsapp)

  return (
    <div
      className="animate-slide-up fixed bottom-0 left-0 right-0 z-50 flex md:hidden"
      style={{
        backgroundColor: cafe.brandStyle.primaryColor,
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <a
        href={primaryLink}
        target={primaryIsExternal ? '_blank' : undefined}
        rel={primaryIsExternal ? 'noopener noreferrer' : undefined}
        className="flex flex-1 items-center justify-center py-4 text-sm font-semibold text-white"
      >
        {primaryLabel}
      </a>
      <a
        href={makeGoogleMapsLink(cafe.googleMapsUrl)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center py-4 text-sm font-semibold text-white"
        style={{ borderLeft: '1px solid rgba(255,255,255,0.2)' }}
      >
        Directions
      </a>
      <a
        href={makeInstagramLink(cafe.instagramUrl)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center py-4 text-sm font-semibold text-white"
        style={{ borderLeft: '1px solid rgba(255,255,255,0.2)' }}
      >
        Instagram
      </a>
    </div>
  )
}
