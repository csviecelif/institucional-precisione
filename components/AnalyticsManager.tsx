'use client'

import Script from 'next/script'

import { analytics } from '@/lib/analytics'
import { useConsent } from '@/contexts/ConsentContext'
import AnalyticsListener from '@/components/AnalyticsListener'

const AnalyticsManager = () => {
  const { hasConsent } = useConsent()

  if (!analytics.gaId) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('NEXT_PUBLIC_GA_ID ausente. GA4 não será carregado.')
    }
    return null
  }

  if (!hasConsent) {
    return null
  }

  return (
    <>
      <Script
        id="ga4-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${analytics.gaId}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga4-inline"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html:
            "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','" +
            analytics.gaId +
            "');",
        }}
      />
      <AnalyticsListener />
    </>
  )
}

export default AnalyticsManager
