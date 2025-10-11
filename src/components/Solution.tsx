import { Button } from "@/components/ui/button";
import { Zap, Target, MessageCircle } from "lucide-react";
import iconeRosa from "@/assets/icone-rosa.png";

const Solution = () => {
  return (
    <section className="py-20 px-4 bg-gradient-card relative">
      <div className="container mx-auto max-w-6xl">
        {/* Main Title */}
        <div className="text-center mb-16 space-y-6 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
            <span className="block mb-2">COMUNICAÇÃO QUE NÃO TRAVA.</span>
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              CONTEÚDO QUE NÃO PASSA BATIDO.
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed px-2">
            A Rock'n'Reels existe para destravar a voz da sua marca. 
            Usamos IA para acelerar, mas quem dá o tom é a direção criativa humana.
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Nada de vídeos genéricos</h3>
            <p className="text-muted-foreground">
              Cada frame é pensado estrategicamente para sua marca
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4">
              <Target className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Nada de "padrãozinho" de agência</h3>
            <p className="text-muted-foreground">
              Autenticidade e personalidade em cada entrega
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Comunicação com verdade</h3>
            <p className="text-muted-foreground">
              Descomplicar vídeos e acelerar marcas
            </p>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="text-center space-y-8 px-2">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground/90">
            Nossa missão é descomplicar vídeos, acelerar marcas e comunicar com verdade.
          </p>
          
          <Button variant="secondary" size="lg" className="text-base sm:text-lg px-4 sm:px-8">
            <span className="hidden sm:inline">QUERO ACELERAR MINHA COMUNICAÇÃO</span>
            <span className="sm:hidden">QUERO ACELERAR</span>
            <img src={iconeRosa} alt="" className="ml-2 w-6 sm:w-8 h-auto rotate-[15deg]" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
