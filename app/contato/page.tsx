import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ContactForm from '@/components/forms/ContactForm'
import { ArrowUpRight, PhoneCall } from 'lucide-react'

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

export default function ContactPage() {
  return (
    <div className="bg-base44-gray-50 text-base44-gray-900">
      <section className="relative overflow-visible border-b border-base44-primary/15 bg-[#0a1c2e] py-8 text-base44-primary-foreground md:py-10">
        <div className="absolute inset-0 opacity-90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,63,103,0.45),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,28,46,0.95)_0%,rgba(17,42,66,0.88)_55%,rgba(12,30,49,0.85)_100%)]" />
        </div>
        <div className="relative mx-auto flex w-full max-w-5xl justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
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
                className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-[100] w-64 -translate-x-1/2 origin-top scale-95 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[rgba(20,35,60,0.96)] to-[rgba(15,27,46,0.96)] opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.45),0_0_1px_rgba(255,255,255,0.08)_inset] backdrop-blur-2xl transition-all duration-400 ease-[cubic-bezier(0.34,1.4,0.64,1)] group-hover/dropdown:pointer-events-auto group-hover/dropdown:-translate-x-1/2 group-hover/dropdown:translate-y-0 group-hover/dropdown:scale-100 group-hover/dropdown:opacity-100 group-focus-within/dropdown:pointer-events-auto group-focus-within/dropdown:-translate-x-1/2 group-focus-within/dropdown:translate-y-0 group-focus-within/dropdown:scale-100 group-focus-within/dropdown:opacity-100"
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
        </div>
      </section>

      <section className="border-b border-base44-primary/10 bg-base44-gray-50 py-20 md:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 sm:px-6 lg:px-8">
          <div
            id="contato-formulario"
            className="w-full max-w-[45rem] rounded-3xl border border-base44-primary/15 bg-white/95 p-6 sm:p-8 shadow-diffuse"
          >
            <h2 className="mb-6 text-center text-3xl font-extrabold text-base44-primary sm:text-4xl">Fale Conosco</h2>
            <ContactForm />
          </div>

          <aside className="w-full max-w-[45rem] rounded-3xl border border-base44-primary bg-base44-primary text-base44-primary-foreground shadow-diffuse">
            <div className="space-y-6 p-6 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-base44-primary-foreground/70">
                  Canais dedicados
                </p>
                <h2 className="mt-3 text-2xl font-extrabold">Entre em contato pelo WhatsApp se preferir</h2>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-3 text-base font-semibold">
                    <PhoneCall className="h-5 w-5" aria-hidden />
                    WhatsApp corporativo
                  </span>
                </div>
                <p className="mt-3 text-sm text-base44-primary-foreground/80">
                  Acionamos um especialista sênior assim que a solicitação é recebida. Ideal para casos urgentes e consultas estratégicas.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 w-full rounded-full border-white/50 bg-white/10 text-base44-primary-foreground hover:border-white hover:bg-white/20"
                >
                  <Link
                    href="https://wa.me/5541984300319?text=Ol%C3%A1!%20Gostaria%20de%20iniciar%20um%20projeto%20com%20a%20Precisione."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar no WhatsApp
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
