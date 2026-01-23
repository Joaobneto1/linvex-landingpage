import { AlertTriangle, Clock, DollarSign, FileX, Zap } from "lucide-react";

const problemas = [
  {
    icon: AlertTriangle,
    title: "Falta de time técnico",
    description: "Não tem desenvolvedores internos ou o time está sobrecarregado com demandas",
    color: "from-red-500/20 to-orange-500/20",
    iconColor: "text-red-400",
    borderColor: "hover:border-red-500/30",
  },
  {
    icon: Clock,
    title: "Atrasos e promessas não cumpridas",
    description: "Projetos que se arrastam sem prazo definido ou que nunca saem do papel",
    color: "from-orange-500/20 to-yellow-500/20",
    iconColor: "text-orange-400",
    borderColor: "hover:border-orange-500/30",
  },
  {
    icon: DollarSign,
    title: "Custos fora de controle",
    description: "Orçamentos que explodem sem previsibilidade ou transparência nos gastos",
    color: "from-yellow-500/20 to-amber-500/20",
    iconColor: "text-yellow-400",
    borderColor: "hover:border-yellow-500/30",
  },
  {
    icon: FileX,
    title: "Projetos que não saem do papel",
    description: "Ideias boas que ficam travadas por falta de execução técnica adequada",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    borderColor: "hover:border-purple-500/30",
  },
];

export function ProblemaSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[150px]" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <Zap className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-300">Dores comuns no mercado</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight">
            Você já passou por{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              algum desses problemas?
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Esses são os desafios mais comuns que empresas enfrentam ao tentar desenvolver software
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {problemas.map((problema, index) => {
            const Icon = problema.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${problema.color} border border-white/[0.08] ${problema.borderColor} hover:scale-[1.02] transition-all duration-300`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/[0.02] to-transparent" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-5">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${problema.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                        {problema.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">{problema.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-lg">
            Se você se identificou com algum desses problemas, <span className="text-[#0076CE] font-semibold">a LIMVEX pode ajudar</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
