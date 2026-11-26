import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import React from "react";
import { CalculateMetadataFunction, useVideoConfig } from "remotion";
import { SceneRenderer } from "./scenes";
import { storyboardSchema, type Storyboard } from "./schema";
import { theme } from "./theme";
import { sequentieFrames, totaalFrames } from "./timing";

export const kennisClipSchema = storyboardSchema;

/** Rendert een volledig storyboard als opeenvolging van scènes met overgangen. */
export const KennisClip: React.FC<Storyboard> = (storyboard) => {
  const { fps } = useVideoConfig();
  const duren = sequentieFrames(storyboard, fps, theme.transitionFrames);

  return (
    <TransitionSeries>
      {storyboard.scenes.flatMap((scene, i) => {
        const items = [
          <TransitionSeries.Sequence key={`s${i}`} name={`${i + 1}. ${scene.type}`} durationInFrames={duren[i]}>
            <SceneRenderer scene={scene} />
          </TransitionSeries.Sequence>,
        ];
        if (i < storyboard.scenes.length - 1) {
          items.push(
            <TransitionSeries.Transition
              key={`t${i}`}
              presentation={fade()}
              timing={linearTiming({ durationInFrames: theme.transitionFrames })}
            />,
          );
        }
        return items;
      })}
    </TransitionSeries>
  );
};

/** De lengte van de video volgt uit de leestijd van de scènes. */
export const berekenMetadata: CalculateMetadataFunction<Storyboard> = ({ props }) => ({
  durationInFrames: totaalFrames(props, theme.video.fps, theme.transitionFrames),
  defaultOutName: props.slug,
});
