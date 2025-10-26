'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import { analytics } from '@/lib/analytics'
import { useConsent } from '@/contexts/ConsentContext'

const AnalyticsListener = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { hasConsent } = useConsent()

  useEffect(() => {
    if (!analytics.gaId || !hasConsent) {
      return
    }

    const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`

    analytics.pageview(url)
  }, [pathname, searchParams, hasConsent])

  return null
}

export default AnalyticsListener
