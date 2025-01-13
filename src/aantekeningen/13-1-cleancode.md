---
title: clean code

---

# Clean code

als we allemaal onze code net iets schoner inchecken toen we die uitcheckten zou de code simpelweg niet kunnen verouderen

oporuimen hoeft niets groots te zijn. verander één variabelenaam in iets beters,

### gebruik betekenisvolle namen

gebruik duidelijke en beschrijvende namen voor variabelen, functies en bestanden

vermijd cryptische afkortingen og generieke termen zoals a,x, data of temp

### Schrijf kleine functies

functies moeten klein zijn en slechts een verantwoordelijkheid hebben. lange functies zijn moeilijk te begrijpen en onderhouden

stel je functie op met zo min mogelijk parameters. het liefst monadisch(1 parameter) maar als nodig is diadisch (2 parameters), vermeid triadisch(3 parameters)

voorkom side-effects, dingen die buiten de scope van de functie vallen. een functie heeft één ingang - parameters - en één uitgang - return.

### gebruik goed commentaar

less is more. goede code heeft weinig comments nodig omdat het zichzelf uitlegt. 

uitgecommentaarde stukken code horen niet in de productiecode; haal ze weg! 

### Maak code leesbaar

code wordt vaker gelezen dan geschreven. maak daarom het intuitief om je code leesbaar te maken, let op ruimte.

## refactoring

refactoren is een proces van het verbeteren van de structuur van de code zonder het gedrag te veranderen.

het doel is om code leesbaarder, eenvoudiger te begrijpen, makkelijker onderhoudbaar en makkelijker uitbreidbaar maken.

het bestaat uit kleine veranderingen, zoals hernoemen van variabelen, opsplitsen van lange functies of verwijderen van dubbeling.

### patroon: splits conditionals op

### Patroon: varvang loops door pipelines

### Patroon: verschuif statements

herpositioneren van code binnenn een mehode om de leesbaarheid en logische volgorde te verbeteren.

het doel is gerelateerde statements dichtes bij elkaar te plaatsen en irreleveante of afleidende stukken code te verplaatsen naar een meer geschikte locatie.

door statements op een logischere manier te ordenene, wordt de structuur van de methode duidelijker, wat leidt tot betere begrip en eenvoudiger onderhoud.


# Svelte kit best practices

performance:

code-splitting, alleen de code die nodig is voor de actieve pagina wordt ingeladen
asset preloading, de juiste assets op het juiste moment ipv. een waterval van bestanden die  bestanden inladen
file hasing, unieke bestandsnaam voor assets zodat caching werkt voor gebruikers.
pre-rendering, paginas zonder dynamische data worden instant verstuurd (per route)

## Performance testen

```
npm run dev - x 
npm run build - ja
npm run preview - ja
```

### Afbeeldingen

@sveltejs/enhanced-img - voor het optimaliseren van afbeeldingen.

```
npm install @sveltejs/enhanced-img
```

werkt alleen op imagis in lokale omgeving niet via data base.
