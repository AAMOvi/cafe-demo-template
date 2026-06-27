import { Cafe } from '@/types/cafe'

interface AboutProps {
  cafe: Cafe
}

const roundedMap = {
  none: 'rounded-none',
  md: 'rounded-md',
  xl: 'rounded-xl',
  full: 'rounded-full',
}

export default function About({ cafe }: AboutProps) {
  const rounded = roundedMap[cafe.brandStyle.rounded]

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <p className="mb-5 text-lg leading-relaxed">{cafe.description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {cafe.goodForTags.map((tag) => (
          <span
            key={tag}
            className={`bg-accent px-3 py-1 text-sm font-medium text-white transition-transform duration-150 hover:scale-105 ${rounded}`}
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm opacity-60">
        Located in {cafe.area}, {cafe.city}
      </p>
    </section>
  )
}
