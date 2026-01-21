# Dr. Sérgio Dias Lins 

Landing page premium com redirecionamento para o site principal, para o consultório do Dr. Sérgio Dias Lins (ginecologia, obstetrícia, infertilidade). Projeto pensado para converter tráfego pago em agendamentos reais, com foco em confiança, velocidade e acessibilidade.

## Visão Geral
- Interface acolhedora, elegante e funcional para público médico.
- Arquitetura performática (Next.js App Router) otimizada para Core Web Vitals.
- Acessibilidade como requisito: navegação por teclado, semântica correta, contraste adequado.
- Conteúdo orientado à decisão: prova social, diferenciais claros e CTAs proeminentes.

## Destaques de Design
- Hero com CTA principal e mensagem direta para captação de leads.
- Tipografia combinando autoridade (Playfair Display) e legibilidade (Montserrat).
- Paleta preto + dourado, sem cantos arredondados, com espaçamentos generosos.
- Microanimações sutis via Framer Motion para reforçar modernidade sem distrair.
- Componentes consistentes via shadcn/ui + Radix UI, priorizando acessibilidade.

## Stack e Padrões
- Next.js 14 (App Router) + Tailwind CSS, animações com Framer Motion.
- Ícones Lucide; fontes servidas pelo Google Fonts.
- Convenções: SOLID, DRY, responsabilidade única em componentes, classes Tailwind sem IDs.
- Commits em Conventional Commits (feat, fix, style, refactor, docs).

## Estrutura do Repositório
```
/               # README geral do projeto
/web            # Aplicação Next.js
  app/          # Rotas (App Router)
  components/   # Componentes reutilizáveis
  lib/          # Helpers e utilitários
  public/       # Assets estáticos
  ROADMAP.md    # Marcos de entrega
  NEXT-STEPS.md # Tarefas imediatas
```

## Qualidade e Métricas
- Meta de LCP < 2.5s, CLS < 0.1, interatividade responsiva.
- Alt text em 100% das imagens e foco visível em todos os controles.
- Imagens otimizadas com `next/image` e carregamento cuidadoso de fontes.

## Como Rodar Localmente
1) `cd web`
2) `npm install`
3) `npm run dev` (http://localhost:3000)

---

Projeto desenvolvido por Theo Odawara com foco em performance, acessibilidade e conversão.
