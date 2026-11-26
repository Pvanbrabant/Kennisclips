# Productie en feedback: juiste-taalmodel-kiezen

> Status: goedgekeurd (2026-11-26) — door de regisseur na review, gebruiker offline

## Previews
Stills: `out/juiste-taalmodel-kiezen/stills/` (18 stuks, `01-titel.png` t/m `18-bronnen.png`), gemaakt met `npm run stills -- juiste-taalmodel-kiezen`.

`npm run check -- juiste-taalmodel-kiezen` slaagt: 18 scènes, totale duur 3:11 (doel 2:00-4:00).

### Wat ik gecontroleerd heb (alle 18 stills bekeken)
- Overloop of weggevallen tekst: geen. Ook de bronnenscène met 6 regels past ruim binnen het beeld (laatste regel eindigt rond y=810 van 1080); één bron loopt over twee regels, zonder overlap met andere regels.
- Overlap met logo of cirkelmotief: geen. Op de donkere scènes (titel, vraag, reflectie) staat de tekst links van het motief; de reflectiescène met vier regels titel blijft links van de cirkels.
- Logo per achtergrond: wit op navy (01, 02, 17), rood op licht (alle andere). Correct.
- Leesbaarheid en contrast: navy op wit of lichtblauw, wit op navy, grijsblauwe labels en bronregels op licht. Geen magenta tekst op navy, geen vulkleur als tekstkleur. Voldoende contrast.
- Vergelijkingsscènes (05, 09): geen overloop; tekst blijft binnen de kaarten, ook bij regelafbreking (09, rechterkolom).
- Visuele consistentie: marges, titel met accentlijn, kaartstijl en lettertype zijn gelijk over alle scènes.

### Bevindingen
Tekst (voor de storyboarder, niet door mij aangepast):
1. Scène 01 (titel): de ondertitel breekt af als "AI-" / "tools". Korter formuleren of een niet-brekend streepje vermijden, bijvoorbeeld "Sneller en beter werken met AI".
2. Scène 09 (vergelijking): de punten in Misvatting en Realiteit horen duidelijk bij elkaar, maar staan door de regelafbreking niet op één hoogte. Kortere punten rechts (bijvoorbeeld "Bij simpele taken win je weinig" inkorten) laten ze netjes naast elkaar staan.
3. Scènes 11 t/m 13 (voorbeeld): het label VOORBEELD en de titel "Bijvoorbeeld: ..." zeggen hetzelfde. Overweeg titels zonder "Bijvoorbeeld:".
4. Scène 15 (opsomming, 2 korte punten) en 14 laten veel lege ruimte onderaan. Geen fout, wel een inhoudelijke keuze.

Weergave (voor de regisseur, geen codewijziging uitgevoerd):
5. Vergelijkingskaarten (05, 09) hebben een verschillende hoogte als de kolommen een verschillend aantal regels hebben (`alignItems: "flex-start"` in `src/scenes/VergelijkingScene.tsx`). Dit is geen overloop en valt binnen het schema, dus ik heb het niet aangepast. Voorstel: kaarten gelijke hoogte geven (`alignItems: "stretch"`). Dat is een stijlwijziging aan het fabriekje; akkoord van de regisseur nodig.

## Aanpassingen aan code
Geen. `npm run lint` is dus niet opnieuw nodig geweest.

## Feedbackrondes
<!-- Per ronde: datum, feedback van de gebruiker, wat er aangepast is (in het storyboard of in de code). -->

### Ronde 1

## Bevindingen van de reviewer

## Verwerkt na de review (regisseur, 2026-11-26)
- Reflectiescène: label "Denk even na" in wit i.p.v. lichtblauw (huisstijl: lichtblauw is geen tekstkleur). Wijziging aan het fabriekje (`src/scenes/ReflectieScene.tsx`).
- Vergelijkingsscènes: kaarten even hoog (`alignItems: "stretch"` in `src/scenes/VergelijkingScene.tsx`). Wijziging aan het fabriekje.
- "Auto" vervangen door "automatische stand" (merkneutraal).
- Citaat: bron vermeldt "ingekort en vrij vertaald".
- Scène 8: "biedt deze stand aan"; scène 10: titel "Zo kies je de juiste stand"; reflectievraag ingekort.
- Bronnenscène: 12 s; "Understanding usage and length limits" vervangt "Effort" (onderbouwt de gebruikslimiet).
