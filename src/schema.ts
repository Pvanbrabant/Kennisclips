import { z } from "zod";

const duur = z
  .number()
  .positive()
  .optional()
  .describe("Optioneel: duur in seconden. Wordt nooit korter dan de berekende leestijd.");
const notitie = z
  .string()
  .optional()
  .describe("Visuele aanwijzing of opmerking voor de producer; verschijnt niet in beeld.");

const basis = { duur, notitie };

export const sceneSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("titel"), titel: z.string(), ondertitel: z.string().optional(), ...basis }),
  z.object({ type: z.literal("vraag"), vraag: z.string(), context: z.string().optional(), ...basis }),
  z.object({ type: z.literal("kernbegrip"), begrip: z.string(), uitleg: z.string(), ...basis }),
  z.object({ type: z.literal("opsomming"), titel: z.string(), punten: z.array(z.string()).min(2).max(5), ...basis }),
  z.object({
    type: z.literal("vergelijking"),
    titel: z.string(),
    links: z.object({ kop: z.string(), punten: z.array(z.string()).min(1).max(4) }),
    rechts: z.object({ kop: z.string(), punten: z.array(z.string()).min(1).max(4) }),
    ...basis,
  }),
  z.object({ type: z.literal("stappen"), titel: z.string(), stappen: z.array(z.string()).min(2).max(5), ...basis }),
  z.object({ type: z.literal("citaat"), citaat: z.string(), bron: z.string(), ...basis }),
  z.object({ type: z.literal("voorbeeld"), titel: z.string(), tekst: z.string(), ...basis }),
  z.object({ type: z.literal("samenvatting"), punten: z.array(z.string()).min(2).max(4), ...basis }),
  z.object({ type: z.literal("reflectie"), vraag: z.string(), ...basis }),
  z.object({ type: z.literal("bronnen"), bronnen: z.array(z.string()).min(1).max(6), ...basis }),
]);

export const storyboardSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/, "Alleen kleine letters, cijfers en koppeltekens"),
  titel: z.string(),
  scenes: z.array(sceneSchema).min(3),
});

export type Scene = z.infer<typeof sceneSchema>;
export type SceneType = Scene["type"];
export type Storyboard = z.infer<typeof storyboardSchema>;
