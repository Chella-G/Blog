export const lightTheme = {
  colors: {
    background: "hsl(210, 20%, 97%)",
    backgroundAlt: "hsl(210, 15%, 94%)",
    surface: "hsla(0, 0%, 100%, 0.85)",
    surfaceHover: "hsla(0, 0%, 100%, 0.95)",
    primary: "hsl(160, 55%, 38%)",         // Green accent (slightly darker for light bg)
    primaryHover: "hsl(160, 55%, 32%)",
    secondary: "hsl(270, 50%, 55%)",        // Purple
    accent: "hsl(35, 85%, 45%)",            // Golden
    accentAlt: "hsl(180, 50%, 38%)",        // Teal
    text: "hsl(220, 25%, 12%)",
    textSecondary: "hsl(220, 12%, 40%)",
    muted: "hsl(220, 10%, 55%)",
    border: "hsla(220, 15%, 85%, 0.8)",
    borderHover: "hsla(160, 55%, 38%, 0.3)",
    success: "hsl(145, 60%, 38%)",
    error: "hsl(0, 65%, 50%)",
    warning: "hsl(40, 90%, 48%)",
    codeBlock: "hsl(220, 15%, 95%)",
  },
  shadows: {
    elevation: "0 4px 16px rgba(0, 0, 0, 0.06)",
    elevationHover: "0 12px 32px rgba(0, 0, 0, 0.12)",
    glass: "0 8px 32px rgba(0, 0, 0, 0.05)",
    glow: "0 0 20px hsla(160, 55%, 38%, 0.1)",
    glowStrong: "0 0 40px hsla(160, 55%, 38%, 0.15)",
  },
  gradients: {
    hero: "linear-gradient(135deg, hsl(210, 20%, 97%) 0%, hsl(220, 18%, 93%) 50%, hsl(210, 20%, 97%) 100%)",
    heroOverlay: "radial-gradient(circle at 30% 40%, hsla(160, 55%, 38%, 0.06) 0%, transparent 50%), radial-gradient(circle at 70% 60%, hsla(270, 50%, 55%, 0.04) 0%, transparent 45%)",
    card: "linear-gradient(145deg, hsla(0, 0%, 100%, 0.95), hsla(210, 15%, 97%, 0.7))",
    accent: "linear-gradient(135deg, hsl(160, 55%, 38%) 0%, hsl(180, 50%, 38%) 100%)",
    navGlass: "hsla(0, 0%, 100%, 0.75)",
  },
};
