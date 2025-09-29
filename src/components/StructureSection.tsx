export const StructureSection = () => {
  return (
    <section id="estrutura" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Estrutura
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Nada de empresa virtual!
          </h2>
          
          <p className="text-xl text-primary text-center mb-12 font-medium">
            (ou Home-Office)
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                A Alpha é uma empresa{" "}
                <span className="text-primary font-bold">100% presencial</span>{" "}
                com uma estrutura de ponta e mais de{" "}
                <span className="text-primary font-bold">80 profissionais</span>.
              </p>
              
              <p className="text-muted-foreground text-lg">
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
