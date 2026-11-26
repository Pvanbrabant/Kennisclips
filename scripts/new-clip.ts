/**
 * Maakt een nieuwe clipmap aan op basis van templates/.
 * Gebruik: npm run new-clip -- <slug>
 */
import fs from "node:fs";
import path from "node:path";
import { CLIPS, ROOT } from "./lib";

const slug = process.argv[2];
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error("Gebruik: npm run new-clip -- <slug>  (kleine letters, cijfers en koppeltekens)");
  process.exit(1);
}
const doel = path.join(CLIPS, slug);
if (fs.existsSync(doel)) {
  console.error(`clips/${slug} bestaat al.`);
  process.exit(1);
}
fs.mkdirSync(path.join(doel, "assets"), { recursive: true });
fs.writeFileSync(path.join(doel, "assets", ".gitkeep"), "");

const templates = path.join(ROOT, "templates");
for (const bestand of fs.readdirSync(templates)) {
  if (!/^0\d-.*\.md$/.test(bestand)) continue;
  const inhoud = fs.readFileSync(path.join(templates, bestand), "utf8").replaceAll("{{slug}}", slug);
  fs.writeFileSync(path.join(doel, bestand), inhoud);
  console.log(`✓ clips/${slug}/${bestand}`);
}
console.log(`\nKlaar. Het storyboard (04-storyboard.json) maakt de storyboarder aan in fase 4.`);
