import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import limvexSG from "@/assets/limvexLogoBg.png";

const navigation = [
  { name: "Para Empresas", href: "/para-empresas", highlight: true },
  { name: "Para Novos Negócios", href: "/para-novos-negocios", highlight: true },
  { name: "Produtos", href: "/produtos", highlight: true },
  { name: "Sobre", href: "/sobre" },
];

export const Header = () => {
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
          ? "backdrop-blur-glass bg-background/80 border-b border-border/50 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container-custom max-w-[1200px]">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={limvexSG}
              alt="Limvex Software Group"
              className="h-20 lg:h-24 w-auto"
            />
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
                    ? "text-primary bg-primary/10"
                    : item.highlight
                    ? "text-foreground/90 hover:text-foreground hover:bg-primary/5 font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
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
              className="group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 shadow-glow-sm hover:shadow-glow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar reunião</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors text-foreground"
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
        <div className="lg:hidden backdrop-blur-glass bg-background/95 border-t border-border/50">
          <div className="container-custom max-w-[1200px] py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  isActive(item.href)
                    ? "text-primary bg-primary/10"
                    : item.highlight
                    ? "text-foreground font-semibold hover:bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
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
              className="block w-full mt-4 group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 shadow-glow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar reunião</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
