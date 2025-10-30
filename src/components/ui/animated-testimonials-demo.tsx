import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "A Okto transformou nosso negócio. Resultados reais, rápido e com estratégia.",
      name: "Depoimento 1",
      designation: "Cliente Okto",
      src: "/depoimento 1.jpeg",
    },
    {
      quote: "Equipe extremamente profissional. Crescemos mês após mês com consistência.",
      name: "Depoimento 2",
      designation: "Cliente Okto",
      src: "/depoimento 2.jpeg",
    },
    {
      quote: "Os números falam por si. A melhor decisão que tomamos este ano.",
      name: "Depoimento 3",
      designation: "Cliente Okto",
      src: "/depoimento 3.mp4",
    },
    {
      quote: "Processo claro, acompanhamento próximo e performance consistente.",
      name: "Depoimento 4",
      designation: "Cliente Okto",
      src: "/depoimento 4.mp4",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
