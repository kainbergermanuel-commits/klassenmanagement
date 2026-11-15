# Klassenmanagement-System

Mein Klassenmanagement-System zum Nachlesen. Gebaut mit [Astro](https://astro.build),
veröffentlicht über GitHub Pages (`.github/workflows/deploy.yml` baut bei jedem Push auf `main`).

| Wo | Was |
|---|---|
| `src/data/anker.ts` | Liste der Anker (Reihenfolge, Titel, Kurztext) → Navigation und Startseite |
| `src/pages/<anker>.astro` | eine Seite pro Anker |
| `src/data/routinen.ts` | die zehn Routinenkarten |
| `src/components/Box.astro` | Kästen „Kernsatz“ und „Noch offen“ |
| `src/styles/global.css` | das gesamte Design |

Lokal: `npm install`, dann `npm run dev` → http://localhost:4321/klassenmanagement/
