import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FiSliders, FiRotateCcw } from "react-icons/fi";
import { useTheme } from "../theme/ThemeProvider";
import {
  colorPresets,
  fontOptions,
  fontScales,
  FontKey,
  FontScaleKey,
  hexToHsl,
  hslToHex,
} from "../theme/themeSettings";

const Wrap = styled.div`
  position: relative;
`;

const Trigger = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const Panel = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  width: 290px;
  padding: 1.1rem;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.elevationHover};
  font-family: ${({ theme }) => theme.fonts.base};
  color: ${({ theme }) => theme.colors.text};
  z-index: 1100;
  animation: pop 0.18s ease-out;

  @keyframes pop {
    from { opacity: 0; transform: translateY(-6px) scale(0.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  @media (max-width: 480px) {
    position: fixed;
    top: 60px;
    right: 0.75rem;
    left: 0.75rem;
    width: auto;
  }
`;

const PanelHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.9rem;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const ResetBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.muted};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Label = styled.label`
  display: block;
  margin: 0.9rem 0 0.4rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.muted};
`;

const Swatches = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Swatch = styled.button<{ $c: string; $active: boolean }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ $c }) => $c};
  cursor: pointer;
  border: 2px solid
    ${({ $active, theme }) => ($active ? theme.colors.text : "transparent")};
  outline: 2px solid ${({ theme }) => theme.colors.border};
  outline-offset: 1px;
  transition: transform 0.15s;

  &:hover {
    transform: scale(1.15);
  }
`;

const HueSlider = styled.input`
  width: 100%;
  height: 8px;
  border-radius: 8px;
  appearance: none;
  -webkit-appearance: none;
  background: linear-gradient(
    90deg,
    hsl(0, 70%, 55%), hsl(60, 70%, 55%), hsl(120, 70%, 50%),
    hsl(180, 70%, 50%), hsl(240, 70%, 60%), hsl(300, 70%, 55%), hsl(360, 70%, 55%)
  );
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

const Row = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;

const ColorInput = styled.input`
  width: 36px;
  height: 28px;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.45rem 0.6rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Segments = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  overflow: hidden;
`;

const Segment = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 0.4rem 0;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : "transparent"};
  color: ${({ $active, theme }) => ($active ? "#fff" : theme.colors.textSecondary)};
  transition: background 0.2s;
`;

export const ThemeCustomizer = () => {
  const { settings, updateSettings, resetSettings } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const hex = hslToHex(settings.primaryHue, settings.primarySat, settings.primaryLight);

  return (
    <Wrap ref={ref}>
      <Trigger
        id="theme-customizer-btn"
        onClick={() => setOpen((o) => !o)}
        aria-label="Customize theme"
        aria-expanded={open}
      >
        <FiSliders />
      </Trigger>
      {open && (
        <Panel role="dialog" aria-label="Theme customizer" id="theme-customizer-panel">
          <PanelHead>
            Customize
            <ResetBtn id="theme-reset-btn" onClick={resetSettings}>
              <FiRotateCcw /> Reset
            </ResetBtn>
          </PanelHead>

          <Label>Primary color</Label>
          <Swatches>
            {colorPresets.map((p) => (
              <Swatch
                key={p.name}
                title={p.name}
                aria-label={p.name}
                $c={`hsl(${p.hue}, ${p.sat}%, ${p.light}%)`}
                $active={
                  p.hue === settings.primaryHue &&
                  p.sat === settings.primarySat &&
                  p.light === settings.primaryLight
                }
                onClick={() =>
                  updateSettings({
                    primaryHue: p.hue,
                    primarySat: p.sat,
                    primaryLight: p.light,
                  })
                }
              />
            ))}
          </Swatches>

          <Label htmlFor="theme-hue">Hue</Label>
          <Row>
            <HueSlider
              id="theme-hue"
              type="range"
              min={0}
              max={360}
              value={settings.primaryHue}
              onChange={(e) => updateSettings({ primaryHue: Number(e.target.value) })}
            />
            <ColorInput
              id="theme-color-picker"
              type="color"
              value={hex}
              aria-label="Pick custom color"
              onChange={(e) => {
                const { h, s, l } = hexToHsl(e.target.value);
                updateSettings({ primaryHue: h, primarySat: s, primaryLight: l });
              }}
            />
          </Row>

          <Label htmlFor="theme-font">Font style</Label>
          <Select
            id="theme-font"
            value={settings.fontFamily}
            onChange={(e) => updateSettings({ fontFamily: e.target.value as FontKey })}
          >
            {(Object.keys(fontOptions) as FontKey[]).map((k) => (
              <option key={k} value={k}>
                {fontOptions[k].label}
              </option>
            ))}
          </Select>

          <Label>Text size</Label>
          <Segments>
            {(Object.keys(fontScales) as FontScaleKey[]).map((k) => (
              <Segment
                key={k}
                id={`theme-size-${k}`}
                $active={settings.fontScale === k}
                onClick={() => updateSettings({ fontScale: k })}
              >
                {fontScales[k].label}
              </Segment>
            ))}
          </Segments>
        </Panel>
      )}
    </Wrap>
  );
};
