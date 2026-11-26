import React from "react";
import type { Scene } from "../schema";
import { colors, theme } from "../theme";
import { Body, Frame, Heading, Reveal, STAGGER } from "./parts";

export const SamenvattingScene: React.FC<{ scene: Extract<Scene, { type: "samenvatting" }> }> = ({ scene }) => (
  <Frame>
    <Heading>Samengevat</Heading>
    <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 8 }}>
      {scene.punten.map((punt, i) => (
        <Reveal
          key={i}
          delay={0.8 + i * STAGGER}
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
            backgroundColor: colors.surfaceTint,
            borderRadius: theme.radius,
            padding: "26px 40px",
          }}
        >
          <div style={{ fontSize: 48, fontWeight: theme.weight.bold, color: colors.magenta }}>✓</div>
          <Body>{punt}</Body>
        </Reveal>
      ))}
    </div>
  </Frame>
);
