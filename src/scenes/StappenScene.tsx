import React from "react";
import type { Scene } from "../schema";
import { colors, theme } from "../theme";
import { Body, Frame, Heading, Reveal, STAGGER } from "./parts";

export const StappenScene: React.FC<{ scene: Extract<Scene, { type: "stappen" }> }> = ({ scene }) => (
  <Frame>
    <Heading>{scene.titel}</Heading>
    <div style={{ display: "flex", flexDirection: "column", gap: 26, marginTop: 8 }}>
      {scene.stappen.map((stap, i) => (
        <Reveal key={i} delay={0.8 + i * STAGGER} style={{ display: "flex", gap: 36, alignItems: "center" }}>
          <div
            style={{
              flexShrink: 0,
              width: 80,
              height: 80,
              borderRadius: 9999,
              backgroundColor: colors.navy,
              color: colors.surface,
              fontSize: 40,
              fontWeight: theme.weight.bold,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {i + 1}
          </div>
          <Body>{stap}</Body>
        </Reveal>
      ))}
    </div>
  </Frame>
);
