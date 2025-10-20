'use client'

import Link from 'next/link'
import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type LinkItem = {
  href: string
  label: string
}

interface FloatingNavProps {
  navLinks: LinkItem[]
  serviceLinks: LinkItem[]
  triggerLabel?: string
  className?: string
  menuLabel?: string
}

const floatingNavClasses =
  'group relative inline-flex min-h-[2.75rem] items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/8 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-500 ease-out hover:border-white/30 hover:bg-white/12 hover:text-white hover:shadow-xl hover:shadow-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:min-h-[3.25rem] sm:px-7 sm:py-3 sm:text-[11px] sm:tracking-[0.25em]'

const floatingNavHighlightClasses =
  'absolute inset-0 -z-10 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100'

export default function FloatingNav({
  navLinks,
  serviceLinks,
  triggerLabel = 'Serviços',
  className,
  menuLabel = 'Serviços disponíveis',
}: FloatingNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 640px)').matches : false
  )
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const firstItemRef = useRef<HTMLAnchorElement | null>(null)
  const menuItemsRef = useRef<Array<HTMLAnchorElement | null>>([])
  const shouldFocusFirstItem = useRef(false)
  const menuId = useId()

  useEffect(() => {
    const updateViewport = () => {
      if (typeof window === 'undefined') {
        return
      }
      setIsDesktop(window.matchMedia('(min-width: 640px)').matches)
    }

    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  useEffect(() => {
    if (isOpen && shouldFocusFirstItem.current) {
      firstItemRef.current?.focus()
      shouldFocusFirstItem.current = false
    }
  }, [isOpen])

  const closeMenu = () => {
    setIsOpen(false)
    buttonRef.current?.focus()
  }

  const handleBlur = () => {
    requestAnimationFrame(() => {
      const container = containerRef.current
      if (!container) {
        return
      }

      if (!container.contains(document.activeElement)) {
        setIsOpen(false)
      }
    })
  }

  const openMenu = (focusFirstItem: boolean) => {
    shouldFocusFirstItem.current = focusFirstItem
    setIsOpen(true)
  }

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openMenu(true)
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      openMenu(true)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      shouldFocusFirstItem.current = false
      setIsOpen(true)
      requestAnimationFrame(() => {
        const items = menuItemsRef.current
        items[items.length - 1]?.focus()
      })
    } else if (event.key === 'Escape') {
      event.preventDefault()
      setIsOpen(false)
    }
  }

  const handleMenuKeyDown = (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
    const items = menuItemsRef.current.filter(Boolean)
    if (items.length === 0) {
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      const nextIndex = (index + 1) % items.length
      items[nextIndex]?.focus()
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      const prevIndex = (index - 1 + items.length) % items.length
      items[prevIndex]?.focus()
    } else if (event.key === 'Home') {
      event.preventDefault()
      items[0]?.focus()
    } else if (event.key === 'End') {
      event.preventDefault()
      items[items.length - 1]?.focus()
    } else if (event.key === 'Escape') {
      event.preventDefault()
      closeMenu()
    }
  }

  const handleMenuClick = () => {
    setIsOpen(false)
  }

  const sections = [
    { key: 'main', title: 'Institucional', items: navLinks },
    { key: 'services', title: 'Serviços', items: serviceLinks },
  ]

  menuItemsRef.current = []
  let itemCounter = -1

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative z-0 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end',
        className
      )}
      onBlur={handleBlur}
    >
      <div className="hidden items-center gap-3 sm:flex">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              floatingNavClasses,
              'flex h-full items-center focus-visible:ring-white/60 focus-visible:ring-offset-0'
            )}
          >
            <span className="relative z-10 flex items-center gap-2">{label}</span>
            <div className={cn(floatingNavHighlightClasses)} aria-hidden />
          </Link>
        ))}
      </div>

      <div
        className="group/dropdown relative flex w-full justify-end sm:w-auto"
        data-open={isOpen}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Button
          ref={buttonRef}
          type="button"
          variant="outline"
          className={cn(
            floatingNavClasses,
            'w-full justify-between px-6 sm:w-auto sm:justify-center'
          )}
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => (isOpen ? setIsOpen(false) : openMenu(false))}
          onKeyDown={handleTriggerKeyDown}
        >
          <span className="relative z-10 flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-center">
            <span className="sm:hidden">Menu</span>
            <span className="hidden sm:inline">{triggerLabel}</span>
            <svg
              className={cn(
                'h-1.5 w-2.5 transition-transform duration-300',
                isOpen ? 'rotate-180' : ''
              )}
              fill="none"
              viewBox="0 0 10 6"
              aria-hidden
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </span>
          <div
            className={cn(
              floatingNavHighlightClasses,
              isOpen && 'opacity-100'
            )}
            aria-hidden
          />
        </Button>

        <div
          className={cn(
            'pointer-events-none absolute left-0 top-full h-3 w-full',
            isOpen && 'pointer-events-auto'
          )}
          aria-hidden
        />

        <div
          id={menuId}
          role="menu"
          aria-label={menuLabel}
          aria-hidden={!isOpen}
          className={cn(
            'pointer-events-none absolute left-0 top-[calc(100%+8px)] z-[100] w-full origin-top scale-95 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[rgba(20,35,60,0.96)] to-[rgba(15,27,46,0.96)] opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.45),0_0_1px_rgba(255,255,255,0.08)_inset] backdrop-blur-2xl transition-transform transition-opacity duration-300 ease-out sm:left-auto sm:right-0 sm:w-64 sm:origin-top-right',
            isOpen && 'pointer-events-auto translate-y-0 scale-100 opacity-100'
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50" />

          <div className="relative space-y-4 p-3">
            {sections.map(({ key, title, items }) => {
              if (items.length === 0) {
                return null
              }

              if (key === 'main' && isDesktop) {
                return null
              }

              return (
                <div
                  key={key}
                  className={cn('space-y-2', key === 'main' && 'sm:hidden')}
                >
                  <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">
                    {title}
                  </p>
                  <div className="space-y-1.5">
                    {items.map(({ href, label }) => {
                      itemCounter += 1
                      const index = itemCounter

                      return (
                        <Link
                          key={href}
                          href={href}
                          role="menuitem"
                          ref={(element) => {
                            menuItemsRef.current[index] = element
                            if (index === 0) {
                              firstItemRef.current = element
                            }
                          }}
                          tabIndex={isOpen ? 0 : -1}
                          onKeyDown={(event) => handleMenuKeyDown(event, index)}
                          onClick={handleMenuClick}
                          className="group/item relative flex items-center gap-2.5 overflow-hidden rounded-xl border border-white/25 bg-white/12 px-3 py-2 text-[12px] text-white transition-all duration-400 ease-out hover:border-white/35 hover:bg-white/18 hover:translate-x-1 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                        >
                          <span
                            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-white/20"
                            aria-hidden
                          >
                            <svg
                              className="h-2.5 w-2.5 text-white transition-colors duration-300 group-hover/item:text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              aria-hidden
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </span>

                          <span className="relative flex-1 font-medium transition-colors duration-300 group-hover/item:text-white">
                            {label}
                            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-white/70 to-transparent transition-all duration-500 group-hover/item:w-full" aria-hidden />
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

