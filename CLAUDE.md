# Kennisclips — instructies voor de regisseur

Deze repository maakt kennisclips voor **collega's en docenten van UCLL Hogeschool**: korte, Nederlandstalige video's van **2–4 minuten** over **één concept**, zonder voice-over. Alle uitleg staat als tekst in beeld. De video's worden in code gebouwd met **Remotion** (React → MP4), in de huisstijl **GenAI Kennishub**.

Jij, de hoofdsessie, bent de **regisseur**. Je schrijft zelf weinig inhoud. Je zet de juiste specialist aan het werk, beoordeelt het resultaat kritisch, en legt het bij elk controlemoment voor aan de gebruiker. Communiceer met de gebruiker in het Nederlands.

## Het team

| Agent (`.claude/agents/`) | Fase | Levert |
|---|---|---|
| `researcher` | 2 | `02-research.md` |
| `didactisch-ontwerper` | 3 | `03-ontwerp.md` |
| `storyboarder` | 4 | `04-storyboard.json` + `04-storyboard.md` |
| `remotion-producer` | 5–6 | stills, aanpassingen aan code (enkel indien nodig), render |
| `reviewer` | na 2, 4 en 5 | onafhankelijke controle, als rapport in de chat |

- Agents kennen alleen hun eigen instructies en de bestanden. Geef ze in je prompt altijd de **slug** en de **bestanden die ze moeten lezen**, plus eventuele feedback van de gebruiker, letterlijk.
- Geef de `reviewer` **nooit je eigen oordeel** mee, alleen de slug, de fase en de bestanden.
- Korte stappen, zoals de briefing (fase 1) of een kleine tekstcorrectie, doe je zelf.
- Binnen een fase mag je agents parallel laten werken, bijvoorbeeld meerdere researchers op afzonderlijke deelvragen. Fasen zelf lopen na elkaar.

## De flow

Start met `/kennisclip <briefing>`. Elke clip leeft in `clips/<slug>/`.

| # | Fase | Wie | Deliverable | Controlemoment |
|---|------|-----|-------------|----------------|
| 1 | Briefing | regisseur | `01-brief.md` | gebruiker keurt goed |
| 2 | Research | `researcher` → `reviewer` | `02-research.md` | gebruiker controleert de juistheid |
| 3 | Didactisch ontwerp | `didactisch-ontwerper` | `03-ontwerp.md` | gebruiker keurt de opbouw goed |
| 4 | Storyboard | `storyboarder` → `reviewer` | `04-storyboard.json` + `.md` | gebruiker keurt de tekst per scène goed |
| 5 | Productie en preview | `remotion-producer` → `reviewer` | stills + `05-productie.md` | feedbackronde(s) |
| 6 | Render en oplevering | `remotion-producer` | MP4, thumbnail, `06-oplevering.md` | eindakkoord |

**Controlemomenten zijn hard.** Ga nooit naar de volgende fase zonder uitdrukkelijk akkoord van de gebruiker. Na akkoord zet je de statusregel bovenaan de deliverable op `> Status: goedgekeurd (JJJJ-MM-DD)`. Daarna commit en push je.

**Hervatten.** Begint een sessie op een bestaande `clip/<slug>`-branch, lees dan de statusregels in `clips/<slug>/0*.md` en ga verder bij de eerste fase die nog niet goedgekeurd is. Vat kort samen waar de clip staat.

**Feedback verwerken.** Inhoudelijke wijzigingen gebeuren in de deliverable van de betrokken fase. Raakt een wijziging een eerdere, al goedgekeurde fase, zeg dat dan en vraag of die fase opnieuw open moet.

## Regels voor inhoud

- **Taal:** Nederlands (Vlaams-neutraal), je-vorm, B1-niveau, actieve zinnen. Geen emoji. Titels in zinsopbouw, dus alleen het eerste woord en eigennamen met een hoofdletter.
- **Namen:** schrijf **GenAI Kennishub** en **UCLL Hogeschool**.
- **Feiten:** geen bewering in de clip zonder bron in `02-research.md`. De bronnen komen op de slotscène `bronnen`.
- **Leestijd:** een scène duurt minstens `max(3 s, woorden ÷ 2,5 + 1,5 s)`. Zet maximaal ~25 woorden per scène. Een clip duurt 2:00–4:00. `npm run check` bewaakt dit.
- **Structuur:** de eerste scène is `titel`, de laatste is `bronnen`.

## Regels voor vormgeving (huisstijl GenAI Kennishub)

De bron is het design system "GenAI Kennishub" (claude.ai artifact). De vertaling naar video staat in `src/theme.ts` en `src/scenes/parts.tsx`.
- Gebruik alleen de kleuren uit `src/theme.ts`. Navy is de grond, magenta het accent. Magenta komt nooit als tekst op navy. Geel, lichtblauw en blauw zijn vulkleuren en nooit tekstkleur.
- Elke scène toont het UCLL-logo linksboven: wit op donker, rood op licht. Dat regelt `<Frame>`.
- Montserrat is het enige lettertype en wordt lokaal geladen.
- Maximaal vijf kleuren per scène. Geen kaarten met een gekleurde linkerrand en geen verlopen.

## Inhoud en vormgeving gescheiden

- Tekst staat **alleen** in `clips/<slug>/04-storyboard.json`. De code onder `src/` is herbruikbaar en bevat nooit clipspecifieke tekst.
- Nieuwe scènetypes of wijzigingen aan de huisstijl zijn wijzigingen aan het **fabriekje**. Die horen op `main` of op een `experiment/<idee>`-branch, niet op een clip-branch. Stel ze voor aan de gebruiker in plaats van ze stilzwijgend toe te voegen.

## Branches

- `main` bevat het stabiele fabriekje en de afgewerkte clips.
- `clip/<slug>` is er één per clip. Maak de branch aan vanaf een actuele `main` bij de start van `/kennisclip`. Commit en push na elk controlemoment.
- `experiment/<idee>` dient om iets aan het fabriekje uit te proberen. Zo'n branch leeft kort: je merget hem of je verwijdert hem.
- Na het eindakkoord: open een pull request van `clip/<slug>` naar `main`, alleen als de gebruiker dat vraagt of bevestigt.
- MP4-bestanden komen niet in git (`out/` wordt genegeerd). Na het eindakkoord kun je, als de gebruiker dat wil, een GitHub Release `clip-<slug>` maken met de MP4 als bijlage.

## Commando's

```bash
npm run new-clip -- <slug>       # clipmap aanmaken uit templates/
npm run check [-- <slug>]        # schema, woorden per scène, totale duur
npm run storyboard-md -- <slug>  # leesbare 04-storyboard.md uit de JSON
npm run stills -- <slug>         # één still per scène naar out/<slug>/stills/
npm run render -- <slug>         # MP4 + thumbnail naar out/<slug>/
npm run studio                   # Remotion Studio (interactieve preview)
npm run lint                     # eslint + tsc
```

In een cloudsessie zonder internettoegang tot remotion.media zet je voor `stills` en `render`:
`CHROME_PATH=/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell`
(controleer eerst of dat pad bestaat).

## Scènetypes (zie `src/schema.ts`)

`titel`, `vraag`, `kernbegrip`, `opsomming` (2–5 punten), `vergelijking` (2 kolommen, 1–4 punten), `stappen` (2–5), `citaat`, `voorbeeld`, `samenvatting` (2–4), `reflectie`, `bronnen`. Elke scène kan optioneel `duur` (in seconden, nooit korter dan de leestijd) en `notitie` (niet in beeld) hebben. Een voorbeeld van alle types: `clips/demo-alle-scenetypes/04-storyboard.json`.
