// src/app/due-diligence/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileText,
  Gavel,
  Landmark,
  Lock,
  ShieldCheck,
  Users,
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
  title: 'Due Diligence e Background Check | Precisione',
  description:
    'Mitigue riscos reputacionais, jurídicos e financeiros com relatórios completos de integridade. Garantimos segurança para parcerias, contratações e decisões estratégicas.',
}

const problemItems = [
  {
    title: 'Danos à Reputação',
    description:
      'Associar-se a empresas ou executivos com histórico questionável pode manchar a imagem da sua operação e afastar clientes estratégicos.',
  },
  {
    title: 'Perdas Financeiras',
    description:
      'Parcerias com organizações insolventes ou envolvidas em fraudes geram prejuízos diretos, litígios caros e oportunidades perdidas.',
  },
  {
    title: 'Riscos de Compliance',
    description:
      'A falta de diligência prévia pode resultar em violações de leis anticorrupção e sanções severas, comprometendo toda a operação.',
  },
]

type HighlightItem = {
  title: string
  description: string
  icon: LucideIcon
}

const methodologyItems: HighlightItem[] = [
  {
    title: 'Análise Societária e Reputacional',
    description:
      'Mapeamento completo da estrutura societária, beneficiários finais e histórico reputacional na mídia e no mercado.',
    icon: Building2,
  },
  {
    title: 'Verificação de Litígios',
    description:
      'Pesquisa em todas as esferas judiciais para identificar processos capazes de gerar riscos financeiros ou reputacionais.',
    icon: Gavel,
  },
  {
    title: 'Análise Financeira',
    description:
      'Consulta a registros de crédito, falências, protestos e recuperações judiciais para avaliar a saúde financeira.',
    icon: Landmark,
  },
  {
    title: 'Compliance e Listas Restritivas',
    description:
      'Verificação em listas de sanções nacionais e internacionais, além da identificação de Pessoas Politicamente Expostas.',
    icon: ShieldCheck,
  },
  {
    title: 'Background Check de Executivos',
    description:
      'Validação de antecedentes criminais, histórico profissional, referências e credenciais acadêmicas de indivíduos-chave.',
    icon: Users,
  },
  {
    title: 'Relatório Consolidado',
    description:
      'Entrega de dossiê estruturado com classificação de riscos, evidências e recomendações para apoiar decisões estratégicas.',
    icon: FileText,
  },
]

const benefitItems: HighlightItem[] = [
  {
    title: 'Decisão Estratégica com Confiança',
    description:
      'Transformamos dados brutos em inteligência acionável, garantindo clareza para avançar ou recusar uma negociação.',
    icon: BadgeCheck,
  },
  {
    title: 'Confidencialidade e Ética',
    description:
      'Atuação em conformidade com a LGPD e melhores práticas de mercado, preservando sigilo e segurança da informação.',
    icon: Lock,
  },
  {
    title: 'Equipe Sênior Multidisciplinar',
    description:
      'Consultores com experiência em finanças, direito e investigação, entregando análises profundas e contextualizadas.',
    icon: ShieldCheck,
  },
]

export default function DueDiligencePage() {
  return (
    <div className="bg-base44-gray-50 text-base44-gray-900">
      <section className="relative overflow-hidden border-b border-base44-primary/15 bg-[#0a1c2e] py-24 text-base44-primary-foreground md:py-32">
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

              <div className="relative border-t border-white/25 bg-white/12 px-3 py-1.5 backdrop-blur-sm">
                <p className="text-center text-[8px] font-medium uppercase tracking-[0.35em] text-white/60">
                  Precisione • 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-base44-secondary">
            Serviços
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Due Diligence e Background Check
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-base44-secondary/90 sm:text-xl">
            Mitigue riscos e tome decisões com confiança. Investigamos profundamente parceiros, fornecedores e executivos
            para garantir integridade, conformidade e segurança nas suas operações estratégicas.
          </p>
        </div>
      </section>

      <section className="border-b border-base44-primary/15 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-[0.2em] text-base44-primary md:text-4xl">
            O Problema
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
              Nossa abordagem combina tecnologia, fontes exclusivas e análise humana especializada para entregar uma visão
              completa e objetiva sobre cada relacionamento estratégico.
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
            Benefícios e Diferenciais
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
            Proteja seu negócio. Aja com precisão.
          </h2>
          <p className="mt-6 text-lg text-base44-secondary">
            Entre em contato e descubra como nossa due diligence garante segurança para contratos, investimentos e
            contratações-chave.
          </p>
          <Link href="/contato" className="mt-8 inline-block">
            <Button
              size="lg"
              className="bg-white text-base44-primary hover:bg-base44-secondary hover:text-base44-primary"
            >
              Fale com um Especialista
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
