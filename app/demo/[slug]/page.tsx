import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getCafeBySlug, getAllSlugs } from '@/data/cafes'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MenuHighlights from '@/components/MenuHighlights'
import Gallery from '@/components/Gallery'
import ReviewHighlights from '@/components/ReviewHighlights'
import OpeningHours from '@/components/OpeningHours'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MobileStickyCTA from '@/components/MobileStickyCTA'
import { cn } from '@/lib/utils'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cafe = getCafeBySlug(params.slug)
  if (!cafe) return {}
  return {
    title: `${cafe.name} | Concept Demo`,
    description: cafe.tagline,
    robots: { index: false, follow: false },
  }
}

const themeColors = {
  dark: { background: '#1a1a1a', color: '#f5f5f5', surface: '#2a2a2a' },
  warm: { background: '#faf7f2', color: '#2c2c2c', surface: '#f0ebe2' },
  minimal: { background: '#ffffff', color: '#1a1a1a', surface: '#f9f9f9' },
}

export default function DemoPage({ params }: Props) {
  const cafe = getCafeBySlug(params.slug)
  if (!cafe) notFound()

  const fontClass = {
    inter: 'font-inter',
    playfair: 'font-playfair',
    lora: 'font-lora',
  }[cafe.brandStyle.font]

  const theme = themeColors[cafe.brandStyle.theme]

  return (
    <div
      dir={cafe.direction}
      className={cn(fontClass, 'pb-20 md:pb-0')}
      style={{
        '--color-primary': cafe.brandStyle.primaryColor,
        '--color-accent': cafe.brandStyle.accentColor,
        '--color-surface': theme.surface,
        background: theme.background,
        color: theme.color,
      } as React.CSSProperties}
    >
      <Hero cafe={cafe} />
      <About cafe={cafe} />
      <MenuHighlights cafe={cafe} />
      <Gallery cafe={cafe} />
      <ReviewHighlights cafe={cafe} />
      <OpeningHours cafe={cafe} />
      <Location cafe={cafe} />
      <Contact cafe={cafe} />
      <Footer cafe={cafe} />
      <MobileStickyCTA cafe={cafe} />
    </div>
  )
}
