import type { Metadata } from 'next'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Building2, FileSearch, FileText, History, Lock, Scale, Shield, UsersRound, Wallet } from 'lucide-react'
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
  title: 'Ocultação de Patrimônio | Precisione',
  description:
    'Investigação patrimonial avançada para identificar laranjas, transferências suspeitas e blindagem de bens. Relatórios probatórios para execuções efetivas.',
}

const problemItems = [
  {
    title: 'Execuções Estagnadas',
    description:
      'Sem provas de ocultação, o advogado enfrenta dificuldades para convencer o juiz a deferir bloqueios e a execução segue paralisada.',
  },
  {
    title: 'Clientes Pressionando por Resultados',
    description:
      'A ausência de ativos identificados aumenta a insatisfação do cliente e coloca em risco a relação de confiança com o escritório.',
  },
  {
    title: 'Fundamentação Frágil das Medidas Urgentes',
    description:
      'Pedidos de indisponibilidade ou arresto sem um dossiê sólido tendem a ser indeferidos, enfraquecendo a estratégia processual.',
  },
]

type HighlightItem = {
  title: string
  description: string
  icon: LucideIcon
}

const methodologyItems: HighlightItem[] = [
  {
    title: 'Análise Societária',
    description:
      'Investigação completa de participações societárias do devedor e de pessoas relacionadas para localizar bens dissimulados.',
    icon: Building2,
  },
  {
    title: 'Investigação Imobiliária',
    description:
      'Mapeamento de imóveis atuais e históricos, com análise de matrículas e transferências suspeitas.',
    icon: FileSearch,
  },
  {
    title: 'Levantamento de Vínculos',
    description:
      'Identificação de conexões familiares e empresariais que sustentam laranjas e testas de ferro.',
    icon: UsersRound,
  },
  {
    title: 'Inteligência OSINT',
    description:
      'Uso de técnicas avançadas de fontes abertas para descobrir evidências públicas relevantes sobre o investigado.',
    icon: Shield,
  },
  {
    title: 'Linha do Tempo de Transações',
    description:
      'Cruzamento de datas e valores para caracterizar atos de fraude à execução com base em evidências documentais.',
    icon: History,
  },
  {
    title: 'Dossiê Probatório',
    description:
      'Compilação de documentos e provas com narrativas claras para sustentar pedidos de ineficácia de negócios jurídicos.',
    icon: FileText,
  },
]

const benefitItems: HighlightItem[] = [
  {
    title: 'Segurança Jurídica',
    description:
      'Relatórios robustos e documentados, aptos a fundamentar a declaração de fraude e a reversão das transferências.',
    icon: Scale,
  },
  {
    title: 'Aumento da Efetividade',
    description:
      'Localização de bens e operações suspeitas que elevam a chance de recuperação do crédito executado.',
    icon: Wallet,
  },
  {
    title: 'Confidencialidade e Ética',
    description:
      'Atuação sigilosa e alinhada à legislação, garantindo proteção às partes envolvidas e integridade das provas.',
    icon: Lock,
  },
]

const triggerItems = [
  {
    title: 'Movimentações Patrimoniais Aceleradas',
    description:
      'Transferências de bens logo após a citação ou durante negociações de pagamento são fortes indicativos de ocultação.',
  },
  {
    title: 'Insolvência Apenas Aparente',
    description:
      'Empresas e pessoas que declararam inexistência de patrimônio, mas mantêm padrão de vida ou operações incompatíveis.',
  },
  {
    title: 'Estruturas com Laranjas e Interpostas',
    description:
      'Entrada repentina de familiares ou sócios minoritários em empresas estratégicas, sinalizando tentativa de blindagem.',
  },
]

export default function OcultacaoPatrimonioPage() {
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
            Ocultação de Patrimônio
          </h1>
          <p className="max-w-3xl text-base text-base44-secondary/90 sm:text-lg">
            Desvendamos manobras de ocultação patrimonial, identificando laranjas, transferências suspeitas e estruturas
            de blindagem para garantir a efetividade do seu crédito.
          </p>
        </div>
      </section>

      <section className="border-b border-base44-primary/15 bg-base44-gray-50 py-16 md:py-24">
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

      <section className="border-b border-base44-primary/15 bg-base44-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-[0.2em] text-base44-primary md:text-4xl">
            Quando Acionar a Investigação
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {triggerItems.map(({ title, description }) => (
              <div
                key={title}
                className="flex h-full flex-col border-2 border-base44-primary/20 bg-base44-gray-50 p-8"
              >
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-base44-primary">{title}</h3>
                <p className="mt-4 text-base leading-relaxed text-base44-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-base44-primary/15 bg-base44-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-extrabold uppercase tracking-[0.2em] text-base44-primary md:text-4xl">
              Nossa Metodologia
            </h3>
            <p className="mt-6 text-lg text-base44-gray-600">
              Aplicamos rigor técnico similar ao das grandes consultorias para entregar provas robustas e contextualizadas,
              prontas para subsidiar ações judiciais complexas.
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

      <section className="border-b border-base44-primary/15 bg-base44-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
            Proteja seu direito e recupere seu crédito
          </h2>
          <p className="mt-6 text-lg text-base44-secondary">
            Não deixe que a fraude prevaleça. Agende uma consulta e descubra como podemos reverter a blindagem patrimonial
            do devedor.
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
