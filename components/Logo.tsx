// src/components/Logo.tsx
import Link from 'next/link'
import { Shield } from 'lucide-react'

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link
        href="/"
        className="flex items-center space-x-3 group"
        aria-label="Precisione - Voltar à página inicial"
      >
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-xl font-bold text-gray-900 leading-none group-hover:text-blue-700 transition-colors">
            PRECISIONE
          </span>
          <span className="text-xs text-gray-500 leading-none mt-0.5">
            Investigação Patrimonial
          </span>
        </div>
      </Link>
    </div>
  )
}
