import React from "react";
import type { Scene } from "../schema";
import { colors, theme } from "../theme";
import { Frame, Heading, Reveal } from "./parts";

export const BronnenScene: React.FC<{ scene: Extract<Scene, { type: "bronnen" }> }> = ({ scene }) => (
  <Frame>
    <Heading size={theme.size.title - 12}>Bronnen</Heading>
    <Reveal delay={0.6} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {scene.bronnen.map((b, i) => (
        <p key={i} style={{ margin: 0, fontSize: theme.size.small - 4, lineHeight: 1.4, color: colors.inkMuted }}>
          {b}
        </p>
      ))}
    </Reveal>
  </Frame>
);
