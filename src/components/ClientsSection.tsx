import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const clients = [
  "Lavi",
  "InBox",
  "Nonno Peppe",
  "Peds",
  "Felici",
  "Dog King",
  "Sabor Prime",
  "Casa Italiana",
];

export const ClientsSection = () => {
  return (
    <section id="clientes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full border-2 border-primary mb-4">
            <span className="text-primary font-bold">Clientes Alpha</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Alguns clientes que já escalamos
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-4">
                  <div className="bg-card rounded-xl h-32 flex items-center justify-center shadow-lg border border-border hover:border-primary transition-colors">
                    <span className="text-2xl font-bold text-primary">
                      {client}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
