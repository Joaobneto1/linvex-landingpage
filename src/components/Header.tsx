import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import limvexSG from "@/assets/limvexLogoBg.png";

const navigation = [
  { name: "Desenvolvimento", href: "#desenvolvimento" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Contato", href: "#contato" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={limvexSG}
              alt="Limvex Software Group"
              className="h-28 lg:h-40 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfpmlt5xmZTrRc5bKVbCJz_acpXr_9YK1sTr2ooUWS09tMx8A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Solicitar orçamento</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />

              {/* Efeito de brilho */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Glow effect */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 opacity-30 blur group-hover:opacity-50 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-smooth"
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
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-custom py-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium text-foreground/80 hover:text-primary transition-smooth py-2"
              >
                {item.name}
              </a>
            ))}

            {/* CTA Button - Mobile */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfpmlt5xmZTrRc5bKVbCJz_acpXr_9YK1sTr2ooUWS09tMx8A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group relative w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
            >
              <span className="relative z-10">Solicitar orçamento</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />

              {/* Efeito de brilho */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
