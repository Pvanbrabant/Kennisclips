import React from "react";
import type { Scene } from "../schema";
import { colors } from "../theme";
import { Body, Frame, Heading, Reveal, STAGGER } from "./parts";

export const OpsommingScene: React.FC<{ scene: Extract<Scene, { type: "opsomming" }> }> = ({ scene }) => (
  <Frame>
    <Heading>{scene.titel}</Heading>
    <div style={{ display: "flex", flexDirection: "column", gap: 30, marginTop: 8 }}>
      {scene.punten.map((punt, i) => (
        <Reveal key={i} delay={0.8 + i * STAGGER} style={{ display: "flex", gap: 32, alignItems: "baseline" }}>
          <div
            style={{
              flexShrink: 0,
              width: 22,
              height: 22,
              borderRadius: 9999,
              backgroundColor: colors.magenta,
              translate: "0px -6px",
            }}
          />
          <Body>{punt}</Body>
        </Reveal>
      ))}
    </div>
  </Frame>
);
