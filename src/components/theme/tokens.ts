const s = (rem: number) => `calc(${rem}rem * var(--font-scale, 1))`;

export const fonts = {
  base: "var(--font-family-base)",
  mono: '"JetBrains Mono", "Fira Code", Consolas, monospace',
};

export const fontSizes = {
  xs: s(0.78),
  sm: s(0.88),
  md: s(0.95),
  base: s(1),
  lg: s(1.1),
  xl: s(1.25),
};
