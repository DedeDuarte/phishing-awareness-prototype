export type Brand = {
  name: string;
  tagline: string;
  description: string;
  category: string;
  contactEmail: string;
  showTeamPage: boolean;
};

export const brand: Brand = {
  name: "Otori",
  tagline: "Simule o risco. Desenvolva a defesa.",
  description:
    "Simulações de phishing, análise de riscos e treinamentos corporativos.",
  category: "Cybersecurity Awareness",
  contactEmail: "contato@exemplo.com", // Placeholder; não é um canal de contato real.
  showTeamPage: true,
};
