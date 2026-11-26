# Research: juiste-taalmodel-kiezen

> Status: goedgekeurd (2026-11-26) — door de regisseur na review, gebruiker offline

> Leeswijzer. Bronnen met label `[officieel, gelezen]` heb ik zelf geopend en gelezen. Bronnen met label `[secundair — zoekresultaat, officiële pagina niet bereikbaar; te verifiëren]` komen uit WebSearch-samenvattingen; die pagina's heb ik zelf niet geopend. Daarop steunen alleen de punten over ChatGPT, de Gemini-app, Perplexity en de exacte Copilot-menu's. Gebruik die niet als vaststaand feit in de video zonder controle in de live interface.

> Notitie voor de regisseur: de clip blijft merkneutraal op labelniveau (geen menulabels of versienummers per tool). De tool-specifieke informatie in sectie C is achtergrond en niet bedoeld om in beeld te komen, behalve wat officieel bevestigd is.

## Samenvatting in vijf zinnen
Een AI-tool biedt vaak meerdere "versnellingen": een snel en licht model of een snelle modus, een denkmodus waarin het model eerst redeneert, en soms een automatische keuze die dat voor jou beslist [1][3][7]. Denken kost tijd en rekenkracht. Leveranciers beschrijven dat zelf als een afweging tussen grondigheid enerzijds en snelheid, kost en verbruik van je gebruiksruimte anderzijds [2][5][4][11]. Voor eenvoudige taken volstaat het snelle model, en bij een complexe, meerstaps- of correctheidskritische taak loont het om bewust meer denkkracht te kiezen [4][7][11][13]. Waar de keuze zit en hoe ze heet, verschilt per tool en per abonnement, en de labels veranderen vaak [4][8][S1][S2][S3]. Een goede vuistregel voor de clip: standaard laten staan voor routinewerk, bewust opschalen voor moeilijk werk, en een onderzoeksmodus gebruiken als je een uitgewerkt rapport met bronnen wilt [4][7][9].

## Kernbegrippen
- **Snel/licht model of snelle modus**: antwoordt snel en verbruikt weinig. Anthropic positioneert zijn kleinste model als dat met "the lowest latency and price", voor onder meer realtimetoepassingen en grote volumes ("high-volume") [1]. Voor Claude Code zegt Anthropic over het kleinste model dat het "the fastest and cheapest option" is, "well suited to quick lookups, simple edits, or high-volume scripted runs" [6] (coderingscontext, niet de chat). Google positioneert zijn "Flash"-lijn als model met lage vertraging en lage kost voor grote volumes [11][12]. Microsoft beschrijft voor Copilot een "high-throughput"-model voor routinevragen dat snelheid voorrang geeft [7].
- **Redeneermodel / denkmodus**: het model besteedt eerst extra rekenwerk aan redeneren voor het antwoordt. Google zegt dat zijn modellen "capable of reasoning before responding" zijn, "resulting in dramatically improved performance" [11]. Anthropic: grotere denkbudgetten kunnen de kwaliteit verbeteren bij complexe problemen, "at the cost of increased latency" [17]. Let op: dat laatste is geformuleerd voor de ontwikkelaarsomgeving (API).
- **Inspanningsniveau (effort)**: bij Claude een instelling die bepaalt hoeveel het model denkt en uitwerkt; hoger geeft grondiger, maar trager en duurder resultaat [2][4].
- **Auto / automatische keuze**: de tool kiest zelf tussen snel en diep. Microsoft: Copilot gebruikt een "real-time router" die routinevragen naar een snel model stuurt en complexe vragen naar een redeneermodel [7]. Bij Claude beslist het model zelf per vraag of het denkt en hoeveel ("adaptive thinking") [3].
- **Onderzoeksmodus / agent (diepgaand onderzoek)**: een apart, uitgebreider werkproces voor meerstapsonderzoek over meerdere bronnen, met een rapport als resultaat. Voorbeeld: Researcher in Microsoft 365 Copilot [9][10].

## Belangrijkste inzichten

### A. Algemeen principe (steunt op officiële, gelezen bronnen)
1. **Meer denken = grondiger, maar trager en duurder.** Anthropic: effort laat je "trade off between response thoroughness and token efficiency", en lager effort betekent "significant token savings with some capability reduction" [2]. Google: de "thinking budget" laat je "the speed, accuracy, and cost balance" afstellen [11]. OpenAI (Cookbook): een `reasoning_effort`-instelling "trades off speed/cost vs. deeper reasoning" [15]. Drie leveranciers, dezelfde afweging. Let op: dit is ontwikkelaarsdocumentatie; voor gewone gebruikers vertaalt het zich naar de knoppen in de app.
2. **Begin licht en schaal op waar nodig.** Anthropic beschrijft twee startpunten: "efficiency-first" (met een snel, goedkoop model; geschikt voor onder meer "high-volume, straightforward tasks") en "capability-first" (geschikt voor onder meer complexe redeneertaken en taken "where accuracy outweighs cost considerations") [1]. OpenAI zegt over de o-reeks: kies die "when accuracy and reasoning depth are paramount" en reserveer redeneermodellen voor taken met hoge complexiteit [13][14]. Datering: [13] stamt van april 2025 en is door de bron zelf als tijdsgebonden gemarkeerd; gebruik het enkel voor het principe, niet voor modelnamen.
3. **Zwaar is niet altijd beter.** Anthropic waarschuwt dat de hoogste instelling vaak "only a small gain" geeft tegen meer kost en trager werken [2], en dat die bij sommige minder moeilijke taken tot "overthinking" kan leiden (gezegd over één specifiek model) [2]. OpenAI: een redeneermodel vragen om nog méér te redeneren kan de prestaties zelfs verslechteren [14].
4. **Automatische keuze bestaat en is door leveranciers zelf bedoeld als standaard.** Microsoft: Copilot kiest automatisch het juiste model op basis van de context [7]. Anthropic: het model beslist per vraag of het denkt; een eenvoudige feitelijke vraag krijgt een direct antwoord, een meerstapsprobleem krijgt diepere redenering [3]. Google: het Flash-model past zijn denktijd automatisch aan aan de complexiteit van de vraag [11]. Interpretatie: voor de kijker is "Auto" een veilig vertrekpunt, en handmatig kiezen is het scherpstellen wanneer het resultaat te oppervlakkig of te traag is.
5. **Je kunt in een gesprek bijsturen.** Claude: je kunt model, effort en denken tijdens een gesprek wijzigen; de wijziging geldt vanaf het volgende antwoord [4].

### B. Verbruik, limieten en efficiëntie (officieel, gelezen)
6. **Claude (apps):** hogere effort "take[s] longer and use[s] more tokens, so you'll reach your usage limits faster"; voor alledaagse taken volstaan de standaardinstellingen ("For everyday tasks, the defaults work well"), terwijl je voor complexe taken de effort verhoogt, denken aanzet, of beide ("For complex tasks, raise the effort level, turn on thinking, or both") [4]. Dezelfde pagina zegt dat Low en Medium "work well for routine tasks and stretch your usage further" [4]. Het verbruik hangt af van "the features you use, which Claude model you're chatting with, and the effort level you've selected"; Anthropic raadt een lager effortniveau aan voor routinetaken [5]. Betaalde abonnementen hebben een sessielimiet en een weeklimiet (details en cijfers vallen buiten scope) [5].
7. **Claude, zwaarste model:** over de coderingscontext (Claude Code) zegt Anthropic dat het diepste model "uses meaningfully more of your quota", dus wissel naar het middenmodel voor routinewerk; het kleinste model is "the fastest and cheapest" [6]. Let op: die pagina gaat over Claude Code, niet over de chat. Gebruik enkel als illustratie van het principe.
8. **Microsoft Copilot:** onderzoeksagents zijn beperkt beschikbaar. Bij de algemene lancering in juni 2025 kreeg elke gebruiker met een Microsoft 365 Copilot-licentie tot 25 gecombineerde queries per maand voor Researcher en Analyst [9]. Dat cijfer is van 2025 en kan intussen gewijzigd zijn; niet in de video noemen zonder controle.
9. **Google (Cloud-documentatie):** de snelle Flash-lijn is geoptimaliseerd voor lage vertraging en lage kost bij grote volumes; de Pro-lijn mikt op maximale kwaliteit voor de meest complexe taken [11][12]. Google verwijst voor het gebruik van de goedkopere modellen naar "high-volume" scenario's. Datering: [11] is van april 2025, [12] van december 2025.
10. **Zwaardere modus = meer wachttijd.** Voor Claude bevestigt de helppagina dat de hoogste instelling "longer response times" geeft [4]. Dat een zwaardere modus ook meer rekenkracht vraagt, staat expliciet in de ontwikkelaarsdocs als "tokens" (rekeneenheden) die gebruikt en gefactureerd worden [3]. Een zin over "energieverbruik" of "milieu-impact" heb ik niet in de gelezen bronnen gevonden, dus die laat ik weg (zie open vragen).

### C. Per tool: welke keuzes heeft een gewone gebruiker?

| Tool | Soort keuze | Waar ongeveer | Basis |
|---|---|---|---|
| **Claude** | Model, effort (Laag t/m Max) en een denk-/"Extended"-schakelaar; bij sommige modellen kan denken niet uit en verlaag je de effort | Modelmenu naast de verzendknop; klik op de modelnaam, dan "Effort" | Officieel, gelezen [4][5] |
| **Microsoft 365 Copilot / Copilot Chat** | Keuze van responsmodus: Auto (standaard), Quick response (snel), Think deeper (denken); daarnaast de agent Researcher (en Analyst) voor diepgaand onderzoek | Uitklapmenu rechtsboven in het Copilot-venster; Researcher en Analyst zijn standaard vastgepind in de Microsoft 365 Copilot-app | Menu rechtsboven: officieel, gelezen maar enkel uit schermafbeeldingstekst [8]. Betekenis van de modi: secundair [S4]. Agents: officieel [9][10] |
| **ChatGPT** | Snel (Instant) versus denkend (Thinking); automatisch wisselen bij sommige abonnementen; Pro-opties bij betaalde abonnementen | Modelkiezer in de chatbalk | Secundair [S1] |
| **Gemini (app)** | Snel (Fast), denkend (Thinking) en krachtigst (Pro); bij sommige abonnementen een denkniveau; gratis gebruikers soms automatische keuze | Modelkiezer in de Gemini-app | Secundair [S2]. Google Cloud (developers): officieel [11][12] |
| **Perplexity** | "Best" = automatische modelkeuze binnen Search; handmatige modelkeuze afhankelijk van abonnement; aparte Research-modus (kiest zelf de modelcombinatie) en Labs | Zoekbalk-/modusmenu | Secundair [S3] |

Opmerkingen bij de tabel:
- **Copilot:** het onderscheid "snel model voor routinevragen, redeneermodel voor complexe of open vragen" met automatische routering is bevestigd in een officiële Microsoft-post van augustus 2025 [7]. De labels "Auto / Quick response / Think deeper" en de plaats rechtsboven staan in de alt-tekst van een schermafbeelding in een Microsoft-post van december 2025 [8]. Die tekst is zelf warrig; de post legt niet uit wat elke modus doet en zegt niet of de responsmodi en het modelmenu hetzelfde bedieningselement zijn [8]. De omschrijving "Quick response = snel/beknopt, Think deeper = complexe vragen" en het advies "bij twijfel Auto" komen uit een zoekresultaat over Microsoft-ondersteuningspagina's die ik niet kon openen [S4].
- **Claude:** thinking staat bij sommige recente modellen altijd aan; dan verlaag je de effort om minder te laten denken [3][4]. Een aparte "onderzoeks"-modus voor Claude heb ik niet in een gelezen bron bevestigd (zie open vragen).
- Voor alle tools geldt: abonnement (gratis, betaald, organisatielicentie) bepaalt vaak welke keuzes zichtbaar zijn [4][9][S1][S2][S3]. Voor UCLL-collega's is dus relevant welke licentie ze hebben; dit is niet geverifieerd.

### D. Concrete docententaken en welk type past
Let op: de bronnen bespreken taken niet in onderwijstermen. De koppeling hieronder is mijn **interpretatie**, onderbouwd door de algemene richtlijnen [1][4][7][11][13]. Voor de video als suggestie presenteren, niet als geverifieerd feit.

| Taak (docent, Vlaams hoger onderwijs) | Type | Onderbouwing |
|---|---|---|
| Een e-mail aan studenten herformuleren, een aankondiging op Toledo korter maken, een titel of vertaling voorstellen | Snel / Auto | Eenvoudige, veelvoorkomende taken; Anthropic: "high-volume, straightforward tasks" en lage effort voor routinetaken [1][4]; Microsoft: routinevragen naar het snelle model [7] |
| Een tekst samenvatten of opmaak aanpassen | Snel / Auto | Idem [1][4][7][11] |
| Een beoordelingsrubric of evaluatiecriteria opstellen die intern consistent moeten zijn | Denkend | "Complex tasks": Anthropic raadt voor complexe taken aan om effort te verhogen en/of denken aan te zetten [4]. De taak zelf is mijn voorbeeld. |
| Een examenvraag controleren op fouten, of een berekening/oefening met oplossing laten nakijken | Denkend | Anthropic: voor "correctness-critical work" Max-effort en langere wachttijd [4]. OpenAI: redeneermodellen als nauwkeurigheid voorop staat [13]. Toepassing op onderwijs = interpretatie. |
| Meerdere studentenrapporten of bronnen vergelijken en de afwegingen beschrijven | Denkend | Meerstaps- en afwegingsvragen: Microsoft stuurt "complex or more open-ended" vragen naar het redeneermodel [7] |
| Een literatuuroverzicht met bronnen voorbereiden voor een nieuw opleidingsonderdeel | Onderzoeksmodus (indien beschikbaar) | Microsoft: Researcher is bedoeld voor meerstapsonderzoek over werk- en webgegevens met een deelbaar rapport [9][10]. Verifieer elke bron zelf; dat advies is mijn aanvulling. |
| Gegevens uit een spreadsheet analyseren (bv. puntenverdeling) | Denkend of Analyst | Microsoft: Analyst voor data-analyse [9][10] |

### E. Wat de bronnen niet of maar beperkt zeggen
- Geen enkele gelezen bron vergelijkt modi met cijfers voor gewone chatgebruik. Bronnen met cijfers (prijzen, queries per maand) zijn ofwel ontwikkelaarsdocs, ofwel gedateerd [9][11][13].
- Anthropic zegt zelf dat de impact van effortniveaus per taak verschilt en dat je moet testen op je eigen gebruik [2]. Dat sluit aan bij het advies: probeer even uit.

## Voorbeelden uit de praktijk
Voorbeelden zijn illustratief en niet uit de bronnen gehaald, behalve waar een bron staat.
- **Snel:** een docent laat een mail aan een groep studenten beleefder formuleren. Het snelle model of Auto volstaat [1][4][7].
- **Denkend:** een docent laat de scoringssleutel van een toets nakijken op rekenfouten en inconsistenties. Denkmodus of hogere effort; wacht dus iets langer [4].
- **Onderzoek:** een opleidingscoördinator laat een overzicht maken van recente publicaties over een thema. Onderzoeksmodus (zoals Researcher) en controleer de bronnen achteraf [9][10].
- **Vergelijking in Copilot:** Microsoft toont zelf in een voorbeeld dat een RFP-evaluatie naar het redeneermodel wordt geleid [7].

## Veelvoorkomende misvattingen
- "De standaardinstelling is altijd goed genoeg." Voor routinewerk vaak wel, maar bij complexe taken kan het snelle model oppervlakkig zijn; de leveranciers adviseren zelf bij te sturen [4].
- "Het zwaarste model is altijd het beste." Bij de hoogste instelling is de winst vaak klein tegenover de extra tijd en kost [2] (Anthropic zegt dit over specifieke modellen). Bij eenvoudige taken is extra inspanning of denken overbodig [4].
- "Auto kiest altijd perfect." Auto is bedoeld als redelijke standaard [3][7], maar of de keuze altijd klopt, is niet in een officiële bron aangetoond. Forumberichten over gevallen waarin de gekozen modus niet gevolgd werd, zijn niet geverifieerd [S1].
- "Alle tools hebben dezelfde knoppen." Namen, plaats en beschikbaarheid verschillen per tool en abonnement en veranderen vaak [4][S1][S2][S3].
- "Denken is gratis." Denken vraagt rekenkracht en telt mee voor je gebruiksruimte [3][4][5].

## Bewust buiten scope
- Hoe taalmodellen intern werken (parameters, training, "chain-of-thought" in detail).
- Benchmarkvergelijkingen en rangschikking van leveranciers of modellen. (Vendorclaims zoals "Pro-grade reasoning at Flash speed" [12] worden niet overgenomen.)
- Prijzen per abonnement of per token; limietcijfers per plan.
- Privacy, dataverwerking en dataretentie (de bronnen raken dit aan, maar het valt buiten de clip).
- Ontwikkelaarsinstellingen (API-parameters, tokenbudgetten, prompt caching).
- Copilot Studio, agent-bouw en beheerdersinstellingen.
- Betwiste vraag of een specifiek model "beter" is voor een bepaald vak.

## Open vragen voor de gebruiker
1. **ChatGPT, Gemini-app en Perplexity zijn alleen secundair onderbouwd.** Hun officiële helppagina's waren niet bereikbaar (help.openai.com, support.google.com en blog.google, perplexity-domeinen). Wil je die domeinen toelaten, of zelf in de live interface controleren welke labels en menu's er nu staan? Dit geldt voor [S1][S2][S3].
2. **Copilot-labels en menu's:** de officiële beschrijving van "Auto / Quick response / Think deeper" (support.microsoft.com, learn.microsoft.com) kon ik niet openen. Welke Copilot-versie hebben UCLL-collega's (Copilot Chat met werk-/schoolaccount, of betaalde Microsoft 365 Copilot-licentie)? Dat bepaalt of Researcher/Analyst beschikbaar zijn [9].
3. **Gemini:** de officiële Cloud-documentatie over "thinking" (docs.cloud.google.com) is niet bereikbaar in deze sessie. De Cloud-blogposts [11][12] zijn gelezen, maar zijn van 2025 en gaan over de zakelijke API, niet over de Gemini-app.
4. **Claude, onderzoeksmodus:** ik vond in de gelezen bronnen geen bevestiging van een "Research"-functie in de Claude-app. Moet de clip dit voor Claude vermelden? Zo ja: controleer de live interface.
5. **Energie/milieu:** wil je in de video zeggen dat zwaardere modellen ook meer energie verbruiken? Daarvoor vond ik geen gelezen bron; ik raad aan dit weg te laten of apart te laten onderzoeken.
6. **Modelnamen:** de bronnen noemen zeer veel verschillende modelnamen en versies, en die veranderen snel. Ik raad aan in de video enkel soorten keuzes te benoemen (snel, denkend, auto, onderzoek) en geen versienummers.
7. **Voorbeelden uit de docentenpraktijk (sectie D)** zijn mijn interpretatie. Wil je dat een docent of lector uit UCLL ze valideert?

## Bronnen
Officiële bronnen, door mij geopend en gelezen:
1. Anthropic (z.j.). Choosing the right model. Claude Docs (platform.claude.com). https://platform.claude.com/docs/en/about-claude/models/choosing-a-model — geraadpleegd op 2026-11-26.
2. Anthropic (z.j.). Effort. Claude Docs. https://platform.claude.com/docs/en/build-with-claude/effort — geraadpleegd op 2026-11-26.
3. Anthropic (z.j.). Steering thinking. Claude Docs. https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost — geraadpleegd op 2026-11-26.
4. Anthropic (z.j.). Change the model, effort, and thinking settings. Claude Help Center. https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings — geraadpleegd op 2026-11-26.
5. Anthropic (z.j.; pagina toont "Updated over 3 weeks ago"). Understanding usage and length limits. Claude Help Center. https://support.claude.com/en/articles/11647753-understanding-usage-and-length-limits — geraadpleegd op 2026-11-26.
6. Anthropic (z.j.). Models, usage and limits (Claude Code). Claude Help Center. https://support.claude.com/en/articles/14552983-models-usage-and-limits — geraadpleegd op 2026-11-26. (Over Claude Code; enkel als illustratie.)
7. Microsoft (2025-08-07). Available today: GPT-5 in Microsoft 365 Copilot. Microsoft Copilot Blog. https://www.microsoft.com/en-us/copilot/blog/2025/08/07/available-today-gpt-5-in-microsoft-365-copilot/ — geraadpleegd op 2026-11-26.
8. Microsoft (2025-12-11). Available today: GPT-5.2 in Microsoft 365 Copilot. Microsoft Copilot Blog. https://www.microsoft.com/en-us/copilot/blog/2025/12/11/available-today-gpt-5-2-in-microsoft-365-copilot/ — geraadpleegd op 2026-11-26. (Enkel schermafbeeldingstekst over het menu.)
9. Microsoft (2025-06-02). Researcher and Analyst are now generally available in Microsoft 365 Copilot. Microsoft 365 Blog. https://www.microsoft.com/en-us/microsoft-365/blog/2025/06/02/researcher-and-analyst-are-now-generally-available-in-microsoft-365-copilot/ — geraadpleegd op 2026-11-26.
10. Microsoft (2025-03-25). Introducing Researcher and Analyst in Microsoft 365 Copilot. Microsoft Copilot Blog. https://www.microsoft.com/en-us/copilot/blog/2025/03/25/introducing-researcher-and-analyst-in-microsoft-365-copilot/ — geraadpleegd op 2026-11-26.
11. Google Cloud (2025-04-09). Gemini 2.5 on Vertex AI: Pro, Flash & Model Optimizer. Google Cloud Blog. https://cloud.google.com/blog/products/ai-machine-learning/gemini-2-5-pro-flash-on-vertex-ai — geraadpleegd op 2026-11-26.
12. Tiwary, S. (2025-12-18). Gemini 3 Flash for Enterprises. Google Cloud Blog. https://cloud.google.com/blog/products/ai-machine-learning/gemini-3-flash-for-enterprises — geraadpleegd op 2026-11-26. (Deels vendorclaims.)
13. OpenAI (2025-04). Practical Guide for Model Selection for Real-World Use Cases. OpenAI Cookbook (GitHub). https://raw.githubusercontent.com/openai/openai-cookbook/main/examples/partners/model_selection_guide/model_selection_guide.ipynb — geraadpleegd op 2026-11-26. (Alleen eerste ~100.000 tekens gelezen; "accurate as of April 2025".)
14. OpenAI (z.j.). o3/o4-mini Function Calling Guide. OpenAI Cookbook (GitHub). https://raw.githubusercontent.com/openai/openai-cookbook/main/examples/o-series/o3o4-mini_prompting_guide.ipynb — geraadpleegd op 2026-11-26.
15. OpenAI (z.j.). GPT-5.2 Prompting Guide. OpenAI Cookbook (GitHub). https://raw.githubusercontent.com/openai/openai-cookbook/main/examples/gpt-5/gpt-5-2_prompting_guide.ipynb — geraadpleegd op 2026-11-26.
16. Mivelli, D. (2026-02-12). Picking the right Copilot for the job: Tips from our experience at Microsoft. Microsoft Inside Track Blog. https://www.microsoft.com/insidetrack/blog/picking-the-right-copilot-for-the-job-tips-from-our-experience-at-microsoft — geraadpleegd op 2026-11-26. (Alleen Researcher/Chat-context; niet gebruikt voor de modi.)
17. Anthropic (z.j.). Extended thinking. Claude Docs. https://platform.claude.com/docs/en/build-with-claude/extended-thinking — geraadpleegd op 2026-11-26. (Als "legacy" gemarkeerd; enkel gebruikt voor het algemene principe.)

Secundaire bronnen, niet door mij geopend. Alleen samenvattingen uit WebSearch, te verifiëren:
- S1. [secundair — zoekresultaat, officiële pagina niet bereikbaar; te verifiëren] ChatGPT (Instant/Thinking/auto-switching, abonnementsverschillen, forumklachten). Zoekresultaten verwezen o.a. naar OpenAI-helppagina "GPT-5.5 in ChatGPT" (help.openai.com/en/articles/11909943) en naar TechRadar, TechCrunch en OpenAI-communityberichten. WebSearch-opdracht van 2026-11-26.
- S2. [secundair — zoekresultaat, officiële pagina niet bereikbaar; te verifiëren] Gemini-app (Fast/Thinking/Pro, denkniveau, beperkingen voor gratis gebruikers). Zoekresultaten verwezen o.a. naar 9to5Google, Android Authority en Beebom. WebSearch-opdracht van 2026-11-26.
- S3. [secundair — zoekresultaat, officiële pagina niet bereikbaar; te verifiëren] Perplexity ("Best", modelkeuze per abonnement, Research en Labs). Zoekresultaten verwezen o.a. naar de Perplexity-helpcenterpagina 10354919 en naar derde partijen. WebSearch-opdracht van 2026-11-26.
- S4. [secundair — zoekresultaat, officiële pagina niet bereikbaar; te verifiëren] Microsoft Copilot Chat-responsmodi (Quick response, Think deeper, "bij twijfel Auto"). Zoekresultaten verwezen o.a. naar support.microsoft.com ("About Copilot Chat responses", "Conversation modes in Microsoft Copilot") en learn.microsoft.com. WebSearch-opdracht van 2026-11-26.
