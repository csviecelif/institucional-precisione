import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Building,
  BriefcaseBusiness,
  Gavel,
  Landmark,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import Hero, { type SectorCardItem } from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Precisione | Inteligência Patrimonial para Decisões Estratégicas',
  description:
    'Assessoria investigativa de alta confidencialidade para advogados, instituições financeiras e empresas. Mapemento patrimonial, due diligence e análises estratégicas com rigor técnico.',
}

const audienceSegments = [
  {
    icon: Gavel,
    title: 'Advocacia Contenciosa',
    description:
      'Suporte probatório para execuções, disputas patrimoniais e blindagem de teses com relatórios técnicos e pareceres personalizados.',
    bullets: [
      'Investigação de ocultação patrimonial complexa',
      'Produção de dossiês com validade jurídica',
      'Equipe integrada à estratégia processual',
    ],
  },
  {
    icon: Landmark,
    title: 'Instituições Financeiras',
    description:
      'Due diligence e monitoramento de riscos para operações de crédito, cobrança estratégica e recuperação de ativos.',
    bullets: [
      'Modelos investigativos escaláveis e sigilosos',
      'Monitoramento contínuo de garantias e colaterais',
      'Integração segura com times de risco e compliance',
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Corporativo & Mercados Regulados',
    description:
      'Mapeamento de contrapartes, parceiros e executivos para decisões de M&A, governança e compliance regulatório.',
    bullets: [
      'Due diligence reputacional e societária avançada',
      'Verificação de executivos e beneficiários finais',
      'Relatórios executivos para comitês e conselhos',
    ],
  },
]

const services = [
  {
    title: 'Mapeamento Patrimonial Integrado',
    description:
      'Localização de ativos móveis, imóveis, participações societárias e estruturas complexas com análise forense de riscos.',
    link: '/busca-ativos',
  },
  {
    title: 'Due Diligence & Background Check',
    description:
      'Investigação aprofundada de empresas e indivíduos para fusões, parcerias estratégicas e contratações de alto impacto.',
    link: '/due-diligence',
  },
  {
    title: 'Ocultação de Patrimônio',
    description:
      'Desarticulação de fraudes à execução, transferências suspeitas e blindagens patrimoniais com parecer técnico completo.',
    link: '/ocultacao-patrimonio',
  },
]

const methodology = [
  {
    step: '01',
    title: 'Diagnóstico Executivo',
    description:
      'Entendimento sigiloso do contexto jurídico ou corporativo, definição de escopo e KPIs de investigação.',
  },
  {
    step: '02',
    title: 'Inteligência Analítica',
    description:
      'Integração de bases restritas, técnicas de OSINT e análise humana experiente para construir hipóteses sólidas.',
  },
  {
    step: '03',
    title: 'Relatório Estratégico',
    description:
      'Entrega estruturada com evidências, recomendações acionáveis e suporte consultivo para a tomada de decisão.',
  },
]

const differentiators = [
  {
    title: 'Rigor Jurídico & Compliance',
    description:
      'Processos em conformidade com a LGPD, cadeia de custódia preservada e pareceres elaborados com visão jurídica.',
    icon: ShieldCheck,
  },
  {
    title: 'Equipe Sênior Multidisciplinar',
    description:
      'Especialistas com histórico em Big Four, investigação corporativa, direito empresarial e ciência de dados.',
    icon: Building,
  },
  {
    title: 'Tecnologia Proprietária',
    description:
      'Uso de analytics, correlação de redes e monitoramento contínuo para antecipar riscos e acelerar resultados.',
    icon: TrendingUp,
  },
  {
    title: 'Confidencialidade Absoluta',
    description:
      'Infraestrutura com governança de dados, protocolos de segurança e canais exclusivos para clientes estratégicos.',
    icon: Sparkles,
  },
]

const heroSectors: SectorCardItem[] = audienceSegments.map(({ title, description }) => ({
  title,
  description,
}))

export default function HomePage() {
  return (
    <div className="bg-base44-gray-50 text-base44-gray-900">
      <Hero sectors={heroSectors} />

      <section className="border-b border-base44-primary/10 bg-base44-gray-100 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr,0.9fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-base44-primary">
                Portfólio integrado
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-base44-primary md:text-4xl">
                Serviços concebidos para decisões críticas
              </h2>
              <p className="mt-4 text-lg text-base44-gray-600">
                Personalizamos a abordagem investigativa para cada contexto, com entregas executivas ou probatórias conforme
                a necessidade do cliente.
              </p>
              <div className="mt-8 grid gap-6">
                {services.map(({ title, description, link }) => (
                  <div key={title} className="rounded-2xl border border-base44-primary/15 bg-white p-6">
                    <h3 className="text-lg font-semibold text-base44-primary">{title}</h3>
                    <p className="mt-2 text-base text-base44-gray-600">{description}</p>
                    <Link
                      href={link}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-base44-primary hover:text-base44-primary-light"
                    >
                      Conhecer serviço
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-base44-primary/15 bg-white p-10 shadow-diffuse">
              <h3 className="text-xl font-extrabold text-base44-primary">Integração estratégica</h3>
              <p className="mt-4 text-base text-base44-gray-600">
                Operamos em modelos on-demand ou retainer para equipes jurídicas, comitês de risco e conselhos. Cada cliente
                conta com um gestor dedicado e canais de comunicação seguros.
              </p>
              <div className="mt-8 grid gap-6">
                {differentiators.map(({ title, description, icon: Icon }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-base44-primary/30 bg-base44-secondary text-base44-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-base44-primary">{title}</p>
                      <p className="mt-1 text-sm text-base44-gray-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-base44-primary/10 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-base44-primary">
              Metodologia proprietária
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-base44-primary md:text-4xl">
              Precisão investigativa com governança completa
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {methodology.map(({ step, title, description }) => (
              <div key={title} className="relative border-2 border-base44-primary/20 bg-base44-gray-50 p-8">
                <span className="absolute -top-6 left-8 rounded-full border border-base44-primary/20 bg-white px-4 py-2 text-sm font-semibold text-base44-primary">
                  {step}
                </span>
                <h3 className="mt-6 text-xl font-extrabold uppercase tracking-tight text-base44-primary">{title}</h3>
                <p className="mt-4 text-base text-base44-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-base44-primary/10 bg-base44-primary-dark/90 py-20 text-base44-primary-foreground md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Sua decisão merece inteligência de elite
          </h2>
          <p className="mt-6 text-lg text-base44-secondary">
            Fale conosco para desenhar um plano de investigação sob medida para o seu caso e contar com uma equipe
            dedicada à sua estratégia.
          </p>
        </div>
      </section>
    </div>
  )
}
