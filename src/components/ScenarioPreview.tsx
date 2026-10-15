import { Mail, MoreHorizontal, ShieldCheck, TriangleAlert } from "lucide-react";
import type { Scenario } from "../data/mockData";
export default function ScenarioPreview({
  scenario,
  compact = false,
}: {
  scenario: Scenario;
  compact?: boolean;
}) {
  return (
    <div className={`scenario-preview ${compact ? "compact" : ""}`}>
      <div className="window-top">
        <span className="window-dots">
          <i />
          <i />
          <i />
        </span>
        <span>Simulação educativa · {scenario.label}</span>
        <MoreHorizontal size={18} />
      </div>
      <div className="message-content">
        <div className="message-sender">
          <span className="message-avatar">
            <Mail size={21} />
          </span>
          <div>
            <strong>Comunicado ilustrativo</strong>
            <span>{scenario.sender}</span>
          </div>
          <span className="message-time">09:41</span>
        </div>
        <h3>{scenario.subject}</h3>
        <p>{scenario.message}</p>
        <span className="example-link">{scenario.action}</span>
        <div className="message-warning">
          <TriangleAlert size={15} />
          <span>Exemplo fictício. O endereço não é um link ativo.</span>
        </div>
      </div>
      <div className="message-footer">
        <ShieldCheck size={16} />
        Aprender a reconhecer é o primeiro passo.
      </div>
    </div>
  );
}
