import { X } from "lucide-react";

const items = [
  "Projetos sem clareza",
  "Ideias sem orçamento",
  "Quem busca apenas \"orçamento rápido\"",
];

export function ParaQuemNaoSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#000920]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-center text-white tracking-tight">
          Para quem não é
        </h2>
        <p className="text-center text-white/60 mb-16 text-lg leading-relaxed">
          Transparência sobre quem não atendemos
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-8 bg-white/[0.02] rounded-xl border border-red-500/20 hover:border-red-500/30 transition-all duration-200"
            >
              <div className="flex-shrink-0 mt-1">
                <X className="w-6 h-6 text-red-400/60" />
              </div>
              <p className="text-white/60 text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
