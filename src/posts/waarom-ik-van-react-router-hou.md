---
title: Waarom ik van React Router hou (en wanneer niet)
date: 2026-02-18
description: React Router v6 heeft een hoop veranderd. Dit is hoe ik het inzet en waar ik op let.
tags: [react, routing, spa]
---

React Router is voor mij een vaste plek in de toolbox. Maar ik zie ook collega's die het te ver doortrekken, of juist features missen die er al tijden inzitten. Tijd voor een eerlijke blik.

## Wat ik goed vind aan v6

De grootste verbetering in v6 is de component-based routing. In v5 had je `<Switch>`, in v6 is dat `<Routes>` geworden. Klinkt triviaal, maar het gedrag is veel beter. Routes worden nu altijd exact gematcht tenzij je `*` gebruikt.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/:slug" element={<BlogPost />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

Schoon, leesbaar en voorspelbaar.

## Nested routes

Nested routes zijn krachtig zodra je layouts hergebruikt. Stel je hebt een dashboard met een sidebar:

```jsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<Overview />} />
  <Route path="settings" element={<Settings />} />
  <Route path="profile" element={<Profile />} />
</Route>
```

De `<DashboardLayout>` rendert een `<Outlet />` waar de child route in geplaatst wordt. Zo hoef je de sidebar niet in elk scherm opnieuw te schrijven.

## useNavigate vs Link

Ik gebruik `<Link>` voor navigatie die de gebruiker initieert — knoppen, menu-items, kaarten. Voor programmatische navigatie (na een formulier submit, na een API-call) gebruik ik `useNavigate`:

```js
const navigate = useNavigate()

async function handleSubmit() {
  await saveData()
  navigate('/dashboard', { replace: true })
}
```

De `replace: true` optie vervangt de huidige history entry. Handig bij een login redirect zodat de gebruiker niet terug kan naar het loginscherm.

## Wanneer ik het niet gebruik

Bij kleine projecten of tools zonder echte navigatie gebruik ik geen router. Een `useState` met conditionale rendering is dan ruim voldoende en heeft geen dependency overhead.

Ook bij Next.js gebruik ik niet React Router — daar heeft het framework zijn eigen file-based router die beter integreert met SSR en pre-rendering.

## Wat ik mis

Soms mis ik betere out-of-the-box oplossingen voor:

- **Data loading** — met Remix (van dezelfde makers) is dit opgelost via loaders, maar in vanilla React Router heb je dat niet
- **Scroll restoration** — standaard springt de pagina niet terug naar boven bij navigatie, dat moet je zelf implementeren

Beide zijn op te lossen, maar ik vind het iets dat direct in de router zou moeten zitten.

---

Voor de meeste portfolio- en applicatieprojecten blijft React Router mijn go-to. Het is stabiel, goed gedocumenteerd, en de community is groot genoeg dat je voor elk probleem een oplossing vindt.
