import type { ReactNode } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export function ButtonLink({
  to,
  children,
  secondary = false,
  className = "",
}: {
  to: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      className={`button ${secondary ? "button-secondary" : "button-primary"} ${className}`}
      to={to}
    >
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow">
          <span />
          {eyebrow}
        </div>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
}
export function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow light">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
export function DemoBadge() {
  return (
    <span className="demo-badge">
      <span />
      DADOS FICTÍCIOS
    </span>
  );
}
export function CtaBanner() {
  return (
    <section className="container cta-banner">
      <div>
        <span className="eyebrow">O PRÓXIMO PASSO É HUMANO</span>
        <h2>
          Uma equipe preparada começa
          <br className="desktop-break" /> com uma boa conversa.
        </h2>
        <p>Conheça uma abordagem de segurança feita para pessoas.</p>
      </div>
      <ButtonLink to="/contato">Solicitar demonstração</ButtonLink>
    </section>
  );
}
export function SafetyNote({ children }: { children?: ReactNode }) {
  return (
    <p className="safety-note">
      <ShieldCheck size={17} aria-hidden="true" />
      {children ||
        "Ambiente educativo. Sem envio real, sem coleta de credenciais."}
    </p>
  );
}
