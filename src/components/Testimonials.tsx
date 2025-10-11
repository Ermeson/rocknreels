import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Antes, um único vídeo institucional levava semanas e custava mais do que todo nosso budget de mídia. Com a Rock'n'Reels, conseguimos produzir em dias e investir o restante em distribuição. Com isso, reduzimos em 60% os custos e ainda aumentamos em 3x o alcance da nossa comunicação. Finalmente conseguimos equilibrar velocidade e profundidade sem abrir mão da qualidade.",
    author: "Marcos Siqueira",
    role: "Diretor de Marketing, Indústria de Tecnologia",
  },
  {
    quote: "Sempre produzimos vídeos 'bonitos', mas que não traziam leads. O trabalho da Rock'n'Reels mudou completamente isso: cada vídeo vem com storytelling pensado para engajar e gerar ação. Hoje, parte do nosso pipeline comercial vem diretamente de campanhas audiovisuais criadas com eles.",
    author: "Lucas Andrade",
    role: "Gerente de Vendas, Startup de Educação",
  },
  {
    quote: "Endomarketing sempre foi um desafio: vídeos demoravam e, quando chegavam, já estavam desatualizados. A Rock'n'Reels trouxe agilidade e clareza. Em um mês, dobramos a taxa de engajamento em nossas campanhas internas e até a equipe de RH se surpreendeu com a resposta dos colaboradores. Comunicação interna deixou de ser burocracia e virou cultura.",
    author: "Ana Clara Maciel",
    role: "Coordenadora de Comunicação Interna, Multinacional de Serviços",
  },
  {
    quote: "Trabalhamos com várias agências, mas sempre soava genérico. A Rock'n'Reels mergulhou na essência do nosso branding e traduziu isso em vídeos com identidade real. Tivemos feedbacks positivos dos clientes, reconhecimento da diretoria e, principalmente, coerência entre o que falamos e o que mostramos. Finalmente, temos uma comunicação com verdade.",
    author: "Tamires Souza",
    role: "Head de Branding, Empresa de Varejo",
  },
  {
    quote: "Com a Rock'n'Reels, reduzimos de 40 dias para menos de 7 o tempo médio de produção de cada vídeo. Isso nos permitiu lançar campanhas em ritmo competitivo e testar formatos com rapidez. Hoje, nossa presença digital é constante e estratégica, algo impossível antes. A escala que conquistamos impactou diretamente no reconhecimento da marca.",
    author: "Fernando Duarte",
    role: "Gerente de Mídia Digital, Grupo de Saúde",
  },
  {
    quote: "Antes, nossos vídeos passavam despercebidos. Agora, somos reconhecidos como inovadores até pelos concorrentes. Os vídeos da Rock'n'Reels nos deram voz no LinkedIn e ajudaram a fechar parcerias estratégicas que antes nem respondiam aos nossos e-mails. Mais do que conteúdo, ganhamos posicionamento. Viramos referência e isso abriu portas que não imaginávamos.",
    author: "Luciano Miranda",
    role: "CEO, Consultoria B2B",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-card relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4 px-2">
          O QUE NOSSOS{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            CLIENTES DIZEM
          </span>
        </h2>
        
        <p className="text-center text-muted-foreground text-base sm:text-lg mb-16 px-4">
          Resultados reais de quem já transformou sua comunicação
        </p>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-background/50 border-border hover:border-primary/50 transition-all hover:shadow-glow"
            >
              <CardContent className="p-6 sm:p-8">
                <Quote className="h-8 sm:h-10 w-8 sm:w-10 text-primary mb-4 opacity-50" />
                <p className="text-sm sm:text-base text-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm sm:text-base font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
