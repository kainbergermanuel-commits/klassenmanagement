// Die Anker des Systems. Reihenfolge = Reihenfolge in Navigation und Startseite.
// Neuer Anker: hier eintragen (icon = Name von lucide.dev/icons) und eine Seite src/pages/<slug>.astro anlegen.
export const anker = [
  { slug: 'haltung', icon: 'compass', titel: 'Haltung', kurz: 'Ich schütze das Recht jedes Kindes, in Ruhe zu lernen. Als Schiedsrichter, nicht als Richter.' },
  { slug: 'regeln', icon: 'scale', titel: 'Regeln & Konsequenzen', kurz: 'Vier klare Regeln, ruhige Stufen, jeder Tag ein Neubeginn.' },
  { slug: 'training', icon: 'repeat', titel: 'Training', kurz: 'Was zählt, wird vorgezeigt, geübt und wiederholt. Erklären allein reicht nie.' },
  { slug: 'routinen', icon: 'list-checks', titel: 'Routinen', kurz: 'Zehn feste Abläufe, die dem Alltag einen verlässlichen Takt geben.' },
  { slug: 'gewohnheiten', icon: 'sprout', titel: 'Gewohnheiten', kurz: 'Kleine, wiederkehrende Rituale, die Wertschätzung zur Selbstverständlichkeit machen.' },
  { slug: 'standards', icon: 'target', titel: 'Hohe Standards', kurz: 'Ich traue der Klasse viel zu: bei Verhalten, Leistung und Ordnung.' },
  { slug: 'bilder', icon: 'mountain-snow', titel: 'Bilder & Metaphern', kurz: 'Ich spreche in Bildern aus der Lebenswelt der Kinder. Unser Bild: die Bergexpedition.' },
] as const;

export type Anker = (typeof anker)[number];
