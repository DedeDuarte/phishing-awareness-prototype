import { GraduationCap } from "lucide-react";
import { brand } from "../config/brand";
import { teamMembers } from "../data/team";
import TeamMemberCard from "../components/TeamMemberCard";
import { ButtonLink, PageHero } from "../components/ui";
export default function Team() {
  return (
    <>
      <PageHero eyebrow="PROJETO ACADÊMICO" title="Conheça nossa equipe">
        Por trás da {brand.name}, uma construção coletiva. Um projeto de
        Projetos Empreendedores para aproximar pessoas, educação e segurança
        digital.
      </PageHero>
      <section className="section container">
        <div className="team-intro">
          <span className="icon-box">
            <GraduationCap size={26} />
          </span>
          <div>
            <h2>Ideias que ganham forma em equipe.</h2>
            <p>
              Seis espaços reservados aos integrantes do trabalho. Nomes, RAs e
              fotos serão cadastrados pela equipe.
            </p>
          </div>
        </div>
        <div className="team-grid">
          {teamMembers.map((m) => (
            <TeamMemberCard key={m.id} member={m} />
          ))}
        </div>
        <div className="academic-note">
          <span className="eyebrow light">SOBRE O PROJETO</span>
          <h2>Uma proposta fictícia. Um aprendizado real.</h2>
          <p>
            Este protótipo foi desenvolvido para a disciplina de Projetos
            Empreendedores. Apresenta a proposta de um serviço de
            conscientização contra phishing e seus fluxos, sem realizar
            campanhas, oferecer cursos reais ou coletar credenciais.
          </p>
          <ButtonLink to="/" secondary>
            Voltar à Home
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
