import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ContactForm from '@/components/forms/ContactForm'
import { ArrowUpRight, PhoneCall } from 'lucide-react'
import FloatingNav from '@/components/FloatingNav'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Fale com a Precisione - Consultoria de Investigação Patrimonial',
  description:
    'Solicite proposta e inicie diagnósticos patrimoniais com a Precisione, recebendo atendimento dedicado por formulário ou WhatsApp.',
  canonicalPath: '/contato',
})

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
          <FloatingNav
            navLinks={contactNavLinks}
            serviceLinks={serviceLinks}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          />
        </div>
      </section>

      <section className="border-b border-base44-primary/10 bg-base44-gray-50 py-20 md:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 sm:px-6 lg:px-8">
          <div
            id="contato-formulario"
            className="w-full max-w-[45rem] rounded-3xl border border-base44-primary/15 bg-white/95 p-6 sm:p-8 shadow-diffuse"
          >
            <h2 className="mb-4 text-center text-3xl font-extrabold text-base44-primary sm:text-4xl">Fale Conosco</h2>
            <p className="mb-6 text-center text-sm text-base44-gray-500">
              Ao enviar seus dados você confirma que leu e concorda com a{' '}
              <Link href="/politica-privacidade" className="font-semibold text-base44-primary hover:underline">
                Política de Privacidade da Precisione
              </Link>
              .
            </p>
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
                  Acionamos um especialista sênior assim que a solicitação é recebida. Ideal para casos urgentes e
                  consultas estratégicas.
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

