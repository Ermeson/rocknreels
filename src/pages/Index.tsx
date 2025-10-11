import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import FreeConsultation from "@/components/FreeConsultation";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import FloatingActionButton from "@/components/FloatingActionButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Workflow />
      <WhyChoose />
      <Testimonials />
      <FreeConsultation />
      <FAQ />
      <FinalCTA />
      <FloatingActionButton />
    </main>
  );
};

export default Index;
