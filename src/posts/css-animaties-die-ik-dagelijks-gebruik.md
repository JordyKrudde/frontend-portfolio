---
title: CSS animaties die ik dagelijks gebruik
date: 2026-03-10
description: Een overzicht van de CSS animaties en transities die ik standaard inzet voor een verfijnde gebruikerservaring.
tags: [css, animatie, frontend]
---

Als frontend developer besteed ik veel aandacht aan kleine details die een interface tot leven brengen. Animaties zijn daar een groot onderdeel van — niet als versiersel, maar als communicatiemiddel. Een goede animatie vertelt de gebruiker wat er gebeurt.

Hier zijn de patronen die ik het meest gebruik.

## 1. Hover lift op cards

De simpelste manier om interactiviteit te signaleren is een subtiele lift op hover. Dit geeft het gevoel dat een element "klikbaar" is.

```css
.card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}
```

Het verschil met `translateY(-2px)` vs `-6px` is groot. Ik hou het bij `-4px` — genoeg om op te vallen, niet genoeg om afleidend te zijn.

## 2. Fade + slide voor modals en popovers

Wanneer een element verschijnt wil ik dat het "ergens vandaan komt". Een combinatie van `opacity` en `transform` werkt goed:

```css
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal {
  animation: fadeSlideIn 0.2s ease-out forwards;
}
```

De `forwards` fill-mode zorgt dat de eindstaat behouden blijft na de animatie.

## 3. Skeleton loading

In plaats van een spinner gebruik ik tegenwoordig skeleton screens. Ze geven een betere indruk van de uiteindelijke layout:

```css
.skeleton {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## 4. Staggered list animaties

Wanneer meerdere items tegelijk laden, laat ik ze met een kleine vertraging verschijnen. Dit geeft het gevoel van een vloeiende reveal:

```css
.list-item {
  opacity: 0;
  animation: fadeSlideIn 0.3s ease-out forwards;
}

.list-item:nth-child(1) { animation-delay: 0ms; }
.list-item:nth-child(2) { animation-delay: 60ms; }
.list-item:nth-child(3) { animation-delay: 120ms; }
```

In React doe ik dit via een inline `style` prop met `animationDelay: index * 60 + 'ms'`.

## Tot slot

> Animaties zijn pas goed wanneer je ze niet meer opmerkt — je voelt ze wel.

De beste animaties verbeteren de UX zonder op te vallen. Als iemand je animatie noemt, is hij waarschijnlijk te opvallend. De truc is restraint: kleine delays, zachte curves, en consistent gedrag over het hele product.
