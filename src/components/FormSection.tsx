import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { submitToGoogleSheets } from "@/lib/googleSheets";
import { trackLead } from "@/lib/metaPixel";

export const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cnpj: "",
    company: "",
    investment: "",
    revenue: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitToGoogleSheets(formData);
      
      // Track Lead event in Meta Pixel
      await trackLead(
        {
          email: formData.email,
          phone: formData.phone,
          name: formData.name,
        },
        {
          company: formData.company,
          investment: formData.investment,
          revenue: formData.revenue,
        }
      );
      
      toast.success("Formulário enviado! Entraremos em contato em breve.");
      // Limpar formulário após envio bem-sucedido
      setFormData({
        name: "",
        email: "",
        phone: "",
        cnpj: "",
        company: "",
        investment: "",
        revenue: "",
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formulario" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-2xl glow-border">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cadastre-se e receba o contato do nosso time!
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Complete o formulário</h3>
                  <p className="text-muted-foreground">
                    Forneça suas informações de contato. Garantimos a segurança
                    total de seus dados. Serão usados apenas para contato.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Receba uma ligação personalizada
                  </h3>
                  <p className="text-muted-foreground">
                    Em um prazo de até 8 horas, um dos nossos especialistas
                    entrará em contato diretamente para agendar a reunião mais
                    crucial com você.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Seu nome</Label>
                <Input
                  id="name"
                  placeholder="Digite seu nome completo"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Seu melhor e-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input
                  id="cnpj"
                  placeholder="00.000.000/0000-00"
                  value={formData.cnpj}
                  onChange={(e) =>
                    setFormData({ ...formData, cnpj: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label htmlFor="company">Nome da empresa</Label>
                <Input
                  id="company"
                  placeholder="Nome do seu restaurante"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label htmlFor="investment">
                  Qual é o seu investimento em Marketing por mês?
                </Label>
                <Select
                  value={formData.investment}
                  onValueChange={(value) =>
                    setFormData({ ...formData, investment: value })
                  }
                >
                  <SelectTrigger id="investment">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-600">0 a 600 reais por mês</SelectItem>
                    <SelectItem value="601-1200">601 a 1.200 por mês</SelectItem>
                    <SelectItem value="1201-2500">1.201 a 2.500 por mês</SelectItem>
                    <SelectItem value="2500-4000">2.500 a 4.000 por mês</SelectItem>
                    <SelectItem value="4001-10000">4.001 a 10.000 por mês</SelectItem>
                    <SelectItem value="10000+">Mais de 10 mil por mês</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="revenue">Qual o seu faturamento mensal?</Label>
                <Select
                  value={formData.revenue}
                  onValueChange={(value) =>
                    setFormData({ ...formData, revenue: value })
                  }
                >
                  <SelectTrigger id="revenue">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-20">Até 20 mil</SelectItem>
                    <SelectItem value="20-40">De 20 mil até 40 mil</SelectItem>
                    <SelectItem value="40-60">De 40 mil até 60 mil</SelectItem>
                    <SelectItem value="60-80">De 60 mil até 80 mil</SelectItem>
                    <SelectItem value="80-100">De 80 mil até 100 mil</SelectItem>
                    <SelectItem value="100-150">De 100 mil até 150 mil</SelectItem>
                    <SelectItem value="150-250">De 150 mil até 250 mil</SelectItem>
                    <SelectItem value="250-400">De 250 mil até 400 mil</SelectItem>
                    <SelectItem value="400-600">De 400 mil até 600 mil</SelectItem>
                    <SelectItem value="600-1000">De 600 mil até 1 milhão</SelectItem>
                    <SelectItem value="1000+">Mais de 1 milhão</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                variant="secondary" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Receber mais informações"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
