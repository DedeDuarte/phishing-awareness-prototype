import { useSearchParams } from "react-router-dom";
import { BookOpen, Check, Clock3, Users, ArrowUpRight } from "lucide-react";
import { trainings } from "../data/mockData";
import { ButtonLink, DemoBadge, PageHero } from "../components/ui";
export default function Trainings() {
  const [params, setParams] = useSearchParams();
  const queryId = params.get("curso");
  const matching = trainings.find((t) => t.id === queryId);
  const course = matching || trainings[0];
  return (
    <>
      <PageHero
        eyebrow="APRENDER PARA RECONHECER"
        title="Treinamentos personalizados"
      >
        O próximo aprendizado parte da realidade de cada equipe. Explore temas
        educativos conectados aos sinais observados nas simulações.
      </PageHero>
      <section className="section container">
        <div className="section-top-row">
          <div>
            <DemoBadge />
            <p className="small-note">
              Catálogo ilustrativo · não são cursos reais
            </p>
          </div>
          <span className="small-note">
            Selecione um tema para ver os detalhes
          </span>
        </div>
        {queryId && !matching && (
          <p role="status" className="notice">
            O curso solicitado não foi encontrado. Exibindo o primeiro tema
            disponível.
          </p>
        )}
        <div className="training-grid">
          {trainings.map((t, i) => (
            <button
              className={`training-card ${course.id === t.id ? "selected" : ""}`}
              key={t.id}
              aria-pressed={course.id === t.id}
              aria-controls="course-details"
              onClick={() =>
                setParams({ curso: t.id }, { preventScrollReset: true })
              }
            >
              <div>
                <span className="icon-box">
                  <BookOpen size={23} />
                </span>
                <span className="card-number">0{i + 1}</span>
              </div>
              <h2>{t.title}</h2>
              <p>{t.description}</p>
              <span className="card-link">
                {course.id === t.id ? "Tema selecionado" : "Explorar tema"}
                {course.id === t.id ? (
                  <Check size={18} />
                ) : (
                  <ArrowUpRight size={18} />
                )}
              </span>
            </button>
          ))}
        </div>
        <article
          id="course-details"
          className="course-details"
          aria-live="polite"
        >
          <div>
            <span className="eyebrow light">SEU PRÓXIMO APRENDIZADO</span>
            <h2>{course.title}</h2>
            <p>{course.objective}</p>
            <div className="course-meta">
              <span>
                <Users size={18} />
                {course.audience}
              </span>
              <span>
                <Clock3 size={18} />
                {course.duration} minutos · duração ilustrativa
              </span>
            </div>
          </div>
          <div>
            <h3>O que seria abordado</h3>
            <ul className="check-list">
              {course.lessons.map((t) => (
                <li key={t}>
                  <Check size={18} />
                  {t}
                </li>
              ))}
            </ul>
            <ButtonLink to="/contato">Solicitar demonstração</ButtonLink>
          </div>
        </article>
      </section>
    </>
  );
}
