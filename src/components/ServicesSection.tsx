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
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <div className="inline-block border border-[#282828] px-6 sm:px-9 py-2 sm:py-3 rounded-full bg-[#131313]">
              <span className="text-white font-light text-xs sm:text-sm">O QUE FAREMOS?</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-regular mb-8 sm:mb-12 tracking-tighter">
            Entenda como podemos agregar <span className="text-[#808080]">ao seu restaurante!</span>
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="flex items-start gap-4">
                  <p className="ml-3 text-lg sm:text-xl text-[#676767] group-hover:text-white transition-all duration-300 font-light tracking-tight group-hover:translate-x-2">
                    {service}
                  </p>
                </div>
                {/* Retângulo lateral esquerdo no hover */}
                <div className=" absolute left-0 top-0 bottom-0 w-1 bg-primary/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-y-0 group-hover:scale-y-100 origin-center"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
