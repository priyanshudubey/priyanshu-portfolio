import { useCallback, useEffect, useState } from "react";

const prefersDark = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;

/**
 * Light/dark theme. The initial value is applied by an inline script in
 * index.html (before paint); this hook syncs React with it after hydration.
 */
export default function useTheme() {
  // Start as `null` so the server render and first client render match.
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const stored = document.documentElement.dataset.theme;
    setTheme(stored === "light" || stored === "dark" ? stored : prefersDark() ? "dark" : "light");
  }, []);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {
        // storage unavailable (private mode) — theme still applies for this visit
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
