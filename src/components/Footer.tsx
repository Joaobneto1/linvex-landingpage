import { Linkedin, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import limvexIcon from "@/assets/limvex-icon.jpg";

const footerLinks = {
  sobre: [
    { name: "Sobre nós", href: "/sobre" },
    { name: "Como trabalhamos", href: "/como-trabalhamos" },
    { name: "Cases", href: "/cases" },
  ],
  servicos: [
    { name: "Serviços", href: "/servicos" },
    { name: "Produtos", href: "/produtos" },
    { name: "Para empresas", href: "/para-empresas" },
    { name: "Para novos negócios", href: "/para-novos-negocios" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/limvexsoftware", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/limvex.com.br/", label: "Instagram" },
  { icon: Github, href: "https://github.com/linvex-software", label: "GitHub" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-sm">
      <div className="container-custom max-w-[1200px] py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={limvexIcon}
                alt="Limvex Software Group"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <span className="font-bold text-lg">Limvex Software Group</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
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
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/20 flex items-center justify-center transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Sobre */}
          <div>
            <h3 className="font-semibold mb-4">Sobre</h3>
            <ul className="space-y-2">
              {footerLinks.sobre.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Serviços */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium mb-1">Localização</p>
                <p className="text-sm text-muted-foreground">Brasil</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium mb-1">E-mail</p>
                <a
                  href="mailto:linvex.software@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  linvex.software@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium mb-1">Telefone</p>
                <a
                  href="https://wa.me/5582991709740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  (82) 99170-9740
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Limvex Software Group. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              CNPJ: 63.385.399/0001-96
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
