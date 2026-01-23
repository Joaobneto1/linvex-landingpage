import { Users, Handshake, MessageSquare } from "lucide-react";

export function TimeSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#030014] to-[#050520] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0076CE]/10 rounded-full blur-[200px] -translate-y-1/2" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0076CE]/20 to-[#8B5CF6]/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                alt="Equipe de desenvolvimento trabalhando em conjunto"
                className="w-full h-80 lg:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent" />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0076CE]/10 border border-[#0076CE]/20 mb-6">
              <Users className="w-4 h-4 text-[#0076CE]" />
              <span className="text-sm font-medium text-[#0076CE]">Nossa equipe</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight leading-tight">
              Trabalhamos como{" "}
              <span className="bg-gradient-to-r from-[#0076CE] to-[#06B6D4] bg-clip-text text-transparent">
                parceiros
              </span>
              , não fornecedores
            </h2>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Nossa equipe se integra ao seu time para garantir comunicação clara, alinhamento constante e resultados que realmente importam para o seu negócio.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                { icon: Handshake, text: "Parceria genuína com foco no seu sucesso" },
                { icon: MessageSquare, text: "Comunicação direta sem intermediários" },
                { icon: Users, text: "Equipe dedicada ao seu projeto" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#0076CE]/30 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-[#0076CE]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#0076CE]" />
                    </div>
                    <span className="text-white/80">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
