import { Cafe } from '@/types/cafe'

interface FooterProps {
  cafe: Cafe
}

export default function Footer({ cafe }: FooterProps) {
  return (
    <footer className="py-6 text-center">
      <p className="text-xs opacity-50">
        Unofficial concept demo created for presentation only. Not affiliated with {cafe.name}.
      </p>
    </footer>
  )
}
