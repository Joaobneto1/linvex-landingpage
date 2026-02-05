export function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#030014] overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-xl font-extrabold text-white mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
              LIMVEX
            </p>
            <p className="text-sm text-white/70">
              Tecnologia para crescer com eficiência.
            </p>
          </div>

          <div className="text-sm text-white/70 text-center md:text-right">
            <p className="mb-1">CNPJ: 63.996.570/0001-01</p>
            <p>© {new Date().getFullYear()} LIMVEX. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
