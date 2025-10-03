import { Check, Heart, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email subscrito:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Gradiente roxo de fundo */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-purple-800/10 to-transparent"></div>
      
      <div className="relative z-10">
        {/* Seção principal do footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex justify-center">
            {/* Logo centralizada */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/logoOkto.png" 
                alt="Okto Assessoria" 
                className="h-16 sm:h-20 w-auto"
              />
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4">
              
              {/* Copyright */}
              <p className="text-gray-400 text-xs sm:text-sm font-light tracking-tight text-center">
                © 2025 OKTO ASSESSORIA
              </p>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
