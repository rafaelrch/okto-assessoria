// Removido imports do carousel shadcn

const clients = [
  "Lavi",
  "InBox",
  "Nonno Peppe",
  "Peds",
  "Felici",
  "Dog King",
  "Sabor Prime",
  "Casa Italiana",
  "Bella Vista",
  "Taste of Italy",
  "Golden Spoon",
  "Chef's Corner",
];

// Duplicar os clientes para criar um loop infinito suave
const duplicatedClients = [...clients, ...clients, ...clients];

export const ClientsSection = () => {
  return (
    <section id="clientes" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block border border-[#282828] px-6 sm:px-9 py-2 sm:py-3 rounded-full bg-[#131313] mb-4">
            <span className="text-white font-light text-xs sm:text-sm">CLIENTES OKTO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-regular mb-4 tracking-tighter">
            <span className="text-[#808080]">Alguns clientes que</span> já escalamos
          </h2>
        </div>

        {/* Carrossel Infinito Animado */}
        <div className="relative overflow-hidden">
          {/* Gradiente lateral esquerdo */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          
          {/* Gradiente lateral direito */}
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll">
            {duplicatedClients.map((client, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-48 sm:w-56 md:w-64 mx-2 sm:mx-4"
              >
                <div className="bg-card rounded-xl h-24 sm:h-28 md:h-32 flex items-center justify-center border border-border hover:border-primary transition-colors">
                  <span className="text-lg sm:text-xl md:text-2xl font-regular text-white/20 tracking-tighter">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botão CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <button 
            onClick={() => {
              const element = document.getElementById("formulario");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-primary-foreground font-light px-8 sm:px-10 py-3 rounded-full bg-[#5340bf] hover:bg-[#5340bf]/90 transition-ease-in-out duration-500 hover:[box-shadow:0_0_30px_0_rgba(48,14,255,0.4)] text-xs sm:text-sm"
          >
            SEJA MAIS UM CASE DE SUCESSO
          </button>
        </div>
        
      </div>
    </section>
  );
};
