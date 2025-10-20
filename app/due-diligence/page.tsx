// src/app/due-diligence/page.tsx
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
import { createPageMetadata } from '@/lib/seo'
import FloatingNav from '@/components/FloatingNav'

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

export const metadata = createPageMetadata({
  title: 'Due Diligence e Background Check com Rigor Jurídico',
  description:
    'Due diligence e background check com análises societárias, reputacionais e financeiras para mitigar riscos de compliance nas decisões.',
  canonicalPath: '/due-diligence',
})

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
      <section className="relative flex items-center overflow-visible border-b border-base44-primary/15 bg-[#0a1c2e] py-12 text-base44-primary-foreground md:py-16 min-h-[45vh] max-h-[55vh]">
        <div className="absolute inset-0 opacity-90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,63,103,0.45),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,28,46,0.95)_0%,rgba(17,42,66,0.88)_55%,rgba(12,30,49,0.85)_100%)]" />
        </div>

        <div className="absolute left-1/2 top-10 z-20 w-full max-w-[18rem] -translate-x-1/2 px-4 sm:top-12 sm:max-w-md md:left-auto md:right-2 md:max-w-none md:translate-x-0 md:px-0 lg:right-4 xl:right-6">
          <FloatingNav navLinks={heroNavLinks} serviceLinks={serviceLinks} className="sm:justify-end" />
        </div>

        <div className="relative mx-auto mt-16 flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:mt-20 sm:px-6 lg:mt-24 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Due Diligence e Background Check
          </h1>
          <p className="max-w-3xl text-base text-base44-secondary/90 sm:text-lg">
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
