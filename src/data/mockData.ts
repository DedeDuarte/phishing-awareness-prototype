// Todos os cenários, números e cursos deste arquivo são fictícios.
export type Training = {
  id: string;
  title: string;
  description: string;
  audience: string;
  objective: string;
  duration: number;
  lessons: string[];
};
export const trainings: Training[] = [
  {
    id: "boletos",
    title: "Boletos e cobranças falsas",
    description: "Uma pausa antes de pagar pode fazer a diferença.",
    audience: "Equipes financeiras e de compras",
    objective:
      "Reconhecer sinais de cobranças suspeitas e confirmar solicitações por um canal conhecido.",
    duration: 20,
    lessons: [
      "Conferir beneficiário e dados de cobrança",
      "Reconhecer alterações de pagamento inesperadas",
      "Confirmar pedidos com o responsável por outro canal",
    ],
  },
  {
    id: "engenharia-social",
    title: "Engenharia social",
    description: "Reconheça a manipulação por trás da mensagem.",
    audience: "Recursos Humanos, lideranças e atendimento",
    objective:
      "Identificar tentativas de manipulação que exploram urgência, confiança e autoridade.",
    duration: 25,
    lessons: [
      "Identificar pressão e falsa autoridade",
      "Verificar a identidade de quem solicita",
      "Reportar abordagens fora do processo habitual",
    ],
  },
  {
    id: "links-suspeitos",
    title: "Links suspeitos",
    description: "Aprenda a olhar além do texto de um link.",
    audience: "Todos os departamentos",
    objective:
      "Avaliar remetentes e destinos de links antes de interagir com mensagens.",
    duration: 15,
    lessons: [
      "Examinar o domínio completo",
      "Desconfiar de links encurtados inesperados",
      "Usar um canal oficial para confirmar informações",
    ],
  },
  {
    id: "protecao-dados",
    title: "Proteção de dados",
    description: "Pequenos cuidados. Informações mais protegidas.",
    audience: "Tecnologia e equipes que lidam com informações",
    objective:
      "Adotar hábitos de compartilhamento responsável no ambiente de trabalho.",
    duration: 20,
    lessons: [
      "Compartilhar somente informações necessárias",
      "Revisar destinatários e permissões",
      "Comunicar incidentes ao responsável interno",
    ],
  },
];

export type Scenario = {
  id: string;
  label: string;
  sender: string;
  subject: string;
  message: string;
  action: string;
  clues: string[];
};
export const scenarios: Scenario[] = [
  {
    id: "email",
    label: "E-mail",
    sender: "comunicados@empresa-exemplo.invalid",
    subject: "Ação necessária: atualização do seu benefício",
    message:
      "Olá, equipe! Seu benefício será suspenso hoje. Confirme a atualização pelo endereço abaixo para evitar a interrupção.",
    action: "beneficios-exemplo.invalid/atualizacao",
    clues: [
      "Urgência para impedir uma decisão cuidadosa",
      "Remetente que precisa ser verificado",
      "Link inesperado fora dos canais conhecidos",
    ],
  },
  {
    id: "sms",
    label: "SMS",
    sender: "Remetente desconhecido",
    subject: "Uma entrega com um custo inesperado",
    message:
      "Sua encomenda está retida. Uma taxa precisa ser regularizada ainda hoje. Acesse o endereço para consultar.",
    action: "entrega-exemplo.invalid/taxa",
    clues: [
      "Cobrança por uma entrega não confirmada",
      "Prazo curto para pressionar uma ação",
      "Endereço sem vínculo com um canal conhecido",
    ],
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    sender: "Contato não salvo",
    subject: "Um pedido fora do processo",
    message:
      "Oi! Sou da diretoria, troquei de número. Preciso que você priorize um pagamento agora. Podemos resolver sem passar pelo processo habitual?",
    action: "Pedido ilustrativo de pagamento",
    clues: [
      "Identidade alegada sem confirmação",
      "Uso da hierarquia para gerar pressão",
      "Pedido para ignorar a aprovação habitual",
    ],
  },
];

export type DepartmentId = "geral" | "financeiro" | "rh" | "tecnologia";
export type Department = {
  id: DepartmentId;
  name: string;
  shortName: string;
  participants: number;
  clicks: number;
  reports: number;
  risk: "Baixo" | "Moderado" | "Elevado";
  courseId: string;
  analysis: string;
  evolution: { month: string; clicks: number; reports: number }[];
};
export const departments: Department[] = [
  {
    id: "financeiro",
    name: "Financeiro",
    shortName: "Financeiro",
    participants: 80,
    clicks: 20,
    reports: 32,
    risk: "Elevado",
    courseId: "boletos",
    analysis:
      "Neste cenário fictício, 20 de 80 participantes clicaram. A atenção pode se concentrar na verificação de cobranças e pedidos de pagamento.",
    evolution: [
      { month: "Jul", clicks: 40, reports: 20 },
      { month: "Ago", clicks: 35, reports: 25 },
      { month: "Set", clicks: 30, reports: 30 },
      { month: "Out", clicks: 25, reports: 40 },
    ],
  },
  {
    id: "rh",
    name: "Recursos Humanos",
    shortName: "RH",
    participants: 60,
    clicks: 9,
    reports: 36,
    risk: "Moderado",
    courseId: "engenharia-social",
    analysis:
      "Neste cenário fictício, pedidos com falsa autoridade merecem atenção. O treinamento sugerido explora a confirmação de identidade e o respeito aos processos internos.",
    evolution: [
      { month: "Jul", clicks: 30, reports: 30 },
      { month: "Ago", clicks: 25, reports: 40 },
      { month: "Set", clicks: 20, reports: 50 },
      { month: "Out", clicks: 15, reports: 60 },
    ],
  },
  {
    id: "tecnologia",
    name: "Tecnologia",
    shortName: "Tecnologia",
    participants: 60,
    clicks: 3,
    reports: 48,
    risk: "Baixo",
    courseId: "protecao-dados",
    analysis:
      "Neste cenário fictício, o reporte é mais frequente. A recomendação é continuar a capacitação com foco no compartilhamento responsável de informações.",
    evolution: [
      { month: "Jul", clicks: 20, reports: 50 },
      { month: "Ago", clicks: 15, reports: 60 },
      { month: "Set", clicks: 10, reports: 70 },
      { month: "Out", clicks: 5, reports: 80 },
    ],
  },
];
export const rate = (count: number, total: number) =>
  Number(((count / total) * 100).toFixed(1));
const total = (key: "participants" | "clicks" | "reports") =>
  departments.reduce((sum, d) => sum + d[key], 0);
export const generalReport: Department = {
  id: "geral",
  name: "Geral",
  shortName: "Geral",
  participants: total("participants"),
  clicks: total("clicks"),
  reports: total("reports"),
  risk: "Moderado",
  courseId: "links-suspeitos",
  analysis:
    "O panorama fictício reúne três departamentos. A leitura conjunta de cliques e reportes ajuda a escolher temas educativos, sem avaliações individuais ou rankings de pessoas.",
  evolution: departments[0].evolution.map((point, index) => ({
    month: point.month,
    clicks: Number(
      (
        departments.reduce(
          (sum, d) => sum + d.evolution[index].clicks * d.participants,
          0,
        ) / total("participants")
      ).toFixed(1),
    ),
    reports: Number(
      (
        departments.reduce(
          (sum, d) => sum + d.evolution[index].reports * d.participants,
          0,
        ) / total("participants")
      ).toFixed(1),
    ),
  })),
};
export const reports = [generalReport, ...departments];
export const formatPercent = (value: number) =>
  `${value.toLocaleString("pt-BR", { maximumFractionDigits: 1 })}%`;
