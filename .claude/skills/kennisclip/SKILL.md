---
name: kennisclip
description: Start of hervat een kennisclip, van briefing tot afgewerkte video. Gebruik wanneer de gebruiker /kennisclip typt, een briefing voor een nieuwe kennisclip geeft, of verder wil werken aan een bestaande clip.
argument-hint: "<briefing van de clip, of de slug van een bestaande clip>"
---

# /kennisclip

Je bent de **regisseur** zoals beschreven in `CLAUDE.md`. Volg die flow, rollen en regels strikt.

Invoer van de gebruiker: $ARGUMENTS

## 1. Bepaal: nieuw of hervatten?

- **Bestaande clip.** De invoer is een slug uit `clips/`, of de huidige branch is `clip/<slug>`. Hervat de clip:
  1. Lees de statusregels van `clips/<slug>/0*.md`.
  2. Vat in drie regels samen waar de clip staat.
  3. Ga verder bij de eerste fase die nog niet goedgekeurd is.
- **Nieuwe clip.** Is de invoer leeg, vraag dan om een briefing. Wat de briefing moet bevatten, staat in `templates/01-brief.md`. Anders ga je verder met stap 2.

## 2. Nieuwe clip opzetten

1. Kies een korte slug (kleine letters, koppeltekens, ±2–4 woorden), bijvoorbeeld `feedback-die-werkt`.
2. Zorg voor een actuele basis: `git fetch origin main` en `git checkout -b clip/<slug> origin/main`. Bestaat `main` nog niet, gebruik dan de huidige standaardbranch en meld dat.
3. Voer `npm install` uit als `node_modules` ontbreekt.
4. Voer `npm run new-clip -- <slug>` uit.

## 3. Fase 1: briefing (zelf)

- Vul `clips/<slug>/01-brief.md` in op basis van de briefing van de gebruiker.
- Ontbreekt er essentiële informatie, zoals leerdoelen, kernboodschap of afbakening? Doe dan een voorstel en markeer het als voorstel. Stel maximaal drie gerichte vragen.
- Leg de briefing voor. **Controlemoment:** wacht op akkoord. Daarna doe je drie dingen:
  - zet de status op goedgekeurd
  - commit
  - push met `git push -u origin clip/<slug>`

## 4. Fasen 2 tot 6

Werk de fasen af volgens de tabel in `CLAUDE.md`. Per fase doe je dit:
1. **Delegeer** aan de juiste agent met de Agent-tool. Geef mee: de slug, de bestanden die de agent moet lezen, en de feedback van de gebruiker letterlijk.
2. **Review** waar de tabel dat voorschrijft. Start de `reviewer` met alleen de slug en de fase. Verwerk "moet"-bevindingen door de makende agent opnieuw aan te sturen, vóór je iets voorlegt.
3. **Beoordeel zelf**, kritisch: klopt het met de briefing, is het helder en is het juist?
4. **Leg voor** aan de gebruiker. Geef een korte samenvatting, de belangrijkste keuzes, de bevindingen van de reviewer en het pad naar de deliverable. Bij fase 5: stuur een overzicht van de stills mee.
5. **Controlemoment.** Na akkoord: status op goedgekeurd, commit en push. Bij feedback: terug naar stap 1 met die feedback.

## 5. Afronden

Na het eindakkoord van fase 6:
- Meld de paden naar de MP4 en de thumbnail.
- Bied aan om een pull request van `clip/<slug>` naar `main` te openen.
- Bied aan om een GitHub Release `clip-<slug>` met de MP4 te maken.
- Doe beide alleen na bevestiging van de gebruiker.
- Vraag of er lessen zijn voor het fabriekje: nieuwe scènetypes, huisstijl of agentinstructies. Stel die voor als aparte wijziging op `main`.
