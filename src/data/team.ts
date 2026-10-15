export type TeamMember = {
  id: string;
  name: string;
  ra: string;
  photo?: string;
  role?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "integrante-1",
    name: "André Doerner Duarte",
    ra: "10427938",
    photo: "/team/andre.png",
  },
  {
    id: "integrante-2",
    name: "Giovanni Castro",
    ra: "10435745",
    photo: "/team/giovanni.png",
  },
  {
    id: "integrante-3",
    name: "João Vitor Garcia Aguiar Mintz",
    ra: "10440421",
    photo: "/team/joao.png",
  },
  {
    id: "integrante-4",
    name: "Matheus Leonardo Cardoso Kroeff",
    ra: "10426434",
    photo: "/team/matheus.png",
  },
  {
    id: "integrante-5",
    name: "Naoto Ushizaki",
    ra: "10437445",
    photo: "/team/naoto.png",
  },
  {
    id: "integrante-6",
    name: "Theo Venícius de Almeida Galvão",
    ra: "10722747",
    photo: "/team/theo.png",
  },
];
