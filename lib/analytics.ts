const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const isBrowser = typeof window !== 'undefined'

const hasGaId = Boolean(GA_ID)

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export const pageview = (url: string) => {
  if (!isBrowser || !hasGaId) return

  window.gtag?.('config', GA_ID as string, { page_path: url })
}

type EventParams = {
  action: string
  params?: Gtag.EventParams | Record<string, unknown>
}

export const event = ({ action, params }: EventParams) => {
  if (!isBrowser || !hasGaId) return

  window.gtag?.('event', action, params)
}

export const trackContactClick = (source: string) =>
  event({
    action: 'contact_cta_click',
    params: { source } as Record<string, unknown>,
  })

export const trackWhatsappClick = () =>
  event({
    action: 'whatsapp_click',
  })

export const trackPrivacyClick = (source: string) =>
  event({
    action: 'privacy_link_click',
    params: { source } as Record<string, unknown>,
  })

export const analytics = {
  pageview,
  event,
  gaId: GA_ID,
  hasGaId,
  trackContactClick,
  trackWhatsappClick,
  trackPrivacyClick,
}
