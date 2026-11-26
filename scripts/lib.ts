import fs from "node:fs";
import path from "node:path";
import { storyboardSchema, type Storyboard } from "../src/schema";

export const ROOT = path.resolve(__dirname, "..");
export const CLIPS = path.join(ROOT, "clips");

/** Leest en valideert clips/<slug>/04-storyboard.json. */
export const leesStoryboard = (slug: string): Storyboard => {
  const bestand = path.join(CLIPS, slug, "04-storyboard.json");
  if (!fs.existsSync(bestand)) throw new Error(`Geen storyboard gevonden: ${bestand}`);
  return storyboardSchema.parse(JSON.parse(fs.readFileSync(bestand, "utf8")));
};

export const alleSlugs = (): string[] =>
  fs.existsSync(CLIPS)
    ? fs
        .readdirSync(CLIPS)
        .filter((d) => fs.existsSync(path.join(CLIPS, d, "04-storyboard.json")))
        .sort()
    : [];

/** Gebruik een vooraf geïnstalleerde Chrome als die via CHROME_PATH is opgegeven. */
export const browserExecutable = process.env.CHROME_PATH || null;
