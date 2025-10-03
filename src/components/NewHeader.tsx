"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const NewHeader = () => {
  const navItems = [
    {
      name: "Depoimentos",
      link: "#depoimentos",
    },
    {
      name: "Clientes",
      link: "#clientes",
    },
    {
      name: "Sobre a Okto",
      link: "#estrutura",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    const element = document.getElementById("formulario");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation - Hidden on mobile */}
        <NavBody className="hidden lg:flex">
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <motion.button
              onClick={scrollToForm}
              className="px-4 py-2 rounded-sm text-sm font-light relative cursor-pointer transition-all duration-300 inline-flex items-center gap-2 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 "
              whileHover="hover"
              initial="initial"
            >
              <motion.span
                variants={{
                  initial: { fontSize: "0.875rem" },
                  hover: { fontSize: "0.875rem" }
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                CONTRATE
              </motion.span>
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                variants={{
                  initial: { rotate: 0 },
                  hover: { rotate: 90 }
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.button>
          </div>
        </NavBody>

        {/* Mobile Navigation - Simplified */}
        <div className="lg:hidden">
          <div className="relative z-[100] mx-auto w-full max-w-[calc(100vw-1rem)] flex items-center justify-between border border-white/5 px-4 py-3 rounded-sm backdrop-blur-md bg-black/10 overflow-hidden">
            {/* Logo à esquerda */}
            <div className="flex items-center">
              <img 
                src="/logoOkto.png" 
                alt="Okto Assessoria" 
                className="h-8 w-auto"
              />
            </div>
            
            {/* Menu hamburger à direita */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Menu dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                className="absolute top-full left-4 right-4 mt-2 bg-black/50 border border-white/10 rounded-2xl backdrop-blur-md overflow-hidden z-[110]"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ 
                  duration: 0.3, 
                  ease: [0.4, 0.0, 0.2, 1],
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                <motion.div 
                  className="p-6 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                >
                  {/* Links de navegação */}
                  {navItems.map((item, idx) => (
                    <motion.a
                      key={`mobile-link-${idx}`}
                      href={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white hover:text-gray-300 text-lg py-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + (idx * 0.05), duration: 0.2 }}
                      whileHover={{ x: 5 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  
                  {/* Botão CONTRATE */}
                  <motion.div 
                    className="pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.2 }}
                  >
                    <motion.button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        scrollToForm();
                      }}
                      className="w-full px-6 py-3 rounded-sm text-sm font-light bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      CONTRATE
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Navbar>
    </div>
  );
};
