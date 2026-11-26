/**
 * Huisstijl van de kennisclips, afgeleid van het design system "GenAI Kennishub"
 * (UCLL Hogeschool). Kleuren zijn de tokens uit dat systeem; maten zijn
 * opgeschaald voor video op 1920×1080.
 *
 * Kernregels uit het design system:
 * - navy als grond met tekst in surface; op lichte grond tekst in navy, bijschriften in inkMuted
 * - magenta is het accent: titelstreep, één cirkel per compositie; nooit tekst op navy
 * - yellow, sky en blue zijn vulkleuren voor cirkels, geen tekstkleur
 * - maximaal vijf kleuren per compositie
 * - elke scène toont een UCLL-logo, gekozen op basis van de achtergrond
 */
const fontFamily = 'Montserrat, "Helvetica Neue", Arial, sans-serif';

export const colors = {
  navy: "#003a7d",
  navyDeep: "#013173",
  blue: "#0152af",
  magenta: "#e4004f",
  yellow: "#fdb028",
  sky: "#86caf6",
  surface: "#ffffff",
  surfaceTint: "#eaf4fd",
  blush: "#f7dbdd",
  inkMuted: "#4a6283",
} as const;

export type Achtergrond = "donker" | "licht" | "tint";

export const theme = {
  fontFamily,
  colors,
  size: {
    display: 96,
    title: 72,
    body: 50,
    small: 36,
    label: 28,
  },
  weight: { regular: 400, semibold: 600, bold: 700 },
  /** space-16 (64px) maal 2,5 voor video; boven/onder iets minder. */
  safe: { x: 160, y: 96 },
  /** radius-md (8px) opgeschaald; vlakken en de titelstreep hebben rechte hoeken. */
  radius: 20,
  /** De magenta titelstreep: rechte hoeken, ±100×8 px op web → 200×14 px in video. */
  streep: { width: 200, height: 14 },
  /** Liggend logo linksboven; minstens 120px breed op scherm. */
  logo: { width: 240 },
  video: { width: 1920, height: 1080, fps: 30 },
  /** Duur van de overgang tussen scènes, in frames. */
  transitionFrames: 15,
} as const;
