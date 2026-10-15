import { useState } from "react";
import { Check, MousePointer2, Flag, Eye } from "lucide-react";
import { scenarios } from "../data/mockData";
import TabSelector from "../components/TabSelector";
import ScenarioPreview from "../components/ScenarioPreview";
import { ButtonLink, DemoBadge, PageHero, SafetyNote } from "../components/ui";
export default function Simulations() {
  const [selected, setSelected] = useState("email");
  const scenario = scenarios.find((s) => s.id === selected)!;
  return (
    <>
      <PageHero
        eyebrow="SIMULAÇÕES AUTORIZADAS"
        title="Conheça nossas simulações"
      >
        Um espaço seguro para observar os sinais. Explore exemplos de mensagens
        que poderiam aparecer no dia a dia da sua equipe.
      </PageHero>
      <section className="section container">
        <div className="section-top-row">
          <div>
            <DemoBadge />
            <p className="small-note">Conteúdo fictício para demonstração</p>
          </div>
          <span className="small-note">Selecione um canal para explorar</span>
        </div>
        <TabSelector
          items={scenarios.map((s) => ({ id: s.id, label: s.label }))}
          active={selected}
          onChange={setSelected}
          label="Canal da simulação"
          prefix="scenario"
        />
        <div
          id={`scenario-panel-${selected}`}
          role="tabpanel"
          aria-labelledby={`scenario-tab-${selected}`}
          tabIndex={0}
          className="simulation-layout"
        >
          <div className="simulation-canvas">
            <ScenarioPreview scenario={scenario} />
          </div>
          <div className="scenario-analysis">
            <span className="eyebrow light">UMA LEITURA MAIS ATENTA</span>
            <h2>Quais sinais reconhecer?</h2>
            <ul className="check-list">
              {scenario.clues.map((c) => (
                <li key={c}>
                  <Check size={19} />
                  {c}
                </li>
              ))}
            </ul>
            <div className="observations">
              <h3>O que observamos</h3>
              <p>
                <MousePointer2 size={17} />
                Cliques demonstrativos em mensagens
              </p>
              <p>
                <Flag size={17} />
                Reportes de conteúdo suspeito
              </p>
              <p>
                <Eye size={17} />
                Comportamentos agregados por equipe
              </p>
            </div>
          </div>
        </div>
        <SafetyNote />
        <div className="actions">
          <ButtonLink to="/resultados">Ver exemplo de relatório</ButtonLink>
        </div>
      </section>
    </>
  );
}
