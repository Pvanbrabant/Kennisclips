# Kennisclips

Korte uitlegvideo's (2–4 min) voor collega's en docenten van **UCLL Hogeschool**, in de huisstijl **GenAI Kennishub**. De video's hebben geen voice-over: alle uitleg staat als tekst in beeld. Ze worden in code gemaakt met [Remotion](https://www.remotion.dev/).

## Zo werkt het

Open een Claude Code-sessie op deze repository en typ:

```
/kennisclip <je briefing: onderwerp, voor wie, waarom, wat moeten ze onthouden>
```

De **regisseur** (de hoofdsessie) maakt een branch `clip/<slug>` aan en leidt de clip door zes fasen. Na elke fase volgt een controlemoment waarop jij goedkeurt:

1. **Briefing**: `01-brief.md`
2. **Research**: `02-research.md` (agent `researcher`, gecontroleerd door `reviewer`)
3. **Didactisch ontwerp**: `03-ontwerp.md` (agent `didactisch-ontwerper`)
4. **Storyboard**: `04-storyboard.json` en `.md` (agent `storyboarder`, gecontroleerd door `reviewer`)
5. **Productie en preview**: stills per scène (agent `remotion-producer`, gecontroleerd door `reviewer`)
6. **Render en oplevering**: MP4, thumbnail en `06-oplevering.md`

Elke clip krijgt een map `clips/<slug>/`. Onderbreek je het werk, dan hervat `/kennisclip <slug>` waar je gebleven was. De volledige regels staan in [`CLAUDE.md`](CLAUDE.md); de agents staan in [`.claude/agents/`](.claude/agents).

## Structuur

```
CLAUDE.md                 regisseur: flow, controlemomenten, inhoud- en huisstijlregels
.claude/agents/           researcher, didactisch-ontwerper, storyboarder, remotion-producer, reviewer
.claude/skills/kennisclip het commando /kennisclip
templates/                sjablonen voor de deliverables van elke fase
clips/<slug>/             één map per clip (deliverables + assets/)
src/                      Remotion: scènetypes, huisstijl (theme.ts), storyboard-schema, timing
scripts/                  new-clip, check, storyboard-md, stills, render
public/                   Montserrat (OFL) en UCLL-logo's
```

## Zelf commando's uitvoeren

```bash
npm install
npm run studio                    # preview in Remotion Studio
npm run new-clip -- <slug>        # nieuwe clipmap
npm run check                     # storyboards controleren (schema, leestijd, duur)
npm run storyboard-md -- <slug>   # leesbare versie van het storyboard
npm run stills -- <slug>          # één still per scène
npm run render -- <slug>          # MP4 + thumbnail in out/<slug>/
```

Remotion downloadt bij de eerste render zelf een headless Chrome. Lukt dat niet, bijvoorbeeld door een beperkt netwerk, wijs dan een lokale versie aan met `CHROME_PATH=/pad/naar/chrome-headless-shell`.

## Branches

- `main`: het fabriekje plus afgewerkte clips
- `clip/<slug>`: één branch per clip, samengevoegd na het eindakkoord
- `experiment/<idee>`: kortlevende proeven aan het fabriekje

Video's (`out/`) staan niet in git. Afgewerkte MP4's kunnen als bijlage bij een GitHub Release `clip-<slug>`.

## Licenties

- Montserrat: SIL Open Font License (`public/fonts/Montserrat-OFL.txt`).
- UCLL-logo's: eigendom van UCLL Hogeschool, alleen voor UCLL-uitingen.
- Remotion is gratis voor teams tot 3 personen; zie [remotion.dev/license](https://www.remotion.dev/docs/license) voor grotere teams.
