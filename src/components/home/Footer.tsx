export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-xl font-bold text-white mb-2">LIMVEX</p>
            <p className="text-sm text-white/60">
              Transformando tecnologia em crescimento real
            </p>
          </div>
          <div className="text-sm text-white/60 text-center md:text-right">
            <p>© {new Date().getFullYear()} LIMVEX. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
