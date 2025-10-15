import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Building2, Headset, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'

const floatingNavClasses =
  'group relative inline-flex min-h-[3.25rem] items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/8 px-7 py-3 text-[11px] font-medium uppercase tracking-[0.25em] text-white/90 shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-500 ease-out hover:border-white/30 hover:bg-white/12 hover:text-white hover:shadow-xl hover:shadow-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

const floatingNavHighlightClasses =
  'absolute inset-0 -z-10 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100'

const contactNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre-nos', label: 'Sobre nós' },
]

const serviceLinks = [
  { href: '/busca-ativos', label: 'Busca de Bens' },
  { href: '/due-diligence', label: 'Due Diligence' },
  { href: '/localizacao-rapida', label: 'Localização Rápida' },
  { href: '/ocultacao-patrimonio', label: 'Ocultação de Patrimônio' },
]

const contactHighlights = [
  {
    icon: Mail,
    title: 'Envie um e-mail',
    description: 'contato@precisione.com.br',
    link: 'mailto:contato@precisione.com.br',
    cta: 'Abrir e-mail seguro',
  },
  {
    icon: Headset,
    title: 'Atendimento confidencial',
    description: 'Canal direto para equipes jurídicas, conselhos e áreas de risco.',
    link: 'https://wa.me/5541984300319?text=Olá!%20Gostaria%20de%20iniciar%20um%20projeto%20com%20a%20Precisione.',
    cta: 'Conversar no WhatsApp',
  },
  {
    icon: Clock,
    title: 'Horário de atendimento',
    description: 'Segunda a sexta-feira, das 9h às 19h. Plantões sob demanda.',
  },
  {
    icon: MapPin,
    title: 'Operações nacionais',
    description: 'QG em Curitiba e São Paulo, com cobertura em todas as capitais via rede proprietária.',
  },
]

export default function ContactPage() {
  return (
    <div className="bg-base44-gray-50 text-base44-gray-900">
      <section className="relative overflow-hidden border-b border-base44-primary/15 bg-[#0a1c2e] py-24 text-base44-primary-foreground md:py-32">
        <div className="absolute inset-0 opacity-90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,63,103,0.45),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,28,46,0.95)_0%,rgba(17,42,66,0.88)_55%,rgba(12,30,49,0.85)_100%)]" />
        </div>
        <div className="absolute right-0 top-10 z-20 flex items-stretch gap-3 px-4 sm:top-12 sm:gap-4 md:right-2 md:px-0 lg:right-4 xl:right-6">
          {contactNavLinks.map(({ href, label }) => (
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

              <div className="relative border-t border-white/25 bg-white/12 px-3 py-1.5 backdrop-blur-sm">
                <p className="text-center text-[8px] font-medium uppercase tracking-[0.35em] text-white/60">
                  Precisione • 2025
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-base44-secondary">
            Confidencialidade de ponta a ponta
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Fale com a Precisione
          </h1>
          <p className="max-w-3xl text-base text-base44-secondary/90 sm:text-lg">
            Conecte-se com nossos especialistas para estruturar investigações patrimoniais, due diligence e análises de
            risco sob medida para sua operação.
          </p>
        </div>
      </section>

      <section className="border-b border-base44-primary/10 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr,1.15fr]">
            <div className="space-y-8">
              <div className="rounded-3xl border border-base44-primary/15 bg-base44-gray-50 p-8 shadow-diffuse">
                <div className="mb-8 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-base44-primary/30 bg-base44-secondary text-base44-primary">
                    <Building2 className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-base44-primary">Célula estratégica Precisione</h2>
                    <p className="mt-2 text-sm text-base44-gray-600">
                      Gestores seniores dedicados, com canais criptografados e SLAs definidos conforme a criticidade do caso.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  {contactHighlights.map(({ icon: Icon, title, description, link, cta }) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-base44-primary/10 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-base44-primary/25 hover:shadow-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-base44-primary/10 text-base44-primary">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
                        <div className="flex-1">
                          <p className="text-base font-semibold text-base44-primary">{title}</p>
                          <p className="mt-2 text-sm text-base44-gray-600">{description}</p>
                          {link && cta && (
                            <Link
                              href={link}
                              className="mt-3 inline-flex items-center text-sm font-semibold text-base44-primary hover:text-base44-primary-light"
                              target={link.startsWith('http') ? '_blank' : undefined}
                              rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {cta}
                              <span className="ml-2 text-lg leading-none">↗</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              id="contato-formulario"
              className="rounded-3xl border border-base44-primary/15 bg-white/95 p-8 shadow-diffuse backdrop-blur"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-extrabold text-base44-primary">Envie sua mensagem confidencial</h2>
                <p className="mt-2 text-sm text-base44-gray-600">
                  Responderemos em até 1 dia útil com a designação de um gestor dedicado. Solicitações urgentes recebem
                  priorização imediata.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
