import { BookOpen, ChartNoAxesCombined, ShieldCheck } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { PageHero } from "../components/ui";
export default function Contact() {
  return (
    <>
      <PageHero eyebrow="CONTATO" title="O primeiro passo é uma conversa.">
        Explore como a conscientização pode fazer parte da rotina da sua
        empresa. Esta solicitação é apenas uma demonstração acadêmica.
      </PageHero>
      <section className="section container contact-layout">
        <div className="contact-copy">
          <span className="eyebrow light">PREPARAÇÃO COMEÇA AQUI</span>
          <h2>Uma proposta que acompanha a sua realidade.</h2>
          <p>
            Conectamos cenários do cotidiano, leitura de indicadores e temas
            educativos em uma jornada simples.
          </p>
          <ul className="benefit-list">
            <li>
              <span>
                <ShieldCheck size={22} />
              </span>
              <div>
                <h3>Simulações autorizadas</h3>
                <p>Escopo definido e foco no aprendizado.</p>
              </div>
            </li>
            <li>
              <span>
                <ChartNoAxesCombined size={22} />
              </span>
              <div>
                <h3>Clareza para decidir</h3>
                <p>Indicadores agregados por departamento.</p>
              </div>
            </li>
            <li>
              <span>
                <BookOpen size={22} />
              </span>
              <div>
                <h3>Capacitação contextualizada</h3>
                <p>Temas que fazem sentido para cada equipe.</p>
              </div>
            </li>
          </ul>
          <div className="contact-note">
            <ShieldCheck size={22} />
            <p>
              <strong>Privacidade desde a demonstração.</strong>
              <br />
              Não há envio, rastreamento ou armazenamento de informações
              pessoais.
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
