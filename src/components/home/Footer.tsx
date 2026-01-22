export function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#000920] overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,118,206,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,118,206,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Organic shape */}
      <svg
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] opacity-[0.03]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="200" fill="url(#footerGradient)" />
        <defs>
          <radialGradient id="footerGradient">
            <stop offset="0%" stopColor="#0076CE" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0076CE" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div className="flex items-center gap-3">
            <img 
              src="/limvex-icon-bg.png" 
              alt="LIMVEX" 
              className="w-10 h-10 rounded-lg"
            />
            <div>
              <p className="text-xl font-bold text-white mb-1">LIMVEX</p>
              <p className="text-sm text-white/60">
                Transformando tecnologia em crescimento real
              </p>
            </div>
          </div>
          <div className="text-sm text-white/60 text-center md:text-right">
            <p className="mb-1">CNPJ: 63.996.570/0001-01</p>
            <p>© {new Date().getFullYear()} LIMVEX. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
