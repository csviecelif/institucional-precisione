// src/app/busca-ativos/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BriefcaseBusiness,
  Building,
  CheckCircle2,
  Eye,
  Gavel,
  Lock,
  Rocket,
  Search,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const floatingNavClasses =
  'group relative inline-flex min-h-[3.25rem] items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/8 px-7 py-3 text-[11px] font-medium uppercase tracking-[0.25em] text-white/90 shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-500 ease-out hover:border-white/30 hover:bg-white/12 hover:text-white hover:shadow-xl hover:shadow-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

const floatingNavHighlightClasses =
  'absolute inset-0 -z-10 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100'

const heroNavLinks = [
  { href: '/contato', label: 'Contato' },
  { href: '/sobre-nos', label: 'Sobre nós' },
]

const serviceLinks = [
  { href: '/busca-ativos', label: 'Busca de Bens' },
  { href: '/due-diligence', label: 'Due Diligence' },
  { href: '/localizacao-rapida', label: 'Localização Rápida' },
  { href: '/ocultacao-patrimonio', label: 'Ocultação de Patrimônio' },
]

export const metadata: Metadata = {
  title: 'Busca de Ativos Patrimoniais | Precisione',
  description:
    'Identifique e localize bens de forma rápida e segura. Relatórios patrimoniais completos para fortalecer pedidos de cobrança e execução.',
}

const problemItems = [
  {
    title: 'Dificuldade na localização direta de bens do devedor',
    description:
      'Encontrar e comprovar a existência de bens em nome do devedor pode ser um desafio complexo. Muitas vezes, os ativos não são facilmente rastreáveis, exigindo investigação aprofundada para garantir que todos os recursos sejam identificados.',
  },
  {
    title: 'Limitações dos meios tradicionais e lentidão judicial',
    description:
      'Ferramentas padrão de busca patrimonial, como BacenJud e Renajud, costumam demorar ou retornar resultados insuficientes. Essa demora compromete a eficácia da recuperação de crédito e prolonga processos judiciais.',
  },
  {
    title: 'Falta de informações estratégicas para fortalecer o pedido de execução',
    description:
      'Sem dados completos e bem fundamentados, o pedido de execução pode ser frágil e facilmente contestado. Informações precisas são essenciais para construir um caso sólido e aumentar as chances de um resultado favorável.',
  },
]

type HighlightItem = {
  title: string
  description: string
  icon: LucideIcon
}

const methodologyItems: HighlightItem[] = [
  {
    title: 'Localização do Target',
    description:
      'Identificação precisa do alvo, seja pessoa física ou jurídica, validando informações cadastrais e societárias.',
    icon: Search,
  },
  {
    title: 'Busca de Bens',
    description:
      'Localização de veículos, imóveis, participações societárias e outros ativos registráveis em nome do investigado.',
    icon: Building,
  },
  {
    title: 'Histórico Profissional',
    description:
      'Levantamento da trajetória profissional, vínculos empregatícios e fontes de renda para uma análise financeira completa.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Inteligência Processual',
    description:
      'Análise completa do histórico judicial e administrativo, identificando litígios e passivos que possam impactar o patrimônio.',
    icon: Gavel,
  },
  {
    title: 'Indicativos de Ocultação',
    description:
      'Identificação de padrões suspeitos, como blindagem patrimonial e uso de laranjas, para desvendar fraudes.',
    icon: Eye,
  },
  {
    title: 'Compliance',
    description:
      'Verificação de sanções e restrições em listas de observância nacionais e internacionais para garantir conformidade legal.',
    icon: CheckCircle2,
  },
]

const benefitItems: HighlightItem[] = [
  {
    title: 'Segurança Jurídica',
    description:
      'Relatórios elaborados para serem utilizados como prova em processos judiciais, seguindo requisitos legais e garantindo validade das informações.',
    icon: ShieldCheck,
  },
  {
    title: 'Agilidade e Eficiência',
    description:
      'Processo otimizado para entregar relatórios completos em prazos reduzidos, sem comprometer a qualidade das análises.',
    icon: Rocket,
  },
  {
    title: 'Confidencialidade Absoluta',
    description:
      'Tratamento sigiloso de dados, com protocolos alinhados à LGPD e infraestrutura de segurança dedicada à proteção das informações.',
    icon: Lock,
  },
]

export default function BuscaAtivosPage() {
  return (
    <div className="bg-base44-gray-50 text-base44-gray-900">
      <section className="relative flex items-center overflow-visible border-b border-base44-primary/15 bg-[#0a1c2e] py-12 text-base44-primary-foreground md:py-16 min-h-[45vh] max-h-[55vh]">
        <div className="absolute inset-0 opacity-90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,63,103,0.45),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,28,46,0.95)_0%,rgba(17,42,66,0.88)_55%,rgba(12,30,49,0.85)_100%)]" />
        </div>

        <div className="absolute right-0 top-10 z-20 flex items-stretch gap-3 px-4 sm:top-12 sm:gap-4 md:right-2 md:px-0 lg:right-4 xl:right-6">
          {heroNavLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={`${floatingNavClasses} h-full`}>
              <span className="relative z-10 flex items-center gap-2">{label}</span>
              <div className={floatingNavHighlightClasses} />
            </Link>
          ))}

          <div className="group/dropdown relative flex h-full items-stretch">
            <Button
              type="button"
              variant="outline"
              className={`${floatingNavClasses} h-full`}
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="relative z-10 flex items-center gap-2">
                Serviços
                <svg
                  className="h-1.5 w-2.5 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 10 6"
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
              <div className={floatingNavHighlightClasses} />
            </Button>

            <div className="pointer-events-none absolute left-0 top-full h-3 w-full group-hover/dropdown:pointer-events-auto" />

            <div
              role="menu"
              aria-label="Serviços disponíveis"
              className="pointer-events-none absolute right-0 top-[calc(100%+8px)] z-[100] w-64 origin-top-right scale-95 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[rgba(20,35,60,0.96)] to-[rgba(15,27,46,0.96)] opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.45),0_0_1px_rgba(255,255,255,0.08)_inset] backdrop-blur-2xl transition-all duration-400 ease-\[cubic-bezier(0.34,1.4,0.64,1)\] group-hover/dropdown:pointer-events-auto group-hover/dropdown:translate-y-0 group-hover/dropdown:scale-100 group-hover/dropdown:opacity-100 group-focus-within/dropdown:pointer-events-auto group-focus-within/dropdown:translate-y-0 group-focus-within/dropdown:scale-100 group-focus-within/dropdown:opacity-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50" />

              <div className="relative p-3">
                {serviceLinks.map(({ href, label }, i) => (
                  <Link
                    key={href}
                    href={href}
                    role="menuitem"
                    style={{ transitionDelay: `${i * 50}ms` }}
                    className="group/item relative mb-1.5 flex items-center gap-2.5 overflow-hidden rounded-xl border border-white/25 bg-white/12 px-3 py-2 text-[12px] text-white/85 opacity-0 translate-y-3 backdrop-blur-sm transition-all duration-400 ease-out last:mb-0 hover:border-white/35 hover:bg-white/18 hover:translate-x-1 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent group-hover/dropdown:translate-y-0 group-hover/dropdown:opacity-100 group-focus-within/dropdown:translate-y-0 group-focus-within/dropdown:opacity-100"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-white/20">
                      <svg
                        className="h-2.5 w-2.5 text-white/80 transition-colors duration-300 group-hover/item:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    <span className="relative flex-1 font-medium transition-colors duration-300 group-hover/item:text-white">
                      {label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-white/70 to-transparent transition-all duration-500 group-hover/item:w-full" />
                    </span>

                    <div className="absolute right-0 top-0 h-full w-20 translate-x-full bg-gradient-to-l from-white/25 to-transparent transition-transform duration-600 ease-out group-hover/item:translate-x-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-16 flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:mt-20 sm:px-6 lg:mt-24 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Busca de Ativos Patrimoniais
          </h1>
          <p className="max-w-3xl text-base text-base44-secondary/90 sm:text-lg">
            Identifique e localize bens de forma rápida e segura. Obtenha as informações necessárias para proteger seus
            interesses em processos judiciais, negociações ou recuperações de crédito.
          </p>
        </div>
      </section>

      <section className="border-b border-base44-primary/15 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-[0.2em] text-base44-primary md:text-4xl">
            O Problema...
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {problemItems.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col border-2 border-base44-primary/20 bg-base44-gray-50 p-8"
              >
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-base44-primary">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-base44-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-base44-primary/15 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-extrabold uppercase tracking-[0.2em] text-base44-primary md:text-4xl">
              Metodologia
            </h3>
            <p className="mt-6 text-lg text-base44-gray-600">
              Nossa metodologia combina tecnologia de ponta e análise especializada para mapear o patrimônio de pessoas
              físicas e jurídicas de forma abrangente e discreta.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {methodologyItems.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="flex flex-col items-center border-2 border-base44-primary/20 bg-white p-8 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-base44-primary/30 bg-base44-secondary text-base44-primary">
                  <Icon className="h-8 w-8" aria-hidden />
                </div>
                <h4 className="mt-6 text-xl font-extrabold uppercase tracking-tight text-base44-primary">{title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-base44-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-base44-primary/15 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-3xl font-extrabold uppercase tracking-[0.2em] text-base44-primary md:text-4xl">
            Benefícios e Diferenciais da Precisione
          </h3>
          <div className="mt-12 space-y-10">
            {benefitItems.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="flex items-start gap-6 border-b border-base44-primary/20 pb-8 last:border-b-0 last:pb-0"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-base44-primary/30 bg-base44-secondary text-base44-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold uppercase tracking-tight text-base44-primary">{title}</h4>
                  <p className="mt-2 text-base text-base44-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-base44-primary/10 bg-base44-primary py-16 text-base44-primary-foreground md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-[0.2em] md:text-4xl">
            Solicite uma Análise Técnica Preliminar
          </h2>
          <p className="mt-6 text-lg text-base44-secondary">
            Não deixe que a falta de informações prejudique seus interesses. Vamos mapear os ativos que podem ser
            executados com segurança e rapidez.
          </p>
          <Link href="/contato" className="mt-8 inline-block">
            <Button
              size="lg"
              className="bg-white text-base44-primary hover:bg-base44-secondary hover:text-base44-primary"
            >
              Solicitar Proposta Customizada
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
