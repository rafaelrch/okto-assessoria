import { Button } from "@/components/ui/button";

export const ExclusiveCTA = () => {
  const scrollToForm = () => {
    const element = document.getElementById("formulario");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 border-2 border-primary glow-border shadow-2xl text-center space-y-6">
            <p className="text-2xl md:text-3xl leading-relaxed">
              O nosso trabalho é{" "}
              <span className="text-primary font-bold">exclusivo</span> e nem
              sempre temos vagas abertas para novos parceiros
            </p>

            <p className="text-xl text-muted-foreground">
              Agarre a oportunidade e receba uma assessoria de crescimento da
              maior especialista da América Latina.
            </p>

            <Button variant="secondary" size="lg" className="text-lg px-12 py-6 h-auto" onClick={scrollToForm}>
              Agende já uma reunião
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
