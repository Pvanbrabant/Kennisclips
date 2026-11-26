/**
 * Rendert per scène één still (op het einde van de scène, als alles zichtbaar is)
 * naar out/<slug>/stills/. Gebruik: npm run stills -- <slug>
 */
import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition } from "@remotion/renderer";
import path from "node:path";
import { theme } from "../src/theme";
import { sequentieFrames } from "../src/timing";
import { browserExecutable, leesStoryboard, ROOT } from "./lib";

const main = async () => {
  const slug = process.argv[2];
  if (!slug) throw new Error("Gebruik: npm run stills -- <slug>");
  const sb = leesStoryboard(slug);
  const serveUrl = await bundle({ entryPoint: path.join(ROOT, "src/index.ts") });
  const composition = await selectComposition({ serveUrl, id: slug, browserExecutable });

  const T = theme.transitionFrames;
  const duren = sequentieFrames(sb, theme.video.fps, T);
  let start = 0;
  for (let i = 0; i < sb.scenes.length; i++) {
    // Neem het laatste frame vóór de uitgaande overgang begint.
    const eind = start + duren[i] - (i < sb.scenes.length - 1 ? T : 0) - 1;
    const output = path.join(ROOT, "out", slug, "stills", `${String(i + 1).padStart(2, "0")}-${sb.scenes[i].type}.png`);
    await renderStill({ composition, serveUrl, output, frame: eind, browserExecutable });
    console.log(`✓ ${path.relative(ROOT, output)} (frame ${eind})`);
    start += duren[i] - T;
  }
};

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
