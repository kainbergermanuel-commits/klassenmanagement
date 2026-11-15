// Die Anker des Systems. Reihenfolge = Reihenfolge in Navigation und Startseite.
// Neuer Anker: hier eintragen und eine Seite src/pages/<slug>.astro anlegen.
export const anker = [
  { slug: 'haltung', titel: 'Haltung', kurz: 'Ich schütze das Recht jedes Kindes, in Ruhe zu lernen. Als Schiedsrichter, nicht als Richter.' },
  { slug: 'regeln', titel: 'Regeln & Konsequenzen', kurz: 'Wenige klare Regeln, ruhige Stufen, jeder Tag ein Neubeginn.' },
  { slug: 'training', titel: 'Training', kurz: 'Was zählt, wird vorgezeigt, geübt und wiederholt. Erklären allein reicht nie.' },
  { slug: 'routinen', titel: 'Routinen', kurz: 'Zehn feste Abläufe, die dem Alltag einen verlässlichen Takt geben.' },
  { slug: 'gewohnheiten', titel: 'Gewohnheiten', kurz: 'Kleine, wiederkehrende Rituale, die Wertschätzung zur Selbstverständlichkeit machen.' },
  { slug: 'standards', titel: 'Hohe Standards', kurz: 'Ich traue der Klasse viel zu: bei Verhalten, Leistung und Ordnung.' },
  { slug: 'bilder', titel: 'Bilder & Metaphern', kurz: 'Ich spreche in Bildern aus der Lebenswelt der Kinder. Unser Bild: die Bergexpedition.' },
] as const;

export type Anker = (typeof anker)[number];
