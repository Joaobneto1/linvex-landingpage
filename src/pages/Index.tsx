import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Hero } from "@/components/sections/Hero";
import { Tese } from "@/components/sections/Tese";
import { Segmentos } from "@/components/sections/Segmentos";
import { Metodo } from "@/components/sections/Metodo";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Empresa } from "@/components/sections/Empresa";
import { Contato } from "@/components/sections/Contato";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <Tese />
        <Segmentos />
        <Metodo />
        <ComoFunciona />
        <Empresa />
        <Contato />
      </main>
      <Footer />
    </>
  );
};

export default Index;
