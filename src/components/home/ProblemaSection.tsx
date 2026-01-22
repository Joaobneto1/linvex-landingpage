import { AlertCircle } from "lucide-react";

const problemas = [
  {
    title: "Falta de time técnico",
    description: "Não tem desenvolvedores internos ou o time está sobrecarregado",
  },
  {
    title: "Atrasos e promessas não cumpridas",
    description: "Projetos que se arrastam sem prazo definido ou que nunca saem do papel",
  },
  {
    title: "Custos fora de controle",
    description: "Orçamentos que explodem sem previsibilidade ou transparência",
  },
  {
    title: "Projetos que não saem do papel",
    description: "Ideias boas que ficam travadas por falta de execução técnica",
  },
];

export function ProblemaSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 text-center text-[#0a1628] tracking-tight">
          O problema
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {problemas.map((problema, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl border border-gray-200 hover:border-[#0076CE]/50 hover:bg-white hover:shadow-[0_4px_12px_rgba(0,118,206,0.12)] transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="w-6 h-6 text-[#0076CE] flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-[#0a1628] leading-tight">
                  {problema.title}
                </h3>
              </div>
              <p className="text-gray-600 ml-10 leading-relaxed">{problema.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
