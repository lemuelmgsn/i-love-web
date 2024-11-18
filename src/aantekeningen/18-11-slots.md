---
title: Workshop Advanced Component Concepts
presentator: Justus
date: 2024-11-18
description: Workshop waarin we dieper ingaan op component concepten in Svelte. We maken from scratch een component library met aandacht voor named slots, two way binding en stores
tags: post
---

# Component concepten in Svelte.

## named slots, two way binding en stores

## structuur component library

### De chaos bedwingen door...

..afspraken (conventies) te maken over:

- naamgeving componenten
- naamgeving van variaties van componenten
- naamgeving van properties binnen componenten
- metanaamgeving: componenten patronen, etc.
- indeling van de $lib folder

  ### Metanaamgeving

  een hierarchische benadering om het over bepaalde soorten componenten te hebben

  in principe is alles component maar hoe noemen we:

  - geneste componenten
  - variaties op componenten
  - samengestelde componenten
 
  ### Page-section-component

  Pages: Volledige paginas of schermen met een specifieke context bestaat uit sections bijvoorbeeld de homepage

  Sectoins: secties van een pagina bestaand uit componenten bijvoorbeeld een hero banner een content sectie een footer

  Components: herbruiikbare componenten binnen de secries, buttons forms etc

  ### Functions layering

  InputsL componenten voor gebruiikersinvoor bijvoorbeeld knoppen of formulieren

  Display: componenten voor het weergeven van informatie, tabbellen en grafieken

  Navigation: componenten voor navigatie menus, breadcrumbs, skip to content

  Structural: layout elementen die structuur bieden, grids. containers

  ### LEGO

  Bricks: kleine niet herbruikbare stukjes, een icoon of tekstblok

  Blocks: herbruiikbare basis componeten, een knop of een afbeelding

  Assemblages:  gecombineerde componenten met een specifieke functie, formulier of een kaart

  Constructions: complexe pagina secties of templates, dashboard

  ### Atomic design

  Atoms: basis bouwblokken van je pagina, HTML elementen zoals een <label> <input>

  Molecules: een groep atomen bij elkaar, een zoekformulier met een label input en button

  Organism: een groep moleculen die samen een sectie van je website vormen, een header met een zoekformulier

  Templates: een group organismen die samen een paginatype vormen, een overzichtspagina of detailspagina

  ### Presenter-container

  presentational components: ui-specifieke stateless componenten die bepalen hoe data getoond wordt (bijvoorbeeld een afbeelding)

  container component: componenten die de presentational components van data voorezien en hun gedrag bepalen

  compositions: combinatie van containers en presentational components die specifieke pagina-secties vormen.

## Dry - component trickery

## Component library



