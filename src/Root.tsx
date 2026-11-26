import "./fonts";
import React from "react";
import { Composition } from "remotion";
import { berekenMetadata, KennisClip, kennisClipSchema } from "./KennisClip";
import { storyboards } from "./storyboards";
import { theme } from "./theme";

/** Eén compositie per clips/<slug>/04-storyboard.json; de id is de slug. */
export const RemotionRoot: React.FC = () => (
  <>
    {storyboards.map((sb) => (
      <Composition
        key={sb.slug}
        id={sb.slug}
        component={KennisClip}
        schema={kennisClipSchema}
        defaultProps={sb}
        calculateMetadata={berekenMetadata}
        durationInFrames={300}
        fps={theme.video.fps}
        width={theme.video.width}
        height={theme.video.height}
      />
    ))}
  </>
);
