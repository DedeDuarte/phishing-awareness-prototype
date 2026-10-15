import { BarChart3, BookOpen, Mail, RefreshCw, Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  ButtonLink,
  CtaBanner,
  PageHero,
  SectionHeader,
} from "../components/ui";
const features = [
  {
    icon: Mail,
    title: "Simulações",
    text: "Exemplos educativos de e-mail, SMS e WhatsApp para reconhecer sinais de phishing em um ambiente controlado.",
    to: "/simulacoes",
  },
  {
    icon: BarChart3,
    title: "Análise de risco",
    text: "Indicadores agregados de cliques e reportes, com uma leitura simples das necessidades de cada departamento.",
    to: "/resultados",
  },
  {
    icon: BookOpen,
    title: "Treinamentos",
    text: "Conteúdos direcionados aos comportamentos observados, com temas próximos da rotina de trabalho.",
    to: "/treinamentos",
  },
  {
    icon: RefreshCw,
    title: "Acompanhamento",
    text: "Um ciclo educativo contínuo: planejar, observar, aprender e revisar os próximos passos.",
    to: "/como-funciona",
  },
];
export default function Solution() {
  return (
    <>
      <PageHero
        eyebrow="NOSSA SOLUÇÃO"
        title="Segurança feita de tecnologia. E de pessoas."
      >
        Uma proposta integrada de conscientização para pequenas e médias
        empresas. Simule o risco, entenda os sinais e transforme o aprendizado
        em hábito.
      </PageHero>
      <section className="section container">
        <SectionHeader
          eyebrow="UM CICLO COMPLETO"
          title="Da primeira mensagem ao próximo aprendizado."
        />
        <div className="feature-grid">
          {features.map((f) => (
            <Link className="feature-card" key={f.title} to={f.to}>
              <span className="icon-box">
                <f.icon size={25} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              <span className="card-link">
                Conhecer <span aria-hidden="true">↗</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="soft-section">
        <div className="container two-column">
          <SectionHeader
            eyebrow="PRÓXIMA DA SUA REALIDADE"
            title="Complexidade para as ameaças. Clareza para sua equipe."
          >
            Não é preciso uma equipe especializada para começar a conversar
            sobre segurança.
          </SectionHeader>
          <ul className="check-list">
            {[
              "Linguagem simples, sem jargões desnecessários",
              "Cenários próximos da rotina de PMEs",
              "Abordagem educativa e sem exposição individual",
              "Continuidade entre análise e capacitação",
            ].map((t) => (
              <li key={t}>
                <Check size={20} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section container">
        <SectionHeader
          eyebrow="APRENDIZADO EM MOVIMENTO"
          title="Cada momento tem um propósito."
        />
        <div className="three-column process-summary">
          {[
            {
              t: "Antes",
              d: "Definir objetivos, público e escopo. A autorização e os limites vêm primeiro.",
            },
            {
              t: "Durante",
              d: "Observar comportamentos agregados em cenários educativos e controlados.",
            },
            {
              t: "Depois",
              d: "Ler os indicadores, conversar sobre os sinais e recomendar capacitação.",
            },
          ].map((p, i) => (
            <article key={p.t}>
              <span className="card-number">0{i + 1}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </article>
          ))}
        </div>
        <div className="actions">
          <ButtonLink to="/simulacoes">Explorar simulações</ButtonLink>
          <ButtonLink to="/como-funciona" secondary>
            Como funciona
          </ButtonLink>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
