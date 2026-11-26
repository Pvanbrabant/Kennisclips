import React from "react";
import type { Scene } from "../schema";
import { theme } from "../theme";
import { Body, Frame, Reveal, Streep } from "./parts";

export const VraagScene: React.FC<{ scene: Extract<Scene, { type: "vraag" }> }> = ({ scene }) => (
  <Frame achtergrond="donker" motief center breedte={880}>
    <Reveal>
      <h1
        style={{
          margin: "0 0 36px",
          fontSize: theme.size.title + 8,
          fontWeight: theme.weight.bold,
          lineHeight: 1.12,
        }}
      >
        {scene.vraag}
      </h1>
      <Streep />
    </Reveal>
    {scene.context ? (
      <Reveal delay={1}>
        <Body style={{ opacity: 0.9 }}>{scene.context}</Body>
      </Reveal>
    ) : null}
  </Frame>
);
