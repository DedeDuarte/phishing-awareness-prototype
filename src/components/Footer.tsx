import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { brand } from "../config/brand";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <BrandLogo />
            <p>{brand.tagline}</p>
            <span className="footer-category">{brand.category}</span>
          </div>
          <div className="footer-links">
            <Link to="/solucao">Nossa solução</Link>
            <Link to="/como-funciona">Como funciona</Link>
            <Link to="/contato">
              Fale com a gente <ArrowUpRight size={14} />
            </Link>
            {brand.showTeamPage && (
              <Link to="/equipe">
                Nossa equipe <ArrowUpRight size={14} />
              </Link>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {brand.name} · Projeto acadêmico
          </span>
          <span>
            Empresa fictícia. Experiência demonstrativa, sem serviços reais.
          </span>
        </div>
      </div>
    </footer>
  );
}
