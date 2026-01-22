import { Search, CheckCircle2, Code2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

const passos = [
  {
    numero: "1",
    icon: Search,
    title: "Diagnóstico do projeto",
    description: "Entendemos sua necessidade, objetivos e contexto do negócio",
  },
  {
    numero: "2",
    icon: CheckCircle2,
    title: "Validação técnica e definição de escopo",
    description: "Validamos a viabilidade e definimos escopo claro com prazo e investimento",
  },
  {
    numero: "3",
    icon: Code2,
    title: "Desenvolvimento com acompanhamento",
    description: "Desenvolvemos com comunicação constante e entregas incrementais",
  },
  {
    numero: "4",
    icon: Rocket,
    title: "Entrega, suporte e evolução",
    description: "Entregamos o projeto e damos suporte contínuo para evolução",
  },
];

export function ComoFuncionaSection() {
  const whatsappLink = getWhatsAppLink("como-funciona");

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#000920]/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 text-center text-white tracking-tight">
          Como funciona
        </h2>

        <div className="space-y-6 mb-12">
          {passos.map((passo, index) => {
            const Icon = passo.icon;
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 p-8 bg-white/[0.03] rounded-xl border border-white/[0.08] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-200"
              >
                <div className="flex items-center gap-4 md:w-64 flex-shrink-0">
                  <div className="w-16 h-16 bg-[#0076CE] rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(0,118,206,0.3)]">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1 font-medium">Passo {passo.numero}</div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {passo.title}
                    </h3>
                  </div>
                </div>
                <div className="flex-1 flex items-center">
                  <p className="text-white/70 text-lg leading-relaxed">{passo.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-8 py-6 h-auto transition-all duration-200 rounded-lg"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Falar sobre meu projeto no WhatsApp">
              Falar sobre meu projeto
            </a>
          </Button>
        </div>

        {/* Team collaboration image */}
        <div className="mt-16 relative rounded-2xl overflow-hidden border border-white/[0.08]">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=400&fit=crop&q=80"
            alt="Time colaborando"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000920] via-[#000920]/70 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-2xl">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Comunicação constante em cada etapa
              </h4>
              <p className="text-white/80 text-lg">
                Você acompanha o progresso e participa das decisões, garantindo que o resultado final esteja alinhado com suas expectativas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
