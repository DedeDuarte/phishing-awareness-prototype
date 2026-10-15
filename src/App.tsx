import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { brand } from "./config/brand";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import Simulations from "./pages/Simulations";
import HowItWorks from "./pages/HowItWorks";
import Trainings from "./pages/Trainings";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

const Results = lazy(() => import("./pages/Results"));
const titles: Record<string, string> = {
  "/": "Início",
  "/solucao": "Nossa solução",
  "/simulacoes": "Simulações",
  "/como-funciona": "Como funciona",
  "/resultados": "Resultados e relatórios",
  "/treinamentos": "Treinamentos",
  "/contato": "Contato",
  "/equipe": "Nossa equipe",
};
function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `${titles[pathname] || "Página não encontrada"} | ${brand.name}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", brand.description);
    window.scrollTo(0, 0);
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }, [pathname]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <Navbar key={pathname} />
      <main id="main-content" tabIndex={-1}>
        <Suspense
          fallback={
            <div className="section container" role="status">
              Carregando página…
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solucao" element={<Solution />} />
            <Route path="/simulacoes" element={<Simulations />} />
            <Route path="/como-funciona" element={<HowItWorks />} />
            <Route path="/resultados" element={<Results />} />
            <Route path="/treinamentos" element={<Trainings />} />
            <Route path="/contato" element={<Contact />} />
            {brand.showTeamPage && <Route path="/equipe" element={<Team />} />}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
