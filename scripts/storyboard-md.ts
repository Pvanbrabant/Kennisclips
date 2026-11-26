/**
 * Genereert een leesbare 04-storyboard.md uit 04-storyboard.json.
 * Gebruik: npm run storyboard-md -- <slug>
 */
import fs from "node:fs";
import path from "node:path";
import type { Scene } from "../src/schema";
import { sceneSeconden, totaalFrames, woordenInScene } from "../src/timing";
import { theme } from "../src/theme";
import { CLIPS, leesStoryboard } from "./lib";

const tekst = (s: Scene): string => {
  switch (s.type) {
    case "titel":
      return `**${s.titel}**${s.ondertitel ? `<br>${s.ondertitel}` : ""}`;
    case "vraag":
      return `**${s.vraag}**${s.context ? `<br>${s.context}` : ""}`;
    case "kernbegrip":
      return `**${s.begrip}**<br>${s.uitleg}`;
    case "opsomming":
      return `**${s.titel}**<br>${s.punten.map((p) => `• ${p}`).join("<br>")}`;
    case "vergelijking":
      return `**${s.titel}**<br>*${s.links.kop}:* ${s.links.punten.join("; ")}<br>*${s.rechts.kop}:* ${s.rechts.punten.join("; ")}`;
    case "stappen":
      return `**${s.titel}**<br>${s.stappen.map((p, i) => `${i + 1}. ${p}`).join("<br>")}`;
    case "citaat":
      return `“${s.citaat}”<br>— ${s.bron}`;
    case "voorbeeld":
      return `**${s.titel}**<br>${s.tekst}`;
    case "samenvatting":
      return s.punten.map((p) => `✓ ${p}`).join("<br>");
    case "reflectie":
      return `**${s.vraag}**`;
    case "bronnen":
      return s.bronnen.join("<br>");
  }
};

const slug = process.argv[2];
if (!slug) {
  console.error("Gebruik: npm run storyboard-md -- <slug>");
  process.exit(1);
}
const sb = leesStoryboard(slug);
const bestand = path.join(CLIPS, slug, "04-storyboard.md");
const status = fs.existsSync(bestand)
  ? (fs.readFileSync(bestand, "utf8").match(/^> Status: .*$/m)?.[0] ?? "> Status: concept")
  : "> Status: concept";
const sec = totaalFrames(sb, theme.video.fps, theme.transitionFrames) / theme.video.fps;

const regels = [
  `# Storyboard: ${sb.titel}`,
  "",
  status,
  "",
  `Gegenereerd uit \`04-storyboard.json\`; pas de tekst daar aan en voer \`npm run storyboard-md -- ${slug}\` opnieuw uit.`,
  "",
  `**Totale duur:** ${Math.floor(sec / 60)}:${String(Math.round(sec % 60)).padStart(2, "0")} · **Scènes:** ${sb.scenes.length}`,
  "",
  "| # | Type | Schermtekst | Woorden | Duur | Notitie |",
  "|---|------|-------------|---------|------|---------|",
  ...sb.scenes.map(
    (s, i) =>
      `| ${i + 1} | ${s.type} | ${tekst(s).replaceAll("|", "\\|")} | ${woordenInScene(s)} | ${sceneSeconden(s).toFixed(1)} s | ${s.notitie ?? ""} |`,
  ),
  "",
];
fs.writeFileSync(bestand, regels.join("\n"));
console.log(`✓ clips/${slug}/04-storyboard.md`);
