import HeroSection from "@/components/HeroSection";
import CardGridSection from "@/components/CardGridSection";
import StepByStepSection from "@/components/StepByStepSection";
import CTASection from "@/components/CTASection";

export default function CirurgiaGinecologicaPage() {
  const tiposCirurgia = [
    {
      title: "Cirurgia Laparoscópica",
      description: "Procedimentos minimamente invasivos com pequenas incisões e recuperação mais rápida",
      icon: "Target",
    },
    {
      title: "Cirurgia Laparotômica",
      description: "Abordagem convencional para casos complexos ou urgências",
      icon: "Activity",
    },
    {
      title: "Cirurgia Vaginal",
      description: "Procedimentos realizados por via vaginal, sem incisões abdominais",
      icon: "Circle",
    },
    {
      title: "Histerectomia",
      description: "Retirada do útero por diferentes vias, conforme indicação",
      icon: "Square",
    },
    {
      title: "Miomectomia",
      description: "Remoção de miomas preservando o útero",
      icon: "Hexagon",
    },
    {
      title: "Tratamento de Endometriose",
      description: "Ressecção de focos e lesões de endometriose",
      icon: "Zap",
    },
  ];

  const avaliacaoSteps = [
    {
      title: "Avaliação Clínica Detalhada",
      description: "Consulta minuciosa com análise do histórico médico, sintomas e exames prévios. Nossas avaliações clínicas garantem a escolha da via cirúrgica mais adequada.",
    },
    {
      title: "Exames Complementares",
      description: "Solicitação de exames de imagem (ultrassom, ressonância) e laboratoriais quando necessário para planejamento cirúrgico preciso.",
    },
    {
      title: "Planejamento Personalizado",
      description: "Definição da melhor técnica cirúrgica (laparoscópica, laparotômica ou vaginal) considerando o diagnóstico, características da paciente e complexidade do caso.",
    },
    {
      title: "Acompanhamento Pós-Operatório",
      description: "Seguimento cuidadoso no pós-operatório com orientações claras para recuperação plena e retorno às atividades.",
    },
  ];

  const vantagens = [
    {
      title: "Experiência Técnica",
      description: "Cirurgias com precisão e segurança",
      icon: "Award",
    },
    {
      title: "Abordagem Individualizada",
      description: "Técnica escolhida conforme cada caso",
      icon: "Users",
    },
    {
      title: "Recuperação Otimizada",
      description: "Cuidado focado no bem-estar pós-operatório",
      icon: "Heart",
    },
    {
      title: "Suporte Completo",
      description: "Acompanhamento em todas as etapas",
      icon: "Shield",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-black text-white">
      <HeroSection
        subtitle="Tratamento Cirúrgico"
        title="Cirurgia Ginecológica"
        description={[
          "Realizamos cirurgias ginecológicas laparotômicas, laparoscópicas e vaginais com foco em segurança, precisão e recuperação adequada.",
          "Nossas avaliações clínicas prévias garantem a escolha da via cirúrgica mais adequada para cada paciente e situação clínica.",
        ]}
        highlight="Experiência em cirurgias ginecológicas de diferentes complexidades."
        ctaText="Agendar Avaliação"
        ctaLink="https://wa.me/5521973907869"
        imageSrc="/logo_sem_frame.png"
        imageAlt="Cirurgia Ginecológica - Procedimentos especializados"
        imageScale={100}
      />

      <CardGridSection
        titleHighlight="Tipos de"
        title="Cirurgias Realizadas"
        items={tiposCirurgia}
        columns={3}
        bgDark
      />

      <StepByStepSection
        titleHighlight="Processo de"
        title="Avaliação e Tratamento"
        steps={avaliacaoSteps}
      />

      <CardGridSection
        titleHighlight="Nossos"
        title="Diferenciais"
        items={vantagens}
        columns={4}
        bgDark
      />

      <CTASection
        title="Agende sua Avaliação Cirúrgica"
        description="Planejamento individualizado e cuidado integral em todas as etapas do tratamento cirúrgico ginecológico."
        ctaText="Agendar Consulta pelo WhatsApp"
        ctaLink="https://wa.me/5521973907869"
      />
    </div>
  );
}
