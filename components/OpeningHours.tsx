import { Cafe } from '@/types/cafe'

interface OpeningHoursProps {
  cafe: Cafe
}

export default function OpeningHours({ cafe }: OpeningHoursProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 text-center">
      <h2 className="mb-4 text-3xl font-bold">Opening Hours</h2>
      <p className="text-xl font-medium">{cafe.openingHours.display}</p>
      {cafe.openingHours.note && (
        <p className="mt-2 text-sm opacity-60">{cafe.openingHours.note}</p>
      )}
    </section>
  )
}
