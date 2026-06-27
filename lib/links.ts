export function makeCallLink(phone: string): string {
  const cleaned = phone.replace(/[\s\-()]/g, '')
  return `tel:${cleaned}`
}

export function makeWhatsAppLink(
  whatsapp: string,
  message?: string
): string {
  const cleaned = whatsapp.replace(/[+\s\-()]/g, '')
  if (message) {
    return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`
  }
  return `https://wa.me/${cleaned}`
}

export function makeGoogleMapsLink(url: string): string {
  return url
}

export function makeInstagramLink(url: string): string {
  return url
}
