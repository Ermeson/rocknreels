import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "IA não deixa tudo igual?",
    answer: "Não na Rock'n'Reels. A IA aqui é ferramenta de velocidade. A diferenciação vem da direção criativa humana, e é isso que garante vídeos únicos e autênticos.",
  },
  {
    question: "Isso é só para grandes empresas?",
    answer: "Não. Startups, PMEs e multinacionais já trabalham conosco. Comunicação clara não depende de tamanho, depende de intenção.",
  },
  {
    question: "E se eu não tiver tempo para acompanhar?",
    answer: "Nosso processo foi criado exatamente para isso: menos etapas, mais entrega. Você aprova rápido e recebe resultado ainda mais rápido.",
  },
  {
    question: "Mas e o custo?",
    answer: "Nosso modelo custa menos que campanhas tradicionais porque eliminamos processos desnecessários. Você paga por impacto, não por burocracia.",
  },
  {
    question: "Preciso de equipe interna para fazer funcionar?",
    answer: "Não. Você pode ter um time de marketing robusto ou só uma pessoa dedicada. Nós adaptamos o fluxo para a sua realidade.",
  },
  {
    question: "Funciona mesmo em mercados competitivos?",
    answer: "Justamente aí que funciona melhor. Enquanto concorrentes ainda aprovam conteúdos vazios, você já está no ar com vídeos claros, diretos e impactantes.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-gradient-card relative">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 px-2">
          PERGUNTAS{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            FREQUENTES
          </span>
        </h2>
        
        <p className="text-center text-muted-foreground text-base sm:text-lg mb-12 px-4">
          Tudo o que você precisa saber antes de começar
        </p>
        
        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background/50 border border-border rounded-lg px-6 hover:border-primary/50 transition-all"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:text-primary py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
