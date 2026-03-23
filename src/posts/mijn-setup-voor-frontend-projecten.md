---
title: Mijn setup voor nieuwe frontend projecten
date: 2026-01-05
description: Tools, structuur en conventies die ik gebruik als ik een nieuw project start — en waarom.
tags: [tooling, vite, workflow]
---

Ieder frontend project begint met een reeks keuzes: welke bundler, welke linter, hoe organiseer ik mijn bestanden? Na jaren experimenteren heb ik een setup die voor mij goed werkt. Hier deel ik hem.

## Vite als bundler

De keuze voor Vite is makkelijk. De cold start is razendsnel, HMR werkt vrijwel instant, en de configuratie is minimaal. Voor CRA of webpack is in nieuwe projecten nauwelijks nog een reden.

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

Meer heb je zelden nodig om te beginnen.

## Mappenstructuur

Ik werk met een feature-gebaseerde structuur zodra een project groter wordt, maar voor portfoliosites en kleinere apps hou ik het plat:

```
src/
├── components/
│   ├── layout/      # Header, Footer, etc.
│   ├── blocks/      # Sectie-componenten
│   └── ui/          # Herbruikbare UI (Button, Card)
├── pages/           # Route-level componenten
├── lib/             # Utilities, helpers
├── posts/           # Markdown blogposts
└── assets/          # Afbeeldingen, fonts
```

De grens tussen `blocks` en `pages` is soms vaag. Mijn vuistregel: als een component direct gekoppeld is aan een route, hoort het in `pages`. Anders in `blocks`.

## Tailwind CSS

Tailwind v4 heeft de configuratie verder vereenvoudigd. Geen `tailwind.config.js` meer nodig voor basisconfiguratie — alles via CSS custom properties.

Wat ik waardeer aan Tailwind:

- Snelle prototyping zonder context switching
- Design tokens zijn zichtbaar in de markup
- Geen dead CSS — je bouwt alleen wat je gebruikt

Wat ik minder fijn vind: lange class-strings worden snel onleesbaar. Ik groepeer ze dan met een library zoals `clsx`:

```js
import clsx from 'clsx'

const buttonClass = clsx(
  'px-4 py-2 rounded font-medium transition-colors',
  variant === 'primary' && 'bg-green-400 text-black',
  variant === 'ghost' && 'border border-white/20 text-white hover:bg-white/5'
)
```

## ESLint

Minimale ESLint config met de React-specifieke plugins voor hooks en fast refresh. Ik voeg TypeScript toe wanneer het project groter dan een paar bestanden wordt.

## Git conventies

Ik gebruik conventional commits — `feat:`, `fix:`, `chore:` — ook solo. Het helpt bij het teruglezen van de history en maakt CHANGELOGs automatisch genereren mogelijk.

---

Een goede setup is geen doel op zich. Het gaat erom dat je snel kunt werken zonder over tooling na te denken. Als je setup je in de weg zit, pas het dan aan.
