"use client";

import { useState, useEffect } from "react";
import { Settings, X, Type, Contrast } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AccessibilityTools() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Carregar preferências salvas
    const savedFontSize = localStorage.getItem("a11y-font-size");
    const savedContrast = localStorage.getItem("a11y-high-contrast");
    
    if (savedFontSize) setFontSize(Number(savedFontSize));
    if (savedContrast) setHighContrast(savedContrast === "true");
  }, []);

  useEffect(() => {
    // Aplicar tamanho de fonte
    document.documentElement.style.fontSize = `${fontSize}%`;
    localStorage.setItem("a11y-font-size", fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    // Aplicar alto contraste
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
    localStorage.setItem("a11y-high-contrast", highContrast.toString());
  }, [highContrast]);

  return (
    <>
      {/* Botão Flutuante de Acessibilidade */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center border-2 border-gold bg-bg-black text-gold shadow-gold-glow transition-all hover:bg-gold hover:text-bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        aria-label="Abrir ferramentas de acessibilidade"
        title="Acessibilidade"
      >
        <Settings className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Painel de Ferramentas */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Painel */}
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed left-0 top-0 z-50 h-full w-80 border-r-4 border-gold/30 bg-bg-black shadow-2xl"
              role="dialog"
              aria-labelledby="a11y-title"
              aria-modal="true"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gold/20 p-6">
                <h2 id="a11y-title" className="font-serif text-xl font-bold text-white">
                  Acessibilidade
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  aria-label="Fechar painel de acessibilidade"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Conteúdo */}
              <div className="space-y-8 p-6">
                {/* Tamanho da Fonte */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-white">
                    <Type className="h-5 w-5 text-gold" aria-hidden="true" />
                    <label htmlFor="font-size-slider" className="font-semibold">
                      Tamanho da Fonte
                    </label>
                  </div>
                  
                  <div className="space-y-2">
                    <input
                      id="font-size-slider"
                      type="range"
                      min="80"
                      max="150"
                      step="10"
                      value={fontSize}
                      onChange={(e) => setFontSize(Number(e.target.value))}
                      className="w-full accent-gold"
                      aria-valuemin={80}
                      aria-valuemax={150}
                      aria-valuenow={fontSize}
                      aria-valuetext={`${fontSize}%`}
                    />
                    
                    <div className="flex justify-between text-sm text-white/70">
                      <span>80%</span>
                      <span className="text-gold font-semibold">{fontSize}%</span>
                      <span>150%</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setFontSize(100)}
                      className="flex-1 border border-gold/30 px-4 py-2 text-sm text-white transition-colors hover:bg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      aria-label="Redefinir tamanho da fonte para padrão"
                    >
                      Padrão
                    </button>
                  </div>
                </div>

                {/* Alto Contraste */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-white">
                    <Contrast className="h-5 w-5 text-gold" aria-hidden="true" />
                    <span className="font-semibold">Alto Contraste</span>
                  </div>

                  <button
                    onClick={() => setHighContrast(!highContrast)}
                    className={`w-full border-2 px-6 py-3 font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                      highContrast
                        ? "border-gold bg-gold text-bg-black"
                        : "border-gold/30 text-white hover:bg-gold/10"
                    }`}
                    aria-pressed={highContrast}
                    aria-label={`${highContrast ? "Desativar" : "Ativar"} alto contraste`}
                  >
                    {highContrast ? "Desativar" : "Ativar"}
                  </button>
                </div>

                {/* Informações */}
                <div className="space-y-2 rounded border border-gold/20 bg-bg-dark p-4">
                  <h3 className="text-sm font-semibold text-gold">Atalhos do Teclado</h3>
                  <ul className="space-y-1 text-xs text-white/70">
                    <li><kbd className="rounded bg-white/10 px-1">Tab</kbd> Navegar entre elementos</li>
                    <li><kbd className="rounded bg-white/10 px-1">Enter</kbd> Ativar links/botões</li>
                    <li><kbd className="rounded bg-white/10 px-1">Esc</kbd> Fechar janelas</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
