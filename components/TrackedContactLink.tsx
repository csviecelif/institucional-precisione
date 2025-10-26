'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

import { analytics } from '@/lib/analytics'

type TrackedContactLinkProps = {
  href: string
  source: string
  className?: string
  children: ReactNode
}

const TrackedContactLink = ({ href, source, className, children }: TrackedContactLinkProps) => {
  const handleClick = () => {
    analytics.trackContactClick(source)
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}

export default TrackedContactLink
