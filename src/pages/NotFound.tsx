import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-20">
      <div className="container-custom max-w-[1200px] text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Página não encontrada</h2>
          <p className="text-xl text-muted-foreground mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Voltar para home
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
