import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import logo from "@/assets/logo-principal-branca.png";
import iconeRosa from "@/assets/icone-rosa.png";
import { useState } from "react";
const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <img src={logo} alt="Rock'n'Reels Logo" className="w-44 h-auto mb-4" />

          {/* Main Headline */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2">
            <span className="block mb-2">VÍDEOS NÃO SÃO SOBRE FORMATO.</span>
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              São sobre presença, posicionamento e poder de marca!
            </span>
          </h1>

          {/* Video Gallery - Infinite Scroll */}
          <div className="w-full overflow-hidden py-8">
            <div className="flex gap-6 animate-scroll">
              {[...Array(8)].map((_, i) => <div key={i} className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform" style={{
              transform: i % 2 === 0 ? "rotate(-3deg)" : "rotate(3deg)",
              transition: "transform 0.3s ease"
            }} onClick={() => setIsVideoOpen(true)}>
                  <iframe width="320" height="180" src="https://www.youtube.com/embed/xvxMa4svO0w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-lg shadow-glow pointer-events-none" />
                </div>)}
            </div>
          </div>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl font-semibold px-4">
            Vídeos com punch, feitos com IA + direção criativa humana.
          </p>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl font-semibold px-4">
            Comunicação que não trava. Conteúdo que não passa batido.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl px-4">
            Chega de gastar rios de dinheiro com estúdios, prazos eternos e campanhas que ninguém lembra. Nós fazemos
            sua marca <span className="font-semibold">aparecer, impactar e converter</span>.
          </p>

          {/* CTA Button */}
          <a href="https://wa.me/5521979564294" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 mt-8">
              <span className="hidden sm:inline">QUERO TER MAIS RESULTADOS</span>
              <span className="sm:hidden">QUERO RESULTADOS</span>
              <img src={iconeRosa} alt="" className="ml-2 w-6 sm:w-8 h-auto rotate-[15deg]" />
            </Button>
          </a>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 border-2 border-primary shadow-[0_0_50px_rgba(255,20,147,0.6)] bg-card">
          <div className="relative w-full aspect-video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xvxMa4svO0w?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-lg" />
          </div>
        </DialogContent>
      </Dialog>
    </section>;
};
export default Hero;