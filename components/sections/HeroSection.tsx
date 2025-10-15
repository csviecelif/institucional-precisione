import { Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36 bg-gradient-to-br from-base44-gray-50 to-base44-gray-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-base44-primary leading-tight tracking-tight">
            Investigação Patrimonial <br /> Profissional e Estratégica
          </h1>
          <p className="mt-6 text-lg md:text-xl text-base44-gray-700 leading-relaxed">
            Descubra bens ocultos e proteja seus interesses com relatórios detalhados e validade jurídica.
          </p>
          <p className="mt-2 text-base44-gray-600 text-md italic">
            Cada dia sem informação patrimonial pode significar ativos transferidos.
          </p>

        </div>

        {/* Benefits Block - New */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/60 backdrop-blur-md rounded-lg p-6 shadow-glass border border-base44-gray-200 text-center">
            <h3 className="text-xl font-semibold text-base44-primary">Busca Avançada</h3>
            <p className="mt-2 text-base44-gray-700">Tecnologia de ponta para localizar ativos em qualquer lugar.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md rounded-lg p-6 shadow-glass border border-base44-gray-200 text-center">
            <h3 className="text-xl font-semibold text-base44-primary">Relatório Completo</h3>
            <p className="mt-2 text-base44-gray-700">Documentação detalhada com validade jurídica para seu processo.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md rounded-lg p-6 shadow-glass border border-base44-gray-200 text-center">
            <h3 className="text-xl font-semibold text-base44-primary">Sigilo Absoluto</h3>
            <p className="mt-2 text-base44-gray-700">Garantia de confidencialidade em todas as etapas da investigação.</p>
          </div>
        </div>

      </div>
    </section>
  )
}