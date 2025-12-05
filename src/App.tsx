import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomeFull from "./pages/HomeFull";
import Servicos from "./pages/Servicos";
import Produtos from "./pages/Produtos";
import Cases from "./pages/Cases";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import ParaEmpresas from "./pages/ParaEmpresas";
import ParaNovosNegocios from "./pages/ParaNovosNegocios";
import ComoTrabalhamos from "./pages/ComoTrabalhamos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home-full" element={<HomeFull />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/para-empresas" element={<ParaEmpresas />} />
          <Route path="/para-novos-negocios" element={<ParaNovosNegocios />} />
          <Route path="/como-trabalhamos" element={<ComoTrabalhamos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
