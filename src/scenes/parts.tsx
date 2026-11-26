import React from "react";
import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { colors, theme, type Achtergrond } from "../theme";

const grond: Record<Achtergrond, string> = {
  donker: colors.navy,
  licht: colors.surface,
  tint: colors.surfaceTint,
};

/** Tekstkleur per achtergrond. */
export const inkt = (a: Achtergrond) => (a === "donker" ? colors.surface : colors.navy);

/** Het UCLL-logo dat bij de achtergrond hoort (wit op donker, rood op licht). */
export const Logo: React.FC<{ achtergrond: Achtergrond }> = ({ achtergrond }) => (
  <Img
    src={staticFile(achtergrond === "donker" ? "logo/ucll-wit.png" : "logo/ucll-rgb.png")}
    style={{ position: "absolute", left: theme.safe.x, top: theme.safe.y, width: theme.logo.width }}
  />
);

const kader = (frame: number, fps: number, start: number) => ({
  opacity: interpolate(frame, [start, start + 0.6 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  }),
  translate: interpolate(frame, [start, start + 0.6 * fps], ["0px 40px", "0px 0px"], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  }),
});

/** Laat inhoud na `delay` seconden opschuiven en invloeien. */
export const Reveal: React.FC<{
  delay?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ delay = 0, children, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return <div style={{ ...style, ...kader(frame, fps, delay * fps) }}>{children}</div>;
};

/**
 * Beeldmotief van de GenAI Kennishub: grote overlappende cirkels die rechts
 * buiten het kader lopen, met daarover een netwerk van punten en stippellijnen.
 * Enkel voor donkere scènes; de linkerhelft blijft rustig.
 */
export const Motief: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;
  const drift = (fase: number, amp: number) => `${Math.sin(t * 0.35 + fase) * amp}px ${Math.cos(t * 0.3 + fase) * amp}px`;
  const opkomst = (vertraging: number) =>
    interpolate(frame, [vertraging * fps, (vertraging + 1) * fps], [0.6, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    });

  const cirkels = [
    { kleur: colors.sky, r: 360, x: 1520, y: 840, fase: 0, delay: 0 },
    { kleur: colors.magenta, r: 300, x: 1640, y: 220, fase: 1.3, delay: 0.15 },
    { kleur: colors.yellow, r: 280, x: 1960, y: 600, fase: 2.4, delay: 0.3 },
  ];
  const punten: [number, number][] = [
    [1240, 380], [1380, 170], [1500, 470], [1700, 330], [1840, 140],
    [1300, 640], [1620, 700], [1800, 880], [1420, 960], [1220, 900],
  ];
  const lijnen: [number, number][] = [[0, 1], [0, 2], [2, 3], [3, 4], [2, 5], [5, 6], [6, 7], [6, 3], [5, 9], [8, 6]];
  const lijnOpacity = interpolate(frame, [0.6 * fps, 1.6 * fps], [0, 0.7], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {cirkels.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: c.x - c.r,
            top: c.y - c.r,
            width: c.r * 2,
            height: c.r * 2,
            borderRadius: 9999,
            backgroundColor: c.kleur,
            opacity: 0.92,
            translate: drift(c.fase, 14),
            scale: opkomst(c.delay),
          }}
        />
      ))}
      <svg width={1920} height={1080} style={{ position: "absolute", opacity: lijnOpacity }}>
        {lijnen.map(([a, b], i) => (
          <line
            key={i}
            x1={punten[a][0]}
            y1={punten[a][1]}
            x2={punten[b][0]}
            y2={punten[b][1]}
            stroke={colors.surface}
            strokeWidth={2.5}
            strokeDasharray="6 10"
          />
        ))}
        {punten.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 11 : 8} fill={i % 2 ? colors.sky : colors.surface} />
        ))}
      </svg>
    </AbsoluteFill>
  );
};

/**
 * Basis van elke scène: achtergrond, logo, veilige marges en (op donker) het motief.
 * Inhoud start onder het logo; `center` centreert ze verticaal.
 */
export const Frame: React.FC<{
  children: React.ReactNode;
  achtergrond?: Achtergrond;
  center?: boolean;
  motief?: boolean;
  /** Maximale breedte van de inhoud; op scènes met motief blijft de rechterkant vrij. */
  breedte?: number;
}> = ({ children, achtergrond = "licht", center, motief, breedte }) => (
  <AbsoluteFill style={{ backgroundColor: grond[achtergrond], fontFamily: theme.fontFamily, color: inkt(achtergrond) }}>
    {motief ? <Motief /> : null}
    <Logo achtergrond={achtergrond} />
    <div
      style={{
        position: "absolute",
        left: theme.safe.x,
        right: theme.safe.x,
        top: theme.safe.y + 150,
        bottom: theme.safe.y,
        display: "flex",
        flexDirection: "column",
        justifyContent: center ? "center" : "flex-start",
        gap: 44,
        maxWidth: breedte,
      }}
    >
      {children}
    </div>
  </AbsoluteFill>
);

/** De magenta streep onder een titel (rechte hoeken), die openschuift. */
export const Streep: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <div
      style={{
        height: theme.streep.height,
        backgroundColor: colors.magenta,
        width: interpolate(frame, [0.2 * fps, 1 * fps], [0, theme.streep.width], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      }}
    />
  );
};

/** Titel met de magenta streep eronder (afstand space-4, opgeschaald). */
export const Heading: React.FC<{ children: React.ReactNode; size?: number }> = ({ children, size }) => (
  <Reveal>
    <h1
      style={{
        margin: "0 0 32px",
        fontSize: size ?? theme.size.title,
        fontWeight: theme.weight.bold,
        lineHeight: 1.12,
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h1>
    <Streep />
  </Reveal>
);

export const Body: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <p style={{ margin: 0, fontSize: theme.size.body, lineHeight: 1.4, ...style }}>{children}</p>
);

/** Klein label in hoofdletters (token `label`). */
export const Label: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color }) => (
  <div
    style={{
      fontSize: theme.size.label,
      fontWeight: theme.weight.semibold,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color,
    }}
  >
    {children}
  </div>
);

/** Tijd tussen het verschijnen van opeenvolgende items, in seconden. */
export const STAGGER = 0.9;
