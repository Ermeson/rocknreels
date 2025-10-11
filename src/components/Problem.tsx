import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import iconeRosa from "@/assets/icone-rosa.png";

const problems = [
  "Equipe presa em aprovações intermináveis que matam a velocidade.",
  "Orçamento consumido em estúdios, agências e processos que não entregam retorno.",
  "Concorrentes ocupando todos os espaços digitais, enquanto sua marca segue invisível.",
  "Conteúdo 'profissional demais', mas frio e esquecível, que não gera conexão e nem conversa.",
];

const Problem = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 leading-tight">
          O PROBLEMA NÃO É FALTA DE CONTEÚDO.{" "}
          <span className="text-primary">
            É EXCESSO DE CONTEÚDO QUE NÃO DIZ NADA.
          </span>
        </h2>
        
        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-glow"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{problem}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Text */}
        <div className="text-center space-y-8">
          <p className="text-2xl md:text-3xl font-bold text-muted-foreground">
            OU SEJA: tempo e dinheiro desperdiçados, campanhas mornas e{" "}
            <span className="text-foreground">uma marca que não é lembrada.</span>
          </p>
          
          <Button variant="outline" size="lg" className="text-lg">
            QUERO PARAR DE PERDER RELEVÂNCIA
            <img src={iconeRosa} alt="" className="ml-2 w-8 h-auto rotate-[15deg]" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Problem;
