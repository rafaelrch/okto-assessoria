import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border-2 border-primary rotate-45 flex items-center justify-center">
            <ChevronUp className="w-4 h-4 text-primary -rotate-45" />
          </div>
          <span className="text-xl font-bold text-foreground">alpha assessoria</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("depoimentos")}
            className="text-foreground hover:text-primary transition-colors font-bold tracking-tighter"
          >
            Depoimentos
          </button>
          <button
            onClick={() => scrollToSection("clientes")}
            className="text-foreground hover:text-primary transition-colors font-bold tracking-tighter"
          >
            Clientes
          </button>
          <button
            onClick={() => scrollToSection("estrutura")}
            className="text-foreground hover:text-primary transition-colors font-bold tracking-tighter"
          >
            Sobre a Alpha
          </button>
        </nav>

        <Button 
          variant="secondary" 
          size="lg"
          onClick={() => scrollToSection("formulario")}
        >
          Contrate
        </Button>
      </div>
    </header>
  );
};
