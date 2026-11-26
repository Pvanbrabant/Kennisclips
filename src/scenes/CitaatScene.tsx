import React from "react";
import type { Scene } from "../schema";
import { colors, theme } from "../theme";
import { Frame, Reveal } from "./parts";

export const CitaatScene: React.FC<{ scene: Extract<Scene, { type: "citaat" }> }> = ({ scene }) => (
  <Frame achtergrond="tint" center breedte={1450}>
    <Reveal>
      <div style={{ fontSize: 220, lineHeight: 0.5, color: colors.magenta, fontWeight: theme.weight.bold, height: 90 }}>“</div>
    </Reveal>
    <Reveal delay={0.3}>
      <p style={{ margin: 0, fontSize: theme.size.title - 8, fontWeight: theme.weight.semibold, lineHeight: 1.28 }}>
        {scene.citaat}
      </p>
    </Reveal>
    <Reveal delay={1.2}>
      <p style={{ margin: 0, fontSize: theme.size.small, color: colors.inkMuted }}>— {scene.bron}</p>
    </Reveal>
  </Frame>
);
