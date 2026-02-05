import { Header } from "@/components/Header";
import { Footer } from "@/components/home/Footer";

export default function Termos() {
  return (
    <div className="min-h-screen bg-[#030014] text-white">
      <Header />
      
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Termos de Serviço</h1>
          
          <p className="text-sm text-white/50 mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos termos</h2>
              <p className="text-white/70 leading-relaxed">
                Ao acessar e utilizar o site e serviços da Limvex, você concorda com 
                estes termos de serviço. Se não concordar com algum termo, recomendamos 
                que não utilize nossos serviços.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Serviços</h2>
              <p className="text-white/70 leading-relaxed">
                A Limvex fornece plataformas enterprise para inteligência operacional, 
                automação de processos e integração corporativa. Os serviços específicos, 
                níveis de suporte e SLAs são definidos em contratos individuais com cada cliente.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Propriedade intelectual</h2>
              <p className="text-white/70 leading-relaxed">
                Todo conteúdo, código-fonte, design, marcas e propriedade intelectual 
                presentes neste site são de propriedade exclusiva da Limvex Tecnologia Ltda. 
                É proibida a reprodução, distribuição ou modificação sem autorização prévia.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Limitações de responsabilidade</h2>
              <p className="text-white/70 leading-relaxed">
                Os serviços são fornecidos "como estão". A Limvex não se responsabiliza 
                por danos indiretos, incidentais ou consequentes decorrentes do uso de 
                nossas plataformas. Garantias específicas são definidas em contratos individuais.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Confidencialidade</h2>
              <p className="text-white/70 leading-relaxed">
                Todas as informações trocadas durante negociações comerciais e prestação 
                de serviços são consideradas confidenciais. Ambas as partes se comprometem 
                a não divulgar informações sensíveis sem consentimento prévio.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Alterações</h2>
              <p className="text-white/70 leading-relaxed">
                A Limvex reserva-se o direito de modificar estes termos a qualquer momento. 
                Alterações significativas serão comunicadas através do site ou por e-mail.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Foro</h2>
              <p className="text-white/70 leading-relaxed">
                Fica eleito o foro da comarca de São Paulo, SP, para dirimir quaisquer 
                questões decorrentes destes termos.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contato</h2>
              <p className="text-white/70 leading-relaxed">
                Dúvidas sobre os termos podem ser esclarecidas através do e-mail:{" "}
                <a href="mailto:legal@limvex.com" className="text-[#0076CE] hover:text-[#0099FF] transition-colors">
                  legal@limvex.com
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
