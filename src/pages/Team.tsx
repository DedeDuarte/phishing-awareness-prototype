import { GraduationCap } from "lucide-react";
import { brand } from "../config/brand";
import { teamMembers } from "../data/team";
import TeamMemberCard from "../components/TeamMemberCard";
import { ButtonLink, PageHero } from "../components/ui";
export default function Team() {
  return (
    <>
      <PageHero eyebrow="PROJETO ACADÊMICO" title="Conheça nossa equipe">
        Conheça o grupo que desenvolveu a {brand.name}, um projeto acadêmico
        que conecta educação e segurança digital na disciplina de Projetos
        Empreendedores.
      </PageHero>
      <section className="section container">
        <div className="team-intro">
          <span className="icon-box">
            <GraduationCap size={26} />
          </span>
          <div>
            <h2>Ideias que ganham forma em equipe.</h2>
            <p>
              Apresentamos os integrantes responsáveis pela concepção e pelo
              desenvolvimento deste projeto de conscientização contra phishing.
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
            Voltar ao início
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
