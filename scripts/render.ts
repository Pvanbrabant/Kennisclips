/**
 * Rendert een clip naar out/<slug>/<slug>.mp4 en een thumbnail (titelscène).
 * Gebruik: npm run render -- <slug>
 */
import { bundle } from "@remotion/bundler";
import { renderMedia, renderStill, selectComposition } from "@remotion/renderer";
import path from "node:path";
import { theme } from "../src/theme";
import { sequentieFrames, totaalFrames } from "../src/timing";
import { browserExecutable, leesStoryboard, ROOT } from "./lib";

const main = async () => {
  const slug = process.argv[2];
  if (!slug) throw new Error("Gebruik: npm run render -- <slug>");
  const sb = leesStoryboard(slug);
  const serveUrl = await bundle({ entryPoint: path.join(ROOT, "src/index.ts") });
  const composition = await selectComposition({ serveUrl, id: slug, browserExecutable });
  const uit = path.join(ROOT, "out", slug);

  const thumbFrame = sequentieFrames(sb, theme.video.fps, theme.transitionFrames)[0] - theme.transitionFrames - 1;
  await renderStill({ composition, serveUrl, output: path.join(uit, "thumbnail.png"), frame: thumbFrame, browserExecutable });

  let laatste = -1;
  await renderMedia({
    composition,
    serveUrl,
    codec: "h264",
    outputLocation: path.join(uit, `${slug}.mp4`),
    browserExecutable,
    onProgress: ({ progress }) => {
      const pct = Math.floor(progress * 10) * 10;
      if (pct !== laatste) {
        laatste = pct;
        console.log(`  ${pct}%`);
      }
    },
  });
  const sec = totaalFrames(sb, theme.video.fps, theme.transitionFrames) / theme.video.fps;
  console.log(`✓ out/${slug}/${slug}.mp4 (${sec.toFixed(1)} s) en out/${slug}/thumbnail.png`);
};

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
