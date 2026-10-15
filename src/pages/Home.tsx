import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Check,
  CircleCheck,
  Mail,
  ScanLine,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { brand } from "../config/brand";
import { scenarios } from "../data/mockData";
import ScenarioPreview from "../components/ScenarioPreview";
import ReportPreview from "../components/ReportPreview";
import { ButtonLink, CtaBanner, SectionHeader } from "../components/ui";

const pillars = [
  {
    number: "01",
    icon: Mail,
    title: "Simular",
    text: "Cenários que se parecem com o dia a dia. Um ambiente controlado para aprender a reconhecer os sinais.",
    to: "/simulacoes",
    link: "Explorar simulações",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Analisar",
    text: "Transforme comportamentos em uma visão clara. Entenda onde estão os pontos de atenção da sua equipe.",
    to: "/resultados",
    link: "Conhecer os relatórios",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Capacitar",
    text: "Do resultado ao aprendizado. Treinamentos direcionados às necessidades de cada departamento.",
    to: "/treinamentos",
    link: "Ver treinamentos",
  },
];
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-grid-background" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              SEGURANÇA COMEÇA COM PESSOAS
            </div>
            <h1>
              Prepare sua equipe
              <br />
              antes que o <span>phishing</span>
              <br />
              aconteça.
            </h1>
            <p>
              Transforme a atenção de hoje na proteção de amanhã. Simulações
              autorizadas e treinamentos para construir uma cultura de segurança
              na sua empresa.
            </p>
            <div className="hero-actions">
              <ButtonLink to="/solucao">Conhecer nossa solução</ButtonLink>
              <Link className="text-link on-dark" to="/contato">
                Solicitar demonstração
                <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="hero-reassurance">
              <ShieldCheck size={16} />
              <span>Educativo por essência. Seguro por princípio.</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="simulation-label">
              <span className="teal-dot" />
              SIMULAÇÃO EM AMBIENTE CONTROLADO
            </div>
            <ScenarioPreview scenario={scenarios[0]} compact />
            <div className="recognition-card">
              <span>
                <ShieldCheck size={24} />
              </span>
              <div>
                <strong>Um clique de consciência.</strong>
                <small>Reconhecer. Reportar. Aprender.</small>
              </div>
              <CircleCheck size={19} />
            </div>
            <div className="visual-bottom-label">
              <span className="line" />
              {brand.tagline}
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="container">
            <span>UMA ABORDAGEM FEITA PARA A SUA EMPRESA</span>
            <div>
              <span>
                <Check size={16} />
                Simulações autorizadas
              </span>
              <span>
                <Check size={16} />
                Análise por departamento
              </span>
              <span>
                <Check size={16} />
                Aprendizado contínuo
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-top-row">
          <SectionHeader
            eyebrow="DA ATENÇÃO À AÇÃO"
            title="Simular, analisar, capacitar."
          >
            Três movimentos. Uma cultura de segurança mais forte.
          </SectionHeader>
          <span className="section-side-note">
            Tecnologia que orienta.
            <br />
            Pessoas que protegem.
          </span>
        </div>
        <div className="pillar-grid">
          {pillars.map((p) => (
            <Link to={p.to} className="pillar-card" key={p.number}>
              <div className="pillar-top">
                <span className="icon-box">
                  <p.icon size={24} />
                </span>
                <span className="card-number">{p.number}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="card-link">
                {p.link}
                <ArrowRight size={17} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="benefits-section">
        <div className="container benefits-layout">
          <div className="benefit-illustration">
            <div className="people-circle">
              <Users size={58} strokeWidth={1.3} />
              <span className="small-protection">
                <ShieldCheck size={26} />
              </span>
            </div>
            <div className="benefit-illustration-copy">
              <span className="eyebrow light">A PRIMEIRA LINHA DE DEFESA</span>
              <strong>
                Sua equipe, mais consciente.
                <br />
                Sua empresa, mais preparada.
              </strong>
            </div>
            <span className="illustration-corner">+</span>
          </div>
          <div>
            <SectionHeader
              eyebrow="CONSCIENTIZAÇÃO NO DIA A DIA"
              title="Por que investir em conscientização?"
            >
              Uma mensagem suspeita pode chegar a qualquer pessoa. Estar
              preparado é uma construção coletiva.
            </SectionHeader>
            <ul className="benefit-list">
              <li>
                <span>
                  <ScanLine size={20} />
                </span>
                <div>
                  <h3>Reconhecer antes de reagir</h3>
                  <p>
                    Ajude as pessoas a identificar sinais de mensagens
                    enganosas.
                  </p>
                </div>
              </li>
              <li>
                <span>
                  <Users size={20} />
                </span>
                <div>
                  <h3>Segurança que cabe na sua realidade</h3>
                  <p>
                    Uma proposta acessível para PMEs, mesmo sem TI dedicada.
                  </p>
                </div>
              </li>
              <li>
                <span>
                  <BookOpen size={20} />
                </span>
                <div>
                  <h3>Aprender sem apontar culpados</h3>
                  <p>Uma abordagem educativa, com indicadores agregados.</p>
                </div>
              </li>
            </ul>
            <Link className="text-link" to="/como-funciona">
              Entenda como funciona
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section container report-teaser">
        <div>
          <SectionHeader
            eyebrow="CLAREZA PARA O PRÓXIMO PASSO"
            title="Dados que viram aprendizado."
          >
            Entenda o cenário, identifique oportunidades e encontre o
            treinamento adequado para cada equipe.
          </SectionHeader>
          <div className="inline-note">
            <BarChart3 size={19} />
            <span>Da visão geral ao detalhe por departamento.</span>
          </div>
          <ButtonLink to="/resultados" secondary>
            Explorar relatório demonstrativo
          </ButtonLink>
          <p className="small-note">
            Todos os indicadores apresentados são fictícios.
          </p>
        </div>
        <ReportPreview />
      </section>
      <CtaBanner />
    </>
  );
}
