import { Search, FileText, CheckCircle, Clock } from "lucide-react"; // Added Clock for a potential 4th step

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: "1. Solicitação e Análise",
      description: "Você nos apresenta o caso, e nossa equipe realiza uma análise preliminar para entender suas necessidades."
    },
    {
      icon: FileText,
      title: "2. Planejamento e Coleta",
      description: "Definimos a estratégia e utilizamos nossa metodologia e fontes exclusivas para coletar todas as informações relevantes."
    },
    {
      icon: Clock,
      title: "3. Investigação",
      description: "Nossos especialistas atuam em campo e digitalmente para localizar bens e provas, com total sigilo."
    },
    {
      icon: CheckCircle,
      title: "4. Relatório e Entrega",
      description: "Entregamos um relatório detalhado e com validade jurídica em até 72h, pronto para ser utilizado."
    }
  ];

  return (
    <section aria-labelledby="how-it-works-heading" className="w-full py-20 md:py-28 lg:py-36 bg-base44-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <h2 id="how-it-works-heading" className="text-4xl font-extrabold text-base44-primary leading-tight mb-4">
          Como Funciona Nossa Investigação
        </h2>
        <p className="text-lg text-base44-gray-700 mb-12 max-w-2xl mx-auto">
          Nosso processo é transparente, eficiente e focado em entregar os resultados que você precisa com agilidade.
        </p>
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4" role="list" aria-label="Etapas do processo de investigação">
          {/* Timeline lines for larger screens */}
          <div className="hidden lg:block absolute inset-0 flex justify-around items-center pointer-events-none">
            <div className="absolute left-[calc(25%-1rem)] top-1/2 w-[calc(50%-2rem)] border-t-2 border-dashed border-base44-gray-300 -translate-y-1/2"></div>
            <div className="absolute left-[calc(50%-1rem)] top-1/2 w-[calc(50%-2rem)] border-t-2 border-dashed border-base44-gray-300 -translate-y-1/2"></div>
            <div className="absolute left-[calc(75%-1rem)] top-1/2 w-[calc(50%-2rem)] border-t-2 border-dashed border-base44-gray-300 -translate-y-1/2"></div>
          </div>
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-md rounded-lg shadow-glass border border-base44-gray-200 z-10" role="listitem">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-base44-primary-light text-base44-primary-foreground mb-4">
                <step.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-base44-primary mb-2">{step.title}</h3>
              <p className="text-base44-gray-700 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}