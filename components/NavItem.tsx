'use client'

// src/components/NavItem.tsx
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

type NavigationItemType = 'route' | 'anchor' | 'action'

type NavigationItem = {
  type: NavigationItemType
  href: string
  label: string
  icon: LucideIcon
}

interface NavItemProps {
  item: NavigationItem
  isActive?: boolean
  onClick?: () => void
  variant?: 'desktop' | 'mobile' | 'action'
  className?: string
}

export default function NavItem({
  item,
  isActive = false,
  onClick,
  variant = 'desktop',
  className
}: NavItemProps) {
  const pathname = usePathname()
  const isRouteActive = item.type === 'route' && pathname === item.href

  const baseClasses = {
    desktop: 'flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 h-10',
    mobile: 'flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium w-full text-left',
    action: 'flex items-center justify-center px-6 py-2 rounded-lg text-sm font-medium transition-colors h-10'
  }

  const activeClasses = {
    desktop: 'bg-blue-50 text-blue-700',
    mobile: 'bg-blue-50 text-blue-700',
    action: 'bg-blue-600 text-white hover:bg-blue-700'
  }

  const inactiveClasses = {
    desktop: 'text-gray-600 hover:text-blue-700 hover:bg-gray-50',
    mobile: 'text-gray-600 hover:text-blue-700 hover:bg-gray-50',
    action: 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
  }

  const classes = cn(
    baseClasses[variant],
    (isActive || isRouteActive) ? activeClasses[variant] : inactiveClasses[variant],
    className
  )

  const content = (
    <>
      <item.icon className={cn(
        'flex-shrink-0',
        variant === 'mobile' ? 'w-5 h-5' : 'w-4 h-4'
      )}
      aria-hidden="true"
      />
      <span className="whitespace-nowrap">{item.label}</span>
    </>
  )

  if (item.type === 'route') {
    return (
      <Link
        href={item.href}
        onClick={onClick}
        className={classes}
        aria-current={isRouteActive ? 'page' : undefined}
        aria-label={`${item.label} ${isRouteActive ? '(página atual)' : ''}`}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      aria-label={`Ir para seção ${item.label}`}
      type="button"
    >
      {content}
    </button>
  )
}
