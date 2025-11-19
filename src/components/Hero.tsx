import { useState } from "react";
import { motion } from "framer-motion";
import { BeamsBackground } from "@/components/ui/beams-background";
import { TextEffect } from "@/components/ui/text-effect";
import { submitToGoogleSheets } from "@/lib/googleSheets";
import { trackLead } from "@/lib/metaPixel";
import { toast } from "sonner";

export const Hero = () => {
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

  const scrollToForm = () => {
    const element = document.getElementById("formulario");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BeamsBackground intensity="medium" className="pt-24">
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Seção de Confiança */}
          <motion.div 
            className="inline-flex items-center gap-3 px-9 py-1  bg-black/20 border border-gray-700/30 rounded-full backdrop-blur-sm"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.6, // Delay menor que o botão para aparecer primeiro
              ease: "easeOut" 
            }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5" fill="#FFD700" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm sm:text-base text-gray-300 font-light tracking-tight">
              Confiado por <span className="text-white font-medium">437 clientes satisfeitos</span>
            </span>
          </motion.div>

          {/* Título */}
          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-regular tracking-tighter text-white">
            <TextEffect 
              per="word" 
              preset="blur" 
              delay={0.2}
              className="text-white"
            >
              A maior assessoria de Marketing para Restaurantes da Bahia
            </TextEffect>
          </div>

          {/* Descrição */}
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light px-4">
            <TextEffect 
              per="word" 
              preset="blur" 
              delay={0.1}
              className="text-muted-foreground"
            >
              Seja cliente da Assessoria que mais entrega resultados para restaurantes na atualidade, com cases que cresceram acima de 600% durante a parceria.
            </TextEffect>
          </div>

          {/* Botão com animação de baixo para cima */}
          <motion.div 
            className="pt-3"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.5, // Delay para aparecer após o texto
              ease: "easeOut" 
            }}
          >
            <button 
              onClick={scrollToForm}
              className="text-white font-light text-sm sm:text-base px-8 sm:px-12 py-3 h-auto rounded-full hover:-translate-y-[-2px] bg-[#5340bf] hover:bg-[#5340bf]/90 transition-ease-in-out duration-500 hover:[box-shadow:0_0_30px_0_rgba(48,14,255,0.4)]"
            >
              AGENDE JÁ UMA REUNIÃO
            </button>
          </motion.div>
 
          {/* Grande caixa com o formulário */}
          <div className="pt-8 sm:pt-12 -mx-4">
            <div className="w-full bg-[#131313] rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-[#222222]">
              {/* Layout em duas colunas */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Coluna esquerda - Título + Passos */}
                <div className="space-y-6 sm:space-y-8">
                  {/* Título da seção */}
                  <div className="text-left">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-regular tracking-tighter">
                      Cadastre-se e receba o contato do nosso time!
                    </h2>
                  </div>

                  {/* Blocos dos passos */}
                  <div className="space-y-8">
                    {/* Passo 1 */}
                    <div className="space-y-4">
                      <h3 className="text-left flex items-center">
                        <span className="w-20 h-0.5 bg-primary inline-block mr-2"></span>
                        <span className="text-sm text-primary font-bold tracking-tighter">Passo 1</span>
                      </h3>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-bold mb-2 text-white tracking-tighter">Complete o formulário</h4>
                          <p className="text-[#616161] text-sm font-normal tracking-tighter">
                            Forneça suas informações de contato. Garantimos a segurança
                            total de seus dados. Serão usados apenas para contato.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Passo 2 */}
                    <div className="space-y-4">
                      <h3 className="text-left flex items-center">
                        <span className="w-20 h-0.5 bg-primary inline-block mr-2"></span>
                        <span className="text-sm text-primary font-bold tracking-tighter">Passo 2</span>
                      </h3>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-bold mb-2 text-white tracking-tighter">
                            Receba uma ligação personalizada
                          </h4>
                          <p className="text-[#616161] text-sm font-normal tracking-tighter">
                            Em um prazo de até 8 horas, um dos nossos especialistas
                            entrará em contato diretamente para agendar a reunião mais
                            crucial com você.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coluna direita - Formulário */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" id="formulario">
                    <input
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className=" w-full p-4 text-sm rounded-lg bg-background/50 border border-[#222222] focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-white/30"
                    />

                    <input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full p-4 text-sm rounded-lg bg-background/50 border border-[#222222] focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-white/30"
                    />

                    <input
                      type="tel"
                      placeholder=" (DDD) + Telefone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="w-full p-4 text-sm rounded-lg bg-background/50 border border-[#222222] focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-white/30"
                    />

                    <input
                      type="text"
                      placeholder="CNPJ"
                      value={formData.cnpj}
                      onChange={(e) =>
                        setFormData({ ...formData, cnpj: e.target.value })
                      }
                      required
                      className="w-full p-4 text-sm rounded-lg bg-background/50 border border-[#222222] focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-white/30"
                    />

                    <input
                      type="text"
                      placeholder="Nome da empresa"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      required
                      className="w-full p-4  rounded-lg bg-background/50  focus:ring-2 focus:ring-primary focus:border-transparent text-sm border border-[#222222] text-white placeholder-white/30"
                    />

                    <select
                      value={formData.investment}
                      onChange={(e) =>
                        setFormData({ ...formData, investment: e.target.value })
                      }
                      required
                      className="w-full p-4 rounded-lg bg-background/50  focus:ring-2 focus:ring-primary focus:border-transparent text-sm border border-[#222222] text-white/70 appearance-none"
                    >
                      <option value="" className="text-gray-400">Qual é o seu investimento em Marketing por mês?</option>
                      <option value="0-600" className="text-gray-900">0 a 600 reais por mês</option>
                      <option value="601-1200" className="text-gray-900">601 a 1.200 por mês</option>
                      <option value="1201-2500" className="text-gray-900">1.201 a 2.500 por mês</option>
                      <option value="2500-4000" className="text-gray-900">2.500 a 4.000 por mês</option>
                      <option value="4001-10000" className="text-gray-900">4.001 a 10.000 por mês</option>
                      <option value="10000+" className="text-gray-900">Mais de 10 mil por mês</option>
                    </select>

                    <select
                      value={formData.revenue}
                      onChange={(e) =>
                        setFormData({ ...formData, revenue: e.target.value })
                      }
                      required
                      className="w-full p-4 rounded-lg bg-background/50 focus:ring-2 focus:ring-primary focus:border-transparent text-sm border border-[#222222] text-white/70 appearance-none"
                    >
                      <option value="" className="text-gray-400">Qual o seu faturamento mensal?</option>
                      <option value="0-20" className="text-gray-900">Até 20 mil</option>
                      <option value="20-40" className="text-gray-900">De 20 mil até 40 mil</option>
                      <option value="40-60" className="text-gray-900">De 40 mil até 60 mil</option>
                      <option value="60-80" className="text-gray-900">De 60 mil até 80 mil</option>
                      <option value="80-100" className="text-gray-900">De 80 mil até 100 mil</option>
                      <option value="100-150" className="text-gray-900">De 100 mil até 150 mil</option>
                      <option value="150-250" className="text-gray-900">De 150 mil até 250 mil</option>
                      <option value="250-400" className="text-gray-900">De 250 mil até 400 mil</option>
                      <option value="400-600" className="text-gray-900">De 400 mil até 600 mil</option>
                      <option value="600-1000" className="text-gray-900">De 600 mil até 1 milhão</option>
                      <option value="1000+" className="text-gray-900">Mais de 1 milhão</option>
                    </select>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full p-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-light rounded-full transition-colors text-SM disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "ENVIANDO..." : "RECEBER MAIS INFORMAÇÕES"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </BeamsBackground>
  );
};