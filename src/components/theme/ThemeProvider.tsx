import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import {
  ThemeSettings,
  defaultSettings,
  sanitizeSettings,
  applySettingsToDocument,
} from "./themeSettings";

type ThemeMode = "light" | "dark";

interface ThemeContextProps {
  theme: ThemeMode;
  toggle: () => void;
  settings: ThemeSettings;
  updateSettings: (patch: Partial<ThemeSettings>) => void;
  resetSettings: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggle: () => {},
  settings: defaultSettings,
  updateSettings: () => {},
  resetSettings: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const SETTINGS_KEY = "blog-theme-settings";

const loadSettings = (): ThemeSettings => {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) return sanitizeSettings(JSON.parse(raw));
  } catch {
    /* ignore corrupt storage */
  }
  return defaultSettings;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const getInitialTheme = (): ThemeMode => {
    const saved = localStorage.getItem("blog-theme") as ThemeMode | null;
    if (saved) return saved;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [settings, setSettings] = useState<ThemeSettings>(loadSettings);

  const toggle = () => {
    setTheme((prev) => {
      const next: ThemeMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("blog-theme", next);
      return next;
    });
  };

  const updateSettings = (patch: Partial<ThemeSettings>) => {
    setSettings((prev) => {
      const next = sanitizeSettings({ ...prev, ...patch });
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
      return next;
    });
  };

  const resetSettings = () => {
    localStorage.removeItem(SETTINGS_KEY);
    setSettings(defaultSettings);
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

  // Apply customization CSS variables
  useEffect(() => {
    applySettingsToDocument(settings, theme);
  }, [settings, theme]);

  const themeObject = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider
      value={{ theme, toggle, settings, updateSettings, resetSettings }}
    >
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};
