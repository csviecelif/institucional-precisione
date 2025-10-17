// src/components/sections/ServicesSection.tsx
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  price: string;
  description: string;
  link: string;
  deliverables?: string[];
  badge?: string;
  time?: string;
  subtitle?: string;
}

export default function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossas Soluções de Investigação
          </h2>
          <p className="text-lg text-gray-600">
            Descubra a verdade e proteja seus interesses com nossos serviços especializados para o setor jurídico
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isRecommended = service.badge === "Mais Solicitado";
            
            return (
              <div 
                key={index} 
                className={`relative bg-white rounded-lg border-2 p-6 flex flex-col h-full transition-all duration-200 hover:shadow-lg ${
                  isRecommended 
                    ? 'border-blue-500 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Badge */}
                {isRecommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                      Recomendado para Advogados
                    </span>
                  </div>
                )}

                {/* Service Content */}
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <p className="text-sm text-gray-600 mb-3">
                        {service.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-blue-600">
                      {service.price}
                    </div>
                    {service.time && (
                      <div className="text-sm text-gray-500 mt-1">
                        Tempo estimado: {service.time}
                      </div>
                    )}
                  </div>

                  {/* Deliverables */}
                  {service.deliverables && service.deliverables.length > 0 && (
                    <div className="flex-grow mb-6">
                      <ul className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link 
                      href={service.link} 
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                    >
                      Solicitar Orçamento
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
