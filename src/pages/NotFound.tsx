import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#000920] text-white">
      <Header />

      <main className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-[#0076CE]">404</h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Página não encontrada
          </h2>

          <p className="text-lg text-white/80 mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>

          <Button
            asChild
            className="bg-[#0076CE] hover:bg-[#0099FF] text-white"
          >
            <Link to="/">Voltar para a home</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
