import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Building2, FileSearch, FileText, History, Lock, Scale, Shield, UsersRound, Wallet } from 'lucide-react'
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
  title: 'Investigação de Ocultação de Patrimônio Comprobatória',
  description:
    'Revelamos laranjas, transferências suspeitas e blindagens patrimoniais com dossiês probatórios que sustentam bloqueios e recuperações de crédito.',
  canonicalPath: '/ocultacao-patrimonio',
})

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

        <div className="absolute left-1/2 top-10 z-20 w-full max-w-[18rem] -translate-x-1/2 px-4 sm:top-12 sm:max-w-md md:left-auto md:right-2 md:max-w-none md:translate-x-0 md:px-0 lg:right-4 xl:right-6">
          <FloatingNav navLinks={heroNavLinks} serviceLinks={serviceLinks} className="sm:justify-end" />
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
