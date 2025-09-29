import { Star } from "lucide-react";

const services = [
  "Aumentar o número de pedidos no delivery",
  "Não dependa das plataformas para vender",
  "Aumentar o movimento no salão",
  "Ações de marketing e metrificação de resultados",
  "Entender os seus indicadores de resultados",
  "Acelerar o seu crescimento",
  "Tornar a sua empresa referência de mercado",
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 rounded-full border-2 border-primary">
              <span className="text-primary font-bold">O que faremos?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Entenda como podemos agregar ao seu restaurante!
          </h2>

          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <Star className="w-6 h-6 text-primary fill-primary group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
