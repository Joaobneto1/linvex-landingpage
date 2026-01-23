import { Search, CheckCircle2, Code2, Rocket, ArrowRight, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

const passos = [
  {
    numero: "01",
    icon: Search,
    title: "Diagnóstico",
    description: "Entendemos sua necessidade, objetivos e contexto do negócio para propor a melhor solução",
    color: "from-[#0076CE] to-[#0099FF]",
  },
  {
    numero: "02",
    icon: CheckCircle2,
    title: "Validação & Escopo",
    description: "Validamos a viabilidade técnica e definimos escopo claro com prazo e investimento",
    color: "from-[#06B6D4] to-[#0EA5E9]",
  },
  {
    numero: "03",
    icon: Code2,
    title: "Desenvolvimento",
    description: "Desenvolvemos com comunicação constante, entregas incrementais e transparência total",
    color: "from-[#8B5CF6] to-[#A855F7]",
  },
  {
    numero: "04",
    icon: Rocket,
    title: "Entrega & Evolução",
    description: "Entregamos o projeto funcionando e damos suporte contínuo para evolução",
    color: "from-[#10B981] to-[#34D399]",
  },
];

export function ComoFuncionaSection() {
  const whatsappLink = getWhatsAppLink("como-funciona");

  return (
    <section id="como-funciona" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#030014] via-[#050520] to-[#030014] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0076CE]/10 rounded-full blur-[200px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[200px] -translate-y-1/2" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-6">
            <Workflow className="w-4 h-4 text-[#06B6D4]" />
            <span className="text-sm font-medium text-[#06B6D4]">Processo simplificado</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight">
            Como{" "}
            <span className="bg-gradient-to-r from-[#06B6D4] to-[#0076CE] bg-clip-text text-transparent">
              funciona
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Um processo claro e transparente do início ao fim do seu projeto
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative mb-16">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0076CE]/50 via-[#8B5CF6]/50 to-[#10B981]/50" />
          
          <div className="space-y-8 lg:space-y-0">
            {passos.map((passo, index) => {
              const Icon = passo.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`relative lg:flex lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className={`lg:w-[calc(50%-40px)] ${isEven ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}>
                    <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-500 hover:translate-y-[-4px]">
                      {/* Mobile Icon */}
                      <div className={`lg:hidden w-14 h-14 rounded-xl bg-gradient-to-br ${passo.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Step Number */}
                      <div className={`text-sm font-bold mb-2 bg-gradient-to-r ${passo.color} bg-clip-text text-transparent`}>
                        PASSO {passo.numero}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {passo.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {passo.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center Icon - Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0a0a1f] to-[#030014] border border-white/10 items-center justify-center z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${passo.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Spacer for opposite side - Desktop */}
                  <div className="hidden lg:block lg:w-[calc(50%-40px)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-[#0076CE]/10 to-[#8B5CF6]/5 border border-white/[0.08]">
            <h4 className="text-2xl font-bold text-white mb-4">
              Pronto para começar seu projeto?
            </h4>
            <p className="text-white/60 mb-6 max-w-lg">
              Vamos conversar sobre suas necessidades e entender como podemos ajudar
            </p>
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#06B6D4] text-white px-8 py-6 h-auto font-semibold rounded-xl shadow-[0_0_30px_rgba(0,118,206,0.3)] hover:shadow-[0_0_50px_rgba(0,118,206,0.5)] transition-all duration-300"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Falar sobre meu projeto
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
