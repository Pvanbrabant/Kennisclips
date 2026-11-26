import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "800"],
  subsets: ["latin", "latin-ext"],
});

/**
 * Huisstijl van de kennisclips. Pas hier kleuren, lettertype en maten aan;
 * alle scènes lezen deze waarden.
 */
export const theme = {
  fontFamily,
  colors: {
    background: "#F6F4EF",
    surface: "#FFFFFF",
    text: "#1B1F3B",
    muted: "#4A4F6A",
    accent: "#C8462B",
    accentSoft: "#F3D9D1",
    secondary: "#2E6F95",
    secondarySoft: "#D6E6F0",
  },
  size: {
    headline: 96,
    title: 72,
    body: 52,
    small: 38,
  },
  safe: { x: 160, y: 120 },
  radius: 28,
  video: { width: 1920, height: 1080, fps: 30 },
  /** Duur van de overgang tussen scènes, in frames. */
  transitionFrames: 15,
} as const;
