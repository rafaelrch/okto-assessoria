export const StructureSection = () => {
  return (
    <section id="estrutura" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-4xl md:text-5xl font-regular text-center mb-4 tracking-tighter">
            Nada de empresa virtual!
          </h2>
          
          <p className="text-xl text-white/30 text-center mb-12 font-regular tracking-tighter">
            (ou Home-Office)
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-4xl  font-regular tracking-tighter">
                A Okto é uma empresa{" "}
                <span className="text-primary font-bold">100% presencial</span>{" "}
                com uma estrutura de ponta.
              </p>
              
              <p className="text-muted-foreground text-lg font-light tracking-tight">
                Nossa equipe trabalha em um ambiente colaborativo, permitindo
                maior sinergia e resultados ainda mais expressivos para nossos
                clientes.
              </p>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-muted">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Estrutura Alpha Assessoria"
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
