import HeroSection from "@/components/HeroSection";
import CardGridSection from "@/components/CardGridSection";
import StepByStepSection from "@/components/StepByStepSection";
import CTASection from "@/components/CTASection";

export default function InfertilidadePage() {
  const quandoBuscarAjuda = [
    {
      title: "Mulheres com menos de 35 anos",
      description: "Após 1 ano de tentativas regulares sem sucesso",
      icon: "Clock",
    },
    {
      title: "Mulheres com mais de 35 anos",
      description: "Após 6 meses de tentativas sem êxito",
      icon: "CalendarDays",
    },
    {
      title: "Histórico de Abortos",
      description: "Duas ou mais perdas gestacionais consecutivas",
      icon: "Heart",
    },
    {
      title: "Irregularidades Menstruais",
      description: "Ciclos muito irregulares ou ausência de menstruação",
      icon: "Activity",
    },
    {
      title: "Condições Pré-Existentes",
      description: "Endometriose, SOP, miomas ou doenças tubárias",
      icon: "AlertCircle",
    },
    {
      title: "Fatores Masculinos",
      description: "Alterações conhecidas no espermograma do parceiro",
      icon: "Users",
    },
  ];

  const investigacaoSteps = [
    {
      title: "Avaliação Inicial Completa",
      description: "Coleta detalhada da história do casal, incluindo histórico médico, cirúrgico e reprodutivo. Avaliação do tempo de tentativas e fatores de risco.",
    },
    {
      title: "Exames Complementares",
      description: "Investigação abrangente: dosagens hormonais, ultrassonografia transvaginal, histerossalpingografia, espermograma e outros exames específicos conforme cada caso.",
    },
    {
      title: "Diagnóstico Personalizado",
      description: "Análise criteriosa dos resultados para identificar as causas da infertilidade. Pode envolver fatores femininos, masculinos ou de ambos.",
    },
    {
      title: "Planejamento Terapêutico",
      description: "Definição da melhor estratégia de tratamento, que pode incluir desde orientações de coito programado até técnicas de reprodução assistida, dependendo do diagnóstico.",
    },
  ];

  const causasComuns = [
    {
      title: "Fatores Ovulatórios",
      description: "SOP, disfunções hormonais, reserva ovariana diminuída",
      icon: "Circle",
    },
    {
      title: "Fatores Tubários",
      description: "Obstrução ou lesões nas trompas de Falópio",
      icon: "GitBranch",
    },
    {
      title: "Fatores Uterinos",
      description: "Miomas, pólipos, malformações ou aderências",
      icon: "Square",
    },
    {
      title: "Endometriose",
      description: "Presença de tecido endometrial fora do útero",
      icon: "AlertTriangle",
    },
    {
      title: "Fatores Masculinos",
      description: "Alterações na qualidade ou quantidade de espermatozoides",
      icon: "User",
    },
    {
      title: "Fatores Inexplicados",
      description: "Quando os exames não identificam causa aparente",
      icon: "HelpCircle",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-black text-white">
      <HeroSection
        subtitle="Medicina Reprodutiva"
        title="Tratamento de Infertilidade"
        description={[
          "A caminhada até obter o seu positivo depende de fatores próprios, do(a) companheiro(a), da interação entre os dois, e de fatores externos também. Ou seja, engravidar não é uma tarefa tão simples assim.",
          "Em geral, as mulheres com menos de 35 anos devem esperar até 1 ano de tentativas regulares antes de pensar que tenha alguma coisa errada. As mulheres com mais de 35 anos devem esperar apenas 6 meses.",
        ]}
        highlight="O caminho na infertilidade não deve ser trilhado sozinho. Marque uma consulta para eu te ajudar."
        ctaText="Agendar Consulta"
        ctaLink="https://wa.me/5521973907869"
        imageSrc="/infertilidade.png"
        imageAlt="Casal em momento de esperança - Tratamento de Infertilidade"
      />

      <CardGridSection
        titleHighlight="Quando"
        title="Buscar Ajuda"
        items={quandoBuscarAjuda}
        columns={3}
        bgDark
      />

      <StepByStepSection
        titleHighlight="Investigação"
        title="e Diagnóstico"
        steps={investigacaoSteps}
      />

      <CardGridSection
        titleHighlight="Principais"
        title="Causas de Infertilidade"
        items={causasComuns}
        columns={3}
        bgDark
      />

      <CTASection
        title="Comece sua Jornada Rumo à Maternidade/Paternidade"
        description="A infertilidade tem tratamento. Com uma investigação detalhada e abordagem personalizada, podemos traçar o melhor caminho para realizar o sonho de ter um filho."
        ctaText="Agendar Consulta pelo WhatsApp"
        ctaLink="https://wa.me/5521973907869"
      />
    </div>
  );
}
