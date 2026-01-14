import { Link } from "react-router-dom";
import { Linkedin, Instagram, Github, Youtube, ArrowUpRight, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import limvexIcon from "@/assets/limvex-icon.jpg";

const footerLinks = {
  sobre: [
    { name: "Sobre nós", href: "/sobre" },
  ],
  servicos: [
    { name: "Para Empresas", href: "/para-empresas" },
    { name: "Para Novos Negócios", href: "/para-novos-negocios" },
    { name: "Produtos", href: "/produtos" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/limvexsoftware", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/limvex.com.br/", label: "Instagram" },
  { icon: Github, href: "https://github.com/linvex-software", label: "GitHub" },
];

export const FooterSection = () => {
  return (
    <footer className="bg-[#0A0A0F] border-t border-white/10">
      {/* Newsletter section */}
      <div className="container-custom max-w-[1200px] py-12 border-b border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-white font-semibold text-lg">
            Fique conectado conosco
          </h3>
          <div className="flex items-center gap-3 w-full md:w-auto max-w-md">
            <Input 
              type="email" 
              placeholder="Digite seu email" 
              className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-500 rounded-full px-6"
            />
            <Button 
              size="icon" 
              className="h-12 w-12 rounded-full bg-purple-600 hover:bg-purple-700 flex-shrink-0"
            >
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom max-w-[1200px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={limvexIcon}
                alt="Limvex Software Group"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <span className="font-bold text-lg text-white">Limvex</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Histórias reais de crescimento e sucesso com nossas soluções. 
              Desenvolvimento de software de excelência para empresas que buscam resultados.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/30 flex items-center justify-center transition-all duration-200 text-white/60 hover:text-white"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Sobre */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Sobre</h4>
            <ul className="space-y-3">
              {footerLinks.sobre.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Serviços */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-custom max-w-[1200px] py-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40 text-center md:text-left">
            © {new Date().getFullYear()} Todos os direitos reservados por{" "}
            <span className="text-white font-medium">Limvex Software Group</span>
          </p>
          <div className="flex items-center gap-6">
            <Link to="/termos" className="text-sm text-white/40 hover:text-white transition-colors">
              Termos de Serviço
            </Link>
            <Link to="/privacidade" className="text-sm text-white/40 hover:text-white transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
