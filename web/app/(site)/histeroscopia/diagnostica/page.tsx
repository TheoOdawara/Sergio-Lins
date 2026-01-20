import HeroSection from "@/components/HeroSection";
import CardGridSection from "@/components/CardGridSection";
import StepByStepSection from "@/components/StepByStepSection";
import CTASection from "@/components/CTASection";

export default function HisteroscopiaDiagnosticaPage() {
  const indicacoes = [
    {
      title: "Sangramento Anormal",
      description: "Investigação de sangramentos irregulares ou abundantes",
      icon: "CheckCircle",
    },
    {
      title: "Pólipos Endometriais",
      description: "Identificação e avaliação de pólipos no útero",
      icon: "CheckCircle",
    },
    {
      title: "Miomas Submucosos",
      description: "Detecção de miomas que crescem para dentro da cavidade uterina",
      icon: "CheckCircle",
    },
    {
      title: "Infertilidade",
      description: "Avaliação da cavidade uterina em casos de dificuldade para engravidar",
      icon: "CheckCircle",
    },
    {
      title: "Aderências Uterinas",
      description: "Diagnóstico de sinéquias ou cicatrizes intrauterinas",
      icon: "CheckCircle",
    },
    {
      title: "Espessamento Endometrial",
      description: "Investigação de alterações na espessura do endométrio",
      icon: "CheckCircle",
    },
  ];

  const procedimentoSteps = [
    {
      title: "Preparação Simples",
      description: "O exame é realizado no próprio consultório, sem necessidade de jejum ou preparo intestinal. Geralmente não é necessária anestesia.",
    },
    {
      title: "Procedimento Rápido",
      description: "Uma câmera fina e flexível é introduzida delicadamente através do colo do útero. O exame dura cerca de 5 a 15 minutos.",
    },
    {
      title: "Visualização em Tempo Real",
      description: "É possível visualizar toda a cavidade uterina em tempo real, identificando alterações com precisão e segurança.",
    },
    {
      title: "Retorno Imediato",
      description: "Após o exame, você pode retomar suas atividades normais. Os resultados são discutidos logo em seguida.",
    },
  ];

  const vantagens = [
    {
      title: "Rápido",
      description: "Procedimento de 5 a 15 minutos",
      icon: "Clock",
    },
    {
      title: "Seguro",
      description: "Minimamente invasivo e bem tolerado",
      icon: "Shield",
    },
    {
      title: "Confortável",
      description: "Geralmente sem necessidade de anestesia",
      icon: "Heart",
    },
    {
      title: "Preciso",
      description: "Diagnóstico detalhado e em tempo real",
      icon: "CheckCircle",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-black text-white">
      <HeroSection
        subtitle="Procedimento Diagnóstico"
        title="Histeroscopia Diagnóstica"
        description={[
          "A histeroscopia é um exame de imagem que consiste em inserir no útero uma câmera com a qual se vê o endométrio (tecido que recobre internamente o útero).",
          "É muito útil para identificação de alterações deste tecido ou do tecido uterino (miométrio) imediatamente atrás do endométrio.",
        ]}
        highlight="Realizo este exame no meu consultório."
        ctaText="Agendar Exame"
        ctaLink="https://wa.me/5521973907869"
        imageSrc="/image_hist_diag.png"
        imageAlt="Imagem de Histeroscopia Diagnóstica - Visualização do endométrio"
      />

      <CardGridSection
        titleHighlight="Quando"
        title="é Indicada"
        items={indicacoes}
        columns={3}
        bgDark
      />

      <StepByStepSection
        titleHighlight="Como"
        title="é Realizado"
        steps={procedimentoSteps}
      />

      <CardGridSection
        titleHighlight="Vantagens"
        title="do Procedimento"
        items={vantagens}
        columns={4}
        bgDark
      />

      <CTASection
        title="Agende seu Exame de Histeroscopia"
        description="Realize o exame de forma segura e confortável no consultório. Entre em contato para mais informações e agendamento."
        ctaText="Agendar pelo WhatsApp"
        ctaLink="https://wa.me/5521973907869"
      />
    </div>
  );
}
