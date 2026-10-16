import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";
const storageKey = "theme";
const changeEvent = "themechange";

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  function onStorage(event: StorageEvent) {
    if (event.key === storageKey || event.key === null) {
      document.documentElement.dataset.theme =
        event.newValue === "dark" ? "dark" : "light";
      onChange();
    }
  }
  window.addEventListener(changeEvent, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(changeEvent, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function toggleTheme() {
  const nextTheme = getTheme() === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  try {
    localStorage.setItem(storageKey, nextTheme);
  } catch {
    // Keep the toggle usable even when storage is blocked or full.
  }
  window.dispatchEvent(new Event(changeEvent));
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");
  return { theme, toggleTheme };
}
