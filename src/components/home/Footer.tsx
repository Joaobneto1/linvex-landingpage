import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#030014] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0076CE]/5 rounded-full blur-[150px]" />
      
      {/* Grid pattern */}
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

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0076CE]/20 to-[#0076CE]/5 border border-[#0076CE]/20 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-[#0076CE]" />
            </div>
            <div>
              <p className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                LIMVEX
              </p>
              <p className="text-sm text-white/50">
                Transformando tecnologia em crescimento real
              </p>
            </div>
          </div>
          
          <div className="text-sm text-white/40 text-center md:text-right">
            <p className="mb-1">CNPJ: 63.996.570/0001-01</p>
            <p>© {new Date().getFullYear()} LIMVEX. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
