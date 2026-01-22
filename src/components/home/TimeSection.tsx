export function TimeSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#000920] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0076CE]/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Team photo - larger size */}
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=600&fit=crop&q=80"
            alt="Equipe trabalhando"
            className="w-full h-80 md:h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000920] via-[#000920]/60 to-transparent flex items-end">
            <div className="p-8 md:p-12 lg:p-16 w-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
                Trabalhamos como parceiros, não fornecedores
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-3xl leading-relaxed">
                Nossa equipe se integra ao seu time para garantir comunicação clara, alinhamento constante e resultados que realmente importam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
