import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const label = theme === "light" ? "Ativar tema escuro" : "Ativar tema claro";
  const Icon = theme === "light" ? Moon : Sun;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <Icon size={20} aria-hidden="true" />
    </button>
  );
}
