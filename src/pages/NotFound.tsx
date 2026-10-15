import { ButtonLink, PageHero } from "../components/ui";
export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="ERRO 404" title="Esse caminho não foi encontrado.">
        A página pode ter sido movida ou não estar disponível. Continue
        explorando a nossa proposta pela página inicial.
      </PageHero>
      <section className="section container">
        <ButtonLink to="/">Voltar à Home</ButtonLink>
      </section>
    </>
  );
}
