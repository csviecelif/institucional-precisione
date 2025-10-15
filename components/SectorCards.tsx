import { cn } from '@/lib/utils'
import type { SectorCardItem } from './Hero'

interface SectorCardsProps {
  items: SectorCardItem[]
  className?: string
}

export default function SectorCards({ items, className }: SectorCardsProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-6 md:grid-cols-3', className)}>
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left text-white shadow backdrop-blur-sm"
        >
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">{item.description}</p>
        </article>
      ))}
    </div>
  )
}
