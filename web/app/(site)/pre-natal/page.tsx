import HeroSection from "@/components/HeroSection";
import CardGridSection from "@/components/CardGridSection";
import StepByStepSection from "@/components/StepByStepSection";
import CTASection from "@/components/CTASection";

export default function PreNatalPage() {
  const importanciaPrenatal = [
    {
      title: "Acompanhamento da Gestação",
      description: "Monitoramento contínuo do desenvolvimento do bebê e saúde materna",
      icon: "Heart",
    },
    {
      title: "Detecção Precoce",
      description: "Identificação de possíveis complicações antes que se tornem graves",
      icon: "AlertCircle",
    },
    {
      title: "Orientação Personalizada",
      description: "Informações sobre alimentação, exercícios e cuidados específicos",
      icon: "Users",
    },
    {
      title: "Prevenção de Complicações",
      description: "Medidas preventivas para gestação de alto risco",
      icon: "Shield",
    },
    {
      title: "Exames Periódicos",
      description: "Ultrassonografias e exames laboratoriais de rotina",
      icon: "Activity",
    },
    {
      title: "Preparação para o Parto",
      description: "Orientações sobre o trabalho de parto e pós-parto",
      icon: "CheckCircle",
    },
  ];

  const consultasSteps = [
    {
      title: "Primeira Consulta",
      description: "Confirmação da gravidez, avaliação de saúde geral, solicitação de exames iniciais e cálculo da idade gestacional. Orientações iniciais sobre alimentação e suplementação.",
    },
    {
      title: "Consultas Mensais (1º e 2º trimestre)",
      description: "Acompanhamento do desenvolvimento fetal, controle de peso e pressão arterial, escuta dos batimentos cardíacos fetais e ultrassonografias nos períodos indicados.",
    },
    {
      title: "Consultas Quinzenais (3º trimestre)",
      description: "Avaliação mais frequente à medida que se aproxima o parto. Monitoramento da posição fetal, controle de edema e orientações sobre sinais de trabalho de parto.",
    },
    {
      title: "Pré-Natal de Alto Risco",
      description: "Acompanhamento especializado para gestações com complicações ou fatores de risco. Consultas mais frequentes e exames complementares específicos conforme necessário.",
    },
  ];

  const diferenciais = [
    {
      title: "Experiência em Alto Risco",
      description: "Especialização em gestações de risco",
      icon: "Award",
    },
    {
      title: "Atendimento Humanizado",
      description: "Cuidado atencioso e acolhedor",
      icon: "Heart",
    },
    {
      title: "Tecnologia Moderna",
      description: "Equipamentos de ultrassonografia avançados",
      icon: "Stethoscope",
    },
    {
      title: "Disponibilidade",
      description: "Suporte durante toda a gestação",
      icon: "Clock",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-black text-white">
      <HeroSection
        subtitle="Acompanhamento Gestacional"
        title="Pré-Natal"
        description={[
          "Uma gestação saudável começa com um pré-natal responsável e bem conduzido.",
          "Tenho experiência com Pré-Natal de Alto e Baixo Riscos, oferecendo acompanhamento completo e humanizado durante toda a gestação.",
        ]}
        highlight="Cuidado integral para você e seu bebê em todas as fases da gravidez."
        ctaText="Agendar Consulta"
        ctaLink="https://wa.me/5521973907869"
        imageSrc="/image_prenatal.png"
        imageAlt="Pré-Natal - Acompanhamento gestacional completo"
        imageScale={100}
      />

      <CardGridSection
        titleHighlight="Por que"
        title="o Pré-Natal é Essencial"
        items={importanciaPrenatal}
        columns={3}
        bgDark
      />

      <StepByStepSection
        titleHighlight="Como Funciona"
        title="o Acompanhamento"
        steps={consultasSteps}
      />

      <CardGridSection
        titleHighlight="Nossos"
        title="Diferenciais"
        items={diferenciais}
        columns={4}
        bgDark
      />

      <CTASection
        title="Inicie seu Pré-Natal com Segurança e Cuidado"
        description="Acompanhamento completo e humanizado para uma gestação saudável e tranquila. Agende sua primeira consulta."
        ctaText="Agendar Consulta pelo WhatsApp"
        ctaLink="https://wa.me/5521973907869"
      />
    </div>
  );
}
