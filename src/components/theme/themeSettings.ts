export type FontKey = "mono" | "sans" | "serif" | "system";
export type FontScaleKey = "sm" | "md" | "lg" | "xl";

export interface ThemeSettings {
  primaryHue: number;
  primarySat: number;
  primaryLight: number;
  fontFamily: FontKey;
  fontScale: FontScaleKey;
}

export const defaultSettings: ThemeSettings = {
  primaryHue: 160,
  primarySat: 60,
  primaryLight: 45,
  fontFamily: "mono",
  fontScale: "md",
};

export const colorPresets: { name: string; hue: number; sat: number; light: number }[] = [
  { name: "Emerald", hue: 160, sat: 60, light: 45 },
  { name: "Ocean", hue: 210, sat: 75, light: 50 },
  { name: "Violet", hue: 270, sat: 60, light: 58 },
  { name: "Rose", hue: 340, sat: 70, light: 55 },
  { name: "Sunset", hue: 22, sat: 85, light: 52 },
  { name: "Amber", hue: 45, sat: 90, light: 48 },
];

export const fontOptions: Record<FontKey, { label: string; stack: string }> = {
  mono: {
    label: "JetBrains Mono",
    stack: '"JetBrains Mono", "Fira Code", "Cascadia Code", Consolas, monospace',
  },
  sans: { label: "Inter", stack: '"Inter", "Segoe UI", Roboto, sans-serif' },
  serif: { label: "Merriweather", stack: '"Merriweather", Georgia, "Times New Roman", serif' },
  system: {
    label: "System UI",
    stack: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  },
};

export const fontScales: Record<FontScaleKey, { label: string; value: number }> = {
  sm: { label: "S", value: 0.9 },
  md: { label: "M", value: 1 },
  lg: { label: "L", value: 1.1 },
  xl: { label: "XL", value: 1.25 },
};

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export const sanitizeSettings = (s: Partial<ThemeSettings>): ThemeSettings => {
  const d = defaultSettings;
  return {
    primaryHue: clamp(Number(s.primaryHue ?? d.primaryHue), 0, 360),
    primarySat: clamp(Number(s.primarySat ?? d.primarySat), 30, 100),
    primaryLight: clamp(Number(s.primaryLight ?? d.primaryLight), 30, 60),
    fontFamily: s.fontFamily && s.fontFamily in fontOptions ? s.fontFamily : d.fontFamily,
    fontScale: s.fontScale && s.fontScale in fontScales ? s.fontScale : d.fontScale,
  };
};

export const hexToHsl = (hex: string): { h: number; s: number; l: number } => {
  const m = hex.replace("#", "");
  const r = parseInt(m.slice(0, 2), 16) / 255;
  const g = parseInt(m.slice(2, 4), 16) / 255;
  const b = parseInt(m.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  let h = 0;
  let s = 0;
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
};

export const hslToHex = (h: number, s: number, l: number): string => {
  const sn = s / 100;
  const ln = l / 100;
  const a = sn * Math.min(ln, 1 - ln);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const c = ln - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * c)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

/** Apply settings as CSS variables on <html>. Light mode gets a slightly darker primary. */
export const applySettingsToDocument = (s: ThemeSettings, mode: "light" | "dark") => {
  const root = document.documentElement.style;
  const light = mode === "light" ? Math.max(30, s.primaryLight - 7) : s.primaryLight;
  root.setProperty("--primary-h", String(s.primaryHue));
  root.setProperty("--primary-s", `${s.primarySat}%`);
  root.setProperty("--primary-l", `${light}%`);
  root.setProperty("--primary-l-hover", `${Math.max(20, light - 7)}%`);
  root.setProperty("--secondary-h", String((s.primaryHue + 110) % 360));
  root.setProperty("--accent-alt-h", String((s.primaryHue + 20) % 360));
  root.setProperty("--font-family-base", fontOptions[s.fontFamily].stack);
  root.setProperty("--font-scale", String(fontScales[s.fontScale].value));
};
