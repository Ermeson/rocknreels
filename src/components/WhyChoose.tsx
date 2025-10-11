import { Button } from "@/components/ui/button";
import { Zap, Cpu, Eye, TrendingUp, Users } from "lucide-react";
import iconeRosa from "@/assets/icone-rosa.png";

const benefits = [
  {
    icon: Zap,
    title: "Velocidade + profundidade",
    description: "Entregamos rápido, mas com estratégia.",
  },
  {
    icon: Cpu,
    title: "IA como aceleradora",
    description: "Não como substituta. Nada de vídeo genérico.",
  },
  {
    icon: Eye,
    title: "Clareza acima de tudo",
    description: "O público entende, conecta e responde.",
  },
  {
    icon: TrendingUp,
    title: "Menos custo, mais impacto",
    description: "ROI maior, sem desperdício.",
  },
  {
    icon: Users,
    title: "Tom humano e consultivo",
    description: "Sua marca soa real, não robótica.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 leading-tight">
          POR QUE A{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            ROCK'N REELS
          </span>
          {" "}É A ESCOLHA INTELIGENTE PARA A SUA MARCA?
        </h2>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-glow group text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg">
            QUERO ESCOLHER A ROCK'N REELS
            <img src={iconeRosa} alt="" className="ml-2 w-8 h-auto" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
