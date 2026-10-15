import { useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import BrandLogo from "./BrandLogo";

const navigation = [
  { to: "/", label: "Início" },
  { to: "/solucao", label: "Solução" },
  { to: "/simulacoes", label: "Simulações" },
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/resultados", label: "Resultados" },
  { to: "/treinamentos", label: "Treinamentos" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <BrandLogo />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contato" className="nav-cta">
          Solicitar demonstração
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button
          ref={toggleRef}
          className="mobile-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navegação móvel"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              toggleRef.current?.focus();
            }
          }}
        >
          {[
            ...navigation,
            { to: "/contato", label: "Solicitar demonstração" },
          ].map((item) => (
            <NavLink
              to={item.to}
              key={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
