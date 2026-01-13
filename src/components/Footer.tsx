import { Linkedin, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import limvexIcon from "@/assets/limvex-icon.jpg";

const footerLinks = {
  sobre: [
    { name: "Sobre nós", href: "/sobre" },
  ],
  servicos: [
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
    <footer className="border-t border-border bg-card/50">
      <div className="container-custom max-w-[1200px] py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={limvexIcon}
                alt="Limvex Software Group"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <span className="font-display font-bold text-lg text-foreground">Limvex Software Group</span>
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
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 border border-border hover:border-primary/30 flex items-center justify-center transition-all duration-200 text-muted-foreground hover:text-primary"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Sobre */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-foreground">Sobre</h3>
            <ul className="space-y-3">
              {footerLinks.sobre.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Serviços */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-foreground">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-subtle mb-8" />

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-0.5">Localização</p>
              <p className="text-sm text-muted-foreground">Brasil</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
              <Mail className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-0.5">E-mail</p>
              <a
                href="mailto:linvex.software@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                linvex.software@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-0.5">Telefone</p>
              <a
                href="https://wa.me/5582991709740"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                (82) 99170-9740
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-subtle mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Limvex Software Group. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            CNPJ: 63.385.399/0001-96
          </p>
        </div>
      </div>
    </footer>
  );
};
