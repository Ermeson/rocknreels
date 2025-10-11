import { Button } from "@/components/ui/button";
import iconeRosa from "@/assets/icone-rosa.png";

const FinalCTA = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-secondary/30 blur-3xl" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          {/* Main Statement */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight px-2">
            <span className="block mb-4">
              OU SUA MARCA FALA COM{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                INTENÇÃO
              </span>
              ,
            </span>
            <span className="block">OU CONTINUA SENDO IGNORADA...</span>
          </h2>
          
          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/80 max-w-3xl mx-auto font-semibold px-2">
            Se não comunica, não conecta.{" "}
            <span className="text-primary">Se não conecta, não serve.</span>
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button variant="hero" size="lg" className="text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-12 py-6 md:py-8">
              <span className="hidden sm:inline">ENTRAR EM CONTATO AGORA</span>
              <span className="sm:hidden">CONTATO AGORA</span>
              <img src={iconeRosa} alt="" className="ml-2 sm:ml-3 w-6 sm:w-8 h-auto rotate-[15deg]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
