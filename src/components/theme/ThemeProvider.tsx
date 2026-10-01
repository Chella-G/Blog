import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

type ThemeMode = "light" | "dark";

interface ThemeContextProps {
  theme: ThemeMode;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggle: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const getInitialTheme = (): ThemeMode => {
    const saved = localStorage.getItem("blog-theme") as ThemeMode | null;
    if (saved) return saved;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  const toggle = () => {
    setTheme((prev) => {
      const next: ThemeMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("blog-theme", next);
      return next;
    });
  };

  // Listen for system preference changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("blog-theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Apply theme class to <html> for global CSS access
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const themeObject = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};
