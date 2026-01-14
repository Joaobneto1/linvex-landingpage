import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0F]">
      <div className="container-custom max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4">
            Nosso Compromisso com a{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent italic">
              Excelência
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Time experiente, apaixonado por resultados e focado em entregar 
            soluções que transformam negócios
          </p>
        </div>

        {/* Main visual block */}
        <div className="relative rounded-3xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-900/40" />
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="max-w-2xl">
              <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
                Nossa Visão
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mt-4 mb-6">
                Transformando Negócios com Tecnologia e Inovação
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Somos uma software house com equipes sênior especializadas em desenvolvimento 
                web, mobile e automação com IA. Transformamos desafios de negócio em soluções 
                tecnológicas eficientes, sólidas e orientadas a resultados.
              </p>
            </div>
          </div>
          {/* Background image placeholder */}
          <div className="absolute inset-0 -z-10">
            <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#0d0d15]" />
          </div>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <span className="text-white/40 text-sm font-medium uppercase tracking-wider">
              Nossa Missão
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white mt-4 mb-4">
              Soluções Escaláveis e Inteligentes para Empresas
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Nossa missão é tornar a tecnologia avançada acessível e impactante para 
              empresas em qualquer estágio de crescimento. Entregamos software de alta 
              qualidade com processos ágeis e arquitetura robusta.
            </p>
            <Link 
              to="/para-empresas" 
              className="inline-flex items-center text-white/70 hover:text-purple-400 text-sm font-medium transition-colors"
            >
              Saiba mais
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Values card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <span className="text-white/40 text-sm font-medium uppercase tracking-wider">
              Nossos Valores
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white mt-4 mb-4">
              Inovação, Integridade e Foco no Cliente
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Estamos comprometidos em fomentar inovação em tudo que fazemos, 
              com forte foco em integridade e transparência. Performance, 
              segurança e confiabilidade são nossos pilares.
            </p>
            <Link 
              to="/sobre" 
              className="inline-flex items-center text-white/70 hover:text-purple-400 text-sm font-medium transition-colors"
            >
              Conheça-nos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/25"
            asChild
          >
            <a
              href="https://wa.me/5582991709740"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com especialista
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
