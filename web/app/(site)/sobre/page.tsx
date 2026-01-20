"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Heart, Stethoscope, Users } from "lucide-react";
import Image from "next/image";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="container-max">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Foto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden border-4 border-gold/30 shadow-2xl shadow-gold/20">
                <Image
                  src="/Sergio.png"
                  alt="Dr. Sérgio Dias Lins - Ginecologista e Obstetra"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent" />
              </div>
            </motion.div>

            {/* Conteúdo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 space-y-6 lg:order-2"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Conheça o profissional
              </p>
              
              <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Dr. Sérgio Dias Lins
              </h1>
              
              <p className="text-lg leading-relaxed text-white/80">
                Médico formado pela Universidade Federal do Estado do Rio de Janeiro
              </p>

              <div className="space-y-4 border-l-4 border-gold pl-6">
                <p className="text-lg leading-relaxed text-white/90">
                  Dedicação exclusiva à saúde da mulher, com mais de uma década de experiência 
                  em ginecologia e obstetrícia.
                </p>
                <p className="text-lg leading-relaxed text-white/90">
                  Atendimento que une conhecimento técnico atualizado com escuta atenta 
                  e respeito às particularidades de cada paciente.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trajetória */}
      <section className="relative py-24">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl space-y-8"
          >
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              <span className="text-gold">Trajetória</span> Profissional
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-white/80">
              <p>
                Ao longo da minha trajetória, atuei por muitos anos em terapia intensiva, 
                o que me trouxe grande experiência em cuidado rigoroso, tomada de decisão 
                em situações complexas e atenção aos detalhes.
              </p>

              <p>
                Há mais de uma década, voltei meu trabalho para a saúde da mulher e da gestante, 
                e desde então a ginecologia e obstetrícia se tornaram o centro da minha vida 
                profissional. Nesse caminho, busco unir conhecimento técnico atualizado com 
                escuta atenta e respeito às particularidades de cada paciente.
              </p>

              <p>
                Trabalho com histeroscopia e outros procedimentos ginecológicos de consultório, 
                sempre com foco em oferecer alternativas seguras, menos invasivas e com 
                recuperação mais tranquila. Em cada atendimento, a prioridade é que a mulher 
                se sinta acolhida, bem informada e participante das decisões sobre o próprio corpo.
              </p>

              <p className="font-semibold text-white">
                Hoje, dedico-me exclusivamente ao cuidado da mulher, no consultório e em outros 
                serviços onde atuo, com o compromisso de realizar um trabalho de excelência e 
                contribuir de forma real para melhorar a qualidade de vida de quem confia em mim.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="relative py-24">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              <span className="text-gold">Diferenciais</span> no Atendimento
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Stethoscope,
                title: "Experiência em UTI",
                description: "Anos de terapia intensiva garantem precisão técnica e tomada de decisão assertiva.",
              },
              {
                icon: Heart,
                title: "Foco na Mulher",
                description: "Dedicação exclusiva à ginecologia e obstetrícia há mais de uma década.",
              },
              {
                icon: Award,
                title: "Procedimentos Minimamente Invasivos",
                description: "Especialização em histeroscopia e técnicas modernas de consultório.",
              },
              {
                icon: Users,
                title: "Escuta Atenta",
                description: "Atendimento humanizado que respeita as particularidades de cada paciente.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative space-y-4 border-2 border-gold/20 bg-bg-dark p-8 transition-all hover:border-gold/50 hover:shadow-gold-glow"
              >
                <div className="flex h-16 w-16 items-center justify-center border-2 border-gold bg-bg-black">
                  <item.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                <p className="leading-relaxed text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Pronto para cuidar da sua saúde?
              </h2>
              
              <p className="mb-8 text-lg leading-relaxed text-white/80">
                Agende sua consulta e tenha acesso a um atendimento técnico, 
                acolhedor e focado em você.
              </p>
              
              <a
                href="https://wa.me/5521973907869"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-animate inline-flex items-center gap-2 bg-gold px-8 py-4 font-semibold text-bg-black transition-all hover:bg-gold-light hover:shadow-gold-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Agendar Consulta Agora
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
