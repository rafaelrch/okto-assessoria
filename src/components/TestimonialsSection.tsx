import { Button } from "@/components/ui/button";

const testimonials = [
  { id: 1, title: "Depoimento Cliente 1" },
  { id: 2, title: "Depoimento Cliente 2" },
  { id: 3, title: "Depoimento Cliente 3" },
];

export const TestimonialsSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById("formulario");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full border-2 border-primary mb-4">
              <span className="text-primary font-bold">Depoimentos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black">
              Os nossos clientes falam por nós
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="aspect-video rounded-xl overflow-hidden shadow-xl bg-muted hover:shadow-2xl transition-shadow"
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title={testimonial.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="secondary" size="lg" onClick={scrollToForm}>
              Seja mais um Case de Sucesso
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
