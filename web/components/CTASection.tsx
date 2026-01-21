"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: ReactNode;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export default function CTASection({
  title,
  description,
  ctaText,
  ctaLink,
}: CTASectionProps) {
  return (
    <section className="relative py-24">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden border-4 border-gold/30 bg-gradient-to-br from-bg-dark to-bg-black p-12 shadow-2xl shadow-gold/20 sm:p-16"
        >
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold text-balance break-words sm:text-4xl">
              {title}
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-white/80">
              {description}
            </p>
            
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
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
