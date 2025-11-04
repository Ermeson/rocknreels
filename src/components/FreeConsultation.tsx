import { Button } from "@/components/ui/button";
import { Shield, Sparkles } from "lucide-react";
import iconeAmarelo from "@/assets/icone-amarelo.png";
import iconeRosa from "@/assets/icone-rosa.png";

const FreeConsultation = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Main Card */}
        <div className="bg-gradient-card border-2 border-primary rounded-2xl p-8 md:p-12 shadow-glow">
          <div className="text-center space-y-8">
            {/* Icon */}
            <div className="inline-flex items-center justify-center">
              <img src={iconeAmarelo} alt="Rock'n'Reels" className="w-24 h-24 md:w-28 md:h-28" />
            </div>
            
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2">
              GARANTA A SUA{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                CONSULTORIA GRATUITA!
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed px-2">
              Sim, você tem direito a uma consultoria gratuita de 30 minutos! Você sai da conversa com insights práticos e um plano de ação inicial. Sem enrolação, sem blá-blá-blá. Só o que sua marca precisa ouvir para realmente ter resultados.
            </p>
            
            {/* Bonus Section */}
            <div className="bg-secondary/20 border border-secondary rounded-lg p-4 sm:p-6 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3">
                <Sparkles className="h-6 w-6 text-secondary flex-shrink-0" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground text-center">BÔNUS EXCLUSIVO PARA QUEM MARCAR HOJE:</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-foreground text-center">
                Análise gratuita de até 3 vídeos da sua marca, com feedback prático e direto.
              </p>
            </div>
            
            {/* CTA Button */}
            <a href="https://wa.me/5521979564294" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base sm:text-lg md:text-xl px-6 sm:px-10 py-5 sm:py-7">
                <span className="hidden md:inline">AGENDAR MINHA CONSULTORIA GRATUITA</span>
                <span className="md:hidden">AGENDAR CONSULTORIA</span>
                <img src={iconeRosa} alt="" className="ml-2 w-6 sm:w-8 h-auto rotate-[15deg]" />
              </Button>
            </a>
            
            {/* Zero Risk Section */}
            <div className="pt-8 border-t border-border/50 px-2">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="h-6 sm:h-8 w-6 sm:w-8 text-primary flex-shrink-0" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">ZERO RISCO. 100% IMPACTO.</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Se a primeira conversa não abrir seus olhos para uma comunicação mais ágil, seguimos amigos. Se abrir, você nunca mais vai olhar para vídeo da mesma forma.
              </p>
            </div>
            
            {/* Secondary CTA */}
            <a href="https://wa.me/5521979564294" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="text-base sm:text-lg px-8 sm:px-10">
                EU QUERO
                <img src={iconeRosa} alt="" className="ml-2 w-6 sm:w-8 h-auto rotate-[15deg]" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;
