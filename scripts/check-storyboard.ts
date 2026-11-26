/**
 * Controleert storyboards: schema, woorden per scène en totale duur.
 * Gebruik: npm run check            (alle clips)
 *          npm run check -- <slug>  (één clip)
 * Stopt met foutcode 1 bij fouten; waarschuwingen laten de controle slagen.
 */
import {
  MAX_TOTAAL_SECONDEN,
  MAX_WOORDEN_PER_SCENE,
  MIN_TOTAAL_SECONDEN,
  sceneSeconden,
  totaalFrames,
  woordenInScene,
} from "../src/timing";
import { theme } from "../src/theme";
import { alleSlugs, leesStoryboard } from "./lib";

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`;

let fouten = 0;
const slugs = process.argv[2] ? [process.argv[2]] : alleSlugs();
if (slugs.length === 0) console.log("Geen storyboards gevonden in clips/.");

for (const slug of slugs) {
  console.log(`\n▶ ${slug}`);
  let sb;
  try {
    sb = leesStoryboard(slug);
  } catch (e) {
    console.log(`  ✗ ${e instanceof Error ? e.message : e}`);
    fouten++;
    continue;
  }
  if (sb.slug !== slug) {
    console.log(`  ✗ slug in JSON ("${sb.slug}") komt niet overeen met de map ("${slug}")`);
    fouten++;
  }
  sb.scenes.forEach((s, i) => {
    const w = woordenInScene(s);
    const te_veel = s.type !== "bronnen" && w > MAX_WOORDEN_PER_SCENE;
    console.log(
      `  ${String(i + 1).padStart(2)}. ${s.type.padEnd(13)} ${String(w).padStart(3)} woorden  ${sceneSeconden(s).toFixed(1).padStart(5)} s${te_veel ? `  ⚠ meer dan ${MAX_WOORDEN_PER_SCENE} woorden: splits de scène` : ""}`,
    );
  });
  if (sb.scenes[0].type !== "titel") console.log("  ⚠ eerste scène is geen titel");
  if (sb.scenes[sb.scenes.length - 1].type !== "bronnen") console.log("  ⚠ laatste scène is geen bronnen-scène");

  const sec = totaalFrames(sb, theme.video.fps, theme.transitionFrames) / theme.video.fps;
  const isDemo = slug.startsWith("demo-");
  const buiten = sec < MIN_TOTAAL_SECONDEN || sec > MAX_TOTAAL_SECONDEN;
  console.log(
    `  Totale duur: ${fmt(sec)} (doel ${fmt(MIN_TOTAAL_SECONDEN)}–${fmt(MAX_TOTAAL_SECONDEN)})${buiten ? (isDemo ? "  (demo: niet gecontroleerd)" : "  ✗ buiten het doel") : "  ✓"}`,
  );
  if (buiten && !isDemo) fouten++;
}

if (fouten > 0) {
  console.log(`\n${fouten} fout(en) gevonden.`);
  process.exit(1);
}
console.log("\nAlles in orde.");
