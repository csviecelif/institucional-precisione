'use client'

import { useCallback, useEffect, useState } from 'react'
import { useConsent } from '@/contexts/ConsentContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Info } from 'lucide-react'

const CookieBanner = () => {
  const { consentState, grantConsent, denyConsent } = useConsent()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(consentState === 'unknown')
  }, [consentState])

  const handleAccept = useCallback(() => {
    grantConsent()
    setIsVisible(false)
  }, [grantConsent])

  const handleDecline = useCallback(() => {
    denyConsent()
    setIsVisible(false)
  }, [denyConsent])

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-5 left-1/2 z-[200] w-[min(95%,40rem)] -translate-x-1/2">
      <div
        className={cn(
          'relative flex items-center justify-between gap-3 rounded-full border border-white/15 bg-[#0b1d30]/85 px-5 py-2 text-white shadow-[0_18px_48px_rgba(8,18,38,0.55)] backdrop-blur-xl before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-r before:from-white/12 before:via-white/6 before:to-white/12'
        )}
      >
        <div className="flex flex-1 items-center justify-center gap-2 pl-1">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80">
            <Info className="h-3.5 w-3.5" aria-hidden />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70 leading-none">
            Cookies e analytics
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="border-white/25 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-white/15"
            onClick={handleDecline}
          >
            Aceitar apenas essenciais
          </Button>
          <div className="group relative">
            <Button
              type="button"
              variant="outline"
              className="border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-white/15 focus-visible:ring-white/30"
            >
              Entenda
            </Button>
            <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 hidden w-60 -translate-x-1/2 rounded-2xl border border-white/15 bg-[#0b1d30]/95 px-4 py-3 text-[11px] leading-relaxed text-white/80 shadow-[0_16px_30px_rgba(8,18,38,0.45)] group-hover:flex group-focus-within:flex">
              Mantemos apenas cookies essenciais para o site funcionar. Analytics opcionais ajudam a medir performance e aprimorar a experiencia.
              <span className="pointer-events-none absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 rounded-sm border-b border-r border-white/20 bg-[#0b1d30]/95" aria-hidden />
            </div>
          </div>
          <Button
            className="bg-white px-3 py-1.5 text-[11px] font-semibold text-[#0a1c2e] shadow-[0_8px_20px_rgba(10,28,48,0.25)] transition hover:bg-white/90 hover:shadow-[0_10px_24px_rgba(10,28,48,0.35)]"
            onClick={handleAccept}
          >
            Aceitar todos
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
