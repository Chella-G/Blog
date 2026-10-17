import { fonts, fontSizes } from "./tokens";

const P = "var(--primary-h), var(--primary-s), var(--primary-l)";

export const darkTheme = {
  fonts,
  fontSizes,
  colors: {
    background: "hsl(220, 25%, 8%)",
    backgroundAlt: "hsl(220, 22%, 11%)",
    surface: "hsla(220, 22%, 14%, 0.85)",
    surfaceHover: "hsla(220, 22%, 18%, 0.9)",
    primary: `hsl(${P})`,                  // Customizable primary
    primaryHover: "hsl(var(--primary-h), var(--primary-s), var(--primary-l-hover))",
    secondary: "hsl(var(--secondary-h), 55%, 60%)",
    accent: "hsl(45, 90%, 55%)",           // Portfolio golden/yellow badges
    accentAlt: "hsl(var(--accent-alt-h), 55%, 50%)",
    text: "hsl(0, 0%, 93%)",
    textSecondary: "hsla(220, 23%, 91%, 1.00)",
    muted: "hsl(220, 22%, 87%)",
    border: "hsla(220, 15%, 25%, 0.6)",
    borderHover: `hsla(${P}, 0.3)`,
    success: "hsl(145, 55%, 50%)",
    error: "hsl(0, 60%, 60%)",
    warning: "hsl(40, 85%, 55%)",
    codeBlock: "hsl(220, 25%, 10%)",
  },
  shadows: {
    elevation: "0 4px 16px rgba(0, 0, 0, 0.35)",
    elevationHover: "0 12px 32px rgba(0, 0, 0, 0.5)",
    glass: "0 8px 32px rgba(0, 0, 0, 0.3)",
    glow: `0 0 20px hsla(${P}, 0.15)`,
    glowStrong: `0 0 40px hsla(${P}, 0.25)`,
  },
  gradients: {
    hero: "linear-gradient(135deg, hsl(220, 25%, 8%) 0%, hsl(240, 20%, 14%) 50%, hsl(220, 25%, 8%) 100%)",
    heroOverlay: `radial-gradient(circle at 30% 40%, hsla(${P}, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, hsla(var(--secondary-h), 55%, 60%, 0.06) 0%, transparent 45%)`,
    card: "linear-gradient(145deg, hsla(220, 22%, 16%, 0.9), hsla(220, 22%, 12%, 0.6))",
    accent: `linear-gradient(135deg, hsl(${P}) 0%, hsl(var(--accent-alt-h), 55%, 50%) 100%)`,
    navGlass: "hsla(220, 22%, 11%, 0.75)",
  },
};
