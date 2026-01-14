import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import limvexIcon from "@/assets/limvex-icon.jpg";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Para Empresas", href: "/para-empresas" },
  { name: "Para Novos Negócios", href: "/para-novos-negocios" },
  { name: "Produtos", href: "/produtos" },
  { name: "Sobre", href: "/sobre" },
];

export const HeaderDark = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "backdrop-blur-xl bg-[#0A0A0F]/90 border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container-custom max-w-[1200px]">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={limvexIcon}
              alt="Limvex"
              className="h-9 w-9 rounded-lg object-cover"
            />
            <span className="text-white font-bold text-lg hidden sm:block">Limvex</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive(item.href)
                    ? "text-white bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/5582991709740"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all duration-300 shadow-lg shadow-purple-600/25"
            >
              Agendar reunião
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors text-white"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0F]/95 backdrop-blur-xl border-t border-white/10">
          <div className="container-custom max-w-[1200px] py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  isActive(item.href)
                    ? "text-white bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button - Mobile */}
            <a
              href="https://wa.me/5582991709740"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full mt-4 text-center rounded-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all duration-300"
            >
              Agendar reunião
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
