import Link from 'next/link'
import { Home, ArrowLeft, Search, FileText } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página não encontrada - 404 | Precisione',
  description: 'A página que você procura não foi encontrada. Visite nossa página inicial ou entre em contato conosco.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base44-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-base44-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-base44-primary-dark mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Página Não Encontrada
          </h2>
        </div>

        {/* Mensagem */}
        <div className="mb-12">
          <p className="text-lg text-gray-600 mb-6">
            Ops! A página que você está procurando não existe ou foi removida.
          </p>
          <p className="text-base text-gray-500">
            Que tal conhecer nossos serviços de <strong>investigação patrimonial</strong> com resultados garantidos?
          </p>
        </div>

        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-base44-primary text-white rounded-lg font-semibold hover:bg-base44-primary/90 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Voltar ao Início
          </Link>
          
          <Link
            href="/contato"
            className="inline-flex items-center px-6 py-3 border-2 border-base44-primary text-base44-primary rounded-lg font-semibold hover:bg-base44-primary hover:text-white transition-colors"
          >
            <FileText className="w-5 h-5 mr-2" />
            Solicitar Orçamento
          </Link>
        </div>

        {/* Links úteis */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Páginas mais acessadas:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <Link 
              href="/busca-ativos" 
              className="text-base44-primary hover:text-base44-primary-dark transition-colors"
            >
              Busca de Bens
            </Link>
            <Link 
              href="/due-diligence" 
              className="text-base44-primary hover:text-base44-primary-dark transition-colors"
            >
              Due Diligence
            </Link>
            <Link 
              href="/localizacao-rapida" 
              className="text-base44-primary hover:text-base44-primary-dark transition-colors"
            >
              Localização Rápida
            </Link>
            <Link 
              href="/sobre-nos" 
              className="text-base44-primary hover:text-base44-primary-dark transition-colors"
            >
              Sobre Nós
            </Link>
          </div>
        </div>

        {/* Informações de contato */}
        <div className="mt-8 p-6 bg-base44-primary-dark text-white rounded-lg">
          <h4 className="font-semibold mb-2">Precisa de ajuda imediata?</h4>
          <p className="text-sm text-base44-gray-300 mb-3">
            Nossa equipe está pronta para ajudar com sua investigação patrimonial
          </p>
          <div className="flex flex-col sm:flex-row gap-2 text-sm">
            <span>WhatsApp: (41) 98430-0319</span>
            <span className="hidden sm:inline">|</span>
            <span>Email: contato@precisione.com.br</span>
          </div>
        </div>
      </div>
    </div>
  )
}