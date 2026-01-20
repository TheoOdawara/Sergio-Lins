import HeroSection from "@/components/HeroSection";
import CardGridSection from "@/components/CardGridSection";
import StepByStepSection from "@/components/StepByStepSection";
import CTASection from "@/components/CTASection";

export default function HisteroscopiaCirurgicaPage() {
  const indicacoes = [
    {
      title: "Pólipos Endometriais",
      description: "Remoção de pólipos que causam sangramento ou infertilidade",
      icon: "CheckCircle",
    },
    {
      title: "Miomas Submucosos",
      description: "Ressecção de miomas intracavitários pequenos e médios",
      icon: "CheckCircle",
    },
    {
      title: "Sinéquias Uterinas",
      description: "Tratamento de aderências intrauterinas (Síndrome de Asherman)",
      icon: "CheckCircle",
    },
    {
      title: "Septos Uterinos",
      description: "Correção de malformações uterinas congênitas",
      icon: "CheckCircle",
    },
    {
      title: "Sangramento Anormal",
      description: "Ablação endometrial para casos específicos de sangramento",
      icon: "CheckCircle",
    },
    {
      title: "Biópsias Dirigidas",
      description: "Remoção de fragmentos suspeitos para análise patológica",
      icon: "CheckCircle",
    },
  ];

  const procedimentoSteps = [
    {
      title: "Avaliação e Preparo",
      description: "Após a histeroscopia diagnóstica identificar a alteração, planejamos o procedimento cirúrgico. Em alguns casos, pode ser realizado no mesmo momento.",
    },
    {
      title: "Procedimento Ambulatorial",
      description: "Realizado no consultório com sedação leve ou anestesia local. Utilizamos instrumentos especiais para ressecção ou ablação das lesões identificadas.",
    },
    {
      title: "Recuperação Rápida",
      description: "O procedimento dura entre 15 a 45 minutos. A recuperação é rápida, com desconforto mínimo e retorno gradual às atividades.",
    },
    {
      title: "Acompanhamento",
      description: "Consultas de retorno para avaliar a recuperação e, se necessário, realizar controle histeroscópico para confirmar o sucesso do tratamento.",
    },
  ];

  const vantagens = [
    {
      title: "Minimamente Invasivo",
      description: "Sem cortes externos ou cicatrizes",
      icon: "Shield",
    },
    {
      title: "Recuperação Rápida",
      description: "Retorno às atividades em poucos dias",
      icon: "Clock",
    },
    {
      title: "Ambulatorial",
      description: "Realizado no consultório, sem internação",
      icon: "Heart",
    },
    {
      title: "Alta Precisão",
      description: "Tratamento dirigido com visualização direta",
      icon: "CheckCircle",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-black text-white">
      <HeroSection
        subtitle="Procedimento Cirúrgico"
        title="Histeroscopia Cirúrgica Ambulatorial"
        description={[
          "A histeroscopia cirúrgica ambulatorial é um procedimento minimamente invasivo que permite tratar diversas alterações intrauterinas sem necessidade de internação hospitalar.",
          "Com instrumentos especializados, é possível remover pólipos, miomas submucosos, aderências e outras lesões, proporcionando resultados eficazes com recuperação rápida.",
        ]}
        highlight="Procedimento realizado no consultório com sedação consciente."
        ctaText="Agendar Consulta"
        ctaLink="https://wa.me/5521973907869"
        imageSrc="/image_hist_cir.png"
        imageAlt="Imagem de Histeroscopia Cirúrgica - Procedimento minimamente invasivo"
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
        title="Agende sua Avaliação para Histeroscopia Cirúrgica"
        description="Tratamento eficaz e seguro de alterações intrauterinas com recuperação rápida. Entre em contato para mais informações e agendamento."
        ctaText="Agendar pelo WhatsApp"
        ctaLink="https://wa.me/5521973907869"
      />
    </div>
  );
}
