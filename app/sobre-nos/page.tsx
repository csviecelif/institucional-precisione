import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Shield, Lightbulb, Handshake, Globe, Network, Award } from 'lucide-react'

const floatingNavClasses =
  'group relative inline-flex min-h-[3.25rem] items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/8 px-7 py-3 text-[11px] font-medium uppercase tracking-[0.25em] text-white/90 shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-500 ease-out hover:border-white/30 hover:bg-white/12 hover:text-white hover:shadow-xl hover:shadow-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

const floatingNavHighlightClasses =
  'absolute inset-0 -z-10 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100'

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
      <section className="relative flex items-center overflow-visible border-b border-base44-primary/15 bg-[#0a1c2e] py-12 text-base44-primary-foreground md:py-16 min-h-[45vh] max-h-[55vh]">
        <div className="absolute inset-0 opacity-90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,63,103,0.45),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(10,28,46,0.95)_0%,rgba(17,42,66,0.88)_55%,rgba(12,30,49,0.85)_100%)]" />
        </div>
        <div className="absolute right-0 top-10 z-20 flex items-stretch gap-3 px-4 sm:top-12 sm:gap-4 md:right-2 md:px-0 lg:right-4 xl:right-6">
          {aboutNavLinks.map(({ href, label }) => (
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
                    style={{
                      transitionDelay: `${i * 50}ms`,
                    }}
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
            Sobre a Precisione
          </h1>
          <p className="max-w-3xl text-base text-base44-secondary/90 sm:text-lg">
            Nascemos para fortalecer estratégias jurídicas e corporativas com inteligência patrimonial de elite. Nossa
            equipe multidisciplinar opera com protocolos confidenciais, tecnologia proprietária e governança integral de dados.
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
