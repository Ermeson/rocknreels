import { Lightbulb, Palette, Film, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Estratégia & Narrativa",
    points: [
      "Briefing cirúrgico: objetivo, público, mensagem central, prazos e limites.",
      "Nasce a Ideia-Motriz (intenção + tom) e o Roteiro (descritivo ou técnico).",
      "Checkpoint #1 (aprovação do cliente): roteiro validado = norte criativo definido.",
    ],
    deliverable: "Você recebe: 1-pager de conceito + roteiro aprovado.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design Visual & Motion",
    points: [
      "Pesquisa de referências: moodboard (estilo, cor, clima, câmera/movimento).",
      "Criação de frames-chave (IA/ilustração/mockups) alinhados ao roteiro.",
      "Upscale & texturização: nitidez, detalhe, 'pele' real.",
      "Animação dos elementos (movimento, transições, parallax, câmera virtual).",
      "Ferramentas: Runway, LTX, Luma, Kling, After Effects etc.",
    ],
    deliverable: "Você recebe: moodboard final + frames aprovados + prévia animada.",
  },
  {
    number: "03",
    icon: Film,
    title: "Edição & Construção",
    points: [
      "Integração de imagem, ritmo, trilha/voz, efeitos.",
      "Montagem narrativa que mantém o espectador engajado.",
      "Sincronização perfeita entre elementos visuais e sonoros.",
    ],
    deliverable: "Você recebe: primeira versão completa do vídeo.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Finalização & Entrega",
    points: [
      "Color grading (harmonização de tons + assinatura estética).",
      "Áudio: limpeza, mix de trilha/voz/SFX, loudness para cada canal.",
      "Masters e variações (9:16, 1:1, 16:9), legendas se necessário.",
      "Guia rápido de publicação para postar sem susto.",
    ],
    deliverable: "Você recebe: vídeo finalizado em todos os formatos + guia de publicação.",
  },
];

const Workflow = () => {
  return (
    <section className="py-20 px-4 bg-gradient-card relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            NOSSO FLUXO DE{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              TRABALHO
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            4 etapas para transformar sua ideia em vídeos que convertem
          </p>
        </div>
        
        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-background/50 border border-border rounded-lg p-8 hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon and Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-hero">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground rounded-full w-10 h-10 flex items-center justify-center font-black text-sm">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">{step.title}</h3>
                    
                    <ul className="space-y-3">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm sm:text-base font-semibold text-foreground">{step.deliverable}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
