import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import {
  AlarmClock,
  ArrowRight,
  BadgeCheck,
  Database,
  FileText,
  Gavel,
  GitMerge,
  PiggyBank,
  Scale,
  Shield,
  Target,
  Timer,
  UserSearch,
  Zap,
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
  title: 'Localização Rápida de Pessoas para Destravar Citações',
  description:
    'Localizamos endereços validados para acelerar citações e execuções, cruzando mais de 90 fontes e entregando relatórios prontos ao processo.',
  canonicalPath: '/localizacao-rapida',
})

const problemItems = [
  {
    title: 'Processos Parados',
    description:
      'Sem um endereço preciso, a citação não acontece. O processo fica suspenso e o cliente cobra respostas imediatas.',
  },
  {
    title: 'Custos Crescentes',
    description:
      'Cada tentativa frustrada gera novas diligências, taxas judiciais e tempo desperdiçado pela equipe.',
  },
  {
    title: 'Insegurança Jurídica',
    description:
      'A ausência de dados confiáveis compromete a efetividade da prestação jurisdicional e abre espaço para contestações futuras.',
  },
]

type HighlightItem = {
  title: string
  description: string
  icon: LucideIcon
}

const methodologyItems: HighlightItem[] = [
  {
    title: 'Análise de Dados Públicos e Privados',
    description:
      'Varredura em mais de 90 fontes, entre bases públicas, birôs de crédito e dados privados para coletar informações cadastrais.',
    icon: Database,
  },
  {
    title: 'Cruzamento Inteligente de Informações',
    description:
      'Algoritmos proprietários identificam vínculos, padrões e inconsistências para descobrir o endereço mais provável.',
    icon: GitMerge,
  },
  {
    title: 'Inteligência Humana',
    description:
      'Analistas experientes validam cada indício e confirmam o endereço com técnicas investigativas exclusivas.',
    icon: UserSearch,
  },
  {
    title: 'Qualificação de Endereços',
    description:
      'Classificação de endereços por probabilidade de sucesso para priorizar diligências eficientes.',
    icon: Target,
  },
  {
    title: 'Relatório Estruturado',
    description:
      'Dossiê organizado com fontes consultadas, endereços ranqueados e recomendações prontas para anexar aos autos.',
    icon: FileText,
  },
  {
    title: 'Conformidade com a LGPD',
    description:
      'Processos auditáveis e alinhados à legislação para proteger clientes e escritórios de questionamentos futuros.',
    icon: Shield,
  },
]

const differentiators: HighlightItem[] = [
  {
    title: 'Agilidade',
    description: 'Entrega priorizada conforme criticidade do caso, mantendo aderência às exigências processuais.',
    icon: Zap,
  },
  {
    title: 'Precisão',
    description: 'Alta taxa de êxito na primeira tentativa graças a validações cruzadas e checagens humanas.',
    icon: BadgeCheck,
  },
  {
    title: 'Economia',
    description: 'Redução drástica de custos com diligências infrutíferas e retrabalhos.',
    icon: PiggyBank,
  },
]

const lawyerBenefits = [
  {
    title: 'Desbloqueio Processual',
    description:
      'Endereços qualificados para avançar rapidamente com citações, sem depender de tentativas aleatórias.',
    icon: Gavel,
  },
  {
    title: 'Segurança Jurídica',
    description:
      'Informações validadas e em conformidade com a LGPD, evitando contestações e nulidades.',
    icon: Scale,
  },
  {
    title: 'Otimização de Recursos',
    description: 'Menos deslocamentos, menos custos e mais tempo para focar na estratégia do caso.',
    icon: AlarmClock,
  },
  {
    title: 'Ganho de Tempo',
    description: 'Equipe liberada para atuar no mérito enquanto especialistas conduzem a localização.',
    icon: Timer,
  },
]

export default function LocalizacaoRapidaPage() {
  return (
    <div className="bg-base44-gray-50 text-base44-gray-900">
      <section className="relative flex items-center overflow-visible border-b border-base44-primary/15 bg-[#0a1c2e] py-16 text-base44-primary-foreground md:py-20 min-h-[60vh]">
        <div className="absolute inset-0 opacity-90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,63,103,0.45),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,28,46,0.95)_0%,rgba(17,42,66,0.88)_55%,rgba(12,30,49,0.85)_100%)]" />
        </div>

        <div className="absolute left-1/2 top-6 z-20 w-full max-w-[18rem] -translate-x-1/2 px-4 sm:top-10 sm:max-w-md md:left-auto md:right-2 md:max-w-none md:translate-x-0 md:px-0 lg:right-4 xl:right-6">
          <FloatingNav navLinks={heroNavLinks} serviceLinks={serviceLinks} className="sm:justify-end" />
        </div>

        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 pb-12 pt-36 text-center sm:px-6 sm:pt-40 lg:pt-44 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Localização Rápida de Pessoas
          </h1>
          <p className="max-w-3xl text-base text-base44-secondary/90 sm:text-lg">
            Identificamos o paradeiro de pessoas físicas para viabilizar citações, intimações e execuções. Relatórios
            completos, prontos para anexar aos autos, transformando incerteza em ação.
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
              Nossa Metodologia
            </h3>
            <p className="mt-6 text-lg text-base44-gray-600">
              Unimos tecnologia, inteligência investigativa e conformidade legal para entregar endereços validados com
              rapidez e segurança.
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
          <div>
            <h3 className="text-3xl font-extrabold uppercase tracking-[0.2em] text-base44-primary md:text-4xl">
              Benefícios para o Advogado
            </h3>
            <ul className="mt-10 space-y-6">
              {lawyerBenefits.map(({ title, description, icon: Icon }) => (
                <li key={title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-base44-primary/30 bg-base44-secondary text-base44-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-base44-primary">{title}</p>
                    <p className="mt-2 text-base text-base44-gray-600">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16 border-t border-base44-primary/15 pt-12">
            <h4 className="text-2xl font-extrabold uppercase tracking-[0.2em] text-base44-primary">Diferenciais</h4>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {differentiators.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="flex flex-col items-start border-2 border-base44-primary/20 bg-base44-gray-50 p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-base44-primary/30 bg-base44-secondary text-base44-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h5 className="mt-4 text-lg font-semibold text-base44-primary">{title}</h5>
                  <p className="mt-2 text-sm text-base44-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-base44-primary/10 bg-base44-primary py-16 text-base44-primary-foreground md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-[0.2em] md:text-4xl">
            Dê o próximo passo para destravar seus processos
          </h2>
          <p className="mt-6 text-lg text-base44-secondary">
            Não permita que um endereço desconhecido atrase a justiça. Fale com nossos especialistas e acelere seus
            resultados.
          </p>
          <Link href="/contato" className="mt-8 inline-block">
            <Button
              size="lg"
              className="bg-white text-base44-primary hover:bg-base44-secondary hover:text-base44-primary"
            >
              Solicitar uma Análise
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
