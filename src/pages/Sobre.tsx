import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  ArrowRight,
  Code2,
  Rocket,
  Shield,
} from "lucide-react";

const values = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Inovação",
    description: "Buscamos constantemente novas tecnologias e metodologias para entregar as melhores soluções.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Compromisso",
    description: "Tratamos cada projeto como nosso, com dedicação total ao sucesso dos nossos clientes.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Parceria",
    description: "Construímos relacionamentos de longo prazo baseados em confiança e resultados.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Qualidade",
    description: "Entregamos código limpo, testado e documentado, seguindo as melhores práticas do mercado.",
  },
];

const stats = [
  { number: "50+", label: "Projetos Entregues" },
  { number: "30+", label: "Clientes Ativos" },
  { number: "5+", label: "Anos de Experiência" },
  { number: "99%", label: "Taxa de Satisfação" },
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-[#030014] text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0076CE]/10 via-transparent to-purple-500/5" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0076CE]/20 border border-[#0076CE]/30 rounded-full text-[#0076CE] text-sm font-medium mb-6">
              <Code2 className="w-4 h-4" />
              Sobre a Limvex
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Soluções em tecnologia para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076CE] to-purple-400">
                impulsionar seu negócio
              </span>
            </h1>

            <p className="text-xl text-white/70 leading-relaxed">
              A Limvex Software Group é uma software house especializada em desenvolver soluções
              customizadas para pequenas e médias empresas. Nosso time combina expertise técnica
              com entendimento profundo das necessidades de cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#00B8FF]">
                  {stat.number}
                </p>
                <p className="text-white/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0076CE]/20 flex items-center justify-center text-[#0076CE]">
                  <Target className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold">Nossa Missão</h2>
              </div>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Democratizar o acesso a tecnologia de qualidade para pequenas e médias empresas,
                oferecendo soluções sob medida que realmente fazem diferença no dia a dia dos
                nossos clientes.
              </p>
              <p className="text-white/60 leading-relaxed">
                Acreditamos que toda empresa, independente do seu tamanho, merece ter acesso a
                ferramentas tecnológicas que potencializem seu crescimento. Por isso, desenvolvemos
                cada projeto com foco em resultados tangíveis e retorno sobre investimento.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Rocket className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold">Nossa Visão</h2>
              </div>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Ser referência em desenvolvimento de software customizado no Brasil, reconhecida
                pela qualidade das entregas e pelo impacto positivo gerado nos negócios dos
                nossos clientes.
              </p>
              <p className="text-white/60 leading-relaxed">
                Trabalhamos para construir uma empresa onde talento e propósito se encontram,
                criando um ambiente onde profissionais excepcionais podem desenvolver soluções
                que transformam negócios e melhoram vidas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Os princípios que guiam todas as nossas decisões e entregas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.05] hover:border-[#0076CE]/30 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0076CE]/20 to-purple-500/20 flex items-center justify-center text-[#0076CE] mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              O Que Fazemos
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Desenvolvemos soluções tecnológicas completas, desde a concepção até a implementação
              e suporte contínuo. Nossa expertise abrange diversas áreas e tecnologias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-[#0076CE]/10 to-transparent border border-white/10 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Sistemas Web</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Aplicações web modernas, escaláveis e responsivas utilizando as mais recentes
                tecnologias do mercado.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-white/10 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Aplicativos Mobile</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Apps nativos e híbridos para iOS e Android, com foco em experiência do usuário
                e performance.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#0099FF]/10 to-transparent border border-white/10 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Automação</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Automatização de processos internos, integrações entre sistemas e soluções
                de produtividade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0076CE]/20 via-[#030014] to-purple-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Conheça Nossas Soluções
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Descubra como podemos ajudar sua empresa a crescer com tecnologia.
            Agende uma demonstração e conheça nossos produtos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button className="bg-[#0076CE] hover:bg-[#0099FF] text-white font-semibold px-10 py-6 h-auto text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#0076CE]/30">
                Falar com Especialista
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-10 py-6 h-auto text-lg rounded-xl"
              >
                Ver Soluções
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
