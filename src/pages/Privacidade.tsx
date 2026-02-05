import { Header } from "@/components/Header";
import { Footer } from "@/components/home/Footer";

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-[#030014] text-white">
      <Header />
      
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Política de Privacidade</h1>
          
          <p className="text-sm text-white/50 mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Coleta de dados</h2>
              <p className="text-white/70 leading-relaxed">
                A Limvex coleta dados pessoais necessários para a prestação de serviços 
                e atendimento de solicitações comerciais. Os dados coletados incluem nome, 
                e-mail, telefone e informações relacionadas à sua empresa, fornecidos 
                voluntariamente através de nossos formulários de contato.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Uso dos dados</h2>
              <p className="text-white/70 leading-relaxed">
                Os dados são utilizados exclusivamente para comunicação comercial, 
                suporte técnico e melhoria de nossas plataformas. Não compartilhamos 
                seus dados com terceiros sem seu consentimento explícito, exceto quando 
                necessário para a prestação dos serviços contratados.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Segurança</h2>
              <p className="text-white/70 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais para 
                proteger seus dados contra acesso não autorizado, alteração, divulgação 
                ou destruição. Utilizamos criptografia, firewalls e controles de acesso 
                para garantir a segurança das informações.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. LGPD</h2>
              <p className="text-white/70 leading-relaxed">
                Estamos em conformidade com a Lei Geral de Proteção de Dados 
                (LGPD - Lei 13.709/2018). Você tem direito a acessar, corrigir, 
                excluir ou solicitar a portabilidade de seus dados pessoais.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
              <p className="text-white/70 leading-relaxed">
                Utilizamos cookies para melhorar sua experiência de navegação e 
                analisar o uso do site. Você pode configurar seu navegador para 
                recusar cookies, mas isso pode afetar algumas funcionalidades.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Contato</h2>
              <p className="text-white/70 leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
                entre em contato através do e-mail:{" "}
                <a href="mailto:privacidade@limvex.com" className="text-[#0076CE] hover:text-[#0099FF] transition-colors">
                  privacidade@limvex.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
