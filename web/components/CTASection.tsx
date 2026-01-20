"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
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
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl">
              {title}
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-white/80">
              {description}
            </p>
            
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold px-8 py-4 font-semibold text-bg-black transition-all hover:bg-gold-light hover:shadow-gold-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {ctaText}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
