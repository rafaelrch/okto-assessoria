import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Pizza, UtensilsCrossed, Sandwich, ChefHat } from "lucide-react";

export const ExclusiveCTA = () => {
  const scrollToForm = () => {
    const element = document.getElementById("formulario");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Quadrados voando com ícones de comida
  const floatingSquares = [
    {
      id: 1,
      gradient: "from-blue-500 to-purple-600",
      icon: Pizza,
      position: "top-10 left-4 sm:top-20 sm:left-10",
      animation: {
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        duration: 4,
      }
    },
    {
      id: 2,
      gradient: "from-purple-600 to-purple-800",
      icon: ChefHat,
      position: "top-8 right-4 sm:top-16 sm:right-16",
      animation: {
        y: [0, 15, 0],
        rotate: [0, -3, 3, 0],
        duration: 5,
      }
    },
    {
      id: 3,
      gradient: "from-pink-500 to-orange-500",
      icon: UtensilsCrossed,
      position: "bottom-20 left-6 sm:bottom-32 sm:left-20",
      animation: {
        y: [0, -25, 0],
        rotate: [0, 4, -4, 0],
        duration: 6,
      }
    },
    {
      id: 4,
      gradient: "from-blue-500 to-purple-600",
      icon: Sandwich,
      position: "bottom-16 right-6 sm:bottom-20 sm:right-12",
      animation: {
        y: [0, 18, 0],
        rotate: [0, -2, 2, 0],
        duration: 4.5,
      }
    },
    {
      id: 5,
      gradient: "from-pink-500 to-purple-600",
      icon: Pizza,
      position: "bottom-8 left-1/2 transform -translate-x-1/2 sm:bottom-10 sm:left-1/4",
      animation: {
        y: [0, -12, 0],
        rotate: [0, 6, -6, 0],
        duration: 5.5,
      }
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-black overflow-hidden">
      {/* Quadrados voando animados */}
      {floatingSquares.map((square) => (
        <motion.div
          key={square.id}
          className={`absolute ${square.position} z-10`}
          animate={square.animation}
          transition={{
            duration: square.animation.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className={`w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${square.gradient} shadow-lg shadow-purple-500/25 flex items-center justify-center`}>
            <square.icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-6 sm:px-6 lg:px-8 relative z-30">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Título principal */}
          <div className="space-y-4 relative">
            <div className="absolute inset-0 bg-black/20 rounded-3xl blur-xl -z-10"></div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-regular tracking-tighter relative z-10 px-4 py-6">
              <span className="text-white">Você está pronto para</span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent">
                elevar seu restaurante?
              </span>
            </h1>
          </div>

          {/* Botão CTA */}
          <div className="pt-4 sm:pt-6">
            <motion.button
              onClick={scrollToForm}
                  className="bg-gradient-to-r from-purple-600 to-purple-400 text-white font-light text-sm sm:text-base px-8 sm:px-12 py-3 sm:py-4 rounded-full transition-ease-in-out duration-500 hover:[box-shadow:0_0_30px_0_rgba(48,14,255,0.7)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTRATE AGORA
            </motion.button>
          </div>

        
        </div>
      </div>
    </section>
  );
};
