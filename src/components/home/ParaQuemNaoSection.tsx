import { X } from "lucide-react";

const items = [
  "Projetos sem clareza",
  "Ideias sem orçamento",
  "Quem busca apenas \"orçamento rápido\"",
];

export function ParaQuemNaoSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#000920]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-center text-white tracking-tight">
          Para quem não é
        </h2>
        <p className="text-center text-white/60 mb-16 text-lg leading-relaxed">
          Transparência sobre quem não atendemos
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 px-6 py-5 bg-white/[0.02] rounded-2xl border border-red-500/20 hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-200"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400/70" />
                </div>
              </div>
              <p className="text-white/70 text-base md:text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
