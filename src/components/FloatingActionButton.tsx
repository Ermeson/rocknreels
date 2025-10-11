import { Button } from "@/components/ui/button";
import iconeRosa from "@/assets/icone-rosa.png";
import { useEffect, useState } from "react";

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      const secondFold = heroHeight * 2;

      // Show button after second fold, hide when back to hero
      setIsVisible(scrollPosition > secondFold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <Button variant="hero" size="lg" className="shadow-2xl text-base md:text-lg px-6 md:px-8">
        QUERO TER MAIS RESULTADOS
        <img src={iconeRosa} alt="" className="ml-2 w-6 md:w-8 h-auto rotate-[15deg]" />
      </Button>
    </button>
  );
};

export default FloatingActionButton;
