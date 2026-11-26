import React from "react";
import type { Scene } from "../schema";
import { colors, theme } from "../theme";
import { Body, Frame, Label, Reveal } from "./parts";

export const VoorbeeldScene: React.FC<{ scene: Extract<Scene, { type: "voorbeeld" }> }> = ({ scene }) => (
  <Frame center>
    <Reveal
      style={{
        backgroundColor: colors.surfaceTint,
        borderRadius: theme.radius,
        padding: "56px 72px",
        display: "flex",
        flexDirection: "column",
        gap: 28,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ width: 22, height: 22, borderRadius: 9999, backgroundColor: colors.yellow }} />
        <Label color={colors.inkMuted}>Voorbeeld</Label>
      </div>
      <div style={{ fontSize: theme.size.title - 8, fontWeight: theme.weight.bold, lineHeight: 1.15 }}>{scene.titel}</div>
      <Reveal delay={0.8}>
        <Body>{scene.tekst}</Body>
      </Reveal>
    </Reveal>
  </Frame>
);
