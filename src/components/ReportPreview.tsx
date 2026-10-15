import {
  ArrowDownRight,
  ChartNoAxesCombined,
  Ellipsis,
  Users,
} from "lucide-react";
import { generalReport, formatPercent, rate } from "../data/mockData";
import { DemoBadge } from "./ui";
export default function ReportPreview() {
  return (
    <div className="report-preview">
      <div className="report-preview-header">
        <div className="report-heading">
          <ChartNoAxesCombined size={18} />
          <strong>Visão geral da campanha</strong>
        </div>
        <Ellipsis size={18} />
      </div>
      <DemoBadge />
      <div className="preview-stats">
        <div>
          <span>
            <Users size={13} /> Participantes
          </span>
          <strong>{generalReport.participants}</strong>
        </div>
        <div>
          <span>Taxa de cliques</span>
          <strong>
            {formatPercent(
              rate(generalReport.clicks, generalReport.participants),
            )}
            <ArrowDownRight size={20} />
          </strong>
        </div>
        <div>
          <span>Taxa de reporte</span>
          <strong>
            {formatPercent(
              rate(generalReport.reports, generalReport.participants),
            )}
          </strong>
        </div>
      </div>
      <div
        className="mini-chart"
        role="img"
        aria-label={`Evolução fictícia da taxa de reporte: ${generalReport.evolution.map((point) => `${point.month}: ${formatPercent(point.reports)}`).join("; ")}.`}
      >
        <div className="chart-grid" />
        {generalReport.evolution.map((p) => (
          <div className="mini-chart-column" key={p.month}>
            <span style={{ height: `${p.reports * 1.6}px` }} />
            <small>{p.month}</small>
          </div>
        ))}
      </div>
      <div className="preview-caption">
        <span className="teal-dot" />
        Evolução do reporte <span>Jul — Out · período ilustrativo</span>
      </div>
    </div>
  );
}
