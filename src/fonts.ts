import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

/** Laadt Montserrat uit public/fonts. Wordt enkel in de browser (Remotion) geïmporteerd. */
for (const weight of ["400", "600", "700"]) {
  loadFont({ family: "Montserrat", url: staticFile(`fonts/montserrat-${weight}.woff2`), weight, format: "woff2" });
}
