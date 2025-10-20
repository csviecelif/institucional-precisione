'use client'

import Image from 'next/image'
import FloatingNav from '@/components/FloatingNav'
import SectorCards from '@/components/SectorCards'

export type SectorCardItem = {
  title: string
  description: string
}

interface HeroProps {
  sectors: SectorCardItem[]
}

const serviceLinks = [
  { href: '/busca-ativos', label: 'Busca de Bens' },
  { href: '/due-diligence', label: 'Due Diligence' },
  { href: '/localizacao-rapida', label: 'Localização Rápida' },
  { href: '/ocultacao-patrimonio', label: 'Ocultação de Patrimônio' },
]

const heroNavLinks = [
  { href: '/sobre-nos', label: 'Sobre nós' },
  { href: '/contato', label: 'Contato' },
]

export default function Hero({ sectors }: HeroProps) {
  return (
    <section className="relative isolate flex min-h-[80vh] flex-col justify-center overflow-hidden bg-[#0a1c2e] text-white md:min-h-[90vh]">
      <Image
        src="/bkg-preci-mobile.svg"
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="z-0 object-cover md:hidden"
        aria-hidden
      />

      <Image
        src="/bkg-preci.svg"
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="z-0 hidden object-cover [object-position:50%_12%] md:block"
        aria-hidden
      />

      <div className="absolute left-1/2 top-6 z-20 w-full max-w-[18rem] -translate-x-1/2 px-4 sm:top-10 sm:max-w-md md:left-auto md:right-2 md:max-w-none md:translate-x-0 md:px-0 lg:right-4 xl:right-6">
        <FloatingNav
          navLinks={heroNavLinks}
          serviceLinks={serviceLinks}
          triggerLabel="Serviços"
          className="sm:justify-end"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-4 pb-16 pt-36 sm:px-6 sm:pt-44 md:pt-56 lg:px-8">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="mt-14 max-w-3xl text-3xl font-bold leading-tight drop-shadow-[0_6px_12px_rgba(0,0,0,0.45)] sm:mt-20 sm:text-5xl md:mt-24 md:text-6xl">
            Precisão para localizar ativos e reduzir riscos
          </h1>
          <p className="mt-4 text-base text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)] sm:text-lg">
            Atuamos como parceiro de:
          </p>

          <div className="mt-10 w-full sm:mt-12">
            <SectorCards items={sectors} />
          </div>
        </div>
      </div>
    </section>
  )
}

