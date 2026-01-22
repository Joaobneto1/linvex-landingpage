import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";

export default function Obrigado() {
  return (
    <div className="min-h-screen bg-[#000920] text-white">
      <Header />

      <main className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-[#0076CE]/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-[#0076CE]" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Obrigado pelo seu interesse!
          </h1>

          <p className="text-lg text-white/80 mb-8">
            Recebemos sua solicitação e nossa equipe entrará em contato em breve
            para entender melhor seu projeto e como podemos ajudar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[#0076CE] hover:bg-[#0099FF] text-white"
            >
              <Link to="/">Voltar para a home</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
