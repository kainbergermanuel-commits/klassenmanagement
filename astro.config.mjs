// @ts-check
import { defineConfig } from 'astro/config';

// Veröffentlicht über GitHub Pages unter /klassenmanagement/.
// Ändert sich der Repo-Name oder kommt eine eigene Domain, nur diese zwei Zeilen anpassen.
export default defineConfig({
  site: 'https://kainbergermanuel-commits.github.io',
  base: '/klassenmanagement',
  trailingSlash: 'always',
});
