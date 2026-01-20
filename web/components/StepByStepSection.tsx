"use client";

import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
}

interface StepBySectionProps {
  title: string;
  titleHighlight: string;
  steps: Step[];
}

export default function StepByStepSection({
  title,
  titleHighlight,
  steps,
}: StepBySectionProps) {
  return (
    <section className="relative py-24">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="mb-12 font-serif text-3xl font-bold sm:text-4xl">
            <span className="text-gold">{titleHighlight}</span> {title}
          </h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-gold bg-bg-black">
                  <span className="font-serif text-xl font-bold text-gold">
                    {index + 1}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="leading-relaxed text-white/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
