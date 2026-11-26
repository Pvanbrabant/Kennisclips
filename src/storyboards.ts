import { storyboardSchema, type Storyboard } from "./schema";

declare const require: {
  context(
    dir: string,
    recursive: boolean,
    pattern: RegExp,
  ): { keys(): string[]; (id: string): unknown };
};

/** Alle storyboards in clips/<slug>/04-storyboard.json, gevalideerd. */
const ctx = require.context("../clips", true, /04-storyboard\.json$/);

export const storyboards: Storyboard[] = ctx
  .keys()
  .filter((k) => k.startsWith("./"))
  .map((k) => {
    const resultaat = storyboardSchema.safeParse(ctx(k));
    if (!resultaat.success) {
      throw new Error(`Ongeldig storyboard ${k}: ${resultaat.error.message}`);
    }
    return resultaat.data;
  });
