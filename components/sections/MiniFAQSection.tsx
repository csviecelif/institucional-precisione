'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus } from 'lucide-react'

export default function MiniFAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: "Qual o prazo para entrega dos relatórios?",
      answer: "O prazo varia conforme o serviço. Para Localização Rápida, entre 4 e 6 horas. Busca de Bens, 1-3 dias úteis. Due Diligence, 2-4 dias úteis. Ocultação de Patrimônio é variável e sob consulta."
    },
    {
      question: "A consulta é 100% sigilosa?",
      answer: "Sim, garantimos total confidencialidade em todas as etapas da investigação. Seu caso é tratado com a máxima discrição e segurança."
    },
    {
      question: "Quais documentos preciso enviar para iniciar?",
      answer: "Geralmente, precisamos de informações básicas sobre a pessoa ou empresa a ser investigada. Detalhes específicos serão solicitados por nosso especialista após o primeiro contato."
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* FAQ Container */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800 rounded-xl p-8 lg:p-10 shadow-xl border border-slate-700">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-slate-300 text-base lg:text-lg leading-relaxed">
                Respostas rápidas para as suas principais dúvidas sobre investigação patrimonial.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openItems.includes(index)
                return (
                  <div 
                    key={index} 
                    className="bg-slate-700/50 rounded-lg border border-slate-600/40 hover:border-slate-500/60 transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="flex justify-between items-center w-full text-left p-5 lg:p-6 group hover:bg-slate-600/30 transition-all duration-300"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className="text-white font-semibold text-base lg:text-lg pr-4 group-hover:text-blue-300 transition-colors duration-300">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-all duration-300">
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5 text-white" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 text-white" />
                        )}
                      </div>
                    </button>
                    
                    <div 
                      id={`faq-answer-${index}`}
                      className={`transition-all duration-400 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                        <div className="h-px bg-slate-600 mb-4"></div>
                        <p className="text-slate-300 text-sm lg:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Footer CTA */}
            <div className="text-center mt-8 pt-6 border-t border-slate-600">
              <p className="text-slate-400 text-sm lg:text-base mb-3">
                Não encontrou sua resposta?
              </p>
              <Link 
                href="#contato"
                className="inline-flex items-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}