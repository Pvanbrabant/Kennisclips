import type { Scene, Storyboard } from "./schema";

/** Leessnelheid in woorden per seconde en vaste extra tijd per scène. */
export const WOORDEN_PER_SECONDE = 2.5;
export const EXTRA_SECONDEN = 1.5;
export const MIN_SECONDEN = 3;
export const BRONNEN_SECONDEN = 6;
export const MAX_WOORDEN_PER_SCENE = 25;
export const MIN_TOTAAL_SECONDEN = 120;
export const MAX_TOTAAL_SECONDEN = 240;

const telWoorden = (...teksten: (string | undefined)[]) =>
  teksten
    .filter((t): t is string => Boolean(t))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

/** Aantal woorden dat de kijker in deze scène moet lezen. */
export const woordenInScene = (s: Scene): number => {
  switch (s.type) {
    case "titel":
      return telWoorden(s.titel, s.ondertitel);
    case "vraag":
      return telWoorden(s.vraag, s.context);
    case "kernbegrip":
      return telWoorden(s.begrip, s.uitleg);
    case "opsomming":
      return telWoorden(s.titel, ...s.punten);
    case "vergelijking":
      return telWoorden(s.titel, s.links.kop, ...s.links.punten, s.rechts.kop, ...s.rechts.punten);
    case "stappen":
      return telWoorden(s.titel, ...s.stappen);
    case "citaat":
      return telWoorden(s.citaat, s.bron);
    case "voorbeeld":
      return telWoorden(s.titel, s.tekst);
    case "samenvatting":
      return telWoorden("Samengevat", ...s.punten);
    case "reflectie":
      return telWoorden("Denk even na", s.vraag);
    case "bronnen":
      return 0;
  }
};

/** Minimale leestijd van een scène in seconden. */
export const minimaleSeconden = (s: Scene): number => {
  if (s.type === "bronnen") return BRONNEN_SECONDEN;
  return Math.max(MIN_SECONDEN, woordenInScene(s) / WOORDEN_PER_SECONDE + EXTRA_SECONDEN);
};

/** Effectieve zichtbare duur van een scène in seconden. */
export const sceneSeconden = (s: Scene): number => Math.max(minimaleSeconden(s), s.duur ?? 0);

/**
 * Duur van elke sequentie in frames. Elke scène behalve de laatste krijgt de
 * overgangsduur erbij, zodat de leestijd niet wegvalt in de overgang.
 */
export const sequentieFrames = (sb: Storyboard, fps: number, overgang: number): number[] =>
  sb.scenes.map(
    (s, i) => Math.ceil(sceneSeconden(s) * fps) + (i < sb.scenes.length - 1 ? overgang : 0),
  );

export const totaalFrames = (sb: Storyboard, fps: number, overgang: number): number =>
  sequentieFrames(sb, fps, overgang).reduce((a, b) => a + b, 0) - overgang * (sb.scenes.length - 1);
