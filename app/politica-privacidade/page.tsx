import FloatingNav from '@/components/FloatingNav'
import { createPageMetadata } from '@/lib/seo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre-nos', label: 'Sobre nós' },
]

const serviceLinks = [
  { href: '/busca-ativos', label: 'Busca de Bens' },
  { href: '/due-diligence', label: 'Due Diligence' },
  { href: '/localizacao-rapida', label: 'Localização Rápida' },
  { href: '/ocultacao-patrimonio', label: 'Ocultação de Patrimônio' },
]

const sections = [
  {
    title: '1. Quem somos',
    body: [
      'Esta Política de Privacidade descreve como nós coletamos, utilizamos e protegemos dados pessoais no contexto das nossas atividades de investigação patrimonial, due diligence e consultoria estratégica.',
      'O tratamento de dados é realizado em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD) e demais normas aplicáveis ao exercício de nossa atividade econômica.',
    ],
  },
  {
    title: '2. Dados pessoais coletados',
    body: [
      'Coletamos dados fornecidos diretamente por clientes e prospects (nome, cargo, e-mail, telefone, empresa, contexto do projeto) e dados obtidos a partir de fontes públicas ou privadas legítimas, sempre com base em autorizações legais e contratuais compatíveis com o nosso objeto social.',
    ],
  },
  {
    title: '3. Uso e compartilhamento',
    body: [
      'Os dados são utilizados para análise patrimonial, elaboração de relatórios técnicos, recomendações estratégicas, diligências reputacionais, compliance e suporte consultivo.',
],
  },
  {
    title: '4. Retenção e segurança',
    body: [
      'Mantemos os dados pelo período necessário para cumprimento do contrato, obrigações legais ou exercício regular de direitos. Depois disso, realizamos descarte seguro ou anonimização.',
],
  },
  {
    title: '5. Direitos dos titulares',
    body: [
      'Os titulares podem solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade ou informação sobre compartilhamento, bem como revogar consentimentos quando aplicável.',
      'Pedidos devem ser enviados pelo formulário indicado na seção “Contato”.',
    ],
  }
]

export const metadata = createPageMetadata({
  title: 'Política de Privacidade - Precisione',
  description: 'Conheça as diretrizes de privacidade e proteção de dados da Precisione Inteligência Patrimonial.',
  canonicalPath: '/politica-privacidade',
})

export default function PoliticaPrivacidadePage() {
  return (
    <div className="bg-base44-gray-50 text-base44-gray-900">
      <section className="relative overflow-visible border-b border-base44-primary/15 bg-[#0a1c2e] py-16 text-base44-primary-foreground md:py-20">
        <div className="absolute inset-0 opacity-90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,63,103,0.4),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,28,46,0.95)_0%,rgba(17,42,66,0.88)_55%,rgba(12,30,49,0.85)_100%)]" />
        </div>
        <div className="relative mx-auto flex w-full max-w-5xl justify-center px-4 sm:px-6 lg:px-8">
          <FloatingNav
            navLinks={navLinks}
            serviceLinks={serviceLinks}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          />
        </div>
        <div className="relative mx-auto mt-10 max-w-4xl px-4 text-center sm:mt-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Política de Privacidade</h1>
          <p className="mt-4 text-base text-base44-secondary/90 sm:text-lg">
            Transparência no uso e proteção de dados é um dos pilares da Precisione. Esta política explica como tratamos
            informações pessoais em nossas atividades de inteligência patrimonial, consultoria e diligências especializadas.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 rounded-3xl border border-base44-primary/15 bg-white/95 p-6 shadow-diffuse sm:p-10">
            {sections.map(({ title, body }) => (
              <article key={title} className="space-y-4">
                <h2 className="text-xl font-semibold text-base44-primary">{title}</h2>
                {body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-base44-gray-700">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

