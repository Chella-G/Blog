import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundAlt: string;
      surface: string;
      surfaceHover: string;
      primary: string;
      primaryHover: string;
      secondary: string;
      accent: string;
      accentAlt: string;
      text: string;
      textSecondary: string;
      muted: string;
      border: string;
      borderHover: string;
      success: string;
      error: string;
      warning: string;
      codeBlock: string;
    };
    shadows: {
      elevation: string;
      elevationHover: string;
      glass: string;
      glow: string;
      glowStrong: string;
    };
    gradients: {
      hero: string;
      heroOverlay: string;
      card: string;
      accent: string;
      navGlass: string;
    };
  }
}
