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
    <footer className="border-t border-white/10 bg-[#0D111B]">
      <div className="container-custom max-w-[1200px] py-10 lg:py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={limvexIcon}
                alt="Limvex Software Group"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <span className="font-bold text-lg text-white">Limvex Software Group</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
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
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/30 flex items-center justify-center transition-all duration-200 text-white/70 hover:text-white"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Sobre */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Sobre</h3>
            <ul className="space-y-2">
              {footerLinks.sobre.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Serviços */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
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
              <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium mb-1 text-white">Localização</p>
                <p className="text-sm text-gray-400">Brasil</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium mb-1 text-white">E-mail</p>
                <a
                  href="mailto:linvex.software@gmail.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  linvex.software@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium mb-1 text-white">Telefone</p>
                <a
                  href="https://wa.me/5582991709740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
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
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Limvex Software Group. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-400">
              CNPJ: 63.385.399/0001-96
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
