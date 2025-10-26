// src/components/Footer.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Instagram, Phone, Mail, MapPin, Info } from 'lucide-react'
import { analytics } from '@/lib/analytics'

interface MenuItem {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

export default function Footer() {
  const pathname = usePathname()

  const serviceItems: Omit<MenuItem, 'icon'>[] = [
    { href: '/busca-ativos', label: 'Busca de Bens' },
    { href: '/due-diligence', label: 'Due Diligence' },
    { href: '/localizacao-rapida', label: 'Localização Rápida' },
    { href: '/ocultacao-patrimonio', label: 'Ocultação de Patrimônio' },
  ];

  const otherItems: MenuItem[] = [
    { href: '/sobre-nos', label: 'Sobre Nós', icon: Info },
    { href: '/contato', label: 'Contato', icon: Mail },
  ];

  const trackLink = (href: string, source: string) => {
    if (href === '/contato') {
      analytics.trackContactClick(source)
    } else if (href.includes('politica')) {
      analytics.trackPrivacyClick(source)
    }
  };

  const isActive = (path: string) => pathname === path

  return (
    <footer className="bg-slate-800 text-slate-300 py-12" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-slate-700 pb-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex flex-col mb-4">
              <span className="text-xl font-bold text-white leading-tight">
                PRECISIONE
              </span>
              <span className="text-xs text-slate-400 leading-tight">
                Investigação Patrimonial
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-md">
              Especialistas em investigação patrimonial, oferecendo relatórios detalhados e estratégias eficazes para a recuperação de ativos.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/precisionebr/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Instagram da Precisione">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Principais serviços">
            <h3 className="text-lg font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-2">
              {serviceItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-slate-400 hover:text-blue-300 transition-colors ${
                      isActive(item.href) ? 'text-blue-400 font-semibold' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic">
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-2 text-slate-400">
              {otherItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => trackLink(item.href, 'footer-nav')}
                    className={`flex items-center space-x-2 text-slate-400 hover:text-blue-300 transition-colors ${
                      isActive(item.href) ? 'text-blue-400 font-semibold' : ''
                    }`}
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden />
                <a href="tel:5541984300319" className="hover:text-blue-300 transition-colors">41 98430-0319</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden />
                <span aria-label="Localização da Precisione">Curitiba - PR</span>
              </li>
            </ul>
          </address>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Precisione. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
