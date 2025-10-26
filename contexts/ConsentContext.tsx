'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type ConsentState = 'granted' | 'denied' | 'unknown'

type ConsentContextValue = {
  consentState: ConsentState
  hasConsent: boolean
  grantConsent: () => void
  denyConsent: () => void
}

const ConsentContext = createContext<ConsentContextValue | undefined>(undefined)

const STORAGE_KEY = 'precisione-consent'

const getInitialState = (): ConsentState => {
  if (typeof window === 'undefined') return 'unknown'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'granted' || stored === 'denied') {
    return stored
  }

  return 'unknown'
}

type ConsentProviderProps = {
  children: React.ReactNode
}

export const ConsentProvider = ({ children }: ConsentProviderProps) => {
  const [consentState, setConsentState] = useState<ConsentState>(() => getInitialState())

  useEffect(() => {
    if (consentState === 'unknown' || typeof window === 'undefined') return

    window.localStorage.setItem(STORAGE_KEY, consentState)
  }, [consentState])

  const value = useMemo<ConsentContextValue>(() => {
    return {
      consentState,
      hasConsent: consentState === 'granted',
      grantConsent: () => setConsentState('granted'),
      denyConsent: () => setConsentState('denied'),
    }
  }, [consentState])

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

export const useConsent = () => {
  const context = useContext(ConsentContext)
  if (!context) {
    throw new Error('useConsent must be used within ConsentProvider')
  }
  return context
}
