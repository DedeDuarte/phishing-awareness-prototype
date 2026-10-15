import { useState } from "react";
import {
  Check,
  ClipboardList,
  Mail,
  BarChart3,
  BookOpen,
  CircleCheck,
} from "lucide-react";
import TabSelector from "../components/TabSelector";
import ReportPreview from "../components/ReportPreview";
import ScenarioPreview from "../components/ScenarioPreview";
import { scenarios } from "../data/mockData";
import { CtaBanner, PageHero, SafetyNote } from "../components/ui";
const steps = [
  {
    id: "planejar",
    label: "01 Planejar",
    icon: ClipboardList,
    title: "Um bom começo tem objetivos claros.",
    text: "A proposta começa por entender a rotina da empresa e combinar objetivos, limites e departamentos participantes. Uma simulação exige autorização prévia.",
    items: [
      "Alinhamento de objetivos",
      "Definição de público e canais",
      "Autorização e limites acordados",
    ],
  },
  {
    id: "simular",
    label: "02 Simular",
    icon: Mail,
    title: "Praticar em um ambiente controlado.",
    text: "Cenários educativos ajudam a reconhecer os sinais de uma mensagem suspeita. Aqui, todas as mensagens são apenas ilustrações, sem envio ou coleta.",
    items: [
      "Cenários fictícios e contextualizados",
      "Sem captura de credenciais",
      "Foco no aprendizado, sem punição",
    ],
  },
  {
    id: "analisar",
    label: "03 Analisar",
    icon: BarChart3,
    title: "Transformar observações em direção.",
    text: "Relatórios agregados ajudam a visualizar pontos de atenção por departamento e escolher o próximo tema educativo.",
    items: [
      "Indicadores agregados",
      "Leitura por departamento",
      "Recomendações contextualizadas",
    ],
  },
  {
    id: "capacitar",
    label: "04 Capacitar",
    icon: BookOpen,
    title: "Aprender hoje. Praticar todos os dias.",
    text: "Os temas de treinamento se conectam aos sinais observados. A capacitação dá continuidade à conversa sobre segurança e prepara um novo ciclo.",
    items: [
      "Conteúdos relacionados ao contexto",
      "Linguagem acessível",
      "Revisão dos próximos passos",
    ],
  },
];
export default function HowItWorks() {
  const [active, setActive] = useState("planejar");
  const step = steps.find((s) => s.id === active)!;
  return (
    <>
      <PageHero
        eyebrow="COMO FUNCIONA"
        title="Da simulação ao aprendizado contínuo"
      >
        Quatro etapas conectadas para colocar pessoas no centro da segurança.
        Explore cada momento da jornada.
      </PageHero>
      <section className="section container">
        <TabSelector
          items={steps}
          active={active}
          onChange={setActive}
          label="Etapas da jornada"
          prefix="step"
        />
        <div
          className="step-layout"
          id={`step-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`step-tab-${active}`}
          tabIndex={0}
        >
          <div>
            <span className="icon-box">
              <step.icon size={26} />
            </span>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
            <ul className="check-list">
              {step.items.map((t) => (
                <li key={t}>
                  <Check size={18} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="step-canvas">
            {active === "simular" ? (
              <ScenarioPreview scenario={scenarios[0]} />
            ) : active === "analisar" ? (
              <ReportPreview />
            ) : (
              <div className="step-mockup">
                <div className="mockup-heading">
                  <step.icon size={22} />
                  <strong>
                    {active === "planejar"
                      ? "Plano de conscientização"
                      : "Trilha de aprendizado"}
                  </strong>
                </div>
                <span className="small-note">Exemplo ilustrativo</span>
                {step.items.map((item, i) => (
                  <div className="mockup-check" key={item}>
                    <CircleCheck size={20} />
                    <span>{item}</span>
                    <small>0{i + 1}</small>
                  </div>
                ))}
                <div className="mockup-progress">
                  <span />
                </div>
                <p>
                  {active === "planejar"
                    ? "Tudo começa com um escopo bem definido."
                    : "O próximo passo faz parte do aprendizado."}
                </p>
              </div>
            )}
          </div>
        </div>
        <SafetyNote>
          Este protótipo apresenta a jornada proposta; não executa campanhas ou
          cursos reais.
        </SafetyNote>
      </section>
      <CtaBanner />
    </>
  );
}
