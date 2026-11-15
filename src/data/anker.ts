// Die Anker des Systems. Reihenfolge = Reihenfolge in Navigation und Startseite.
// nav = kürzerer Name fürs Menü (optional).
// Neuer Anker: hier eintragen (icon = Name von lucide.dev/icons) und eine Seite src/pages/<slug>.astro anlegen.
export const anker = [
  { slug: 'haltung', gruppe: 'fundament', icon: 'compass', titel: 'Haltung', kurz: 'Ich schütze das Recht jedes Kindes, in Ruhe zu lernen. Als Schiedsrichter, nicht als Richter.' },
  { slug: 'selbstfuehrung', gruppe: 'fundament', icon: 'user-round-cog', titel: 'Selbstführung', kurz: 'Bevor ich die Klasse führe, führe ich mich selbst. Drei Rollen, innerer Status, Fokus durch Weglassen.' },
  { slug: 'beziehung', gruppe: 'fundament', icon: 'heart-handshake', titel: 'Beziehung', kurz: 'Regeln wirken nur, wenn Kinder gerne dazugehören. Schülerliebe heißt: das Beste wollen, nicht das Bequemste.' },
  { slug: 'regeln', gruppe: 'struktur', nav: 'Regeln', icon: 'scale', titel: 'Regeln & Konsequenzen', kurz: 'Vier klare Regeln, ruhige Stufen, jeder Tag ein Neubeginn.' },
  { slug: 'training', gruppe: 'struktur', icon: 'repeat', titel: 'Training', kurz: 'Was zählt, wird vorgezeigt, geübt und wiederholt. Erklären allein reicht nie.' },
  { slug: 'routinen', gruppe: 'struktur', icon: 'list-checks', titel: 'Routinen', kurz: 'Zehn feste Abläufe, die dem Alltag einen verlässlichen Takt geben.' },
  { slug: 'gewohnheiten', gruppe: 'kultur', icon: 'sprout', titel: 'Gewohnheiten', kurz: 'Kleine, wiederkehrende Rituale, die Wertschätzung zur Selbstverständlichkeit machen.' },
  { slug: 'standards', gruppe: 'kultur', nav: 'Standards', icon: 'target', titel: 'Hohe Standards', kurz: 'Ich traue der Klasse viel zu: bei Verhalten, Leistung und Ordnung.' },
  { slug: 'bilder', gruppe: 'kultur', nav: 'Bilder', icon: 'mountain-snow', titel: 'Bilder & Metaphern', kurz: 'Ich spreche in Bildern aus der Lebenswelt der Kinder. Unsere Klasse ist das Basislager, unsere Mission die Bergexpedition.' },
] as const;

export const gruppen = [
  { id: 'fundament', titel: 'Fundament', kurz: 'Wer ich bin und wie ich führe' },
  { id: 'struktur', titel: 'Struktur', kurz: 'Was gilt und wie es gelernt wird' },
  { id: 'kultur', titel: 'Kultur', kurz: 'Wie wir miteinander leben' },
] as const;

export type Anker = (typeof anker)[number];

// Wozu das alles: kein zehnter Anker, sondern das, wofür die neun da sind.
export const ziel = { slug: 'flow', icon: 'waves', titel: 'Flow', kurz: 'Wofür das ganze System da ist: eine Klasse, die ganz in ihrer Arbeit aufgeht.' } as const;

// Das System im Alltag: eine durchgespielte Stunde. Steht im Weiterblättern nach Flow.
export const stunde = { slug: 'stunde', icon: 'clock-3', titel: 'Eine Stunde im System', kurz: 'Fünfzig Minuten von der Tür bis zum Läuten. Wo welcher Anker greift.' } as const;

// Kompaktfassung zum Ausdrucken (nicht im Weiterblättern).
export const kompakt = { slug: 'auf-einer-seite', icon: 'scroll-text', titel: 'Auf einer Seite', kurz: 'Alle Anker mit ihrem Kernsatz auf einem A4-Blatt, zum Ausdrucken und Weitergeben.' } as const;
