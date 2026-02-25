import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import iconeImagem from "@/assets/ICON-CUSTOM.png";
import notebookImagem from "@/assets/NOTEBOOK-CUSTOM.png";
import {
    Rocket,
    Users,
    Target,
    Sparkles,
    Layers,
    ShieldCheck,
    Zap,
    CheckCircle2,
} from "lucide-react";

const features = [
    {
        icon: Target,
        title: "Arquitetura Sob Medida",
        description: "Soluções desenhadas especificamente para os desafios únicos do seu negócio, não templates genéricos.",
    },
    {
        icon: Rocket,
        title: "Tecnologia de Ponta",
        description: "Stack moderna e escalável: React, Node.js, Python, AWS, Docker e as melhores ferramentas do mercado.",
    },
    {
        icon: Users,
        title: "Time Sênior Dedicado",
        description: "Desenvolvedores experientes trabalhando exclusivamente no seu projeto, com comunicação direta.",
    },
    {
        icon: Sparkles,
        title: "Integração com IA",
        description: "Incorporamos inteligência artificial e automação para criar soluções que realmente transformam processos.",
    },
    {
        icon: Layers,
        title: "Integrações Complexas",
        description: "Conectamos sistemas legados, ERPs, APIs externas e criamos ecossistemas tecnológicos integrados.",
    },
    {
        icon: ShieldCheck,
        title: "Segurança Enterprise",
        description: "Conformidade com LGPD, ISO 27001, criptografia end-to-end e as melhores práticas de segurança.",
    },
];

const benefits = [
    "Execução de até 70% em tempo de mercado",
    "Aumento de 3x na produtividade da equipe",
    "Entrega em sprints de 2 semanas",
    "Código limpo e documentado",
    "Testes automatizados inclusos",
    "Suporte e manutenção contínua",
];

const useCases = [
    {
        title: "Plataformas SaaS Completas",
        desc: "Sistemas multi-tenant complexos, com billing, dashboards corporativos e multi-integração.",
        tags: ["React", "Node", "PostgreSQL", "AWS"]
    },
    {
        title: "Automação com IA",
        desc: "Scripts inteligentes que treinam documentos, classificam dados vitais e agilizam processos internos.",
        tags: ["Python", "OpenAI", "ML", "FastAPI"]
    },
    {
        title: "Integrações Enterprise",
        desc: "Conectamos ERPs, CRMs, sistemas legados e APIs externas transformando setups independentes em rede.",
        tags: ["APIs REST", "GraphQL", "Webhooks", "ETL"]
    },
    {
        title: "Apps Mobile Nativos",
        desc: "Aplicativos iOS e Android de alta performance e experiência premium e offline suportado.",
        tags: ["React Native", "Swift", "Kotlin", "Firebase"]
    }
];

export default function LimvexCustom() {
    return (
        <div className="min-h-screen bg-[#02000A] text-white overflow-x-hidden">
            <Header />

            {/* Top Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 xl:px-12 mt-12 min-h-[70vh] flex items-center overflow-hidden">

                {/* Glow Effects */}
                <div className="absolute top-1/4 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#0076CE]/15 rounded-full blur-[100px] md:blur-[150px] z-0 animate-pulse-slow pointer-events-none" />
                <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-[#0099FF]/10 rounded-full blur-[120px] z-0 pointer-events-none" />

                <div className="container mx-auto max-w-[1440px] relative z-10 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl w-full lg:w-1/2 relative z-20">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
                            LVX<span className="font-light">Custom</span>
                        </h1>

                        <div className="text-sm font-bold tracking-widest uppercase text-[#0076CE] mb-2">
                            Desenvolvimento Sob Medida
                        </div>

                        <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light">
                            <strong className="text-white font-medium">Soluções customizadas high-ticket</strong> para desafios únicos. Arquitetura enterprise para empresas que precisam de tecnologia proprietária que realmente move o ponteiro do negócio.
                        </p>

                        <Link to="/contato" className="mt-4">
                            <Button className="bg-[#0099FF] hover:bg-[#0076CE] text-white font-semibold px-8 py-6 h-auto text-base rounded-[100px] transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,153,255,0.3)] border border-white/10">
                                Agendar demonstração
                            </Button>
                        </Link>
                    </div>

                    <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] flex justify-center lg:justify-end z-0 mt-8 lg:mt-0">
                        <img src={iconeImagem} alt="Limvex Custom" className="absolute top-1/2 -translate-y-1/2 lg:right-[-10%] xl:right-[-5%] w-[120%] sm:w-[100%] lg:w-[120%] xl:w-[800px] max-w-none animate-float-slow pointer-events-none" />
                    </div>

                </div>
            </section>

            {/* Notebook Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center overflow-hidden">

                {/* Glow Effects */}
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0099FF]/5 rounded-full blur-[120px] z-0 pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#0076CE]/10 rounded-full blur-[150px] z-0 pointer-events-none" />

                <div className="container mx-auto max-w-[1440px] relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    <div className="w-full lg:w-1/2 relative min-h-[350px] sm:min-h-[450px] lg:min-h-[600px] flex justify-center lg:justify-start z-0 mb-8 lg:mb-0">
                        <img src={notebookImagem} alt="Plataforma Dashboard" className="absolute top-1/2 -translate-y-1/2 left-[5%] sm:left-[10%] lg:left-auto lg:-left-[25%] xl:-left-[35%] w-[140%] sm:w-[120%] lg:w-[170%] xl:w-[1200px] max-w-none pointer-events-none" />
                    </div>

                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-xl lg:w-1/2 relative z-20">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                            Tecnologia proprietária<br className="hidden lg:block" /> para <span className="text-[#0099FF]">desafios únicos</span>
                        </h2>

                        <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-light mt-4">
                            Desenvolvemos sistemas sob medida para empresas que precisam de soluções que não existem no mercado. Do MVP ao produto enterprise, entregamos software que resolve problemas reais e gera resultados mensuráveis.
                        </p>
                    </div>

                </div>
            </section>

            {/* Features Belt Section */}
            <section className="py-12 bg-[#02000A] relative z-20 mt-12">
                <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="relative flex items-center bg-[#070512] border border-white/10 rounded-xl p-5 sm:p-6 flex-1 min-w-[200px] max-w-[350px] shadow-lg transition-colors hover:border-white/20"
                            >
                                <div className="absolute -top-3 -left-3 bg-[#02000A] rounded-full">
                                    <CheckCircle2 className="w-6 h-6 text-[#0076CE]" />
                                </div>
                                <p className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed font-light m-0">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recursos Principais Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            O que entregamos
                        </h2>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
                            Soluções completas, desde a concepção até a entrega e manutenção contínua.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden bg-[#070512] border border-white/5 rounded-2xl p-8 hover:bg-[#0A071A] hover:border-[#0076CE]/40 transition-all duration-300 shadow-xl self-stretch"
                            >
                                {/* Background line icon watermark */}
                                <feature.icon className="absolute -right-4 -bottom-4 w-40 h-40 text-[#0076CE]/15 group-hover:text-[#0076CE]/25 transition-colors duration-300" strokeWidth={0.5} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <h3 className="text-[#0076CE] text-xl font-bold mb-4">{feature.title}</h3>
                                    <p className="text-white/70 text-base leading-relaxed font-light max-w-md">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Casos de Uso Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#05030F]">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">

                        {/* CTA Left */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left basis-1/3">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                                Casos de uso
                            </h2>
                            <p className="text-[#0099FF] text-lg font-medium mb-8">
                                Transformando desafios em<br className="hidden lg:block" /> desenvolvimento de software classe
                            </p>
                            <Link to="/contato">
                                <Button className="bg-[#0099FF] hover:bg-[#0076CE] text-white font-semibold px-8 py-6 h-auto text-base rounded-[100px] transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,153,255,0.3)] border border-white/10">
                                    Agendar demonstração
                                </Button>
                            </Link>
                        </div>

                        {/* Boxes Right Grid 2x2 */}
                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 basis-2/3 w-full">
                            {useCases.map((useCase, idx) => (
                                <div key={idx} className="bg-[#02000A] border border-white/10 rounded-2xl p-6 flex flex-col items-start text-left hover:border-white/20 transition-colors shadow-lg self-stretch">
                                    <h4 className="text-[#0099FF] text-lg font-bold mb-2">{useCase.title}</h4>
                                    <p className="text-white/70 text-sm font-light leading-relaxed mb-4">{useCase.desc}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {useCase.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-white/5 rounded-md text-[10px] uppercase tracking-wider text-white/50">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#02000A]">
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0076CE]/40 rounded-full blur-[150px] -z-10" />

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
                        Pronto para escalar <br className="hidden sm:block" />suas <span className="text-[#0099FF]">operações reais?</span>
                    </h2>
                    <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto font-light">
                        Agende uma demonstração com nossos arquitetos e engenheiros de software seniores especializados no seu segmento.
                    </p>
                    <Link to="/contato">
                        <Button className="bg-[#0099FF] hover:bg-[#0076CE] text-white font-semibold px-8 py-4 h-auto text-base rounded-[100px] transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,153,255,0.4)] border border-white/10">
                            Agendar demonstração
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
