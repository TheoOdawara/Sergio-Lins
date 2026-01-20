import HeroSection from "@/components/HeroSection";
import CardGridSection from "@/components/CardGridSection";
import CTASection from "@/components/CTASection";

export default function ClinicaPage() {
  const diferenciais = [
    {
      title: "Localização Privilegiada",
      description: "Coração de Campo Grande - RJ com fácil acesso PCD e estacionamento rotativo",
      icon: "MapPin",
    },
    {
      title: "Ambiente Acolhedor",
      description: "Espaço confortável e preparado para seu bem-estar",
      icon: "Home",
    },
    {
      title: "Consultas sem Pressa",
      description: "Tempo necessário para esclarecer todas as suas dúvidas",
      icon: "Clock",
    },
    {
      title: "Plano Claro e Orientação Completa",
      description: "Você sai da consulta confiante e bem orientado",
      icon: "CheckCircle",
    },
  ];

  const servicos = [
    {
      title: "Ginecologia Completa",
      description: "Atendimento técnico e humanizado para todas as fases da vida da mulher",
      icon: "Stethoscope",
    },
    {
      title: "Histeroscopia",
      description: "Diagnóstica e cirúrgica ambulatorial realizadas no consultório",
      icon: "Activity",
    },
    {
      title: "Infertilidade",
      description: "Investigação e tratamento de baixa complexidade",
      icon: "Heart",
    },
    {
      title: "Procedimentos Ginecológicos",
      description: "Pequenos procedimentos e cirurgias ginecológicas",
      icon: "Shield",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-black text-white">
      <HeroSection
        subtitle="Conheça a"
        title="SV Lins - Medicina e Odontologia"
        description={[
          "A SV Lins une cuidado médico e odontológico: sempre técnico, respeitoso e efetivo.",
          "Nossa promessa: Você sai orientado, confiante e com plano claro – consultas com tempo necessário para total tranquilidade.",
        ]}
        highlight="Localizada no coração de Campo Grande - RJ, em ambiente confortável e acolhedor."
        ctaText="Agendar Consulta"
        ctaLink="https://wa.me/5521973907869"
        secondaryCtaText="Ver Localização"
        secondaryCtaLink="#localizacao"
        imageSrc="/clinica.jpeg"
        imageAlt="SV Lins - Clínica de Medicina e Odontologia"
      />

      <CardGridSection
        titleHighlight="Nossos"
        title="Diferenciais"
        items={diferenciais}
        columns={4}
        bgDark
      />

      <section className="relative py-24">
        <div className="container-max">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              <span className="text-gold">Saúde da Mulher</span> com Excelência
            </h2>
            
            <p className="text-lg leading-relaxed text-white/80">
              Ginecologia, histeroscopia diagnóstica/cirúrgica ambulatorial, infertilidade (baixa complexidade), 
              pequenos procedimentos e cirurgias ginecológicas.
            </p>

            <p className="text-lg font-semibold text-gold">
              Atendimento Particular + Medsenior
            </p>
          </div>
        </div>
      </section>

      <CardGridSection
        titleHighlight="Nossos"
        title="Serviços"
        items={servicos}
        columns={4}
        bgDark
      />

      <section className="relative py-24">
        <div className="container-max">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              <span className="text-gold">Desde 2020</span> Colecionando Histórias de Sucesso
            </h2>
            
            <p className="text-lg leading-relaxed text-white/80">
              Mais de 4 anos dedicados ao cuidado integral da saúde, 
              unindo medicina e odontologia com excelência técnica e humanização.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Localização com Mapa */}
      <section id="localizacao" className="relative bg-bg-dark py-24">
        <div className="container-max">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl">
                <span className="text-gold">Nossa</span> Localização
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Fácil acesso, estacionamento rotativo e acessibilidade completa
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Informações de Endereço */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gold">Endereço Completo</h3>
                  <p className="text-lg leading-relaxed text-white">
                    Av. Maria Teresa, 260<br />
                    Bloco 2, Sala 414<br />
                    Campo Grande, Rio de Janeiro - RJ<br />
                    CEP: 23050-160
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gold">Como Chegar</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-gold">•</span>
                      <span>Fácil acesso por transporte público (BRT e ônibus)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-gold">•</span>
                      <span>Estacionamento rotativo disponível na região</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-gold">•</span>
                      <span>Acessibilidade completa para PCD</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://maps.google.com/?q=Av.+Maria+Teresa,+260+-+Bloco+2+sala+414+-+Campo+Grande,+Rio+de+Janeiro+-+RJ,+23050-160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gold px-6 py-3 font-bold uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-bg-black"
                >
                  Abrir no Google Maps
                </a>
              </div>

              {/* Mapa do Google Maps */}
              <div className="overflow-hidden border-2 border-gold/20 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.190266485594!2d-43.56862502401566!3d-22.906351979255522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be399ce6e4dd1%3A0x590fca6b9dd603d7!2sClnica%20SV%20Lins!5e0!3m2!1spt-BR!2sbr!4v1768948884616!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização SV Lins - Medicina e Odontologia"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Conheça Nossa Estrutura Pessoalmente"
        description="Agende sua visita e conheça nosso espaço preparado para receber você com todo conforto e profissionalismo."
        ctaText="Agendar Visita pelo WhatsApp"
        ctaLink="https://wa.me/5521973907869"
      />
    </div>
  );
}
