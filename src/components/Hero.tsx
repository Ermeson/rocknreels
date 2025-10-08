import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <img 
            src={logo} 
            alt="Rock'n'Reels Logo" 
            className="w-32 h-32 md:w-40 md:h-40 mb-4"
          />
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="block mb-2">VÍDEOS NÃO SÃO SOBRE FORMATO.</span>
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              SÃO SOBRE PRESENÇA, POSICIONAMENTO E PODER DE MARCA!
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-semibold">
            Vídeos com punch, feitos com IA + direção criativa humana. Comunicação que não trava. Conteúdo que não passa batido.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
            Chega de gastar rios de dinheiro com estúdios, prazos eternos e campanhas que ninguém lembra. 
            Nós fazemos sua marca aparecer, impactar e converter.
          </p>
          
          {/* CTA Button */}
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 mt-8">
            QUERO TER MAIS RESULTADOS
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
