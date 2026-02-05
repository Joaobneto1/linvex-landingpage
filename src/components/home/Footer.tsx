import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#030014] overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-10 text-center sm:text-left">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-4 sm:mb-0">
            <p className="text-xl font-semibold text-white mb-2 sm:mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
              LIMVEX
            </p>
            <p className="text-xs text-white/50 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Infraestrutura enterprise para transformação digital
            </p>
          </div>

          {/* Plataformas */}
          <div>
            <h4 className="text-xs font-medium text-white/70 mb-3 sm:mb-4 uppercase tracking-wider">
              Plataformas
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/solucoes/limvex-commerce" className="text-xs text-white/50 hover:text-[#0076CE] transition-colors">
                  Inteligência Operacional
                </Link>
              </li>
              <li>
                <Link to="/solucoes/limvex-licitacao" className="text-xs text-white/50 hover:text-[#0076CE] transition-colors">
                  Automação Enterprise
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-xs text-white/50 hover:text-[#0076CE] transition-colors">
                  Integração Corporativa
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-xs font-medium text-white/70 mb-3 sm:mb-4 uppercase tracking-wider">
              Recursos
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/#faq" className="text-xs text-white/50 hover:text-[#0076CE] transition-colors">
                  Perguntas frequentes
                </a>
              </li>
              <li>
                <Link to="/contato" className="text-xs text-white/50 hover:text-[#0076CE] transition-colors">
                  Solicitar documentação
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-xs font-medium text-white/70 mb-3 sm:mb-4 uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/sobre" className="text-xs text-white/50 hover:text-[#0076CE] transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-xs text-white/50 hover:text-[#0076CE] transition-colors">
                  Contato enterprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Conformidade */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs font-medium text-white/70 mb-3 sm:mb-4 uppercase tracking-wider">
              Conformidade
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/privacidade" className="text-xs text-white/50 hover:text-[#0076CE] transition-colors">
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-xs text-white/50 hover:text-[#0076CE] transition-colors">
                  Termos de serviço
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-[10px] text-white/40">
              Limvex Tecnologia Ltda.
            </p>
            <p className="text-[10px] text-white/40">
              CNPJ: 63.996.570/0001-01
            </p>
            <p className="text-[10px] text-white/40">
              São Paulo, SP - Brasil
            </p>
          </div>
          <p className="text-[10px] text-white/40">
            © {new Date().getFullYear()} Limvex. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
