import React from "react";
import type { Scene } from "../schema";
import { colors, theme } from "../theme";
import { Body, Frame, Label, Reveal } from "./parts";

export const KernbegripScene: React.FC<{ scene: Extract<Scene, { type: "kernbegrip" }> }> = ({ scene }) => (
  <Frame achtergrond="tint" center breedte={1400}>
    <Reveal>
      <Label color={colors.inkMuted}>Kernbegrip</Label>
    </Reveal>
    <Reveal delay={0.2} style={{ display: "flex", alignItems: "center", gap: 40 }}>
      <div style={{ width: 64, height: 64, borderRadius: 9999, backgroundColor: colors.magenta, flexShrink: 0 }} />
      <div style={{ fontSize: theme.size.display, fontWeight: theme.weight.bold, lineHeight: 1.05 }}>{scene.begrip}</div>
    </Reveal>
    <Reveal delay={0.8}>
      <Body>{scene.uitleg}</Body>
    </Reveal>
  </Frame>
);
