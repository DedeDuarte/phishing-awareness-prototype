# SPEC — Protótipo institucional Otori

> **Versão:** 1.0 · **Status:** especificação inicial aprovada para implementação · **Entrega acadêmica:** protótipo de média fidelidade de 8 telas para Projetos Empreendedores.
>
> **Importante:** Otori é um nome **provisório**. Todos os elementos de marca devem ser configuráveis, sem texto fixo espalhado pelos componentes.

## 1. Contexto e objetivo

A Otori é uma proposta acadêmica de serviço de conscientização contra phishing para pequenas e médias empresas brasileiras, especialmente organizações sem equipe especializada de segurança. A proposta contempla simulações **autorizadas e controladas** de mensagens enganosas, indicadores de comportamento e recomendações de treinamento. O objetivo é fortalecer a capacidade das pessoas de reconhecer ameaças, não colocá-las em risco.

Construir um **site institucional interativo de média fidelidade** que explique a proposta de valor e demonstre a jornada do cliente. Não criar uma plataforma SaaS operacional nem um sistema real de envio de phishing. Público principal: gestores e responsáveis pela contratação do serviço, inclusive leigos em segurança da informação.

### Critérios da atividade

1. Adequação à média fidelidade: wireframes digitais coerentes, design estruturado, componentes e telas navegáveis.
2. Clareza do fluxo e interações: navegação funcional e exemplos demonstrativos.
3. Coerência com a proposta de valor: simular → analisar → capacitar.
4. Qualidade de representação: legibilidade, consistência, hierarquia e responsividade.

**Entrega:** oito telas/páginas navegáveis, prontas para apresentação local e publicação estática opcional.

## 2. Escopo e restrições

### Incluído

- React + TypeScript + Vite, CSS com Tailwind, React Router, Lucide e Recharts (ou alternativas leves se houver incompatibilidade).
- Oito rotas com menu, links, rodapé e estados interativos.
- Design responsivo desktop, tablet e celular; experiência prioritariamente desktop para a apresentação.
- Dados demonstrativos tipados e separados de componentes.
- Interação em Simulações (abas), Como Funciona (etapas), Resultados (filtro de departamento + gráficos) e Treinamentos (cartão/curso recomendado).
- Formulário de contato **sem envio real**, com validação local e confirmação indicando demonstração.
- Página acadêmica da equipe com placeholders editáveis para nome, RA e foto.
- Marca totalmente centralizada, preparada para futura mudança de nome.
- README com instalação, execução, builds e pontos de personalização.

### Fora do escopo

- Servidor, banco de dados, login, autenticação, cobrança ou API de terceiros.
- Envio de e-mails/SMS/WhatsApp; campanhas reais; domínios de phishing; coleta de senhas, tokens ou informações sensíveis.
- Sistemas de rastreamento de funcionários, rankings nominais ou relatórios individuais.
- Promessas numéricas de eficácia sem evidência. **Todos os números da demonstração são fictícios e devem ser rotulados.**

## 3. Marca e identidade

### Marca provisória

- Nome: **Otori** (facilmente substituível por Vigil ou outro nome).
- Slogan: **Simule o risco. Desenvolva a defesa.**
- Descritivo: **Simulações de phishing, análise de riscos e treinamentos corporativos.**
- Personalidade: confiável, tecnológica, acessível, educativa e profissional.
- Linguagem: português brasileiro; textos concisos, sem jargões excessivos, sem sensacionalismo.
- Logotipo: símbolo abstrato de proteção/consciência feito em SVG ou ícone Lucide **separado do wordmark dinâmico**, sem escrever "Otori" no SVG/imagem. Criar `<BrandLogo />` reutilizável. Não depender de imagem gerada com texto da marca.

### Tokens de cores (usar variáveis CSS)

| Token | Hex | Uso |
|---|---|---|
| `--color-navy-950` | `#0B1220` | Hero, header escuro, footer |
| `--color-blue-900` | `#172554` | Superfícies escuras auxiliares |
| `--color-teal-500` | `#14B8A6` | CTAs e estados ativos |
| `--color-teal-200` | `#99F6E4` | Destaques sobre fundo escuro |
| `--color-slate-700` | `#334155` | Texto secundário em áreas claras |
| `--color-slate-900` | `#0F172A` | Texto principal |
| `--color-surface` | `#F8FAFC` | Fundo claro das páginas |
| `--color-white` | `#FFFFFF` | Cards e formulários |
| `--color-amber-500` | `#F59E0B` | Atenção/risco médio |
| `--color-red-600` | `#DC2626` | Erros e risco alto |

- Contraste: botão primário turquesa com **texto azul-escuro**. Textos principais escuros no off-white e claros no navy; não usar cinza muito apagado.
- Tipografia: **Manrope** para títulos; **Inter** para textos, formulários e elementos de interface; fontes de sistema como fallback.
- Desktop: H1 ~56px, H2 ~36px, H3 ~24px; corpo 16px; textos auxiliares 14px. Usar `clamp()` em títulos responsivos.
- `max-width` principal: 1200px. Espaçamento vertical de seções: 64–96px desktop; reduzir no mobile.
- Cards: raio 12–16px; borda sutil; sombra leve. Botões: altura confortável e destaque em hover/focus. Animação curta 150–250ms com `prefers-reduced-motion` respeitado.
- Estética **híbrida**: home com hero escuro e demais seções claras; páginas internas majoritariamente claras, com hero/topo e CTA escuros quando fizer sentido.
- Evitar hacker de capuz, matrizes de código, cadeados gigantes e excesso de efeitos neon. Privilegiar mockups vetoriais de e-mail e relatórios.

### Arquitetura de configuração

`src/config/brand.ts` exporta um objeto `brand` tipado contendo pelo menos:

```ts
export const brand = {
  name: 'Otori',
  tagline: 'Simule o risco. Desenvolva a defesa.',
  category: 'Cybersecurity Awareness',
  description: 'Simulações de phishing, análise de riscos e treinamentos corporativos.',
  contactEmail: 'contato@exemplo.com', // placeholder, NÃO exibir como contato real
  showTeamPage: true,
} as const;
```

- Usar `brand.name`, `brand.tagline`, etc., no header, footer, Home, meta title, Open Graph (quando implementado) e página Equipe.
- Não colocar nome Otori em arquivos de imagem, conteúdo estático JSX, caminhos, nomes de classes ou roteamento.
- Símbolo de marca separado do nome; `<BrandLogo />` combina símbolo reutilizável com `brand.name`.
- A flag `showTeamPage` controla **rota e links** da página acadêmica. Porém desativar a rota **não remove automaticamente dados do bundle**: uma publicação comercial deve remover o arquivo com RAs/fotos (ou excluí-lo do build) antes de publicar.

## 4. Rotas e arquitetura de informação

| # | Rota | Página | CTA ou navegação principal |
|---|---|---|---|
| 1 | `/` | Home | Conhecer solução / Solicitar demonstração |
| 2 | `/solucao` | Nossa Solução | Simulações / Como Funciona |
| 3 | `/simulacoes` | Simulações | Ver exemplo de relatório |
| 4 | `/como-funciona` | Como Funciona | Solicitar demonstração |
| 5 | `/resultados` | Resultados | Ver treinamento recomendado |
| 6 | `/treinamentos` | Treinamentos | Solicitar demonstração |
| 7 | `/contato` | Contato | Enviar solicitação fictícia |
| 8 | `/equipe` | Nossa Equipe | Voltar à Home / links institucionais |

- Menu principal: Início, Solução, Simulações, Como funciona, Resultados, Treinamentos, CTA "Solicitar demonstração".
- Link "Nossa equipe" no **footer**, não ocupar o menu principal comercial.
- Estados 404 devem oferecer retorno à Home.
- Todos os links internos são roteados sem reload completo (SPA). Garantir suporte a acesso direto às rotas na hospedagem escolhida com fallback apropriado.

## 5. Wireframes funcionais das páginas

### 5.1 Home `/`

**Propósito:** em até alguns segundos, o visitante identifica problema, solução e CTA.

1. Header com logo dinâmico, navegação e CTA.
2. Hero escuro em duas colunas: título "Prepare sua equipe antes que o phishing aconteça.", descrição da proposta, CTAs "Conhecer nossa solução" e "Solicitar demonstração"; mockup visual de e-mail/relatório à direita.
3. Seção "Simular, analisar, capacitar": três cards com ícones e textos curtos.
4. Seção "Por que investir em conscientização?": benefícios para PMEs, sem dados estatísticos não verificados.
5. Mini-preview de relatórios/treinamentos com link para `/resultados`.
6. CTA final escuro para `/contato` + footer.

**Aceite:** CTAs funcionam; hero legível no celular; nome alterado em configuração reflete imediatamente no topo/rodapé.

### 5.2 Nossa Solução `/solucao`

1. Cabeçalho interno com título e descrição.
2. Quatro FeatureCards: Simulações, Análise de risco, Treinamentos e Acompanhamento.
3. Bloco de diferenciais: simples para PMEs, sem TI dedicada, abordagem educativa contínua.
4. Bloco comparativo do ciclo "Antes / Durante / Depois" (sem inventar performance).
5. Links "Explorar simulações" e "Como funciona".

**Aceite:** serviços coerentes com a proposta; cards e botões apontam para rotas corretas.

### 5.3 Simulações `/simulacoes`

1. Introdução: "Conheça nossas simulações" + nota "Conteúdo fictício para demonstração".
2. Abas `E-mail`, `SMS`, `WhatsApp` com seleção por botão/tab acessível.
3. Painel de mensagem **ilustrativa** de cenário genérico. Não imitar marcas ou páginas de login reais; não pedir credenciais.
4. Coluna "O que observamos": cliques demonstrativos, denúncias e outros comportamentos agregados. Explicar quais sinais devem ser reconhecidos (urgência, remetente, links).
5. Botão "Ver exemplo de relatório" → `/resultados`.

**Aceite:** alternar abas altera conteúdo e sinalização; nenhum envio/coleta real; layout mobile adaptado.

### 5.4 Como Funciona `/como-funciona`

1. Hero com promessa "Da simulação ao aprendizado contínuo".
2. Seletor de quatro passos: `01 Planejar → 02 Simular → 03 Analisar → 04 Capacitar`.
3. Seleção troca descrição, ícone e mini-mockup contextual.
4. Resumo do processo e CTA para contato.

**Aceite:** etapa ativa visual e semanticamente identificada; navegação via teclado funciona.

### 5.5 Resultados `/resultados`

1. Cabeçalho "Relatório demonstrativo" + **selo Dados fictícios** sempre visível.
2. Seletor de departamento: `Geral`, `Financeiro`, `Recursos Humanos`, `Tecnologia`.
3. Cards de métricas: participantes, taxa de cliques, taxa de reporte, risco relativo.
4. Gráfico de barras com comparação por departamento e gráfico simples de evolução (dados consistentes entre filtros).
5. Bloco "Análise e recomendação" com texto contextual conforme filtro.
6. CTA "Ver treinamento recomendado" → `/treinamentos?curso=<id>`.

**Dados demonstrativos:** em `src/data/mockData.ts`, com objetos tipados, um dataset estável e sem aleatoriedade por renderização. Taxas dentro de 0–100%, percentuais legíveis e sem insinuar eficácia real.

**Aceite:** filtros mudam cards, visualização e recomendação; CTA transmite curso selecionado; gráficos acessíveis com rótulos/texto alternativo.

### 5.6 Treinamentos `/treinamentos`

1. Hero: "Treinamentos personalizados".
2. Cards de cursos: Boletos e cobranças falsas, Engenharia social, Links suspeitos, Proteção de dados (exemplos ilustrativos).
3. Ao clicar no card, mostrar painel de detalhes: público-alvo, objetivo, duração **ilustrativa** e aprendizados.
4. Ao entrar com `?curso=<id>`, selecionar automaticamente o card correspondente; se inválido, usar default.
5. CTA para contato.

**Aceite:** link a partir de Resultados seleciona treinamento correto; keyboard/focus; nada que pareça um curso completo real.

### 5.7 Contato `/contato`

1. Headline e benefícios concisos.
2. Formulário com Nome, Empresa, E-mail corporativo, Quantidade de funcionários (select) e Mensagem opcional.
3. Validação local de campos obrigatórios/formato do e-mail; feedback acessível de erro.
4. Sucesso simulado com texto: "Esta é uma demonstração acadêmica; nenhuma mensagem foi enviada."; não persistir nem transmitir os valores.
5. CTA para retornar à Home.

**Aceite:** form demonstra feedback visual; sem fetch, API externa nem dados persistidos.

### 5.8 Nossa Equipe `/equipe`

**Página acadêmica opcional** com mesma identidade híbrida.

1. Hero escuro com selo "Projeto acadêmico", título "Conheça nossa equipe" e subtítulo que usa `brand.name` dinamicamente.
2. Grade com **seis cards placeholders** (3 colunas desktop, 2 tablet, 1 mobile, conforme largura): foto redonda, nome, RA e função opcional.
3. Sem imagens cadastradas: mostrar avatar genérico em SVG/ícone com nome alternativo, sem erros de imagem quebrada.
4. Pequena descrição sobre projeto acadêmico e CTA de volta à Home.
5. Link à página no rodapé apenas com `brand.showTeamPage === true`.

Criar `src/data/team.ts`:

```ts
export type TeamMember = {
  id: string;
  name: string;
  ra: string;
  photo?: string; // ex.: '/team/integrante-01.webp'
  role?: string;
};

export const teamMembers: TeamMember[] = [
  { id: 'integrante-1', name: 'Integrante 1', ra: 'A preencher' },
  { id: 'integrante-2', name: 'Integrante 2', ra: 'A preencher' },
  { id: 'integrante-3', name: 'Integrante 3', ra: 'A preencher' },
  { id: 'integrante-4', name: 'Integrante 4', ra: 'A preencher' },
  { id: 'integrante-5', name: 'Integrante 5', ra: 'A preencher' },
  { id: 'integrante-6', name: 'Integrante 6', ra: 'A preencher' },
];

// Para inserir uma foto em um integrante:
// { id: 'integrante-1', name: 'Nome', ra: 'RA', photo: '/team/foto-1.webp' }
```

> Os integrantes editarão o array individualmente; usar exemplos explícitos no README. Criar `public/team/` para armazenar fotos locais. Não usar imagens remotas de terceiros sem autorização. Ao publicar, obter consentimento para expor fotos e RAs; preferir repo privado para versão acadêmica.

**Aceite:** atualização do array altera cards; foto ausente tem fallback; marca trocada aparece corretamente; ao desativar `showTeamPage`, rota e link desaparecem.

## 6. Componentes e dados

- `Navbar`, `MobileNav`, `Footer`, `BrandLogo`, `Container`, `SectionHeader`, `Button`, `Hero`, `FeatureCard`, `StepSelector`, `ScenarioPreview`, `MetricCard`, `ReportPreview`, `TrainingCard`, `TeamMemberCard`, `ContactForm`, `PageHero`.
- Evitar componentes artificiais ou abstrações desnecessárias; componentes de uso único podem permanecer junto à página.
- `src/config/brand.ts`: fonte única para identidade e flag acadêmica.
- `src/data/mockData.ts`: simulações, métricas de relatório e cursos, com IDs estáveis.
- `src/data/team.ts`: seis placeholders modificáveis.
- `src/styles/globals.css`: tokens semânticos, fontes e estilos globais.
- `src/pages/*.tsx`: um arquivo por página.
- Manter dados e conteúdo em português brasileiro, variáveis técnicas em inglês ou padrão consistente.

### Estrutura sugerida

```text
phishing-awareness-prototype/
├── public/
│   └── team/                     # fotos locais opcionais
├── src/
│   ├── components/
│   │   ├── BrandLogo.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── ReportPreview.tsx
│   │   └── ...
│   ├── config/
│   │   └── brand.ts
│   ├── data/
│   │   ├── team.ts
│   │   └── mockData.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Solution.tsx
│   │   ├── Simulations.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Results.tsx
│   │   ├── Trainings.tsx
│   │   ├── Contact.tsx
│   │   └── Team.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── AGENTS.md
├── SPEC.md
├── README.md
├── index.html
└── package.json
```

## 7. Requisitos de UX, acessibilidade e segurança

- Elementos interativos são botões/links reais; nada de elementos clicáveis sem função.
- Estados de hover, focus visível, ativo, erros e feedback de envio.
- Labels e `aria-*` corretos em tabs, campos e navegação; headings em ordem semântica, alt nas imagens.
- Contraste suficiente e legibilidade em desktop e mobile (alvo 360px+); evitar overflow horizontal.
- Suporte a `prefers-reduced-motion` e não depender exclusivamente de cores para informar o risco.
- Nenhum login, coleta real de senhas ou captura de dados pessoais. O formulário somente simula envio.
- Campanhas, relatórios, percentuais e casos sempre **explicitamente fictícios**.
- Não exibir estatísticas externas sem fonte revisada, nem afirmar certificações inexistentes ou conformidade já obtida com LGPD/ISO.
- Em produção futura, remover página e dados acadêmicos do build (inclusive RAs e fotos), não só esconder via CSS ou rota.

## 8. Plano de implementação priorizado

**P0 (essencial):** projeto inicial, design tokens, marca configurável, layout compartilhado, oito páginas e navegação, página de equipe com placeholders, build funcionando.

**P1 (forte impacto na nota):** abas em Simulações, etapas em Como Funciona, relatório filtrável, link contextual para Treinamentos, formulário demonstrativo, responsividade e acabamento.

**P2 (se sobrar tempo):** microanimações discretas, detalhes de ícones/ilustrações, melhorias de acessibilidade e otimização de assets.

Evitar backend, autenticação, integrações reais, animações pesadas e dependências supérfluas.

## 9. Checklist de aceite final

- [ ] `npm install` e `npm run dev` funcionam.
- [ ] `npm run build` funciona sem erros TypeScript.
- [ ] As **8 rotas** renderizam sem tela em branco e menus/CTAs têm destinos válidos.
- [ ] Navbar, footer, tipografia, cores e espaçamentos são consistentes.
- [ ] Layout testado em largura móvel (~375px), tablet (~768px) e desktop (~1440px).
- [ ] Trocar `brand.name` para `Vigil` atualiza todos os textos de marca sem alterar componentes.
- [ ] Trocar `brand.tagline` altera todos os slogans relevantes.
- [ ] Adicionar nome/RA/foto em `team.ts` atualiza a página sem editar JSX.
- [ ] `showTeamPage=false` remove rota e link; dados acadêmicos devem ser removidos antes de publicação comercial.
- [ ] Abas Simulações e etapas Como Funciona funcionam.
- [ ] Filtros de Resultados atualizam indicadores e treinamento recomendado.
- [ ] `/treinamentos?curso=<id>` destaca curso esperado.
- [ ] Formulário dá feedback local e **não envia dados**.
- [ ] Não há dados pessoais reais ou segredos incluídos por padrão.
- [ ] README orienta execução e edição de marca/equipe.

## 10. Demonstração sugerida para a professora (2–4 minutos)

1. Home: dizer qual problema a empresa resolve e para quem.
2. Solução e Simulações: alternar e-mail/SMS/WhatsApp, indicar que são exemplos autorizados e fictícios.
3. Como Funciona: mostrar o ciclo planejar → simular → analisar → capacitar.
4. Resultados: selecionar Financeiro e explicar os indicadores fictícios.
5. Treinamentos: clicar na recomendação e observar o curso correspondente selecionado.
6. Contato: demonstrar solicitação fictícia.
7. Nossa Equipe: apresentar integrantes com fotos e RAs cadastrados depois.

---

**Princípio central:** criar a aparência e a experiência de um produto profissional, sem construir serviços reais que a atividade não exige.
