import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Users,
  MousePointer2,
  Flag,
  ShieldAlert,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";
import {
  departments,
  reports,
  rate,
  formatPercent,
  trainings,
  type DepartmentId,
} from "../data/mockData";
import { ButtonLink, DemoBadge, PageHero } from "../components/ui";
const tooltipStyles = {
  contentStyle: {
    backgroundColor: "var(--surface-card)",
    border: "1px solid var(--border-input)",
    borderRadius: 8,
    color: "var(--text-primary)",
  },
  labelStyle: { color: "var(--text-primary)" },
  itemStyle: { color: "var(--text-secondary)" },
  cursor: { fill: "var(--chart-cursor)", stroke: "var(--text-muted)" },
};

function legendLabel(value: string) {
  return <span className="chart-legend-label">{value}</span>;
}

export default function Results() {
  const [selected, setSelected] = useState<DepartmentId>("geral");
  const report = reports.find((r) => r.id === selected)!;
  const course = trainings.find((t) => t.id === report.courseId)!;
  const comparison = departments.map((d) => ({
    id: d.id,
    name: d.shortName,
    Cliques: rate(d.clicks, d.participants),
    Reportes: rate(d.reports, d.participants),
  }));
  const metrics = [
    {
      label: "Participantes",
      value: report.participants,
      icon: Users,
      detail: "Pessoas no cenário fictício",
    },
    {
      label: "Taxa de cliques",
      value: formatPercent(rate(report.clicks, report.participants)),
      icon: MousePointer2,
      detail: `${report.clicks} cliques demonstrativos`,
    },
    {
      label: "Taxa de reporte",
      value: formatPercent(rate(report.reports, report.participants)),
      icon: Flag,
      detail: `${report.reports} reportes demonstrativos`,
    },
    {
      label: "Risco relativo",
      value: report.risk,
      icon: ShieldAlert,
      detail: "Classificação ilustrativa",
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="RESULTADOS E RELATÓRIOS"
        title="Relatório demonstrativo"
      >
        Uma visão clara para orientar o aprendizado. Explore como indicadores
        agregados podem se conectar a treinamentos para sua equipe.
      </PageHero>
      <section className="section container report-section">
        <div className="report-controls">
          <div>
            <DemoBadge />
            <p className="small-note">
              Cenário acadêmico · Jul–Out · período ilustrativo
            </p>
          </div>
          <div className="department-label">
            <label htmlFor="department">Departamento</label>
            <select
              id="department"
              value={selected}
              onChange={(e) => setSelected(e.target.value as DepartmentId)}
            >
              {reports.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="metric-grid" aria-live="polite">
          {metrics.map((m) => (
            <article className="metric-card" key={m.label}>
              <div>
                <span>{m.label}</span>
                <m.icon size={18} />
              </div>
              <strong>{m.value}</strong>
              <small>{m.detail}</small>
            </article>
          ))}
        </div>
        <div className="charts-grid">
          <article className="chart-card">
            <h2>Comparação por departamento</h2>
            <p>Cliques e reportes · percentual de participantes</p>
            <div className="chart-box">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={comparison}
                  accessibilityLayer
                  margin={{ top: 16, right: 12, left: -8, bottom: 8 }}
                >
                  <CartesianGrid
                    vertical={false}
                    stroke="var(--chart-grid)"
                  />
                  <XAxis
                    dataKey="name"
                    height={40}
                    tickMargin={10}
                    tick={{
                      fontSize: "var(--font-size-chart-label)",
                      fill: "var(--text-muted)",
                    }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    domain={[0, 100]}
                    unit="%"
                    tick={{
                      fontSize: "var(--font-size-chart-label)",
                      fill: "var(--text-muted)",
                    }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip {...tooltipStyles} formatter={(value) => `${value}%`} />
                  <Legend iconType="circle" formatter={legendLabel} />
                  <Bar
                    dataKey="Cliques"
                    fill="var(--chart-clicks)"
                    radius={[4, 4, 0, 0]}
                  >
                    {comparison.map((d) => (
                      <Cell
                        key={d.id}
                        opacity={
                          selected === "geral" || selected === d.id ? 1 : 0.25
                        }
                      />
                    ))}
                  </Bar>
                  <Bar
                    dataKey="Reportes"
                    fill="var(--chart-reports)"
                    radius={[4, 4, 0, 0]}
                  >
                    {comparison.map((d) => (
                      <Cell
                        key={d.id}
                        opacity={
                          selected === "geral" || selected === d.id ? 1 : 0.25
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <details>
              <summary>Ver valores em texto</summary>
              <ul className="data-list">
                {comparison.map((d) => (
                  <li key={d.id}>
                    {d.name}: {formatPercent(d.Cliques)} de cliques;{" "}
                    {formatPercent(d.Reportes)} de reportes.
                  </li>
                ))}
              </ul>
            </details>
          </article>
          <article className="chart-card">
            <h2>Evolução · {report.name}</h2>
            <p>Trajetória fictícia, sem promessa de eficácia</p>
            <div className="chart-box">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={report.evolution}
                  accessibilityLayer
                  margin={{ top: 16, right: 15, left: -8, bottom: 8 }}
                >
                  <CartesianGrid
                    vertical={false}
                    stroke="var(--chart-grid)"
                  />
                  <XAxis
                    dataKey="month"
                    height={40}
                    tickMargin={10}
                    tick={{
                      fontSize: "var(--font-size-chart-label)",
                      fill: "var(--text-muted)",
                    }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 100]}
                    unit="%"
                    tick={{
                      fontSize: "var(--font-size-chart-label)",
                      fill: "var(--text-muted)",
                    }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip {...tooltipStyles} formatter={(value) => `${value}%`} />
                  <Legend iconType="circle" formatter={legendLabel} />
                  <Line
                    type="monotone"
                    dataKey="clicks"
                    name="Cliques"
                    stroke="var(--chart-clicks)"
                    strokeWidth={2.5}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="reports"
                    name="Reportes"
                    stroke="var(--chart-reports)"
                    strokeWidth={2.5}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <details>
              <summary>Ver valores em texto</summary>
              <ul className="data-list">
                {report.evolution.map((p) => (
                  <li key={p.month}>
                    {p.month}: {formatPercent(p.clicks)} de cliques;{" "}
                    {formatPercent(p.reports)} de reportes.
                  </li>
                ))}
              </ul>
            </details>
          </article>
        </div>
        <div className="recommendation">
          <div>
            <span className="eyebrow light">
              <ArrowUpRight size={16} />
              DO INDICADOR À AÇÃO
            </span>
            <h2>Análise e recomendação</h2>
            <p>{report.analysis}</p>
            <p className="risk-explanation">
              Risco relativo ilustrativo pela taxa de cliques: baixo até 10%;
              moderado acima de 10% até 20%; elevado acima de 20%. Não é uma
              avaliação real de segurança.
            </p>
          </div>
          <div className="recommended-course">
            <BookOpen size={23} />
            <span>Treinamento recomendado</span>
            <h3>{course.title}</h3>
            <ButtonLink to={`/treinamentos?curso=${course.id}`}>
              Ver treinamento recomendado
            </ButtonLink>
          </div>
        </div>
        <p className="small-note">
          DADOS FICTÍCIOS · Nenhum participante real foi monitorado. Os
          resultados não demonstram eficácia de um serviço.
        </p>
      </section>
    </>
  );
}
