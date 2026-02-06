import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Obrigado from "./pages/Obrigado";
import NotFound from "./pages/NotFound";
import Sobre from "./pages/Sobre";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import LimvexCommerce from "./pages/solucoes/LimvexCommerce";
import LimvexLicitacao from "./pages/solucoes/LimvexLicitacao";
import LimvexCustom from "./pages/solucoes/LimvexCustom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/obrigado" element={<Obrigado />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/solucoes/limvex-commerce" element={<LimvexCommerce />} />
          <Route path="/solucoes/limvex-licitacao" element={<LimvexLicitacao />} />
          <Route path="/solucoes/limvex-custom" element={<LimvexCustom />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
