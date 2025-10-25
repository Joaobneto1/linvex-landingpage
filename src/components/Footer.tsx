import { Facebook, Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";
import limvexIcon from "@/assets/limvex-icon.jpg";

const footerLinks = {
  services: [
    { name: "Desenvolvimento Web", href: "#desenvolvimento" },
    { name: "Desenvolvimento Mobile", href: "#desenvolvimento" },
    { name: "Automação com IA", href: "#automacao-ia" },
  ],
  company: [
    { name: "Portfólio", href: "#portfolio" },
    { name: "Sobre nós", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/limvexsoftware", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/limvex.com.br/", label: "Instagram" },
  { icon: Github, href: "https://github.com/linvex-software", label: "GitHub" },
];

export const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground text-background">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={limvexIcon}
                alt="Limvex Software Group"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <span className="font-bold text-lg"
              style={{ fontFamily: '"Myriad Pro", "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
              Limvex Software Group
              </span>
            </div>
            <p className="text-background/70 text-sm">
              Desenvolvimento de software de excelência para empresas que buscam resultados.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Serviços</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Brasil</span>
              </li>
              <li>
                <a
                  href="mailto:linvex.software@gmail.com"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-smooth text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>linvex.software@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5582991709740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-smooth text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>(82) 99170-9740</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20">
          <div className="text-center text-sm text-background/60">
            <p>
              © {new Date().getFullYear()} Limvex Software Group. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
