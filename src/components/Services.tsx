import { Button } from "@/components/ui/button";
import { Video, Lightbulb, Package } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Vídeos com IA + storytelling de marca",
    description: "Reels, Shorts, institucionais, endomarketing e treinamentos com clareza, velocidade e impacto.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria estratégica de conteúdo",
    description: "Diagnóstico + plano de ação + curadoria de ferramentas. Sua equipe de marketing ganha direção em vez de ficar apagando incêndio.",
  },
  {
    icon: Package,
    title: "Pacotes mensais de produção",
    description: "Fluxo contínuo de vídeos, roteiros e direção criativa. Escala e consistência sem burocracia.",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 leading-tight">
          NOSSA SOLUÇÃO PARA EMPRESAS QUE PRECISAM{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            APARECER COM INTENÇÃO
          </span>
        </h2>
        
        <p className="text-center text-muted-foreground text-lg mb-16">
          Três pilares fundamentais para transformar sua comunicação
        </p>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all hover:shadow-glow group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-hero mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Button variant="default" size="lg" className="text-lg">
            ENTRAR EM CONTATO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
