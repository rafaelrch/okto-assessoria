import { NewHeader } from "@/components/NewHeader";
import { Hero } from "@/components/Hero";
import { ClientsSection } from "@/components/ClientsSection";
import { StructureSection } from "@/components/StructureSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ExclusiveCTA } from "@/components/ExclusiveCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewHeader />
      <Hero />
      <ClientsSection />
      <StructureSection />
      <TestimonialsSection />
      <ServicesSection />
      <ExclusiveCTA />
      <Footer />
    </div>
  );
};

export default Index;
