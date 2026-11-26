import React from "react";
import type { Scene } from "../schema";
import { colors, theme } from "../theme";
import { Frame, Label, Reveal, Streep } from "./parts";

export const ReflectieScene: React.FC<{ scene: Extract<Scene, { type: "reflectie" }> }> = ({ scene }) => (
  <Frame achtergrond="donker" motief center breedte={880}>
    <Reveal>
      <Label color={colors.sky}>Denk even na</Label>
    </Reveal>
    <Reveal delay={0.4}>
      <h1 style={{ margin: "0 0 36px", fontSize: theme.size.title + 8, fontWeight: theme.weight.bold, lineHeight: 1.12 }}>
        {scene.vraag}
      </h1>
      <Streep />
    </Reveal>
  </Frame>
);
