"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  subtitle: string;
  title: string;
  description: string[];
  highlight?: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
}

export default function HeroSection({
  subtitle,
  title,
  description,
  highlight,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="relative py-24">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {subtitle}
            </p>
            
            <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            
            <div className="space-y-4 border-l-4 border-gold pl-6">
              {description.map((paragraph, index) => (
                <p 
                  key={index}
                  className={`text-lg leading-relaxed ${
                    index === 0 ? 'text-white/90' : 'text-white/80'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {highlight && (
              <p className="text-xl font-semibold italic text-gold">
                {highlight}
              </p>
            )}

            <motion.a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(212, 175, 55, 0)",
                  "0 0 0 8px rgba(212, 175, 55, 0.1)",
                  "0 0 0 0 rgba(212, 175, 55, 0)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="cta-animate group relative inline-flex items-center gap-2 overflow-hidden bg-gold px-8 py-4 font-semibold text-bg-black transition-all hover:bg-gold-light hover:shadow-2xl hover:shadow-gold/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <span className="relative z-10">{ctaText}</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </motion.a>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-gold/30 shadow-2xl shadow-gold/20">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
