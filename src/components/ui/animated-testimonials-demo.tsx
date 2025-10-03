import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "A Okto transformou completamente nosso restaurante. Em 6 meses, aumentamos nosso faturamento em 300% e agora temos filas na porta todos os dias.",
      name: "Marina Santos",
      designation: "Proprietária do Restaurante Bella Vista",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Nunca imaginei que o delivery pudesse render tanto. Com a estratégia da Okto, nossas vendas online superaram o salão em apenas 3 meses.",
      name: "Carlos Mendes",
      designation: "Chef do Nonno Peppe",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "A equipe da Okto é excepcional. Eles entenderam nossa proposta e criaram uma estratégia que nos posicionou como referência no mercado.",
      name: "Ana Beatriz",
      designation: "Sócia do Peds Burger",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Com a assessoria da Okto, conseguimos expandir para 3 unidades em 1 ano. Eles não só entregam resultados, mas nos ensinam como crescer.",
      name: "Roberto Silva",
      designation: "CEO da Dog King",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "A Okto revolucionou nosso marketing digital. Hoje temos 50 mil seguidores engajados e uma carteira de clientes fiéis que só cresce.",
      name: "Fernanda Costa",
      designation: "Diretora do Sabor Prime",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
