import React from "react";
import type { Scene } from "../schema";
import { colors, theme } from "../theme";
import { Frame, Heading, Reveal, STAGGER } from "./parts";

type Kolom = { kop: string; punten: string[] };

const KolomKaart: React.FC<{ kolom: Kolom; vul: string; delay: number }> = ({ kolom, vul, delay }) => (
  <Reveal
    delay={delay}
    style={{
      flex: 1,
      backgroundColor: colors.surfaceTint,
      borderRadius: theme.radius,
      padding: "40px 48px",
      display: "flex",
      flexDirection: "column",
      gap: 24,
    }}
  >
    <div
      style={{
        alignSelf: "flex-start",
        padding: "10px 28px",
        borderRadius: 9999,
        backgroundColor: vul,
        color: colors.navy,
        fontSize: theme.size.small,
        fontWeight: theme.weight.bold,
      }}
    >
      {kolom.kop}
    </div>
    {kolom.punten.map((p, i) => (
      <Reveal key={i} delay={delay + 0.5 + i * STAGGER}>
        <p style={{ margin: 0, fontSize: theme.size.body - 6, lineHeight: 1.35 }}>{p}</p>
      </Reveal>
    ))}
  </Reveal>
);

export const VergelijkingScene: React.FC<{ scene: Extract<Scene, { type: "vergelijking" }> }> = ({ scene }) => (
  <Frame>
    <Heading>{scene.titel}</Heading>
    <div style={{ display: "flex", gap: 56, alignItems: "flex-start" }}>
      <KolomKaart kolom={scene.links} vul={colors.yellow} delay={0.8} />
      <KolomKaart kolom={scene.rechts} vul={colors.sky} delay={0.8 + (scene.links.punten.length + 1) * STAGGER} />
    </div>
  </Frame>
);
