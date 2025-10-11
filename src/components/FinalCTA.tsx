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
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
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
          <p className="text-2xl md:text-3xl text-foreground/80 max-w-3xl mx-auto font-semibold">
            Se não comunica, não conecta.{" "}
            <span className="text-primary">Se não conecta, não serve.</span>
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button variant="hero" size="lg" className="text-xl px-12 py-8">
              ENTRAR EM CONTATO AGORA
              <img src={iconeRosa} alt="" className="ml-3 w-8 h-auto rotate-[15deg]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
