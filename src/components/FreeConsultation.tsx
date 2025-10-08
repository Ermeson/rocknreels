import { Button } from "@/components/ui/button";
import { Gift, Shield, Sparkles } from "lucide-react";

const FreeConsultation = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Main Card */}
        <div className="bg-gradient-card border-2 border-primary rounded-2xl p-8 md:p-12 shadow-glow">
          <div className="text-center space-y-8">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-hero shadow-glow">
              <Gift className="h-10 w-10 text-white" />
            </div>
            
            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              GARANTA A SUA{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                CONSULTORIA GRATUITA!
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Sim, você tem direito a uma consultoria gratuita de 30 minutos! Você sai da conversa com insights práticos e um plano de ação inicial. Sem enrolação, sem blá-blá-blá. Só o que sua marca precisa ouvir para realmente ter resultados.
            </p>
            
            {/* Bonus Section */}
            <div className="bg-secondary/20 border border-secondary rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">BÔNUS EXCLUSIVO PARA QUEM MARCAR HOJE:</h3>
              </div>
              <p className="text-lg text-foreground">
                Análise gratuita de até 3 vídeos da sua marca, com feedback prático e direto.
              </p>
            </div>
            
            {/* CTA Button */}
            <Button variant="hero" size="lg" className="text-lg px-10 py-7 text-xl">
              AGENDAR MINHA CONSULTORIA GRATUITA
            </Button>
            
            {/* Zero Risk Section */}
            <div className="pt-8 border-t border-border/50">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">ZERO RISCO. 100% IMPACTO.</h3>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Se a primeira conversa não abrir seus olhos para uma comunicação mais ágil, seguimos amigos. Se abrir, você nunca mais vai olhar para vídeo da mesma forma.
              </p>
            </div>
            
            {/* Secondary CTA */}
            <Button variant="secondary" size="lg" className="text-lg">
              EU QUERO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;
