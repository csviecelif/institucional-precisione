'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface LayoutShellProps {
  children: ReactNode
}

const NAV_HIDDEN_PATHS = [
  '/',
  '/contato',
  '/sobre-nos',
  '/busca-ativos',
  '/due-diligence',
  '/localizacao-rapida',
  '/ocultacao-patrimonio',
  '/politica-privacidade',
]

export default function LayoutShell({ children }: LayoutShellProps) {
  const pathname = usePathname()
  const showNavigation = !NAV_HIDDEN_PATHS.includes(pathname)

  return (
    <div className="flex min-h-screen flex-col">
      {showNavigation && <Navigation />}
      <main className={cn('flex-1', showNavigation && 'pt-16')}>{children}</main>
      <Footer />
    </div>
  )
}

