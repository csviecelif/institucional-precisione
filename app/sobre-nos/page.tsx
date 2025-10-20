import { Shield, Lightbulb, Handshake, Globe, Network, Award } from 'lucide-react'
import FloatingNav from '@/components/FloatingNav'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Sobre a Precisione – Inteligência Patrimonial Especializada',
  description:
    'Conheça a equipe sênior em investigação patrimonial, origem Big Four e metodologia proprietária que garante confidencialidade e governança.',
  canonicalPath: '/sobre-nos',
})

const aboutNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/contato', label: 'Contato' },
]

const serviceLinks = [
  { href: '/busca-ativos', label: 'Busca de Bens' },
  { href: '/due-diligence', label: 'Due Diligence' },
  { href: '/localizacao-rapida', label: 'Localização Rápida' },
  { href: '/ocultacao-patrimonio', label: 'Ocultação de Patrimônio' },
]

const valuePillars = [
  {
    icon: Shield,
    title: 'Nossa Missão',
    description:
      'Entregar clareza estratégica para litígios e conselhos, unindo investigação patrimonial, análise de dados e rigor jurídico.',
  },
  {
    icon: Lightbulb,
    title: 'Origem Big Four',
    description:
      'Nossa liderança vem de experiências em Big Four, auditoria forense e inteligência corporativa — traduzidas em metodologias próprias.',
  },
  {
    icon: Handshake,
    title: 'Compromisso Executivo',
    description:
      'Atuação confidencial, prazos precisos e relatórios acionáveis que sustentam decisões críticas e blindagem jurídica.',
  },
]

const differentiators = [
  {
    icon: Globe,
    label: 'Cobertura Nacional',
    description: 'Rede investigativa presente em todas as capitais, com protocolos unificados e governança de dados.',
  },
  {
    icon: Network,
    label: 'Metodologia Proprietária',
    description: 'Combinação de OSINT avançado, análise societária, business intelligence e trabalho de campo supervisionado.',
  },
  {
    icon: Award,
    label: 'Compliance Total',
    description: 'Processos alinhados à LGPD, cadeia de custódia preservada e pareceres com respaldo jurídico.',
  },
]

export default function SobreNosPage() {
  return (
    <div className="bg-base44-gray-50 text-base44-gray-900">
      <section className="relative flex items-center overflow-visible border-b border-base44-primary/15 bg-[#0a1c2e] py-16 text-base44-primary-foreground md:py-20 min-h-[60vh]">
        <div className="absolute inset-0 opacity-90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,63,103,0.45),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(10,28,46,0.95)_0%,rgba(17,42,66,0.88)_55%,rgba(12,30,49,0.85)_100%)]" />
        </div>
        <div className="absolute left-1/2 top-6 z-20 w-full max-w-[18rem] -translate-x-1/2 px-4 sm:top-10 sm:max-w-md md:left-auto md:right-2 md:max-w-none md:translate-x-0 md:px-0 lg:right-4 xl:right-6">
          <FloatingNav navLinks={aboutNavLinks} serviceLinks={serviceLinks} className="sm:justify-end" />
        </div>

        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 pb-12 pt-36 text-center sm:px-6 sm:pt-40 lg:pt-44 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Sobre a Precisione</h1>
          <p className="max-w-3xl text-base text-base44-secondary/90 sm:text-lg">
            Nascemos para fortalecer estratégias jurídicas e corporativas com inteligência patrimonial de elite. Nossa equipe
            multidisciplinar opera com protocolos confidenciais, tecnologia proprietária e governança integral de dados.
          </p>
        </div>
      </section>

      <section className="border-b border-base44-primary/10 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-base44-primary">
                Essência estratégica
              </span>
              <h2 className="text-3xl font-extrabold text-base44-primary md:text-4xl">
                Inteligência patrimonial com DNA corporativo
              </h2>
              <p className="text-lg text-base44-gray-600">
                Atuamos com times seniores que combinam auditoria forense, direito empresarial, ciência de dados e investigação
                de campo. Cada entrega preserva cadeia de custódia, transparência jurídica e orientação consultiva.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {differentiators.map(({ icon: Icon, label, description }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-4 rounded-2xl border border-base44-primary/15 bg-base44-gray-50/60 p-6 shadow-glass"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-base44-primary/30 bg-base44-secondary text-base44-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-base44-primary">{label}</p>
                      <p className="mt-2 text-sm text-base44-gray-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-base44-primary/15 bg-base44-gray-50 p-8 shadow-diffuse">
              <div className="grid gap-8">
                {valuePillars.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="group relative overflow-hidden rounded-2xl border border-base44-primary/20 bg-white/90 p-6 transition hover:-translate-y-1 hover:border-base44-primary/30 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-base44-primary/10 text-base44-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-base44-primary">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-base44-gray-600">{description}</p>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-base44-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
