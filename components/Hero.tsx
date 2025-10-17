'use client'

import Link from 'next/link'
import SectorCards from '@/components/SectorCards'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export type SectorCardItem = {
  title: string
  description: string
}

const serviceLinks = [
  { href: '/busca-ativos', label: 'Busca de Bens' },
  { href: '/due-diligence', label: 'Due Diligence' },
  { href: '/localizacao-rapida', label: 'Localização Rápida' },
  { href: '/ocultacao-patrimonio', label: 'Ocultação de Patrimônio' },
]

const floatingNavClasses =
  'group relative inline-flex min-h-[3.25rem] items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/8 px-7 py-3 text-[11px] font-medium uppercase tracking-[0.25em] text-white/90 shadow-lg shadow-black/20 transition-all duration-500 ease-out hover:border-white/30 hover:bg-white/12 hover:text-white hover:shadow-xl hover:shadow-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

const floatingNavHighlightClasses =
  'absolute inset-0 -z-10 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100'

interface HeroProps {
  sectors: SectorCardItem[]
}

export default function Hero({ sectors }: HeroProps) {
  return (
    <section className="relative isolate flex min-h-[80vh] flex-col justify-center overflow-hidden bg-[#0a1c2e] text-white md:min-h-[90vh]">
      <Image
        src="/bkg-preci.svg"
        alt="Precisione - analise patrimonial"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="z-0 object-cover [object-position:50%_12%]"
      />

      <div className="absolute right-0 top-10 z-20 flex items-stretch gap-3 px-4 sm:top-12 sm:gap-4 md:right-2 md:px-0 lg:right-4 xl:right-6">
        <Link
          href="/sobre-nos"
          className={`${floatingNavClasses} flex h-full items-center`}
        >
          <span className="relative z-10 flex items-center gap-2">Sobre Nós</span>
          <div className={floatingNavHighlightClasses} />
        </Link>

        <Link
          href="/contato"
          className={`${floatingNavClasses} flex h-full items-center`}
        >
          <span className="relative z-10 flex items-center gap-2">Contato</span>
          <div className={floatingNavHighlightClasses} />
        </Link>

        <div className="group/dropdown relative flex h-full items-stretch">
          <Button
            type="button"
            variant="outline"
            aria-haspopup="true"
            aria-expanded="false"
            className={`${floatingNavClasses} h-full`}
          >
            <span className="relative z-10 flex items-center gap-2">
              SERVIÇOS
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
            className="pointer-events-none absolute right-0 top-[calc(100%+8px)] z-[100] w-64 origin-top-right scale-95 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[rgba(20,35,60,0.96)] to-[rgba(15,27,46,0.96)] opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.45),0_0_1px_rgba(255,255,255,0.08)_inset] transition-all duration-400 ease-\[cubic-bezier(0.34,1.4,0.64,1)\] group-hover/dropdown:pointer-events-auto group-hover/dropdown:translate-y-0 group-hover/dropdown:scale-100 group-hover/dropdown:opacity-100 group-focus-within/dropdown:pointer-events-auto group-focus-within/dropdown:translate-y-0 group-focus-within/dropdown:scale-100 group-focus-within/dropdown:opacity-100"
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
                  className="group/item relative mb-1.5 flex items-center gap-2.5 overflow-hidden rounded-xl border border-white/25 bg-white/12 px-3 py-2 text-[12px] text-white/85 opacity-0 translate-y-3 transition-all duration-400 ease-out last:mb-0 hover:border-white/35 hover:bg-white/18 hover:translate-x-1 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent group-hover/dropdown:translate-y-0 group-hover/dropdown:opacity-100 group-focus-within/dropdown:translate-y-0 group-focus-within/dropdown:opacity-100"
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

            <div className="relative border-t border-white/25 bg-white/12 px-3 py-1.5">
              <p className="text-center text-[8px] font-medium uppercase tracking-[0.35em] text-white/60">
                Precisione • 2025
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-4 pb-16 pt-40 md:pt-52 sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="mt-20 max-w-3xl text-4xl font-bold leading-tight drop-shadow-[0_6px_12px_rgba(0,0,0,0.45)] sm:text-5xl md:mt-24 md:text-6xl">
            Precisão para localizar ativos e reduzir riscos
          </h1>
          <p className="mt-4 text-lg text-white/90 drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
            Atuamos como parceiro de:
          </p>

          <div className="mt-12 w-full">
            <SectorCards items={sectors} />
          </div>
        </div>
      </div>
    </section>
  );
}
