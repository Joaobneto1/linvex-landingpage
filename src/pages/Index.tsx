import { EntryCard } from "@/components/ui/EntryCard";
import { Building2, Rocket, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import limvexSG from "@/assets/limvexLogoBg.png";
import { useRotatingText } from "@/hooks/useRotatingText";

const services = [
  "IAs",
  "DevOps",
  "SaaS",
  "Backend",
  "Frontend",
  "Integrações",
  "Arquitetura",
  "Produtos White-label",
  "Apps Web",
  "APIs",
];

export default function Index() {
  const rotatingService = useRotatingText(services, 2000);

  return (
    <div className="min-h-screen w-full flex flex-col" style={{ backgroundColor: '#f5f7fa' }}>
      {/* Background com gradientes suaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-blue-400/8 to-purple-500/15" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-500/15 rounded-full blur-3xl" />
      </div>

      {/* Conteúdo principal - Compacto */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-6 md:py-10">
        <div className="w-full max-w-2xl mx-auto">
          {/* Topo: Logo e Título */}
          <div className="text-center mb-6 md:mb-8">
            {/* Logo Limvex - Maior e mais protagonista */}
            <div className="mb-5 md:mb-6">
              <img
                src={limvexSG}
                alt="Limvex Software Group"
                className="h-24 md:h-32 lg:h-40 w-auto mx-auto drop-shadow-lg"
                loading="eager"
              />
            </div>

            {/* Título principal */}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight">
              Escolha como quer trabalhar com a Limvex
            </h1>

            {/* Subtítulo */}
            <p className="text-xs md:text-sm text-gray-600 mb-1">
              Software sob medida · Aceleração de negócios · Produtos white-label
            </p>

            {/* Texto rotativo de serviços */}
            <p className="text-xs md:text-sm text-blue-600 font-semibold">
              Especialistas em{" "}
              <span className="inline-block min-w-[140px] text-left transition-opacity duration-500 ease-in-out">
                {rotatingService}
              </span>
            </p>
          </div>

          {/* Opções - Cards compactos */}
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            <EntryCard
              icon={Building2}
              title="Para Empresas"
              description="Serviços de software sob medida."
              href="/para-empresas"
            />
            <EntryCard
              icon={Rocket}
              title="Para Novos Negócios"
              description="Construímos seu MVP em troca de equity."
              href="/para-novos-negocios"
            />
            <EntryCard
              icon={Package}
              title="Produtos / White-labels"
              description="Plataformas prontas com a sua marca."
              href="/produtos"
            />
          </div>

          {/* Rodapé: Link Site Completo */}
          <div className="text-center">
            <Link
              to="/home-full"
              className="inline-flex items-center text-xs md:text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors"
            >
              Entrar no site completo
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
