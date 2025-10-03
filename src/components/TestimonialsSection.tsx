import AnimatedTestimonialsDemo from "@/components/ui/animated-testimonials-demo";

// Array de testimonials removido - agora usando AnimatedTestimonials

export const TestimonialsSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById("formulario");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="depoimentos" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block border border-[#282828] px-6 sm:px-9 py-2 sm:py-3 rounded-full bg-[#131313] mb-4">
              <span className="text-white font-light text-xs sm:text-sm">DEPOIMENTOS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-regular tracking-tighter">
            Os <span className="text-[#808080]">nossos clientes</span> falam por nós
            </h2>
          </div>

          {/* Componente AnimatedTestimonials */}
          <div className="mb-8 sm:mb-12">
            <AnimatedTestimonialsDemo />
          </div>

          <div className="text-center">
            <button 
              onClick={scrollToForm}
              className="text-primary-foreground font-light px-8 sm:px-10 py-3 rounded-full bg-[#5340bf] hover:bg-[#5340bf]/90 transition-ease-in-out duration-500 hover:[box-shadow:0_0_30px_0_rgba(48,14,255,0.4)] text-xs sm:text-sm"
            >
              SEJA MAIS UM CASE DE SUCESSO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
