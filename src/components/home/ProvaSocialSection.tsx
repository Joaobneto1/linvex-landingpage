export function ProvaSocialSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#000920]/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background shape */}
      <svg
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.02]"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="300" cy="300" r="300" fill="url(#provaGradient)" />
        <defs>
          <radialGradient id="provaGradient">
            <stop offset="0%" stopColor="#0076CE" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0076CE" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight">
              Compromisso com resultado
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Previsibilidade e construção de produtos escaláveis são nossos pilares.
              Trabalhamos para que cada projeto seja uma base sólida para o crescimento do seu negócio.
            </p>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&q=80"
              alt="Equipe celebrando resultado"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000920]/80 via-[#000920]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white text-lg font-semibold">
                "Parceria que transforma desafios em oportunidades de crescimento"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
