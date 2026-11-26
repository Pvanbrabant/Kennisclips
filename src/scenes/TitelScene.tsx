import React from "react";
import type { Scene } from "../schema";
import { colors, theme } from "../theme";
import { Frame, Reveal, Streep } from "./parts";

export const TitelScene: React.FC<{ scene: Extract<Scene, { type: "titel" }> }> = ({ scene }) => (
  <Frame achtergrond="donker" motief center breedte={880}>
    <Reveal>
      <h1
        style={{
          margin: "0 0 36px",
          fontSize: theme.size.display,
          fontWeight: theme.weight.bold,
          lineHeight: 1.06,
          letterSpacing: "-0.01em",
        }}
      >
        {scene.titel}
      </h1>
      <Streep />
    </Reveal>
    {scene.ondertitel ? (
      <Reveal delay={0.6}>
        <p style={{ margin: 0, fontSize: theme.size.body, color: colors.surface, opacity: 0.9 }}>{scene.ondertitel}</p>
      </Reveal>
    ) : null}
  </Frame>
);
