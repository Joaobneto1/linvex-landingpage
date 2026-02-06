import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface SolutionItem {
  name: string;
  description: string;
  href: string;
}

const solutions: SolutionItem[] = [
  {
    name: "Limvex Commerce",
    description: "E-commerce e vendas online",
    href: "/solucoes/limvex-commerce",
  },
  {
    name: "Limvex Bidding",
    description: "Gestão de licitações públicas",
    href: "/solucoes/limvex-licitacao",
  },
  {
    name: "Limvex Custom",
    description: "Desenvolvimento sob medida",
    href: "/solucoes/limvex-custom",
  },
];

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fecha dropdown ao mudar de página
  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isSolutionActive = solutions.some((s) => location.pathname.startsWith(s.href));

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-4 px-3 sm:px-4">
      <div
        className={`mx-auto w-full max-w-fit h-11 sm:h-12 px-2 sm:px-3 flex items-center gap-1.5 sm:gap-2 rounded-full transition-all duration-300 ${transparent
          ? "bg-transparent"
          : "bg-[#0a0a14]/80 backdrop-blur-xl border border-white/[0.1]"
          }`}
      >
        {/* Logo LIMVEX */}
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
            }
          }}
          className="flex items-center h-8 sm:h-9 px-2 sm:px-3 text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-[#0076CE] transition-colors"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          LIMVEX
        </Link>

        {/* Separador - escondido em telas muito pequenas */}
        <div className="hidden xs:block w-px h-5 bg-white/10" />

        {/* Dropdown Soluções */}
        <div
          className="relative"
          ref={dropdownRef}
        >
          <button
            onClick={toggleDropdown}
            className={`flex items-center gap-1 sm:gap-1.5 h-8 sm:h-9 px-2 sm:px-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${isSolutionActive
              ? "text-[#00d9ff] bg-white/5"
              : "text-white/85 hover:text-white hover:bg-white/5"
              }`}
          >
            <span className="hidden sm:inline">Soluções</span>
            <span className="sm:hidden">Produtos</span>
            <ChevronDown
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 mt-3 w-[250px] sm:w-[280px] transition-all duration-200 ${dropdownOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
          >
            <div className="bg-[#0f0f19]/95 backdrop-blur-xl border border-white/10 rounded-xl p-1.5 shadow-2xl shadow-black/40">
              {solutions.map((solution) => (
                <Link
                  key={solution.href}
                  to={solution.href}
                  onClick={() => setDropdownOpen(false)}
                  className={`flex flex-col px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-colors ${isActive(solution.href)
                    ? "bg-[#00d9ff]/10 text-white"
                    : "text-white/80 hover:bg-white/[0.05] hover:text-white"
                    }`}
                >
                  <span className="text-sm font-semibold">{solution.name}</span>
                  <span className="text-xs text-white/50 mt-0.5">{solution.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/contato"
          className="inline-flex items-center h-8 sm:h-9 px-3 sm:px-5 text-xs sm:text-sm font-semibold text-white bg-[#0076CE] hover:bg-[#0099FF] rounded-full transition-all whitespace-nowrap"
        >
          <span className="hidden sm:inline">Conhecer agora</span>
          <span className="sm:hidden">Conhecer</span>
        </Link>
      </div>
    </header>
  );
}
