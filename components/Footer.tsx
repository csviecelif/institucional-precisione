// src/components/Footer.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Instagram, Shield, Phone, Mail, MapPin, Info } from 'lucide-react'

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

  const isActive = (path: string) => pathname === path

  return (
    <footer className="bg-slate-800 text-slate-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-slate-700 pb-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold text-white leading-tight">
                  PRECISIONE
                </span>
                <span className="text-xs text-slate-400 leading-tight">
                  Investigação Patrimonial
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm max-w-md">
              Especialistas em investigação patrimonial, oferecendo relatórios detalhados e estratégias eficazes para a recuperação de ativos.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/precisionebr/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
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
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-2 text-slate-400">
              {otherItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-2 text-slate-400 hover:text-blue-300 transition-colors ${
                      isActive(item.href) ? 'text-blue-400 font-semibold' : ''
                    }`}
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li className="flex items-center space-x-2 pt-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>41 984300319</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>Curitiba - PR</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Precisione. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
