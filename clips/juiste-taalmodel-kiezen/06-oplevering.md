# Oplevering: juiste-taalmodel-kiezen

> Status: concept — wacht op het eindakkoord van de gebruiker

## Titel
Het juiste taalmodel kiezen

## Beschrijving (voor platform of LMS, max. 60 woorden)
Veel AI-tools laten je kiezen tussen een snelle stand, een denkstand en een automatische stand. Deze clip legt uit wat het verschil is, wanneer welke stand past en waar je de keuze meestal vindt. Met voorbeelden uit de docentenpraktijk. Zo werk je sneller en krijg je betere antwoorden.

## Leerdoelen
Na het bekijken van de clip kan de kijker:
1. uitleggen dat een AI-tool meerdere taalmodellen of standen aanbiedt, en dat die verschillen in snelheid, redeneervermogen en kost of verbruik;
2. voor een taak inschatten of een snel model volstaat of een denkstand nodig is;
3. weten waar je die keuze zoekt in de eigen AI-tool (bij de modelnaam of in het model- of standenmenu).

## Duur
3 min 15 s (194,8 s), 1920x1080, 30 fps, H.264, zonder audio (gemeten met ffprobe).

## Bestanden
- Video: `out/juiste-taalmodel-kiezen/juiste-taalmodel-kiezen.mp4` (niet in git; als download bij de GitHub Release `clip-juiste-taalmodel-kiezen`)
- Thumbnail: `out/juiste-taalmodel-kiezen/thumbnail.png`

## Toegankelijkheidscheck
- [x] Elke scène blijft lang genoeg in beeld om rustig te lezen (`npm run check`)
- [x] Contrast tekst/achtergrond volgens de huisstijl (geen magenta tekst op navy, geen tekst in geel of lichtblauw)
- [x] Geen informatie die enkel via kleur wordt overgebracht
- [x] Geen flitsende of snel knipperende animaties
- [x] Tekst op B1-niveau, geen onverklaard jargon

Opmerkingen: de clip heeft geen audio of ondertitels; alle inhoud staat als tekst in beeld. Contrast, kleurgebruik en animaties zijn gecontroleerd tijdens de stills-review (fase 5, zie `05-productie.md`); de MP4 zelf is niet frame voor frame bekeken. Alleen de thumbnail is bekeken.

## Bronnen
Zoals vermeld op de bronnenscène (nummering volgens `02-research.md`):

- [4] Anthropic (z.j.). Change the model, effort, and thinking settings. Claude Help Center. https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings
- [1] Anthropic (z.j.). Choosing the right model. Claude Docs. https://platform.claude.com/docs/en/about-claude/models/choosing-a-model
- [5] Anthropic (z.j.). Understanding usage and length limits. Claude Help Center. https://support.claude.com/en/articles/11647753-understanding-usage-and-length-limits
- [11] Google Cloud (2025). Gemini 2.5 on Vertex AI: Pro, Flash & Model Optimizer. Google Cloud Blog. https://cloud.google.com/blog/products/ai-machine-learning/gemini-2-5-pro-flash-on-vertex-ai
- [7] Microsoft (2025). Available today: GPT-5 in Microsoft 365 Copilot. Microsoft Copilot Blog. https://www.microsoft.com/en-us/copilot/blog/2025/08/07/available-today-gpt-5-in-microsoft-365-copilot/
- [9] Microsoft (2025). Researcher and Analyst are now generally available in Microsoft 365 Copilot. Microsoft 365 Blog. https://www.microsoft.com/en-us/microsoft-365/blog/2025/06/02/researcher-and-analyst-are-now-generally-available-in-microsoft-365-copilot/

Alle zes zijn geraadpleegd op 2026-11-26. Het citaat in de clip is ingekort en vrij vertaald uit [4].

## Te verifiëren door de gebruiker
- **ChatGPT, Gemini-app en Perplexity:** deze zijn alleen secundair onderbouwd (zoekresultaten S1, S2, S3; de officiële helppagina's waren niet bereikbaar). De clip noemt geen labels of menu's per tool, maar controleer in de live interface of de algemene uitspraken (snelle stand, denkstand, automatische stand, onderzoeksstand, keuze bij de modelnaam) kloppen.
- **Copilot:** de labels "Auto / Quick response / Think deeper" komen uit een schermafbeeldingstekst [8] en een zoekresultaat [S4]. Welke Copilot-versie hebben UCLL-collega's (Copilot Chat met werk-/schoolaccount of een betaalde Microsoft 365 Copilot-licentie)? Dat bepaalt of de onderzoeksstand (Researcher) beschikbaar is.
- **Licentie bij UCLL:** de clip zegt dat je abonnement of licentie bepaalt wat je ziet. Wat UCLL-collega's effectief zien, is niet geverifieerd.
- **Validatie van de docentvoorbeelden:** de drie voorbeelden (mail herformuleren, verbetersleutel nakijken, literatuuroverzicht) zijn een interpretatie van de researcher op basis van algemene richtlijnen, niet uit de bronnen. Laat bij voorkeur een UCLL-docent of lector ze valideren.
- **Gedateerde bronnen:** [7], [9] en [11] zijn van 2025. De clip gebruikt ze alleen voor het principe, maar controleer of dat in november 2026 nog geldt.
- **Claude en onderzoeksstand, energieverbruik:** voor een aparte onderzoeksfunctie in de Claude-app vond de researcher geen bevestiging, en over energieverbruik staat niets in de clip.
