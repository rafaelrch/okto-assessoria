import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToForm = () => {
    const element = document.getElementById("formulario");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            A maior assessoria de{" "}
            <span className="text-primary glow-text">Marketing</span> para{" "}
            <span className="text-primary glow-text">Restaurantes</span> da
            América Latina
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Seja cliente da Assessoria que mais entrega resultados para
            restaurantes na atualidade, com cases que cresceram acima de 600%
            durante a parceria. Confira o vídeo abaixo.
          </p>

          <div className="pt-8">
            <Button variant="cta" size="lg" className="text-lg px-12 py-6 h-auto" onClick={scrollToForm}>
              Agende já uma reunião
            </Button>
          </div>

          <div className="pt-12">
            <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-muted">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Alpha Assessoria - Apresentação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
