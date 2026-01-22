import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappLink = getWhatsAppLink("hero");

  const scrollToForm = () => {
    const form = document.getElementById("formulario");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000920]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center relative h-16 md:h-20">
          {/* Logo centralizada */}
          <div className="flex items-center gap-3">
            <img 
              src="/limvex-icon-bg.png" 
              alt="LIMVEX" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg"
            />
            <span className="text-xl md:text-2xl font-bold text-white">LIMVEX</span>
          </div>

          {/* Desktop Navigation - à direita */}
          <nav className="hidden md:flex items-center gap-8 absolute right-0">
            <button
              onClick={scrollToForm}
              className="text-sm text-white/60 hover:text-white/80 transition-colors"
            >
              Preferir formulário
            </button>
            <Button
              asChild
              className="bg-[#0076CE] hover:bg-[#0099FF] text-white"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Falar com especialista no WhatsApp">
                Falar com especialista
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button - à direita */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 absolute right-0"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-2 pt-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={scrollToForm}
                className="text-sm text-white/60 hover:text-white/80 transition-colors text-left"
              >
                Preferir formulário
              </button>
              <Button
                asChild
                className="bg-[#0076CE] hover:bg-[#0099FF] text-white w-full"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Falar com especialista no WhatsApp">
                  Falar com especialista
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
