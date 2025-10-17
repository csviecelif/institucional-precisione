'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, FileCheck, Home, Menu, X, Shield, Phone, Locate, EyeOff } from 'lucide-react'

interface MenuItem {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  if (
    [
      '/',
      '/contato',
      '/sobre-nos',
      '/busca-ativos',
      '/due-diligence',
      '/localizacao-rapida',
      '/ocultacao-patrimonio',
    ].includes(pathname)
  ) {
    return null
  }

  const navItems: MenuItem[] = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/busca-ativos', label: 'Busca de Bens', icon: Search },
    { href: '/due-diligence', label: 'Due Diligence', icon: FileCheck },
    { href: '/localizacao-rapida', label: 'Localização Rápida', icon: Locate },
    { href: '/ocultacao-patrimonio', label: 'Ocultação de Patrimônio', icon: EyeOff },
  ]

  const menuItems: MenuItem[] = [
  ]

  const isActive = (path: string) => pathname === path

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-glass border-b border-base44-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-14">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-base44-primary rounded-lg flex items-center justify-center shadow-md">
                <Shield className="w-6 h-6 text-base44-primary-foreground" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold text-base44-primary leading-tight">
                  PRECISIONE
                </span>
                <span className="text-xs text-base44-gray-600 leading-tight">
                  Investigação Patrimonial
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 h-10 ${
                  isActive(item.href)
                    ? 'bg-base44-primary-light text-base44-primary-foreground'
                    : 'text-base44-gray-700 hover:text-base44-primary hover:bg-base44-gray-100'
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">{item.label}</span>
              </Link>
            ))}
            
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-700 hover:bg-gray-50 transition-all duration-200 h-10"
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contato"
              className="bg-base44-accent hover:bg-base44-accent-dark text-base44-accent-foreground px-6 py-2 rounded-full text-sm font-medium transition-colors h-10 whitespace-nowrap flex items-center shadow-md"
            >
              <Phone className="w-4 h-4 mr-2" />
              Falar com Especialista
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-700 p-2 rounded-lg w-10 h-10 flex items-center justify-center"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium ${
                    isActive(item.href)
                      ? 'bg-base44-primary-light text-base44-primary-foreground'
                      : 'text-base44-gray-700 hover:text-base44-primary hover:bg-base44-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}

              <div className="border-t border-gray-200 my-2"></div>

              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-700 hover:bg-gray-50 text-left"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}

              <div className="border-t border-gray-200 my-2"></div>

              <Link
                href="/contato"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-3 py-3 text-sm bg-base44-accent text-base44-accent-foreground rounded-full text-center shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Falar com Especialista</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
