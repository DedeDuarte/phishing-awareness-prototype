import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { to: "/", label: "Início" },
  { to: "/solucao", label: "Solução" },
  { to: "/simulacoes", label: "Simulações" },
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/resultados", label: "Resultados" },
  { to: "/treinamentos", label: "Treinamentos" },
];
type ScrollMode = "flow" | "hidden" | "visible";
const initialScrollState = { mode: "flow" as ScrollMode, animated: false };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollState, setScrollState] = useState(initialScrollState);
  const slotRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const readScroll = () =>
      Math.max(
        0,
        Math.min(
          window.scrollY,
          document.documentElement.scrollHeight - window.innerHeight,
        ),
      );
    let previousY = readScroll();
    let direction = 0;
    let distance = 0;
    let frame = 0;

    function setMode(mode: ScrollMode) {
      setScrollState((previous) =>
        previous.mode === mode
          ? previous
          : { mode, animated: previous.mode !== "flow" && mode !== "flow" },
      );
    }

    function update() {
      frame = 0;
      const y = readScroll();
      const delta = y - previousY;
      previousY = y;

      if (y <= (slotRef.current?.offsetHeight ?? 0)) {
        direction = 0;
        distance = 0;
        // A revealed header meets its original position only at scroll zero.
        setScrollState((previous) =>
          y > 0 && previous.mode === "visible" ? previous : initialScrollState,
        );
        return;
      }
      if (open) {
        direction = 0;
        distance = 0;
        setMode("visible");
        return;
      }

      if (delta !== 0) {
        const nextDirection = Math.sign(delta);
        if (nextDirection !== direction) distance = 0;
        direction = nextDirection;
        distance += Math.abs(delta);
      }
      if (distance >= 10) {
        setMode(direction < 0 ? "visible" : "hidden");
        distance = 0;
      } else {
        // Enter fixed positioning offscreen, without animating from the top.
        setScrollState((previous) =>
          previous.mode === "flow"
            ? { mode: "hidden", animated: false }
            : previous,
        );
      }
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1241px)");
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const floating = open || scrollState.mode !== "flow";
  const hidden = !open && scrollState.mode === "hidden";
  return (
    <div className="navbar-slot" ref={slotRef}>
      <header
        className={`navbar${floating ? " navbar-floating" : ""}${hidden ? " navbar-hidden" : ""}${scrollState.animated ? " navbar-animated" : ""}`}
      >
        <div className="container nav-inner">
          <BrandLogo />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
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
    </div>
  );
}
