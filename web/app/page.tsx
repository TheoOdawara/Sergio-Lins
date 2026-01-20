"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center bg-bg-black text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-black via-bg-dark to-bg-black opacity-95" />
        
        <div className="container-max relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* Conteúdo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Ginecologia & Obstetrícia
              </p>
              
              <h1 className="font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                Cuidado especializado e humanizado para a saúde da mulher
              </h1>
              
              <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
                Atendimento técnico, acolhedor e focado em você. 
                Saia da consulta com um plano claro e a segurança de um cuidado profissional.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5521973907869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold px-8 py-4 font-semibold text-bg-black transition-all hover:bg-gold-light hover:shadow-gold-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Agendar Consulta Agora
                  <ArrowRight className="h-5 w-5" />
                </a>
                
                <a
                  href="/sobre"
                  className="inline-flex items-center gap-2 border-2 border-gold px-8 py-4 font-semibold text-gold transition-all hover:bg-gold-light hover:text-bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Conheça o Dr. Sérgio
                </a>
              </div>
            </motion.div>

            {/* Foto do Médico */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden border-4 border-gold/30 shadow-2xl shadow-gold/20">
                <Image
                  src="/Sergio.png"
                  alt="Dr. Sérgio Dias Lins - Ginecologista e Obstetra"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                {/* Overlay dourado sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent" />
              </div>
              
              {/* Badge de credencial */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gold px-6 py-3 shadow-gold-glow">
                <p className="text-center text-sm font-semibold text-bg-black">
                  Dr. Sérgio Lins
                  <span className="mt-1 block text-xs font-normal">Ginecologia & Obstetrícia</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Próximas seções serão adicionadas aqui */}
    </main>
  );
}
