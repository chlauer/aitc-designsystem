# AI Transformation Collective — Design System

Ein Expertennetzwerk für KI-Transformation. Kein Produktunternehmen, keine Beratungspyramide: rund
vierzig eigenständige Fachleute, die in kleinen Teams an Vorhaben von Organisationen arbeiten —
Strategie, Daten, Befähigung, Governance. Die Marke muss deshalb zwei Dinge gleichzeitig leisten:
sie muss nach Substanz und Urteil klingen (die Zielgruppe sind Geschäftsführungen und
Bereichsleitungen) und nach Menschen aussehen, nicht nach Technologie.

## Quellenlage

Für dieses Design System gab es **genau eine Quelle**:

- `uploads/Logo-AITC-Linkedin.png` — das quadratische LinkedIn-Profilbild (2000×2000 px): weißer
  Punktwirbel und Wortmarke „AI / TRANSFORMATION COLLECTIVE" auf Teal.

Es gab **keine** Website, kein Figma-File, keinen Codebase-Zugriff, keine Präsentationsvorlage,
keine Schriftlizenzen und keine bestehenden Texte. Alles außerhalb von Logo und Markenfarbe ist
daher **abgeleitet**, nicht rekonstruiert — und in den folgenden Punkten bewusst gesetzt:

| Entscheidung | Grundlage |
| --- | --- |
| Teal `#0097b2` | Pixelgenau aus dem Logo gemessen |
| Punkt-Motiv | Programmatisch aus dem Logo freigestellt (Wortmarke ausmaskiert) |
| Oswald als Display-Schrift | Nächstliegender Google-Fonts-Ersatz für die kondensierte Grotesk der Wortmarke |
| Archivo als Textschrift, IBM Plex Mono für Labels | Gesetzt, keine Quelle |
| Marineblau, Sand, Graustufen, Semantikfarben | Gesetzt, abgestimmt auf das Teal |
| Alle Texte in Screens, Slides und Cards | Platzhalter in der Markenstimme — keine echten Personen, Referenzen oder Zahlen |

**Offene Punkte** sind am Ende dieser Datei unter „Zu klären" gesammelt.

## Index

| Pfad | Inhalt |
| --- | --- |
| `styles.css` | Einziger Einstiegspunkt für Konsumenten — nur `@import`-Zeilen |
| `tokens/` | `fonts`, `colors`, `typography`, `spacing`, `elevation`, `motion`, `layout`, `base` |
| `components/` | React-Primitive in fünf Gruppen (siehe unten) |
| `ui_kits/website/` | Klickbare Website-Rekonstruktion, 4 Screens (`README.md` dort) |
| `templates/statement-deck/` | 16:9-Deck, 8 Slide-Typen |
| `templates/whitepaper/` | Druckfertiges Fließdokument mit Kolumnentitel |
| `templates/social-post/` | Vier 1080×1080-Kacheln für LinkedIn |
| `guidelines/` | 23 Specimen-Cards für den Design-System-Tab |
| `assets/` | Logo-Varianten, Punkt-Motiv, Icon-Shim |
| `thumbnail.html` | Kachel des Systems auf der Startseite |
| `SKILL.md` | Agent-Skill-Kopf für die Nutzung in Claude Code |

## Komponenten

**`components/core/`** — Button, IconButton, Badge, Tag, Card
**`components/forms/`** — Field, Input, Textarea, Select, Checkbox, Radio, Switch
**`components/feedback/`** — Dialog, Toast, Tooltip
**`components/navigation/`** — NavBar, Tabs
**`components/brand/`** — Eyebrow, SectionHeading, StatFigure, PullQuote, ExpertCard, TopicTile,
TestimonialCard, LogoLockup, DotMotif

Jede Komponente hat `<Name>.jsx`, `<Name>.d.ts` (Props-Kontrakt) und `<Name>.prompt.md`
(Einsatzregel plus Beispiel). Styling läuft ausschließlich über Klassen mit `aitc-`-Präfix, die in
der jeweiligen Gruppen-CSS liegen und Werte nur aus Tokens ziehen — keine CSS-in-JS, keine npm-Abhängigkeiten.

### Bewusste Zusätze

Da keine Quelle eine Komponenten-Inventur vorgab, ist das Set frei gesetzt. Die Gruppe
`components/brand/` geht über einen Standardsatz hinaus und beantwortet, was ein Netzwerk braucht:

- **ExpertCard** — Profilkarten waren eine explizite Anforderung („Porträts zentral").
- **TopicTile** — Themenfelder als Raster, ebenfalls angefordert.
- **TestimonialCard** — Kund:innen-Referenzen, ebenfalls angefordert.
- **StatFigure / PullQuote** — die beiden Stellen, an denen die Marke laut wird (siehe Visual Foundations).
- **DotMotif / LogoLockup** — damit das einzige vorhandene Grafikelement korrekt eingesetzt wird.

---

## Content Fundamentals

**Sprache: Deutsch.** Ansprache im **Sie**. Über uns wird im **wir** gesprochen, nie in der dritten
Person („Das Collective berät …" ist falsch). Es gibt kein „man".

**Grundhaltung: warm und meinungsstark.** Warm heißt: keine Distanz, keine Floskeln, wir sagen was
wir tun und was wir nicht tun. Meinungsstark heißt: wir nehmen eine Position ein und widersprechen
auch dem Auftrag, wenn er falsch gestellt ist. Beides zusammen ergibt einen Ton, der eher nach
erfahrener Kollegin klingt als nach Agentur.

**Sätze sind kurz bis mittellang und aussagend.** Ein Gedanke pro Satz. Keine Aufzählungsketten mit
Adjektiven, keine Dreiklänge („schnell, sicher, skalierbar").

**Konkret vor abstrakt.** Zahlen, Fristen und Rollen statt Kompetenzversprechen:

> „45 Minuten, eine ehrliche Einordnung. Sie schildern das Vorhaben, wir sagen, ob und wie wir
> helfen können — auch wenn die Antwort ‚nicht wir' lautet."

> „Sechs Interviews, eine Datenprobe, eine Priorisierung, die die Geschäftsführung unterschreibt."

**Was wir nicht schreiben** — Beispiele, die abgelehnt gehören:
„ganzheitliche KI-Lösungen", „wir begleiten Sie auf Ihrer Journey", „Empowerment", „state of the
art", „Innovationstreiber", „disruptiv", „AI-first", „schlüsselfertig". Keine Ausrufezeichen. Keine
rhetorischen Fragen als Überschrift. Kein „Warum X wichtig ist"-Meta-Text.

**Casing.** Überschriften und Slide-Titel stehen in **Versalien** (das leistet die kondensierte
Display-Schrift, nicht der Text selbst — geschrieben wird normal, `text-transform` macht die
Versalien). Eyebrows und Labels: Versalien mit 0.14em Laufweite. Lauftext: normale deutsche
Groß-/Kleinschreibung, niemals durchgehende Versalien über mehr als sechs Wörter.

**Gendern:** Doppelpunkt-Form (`Expert:innen`, `Auftraggeber:innen`), konsequent. Wo sie stört,
wird umformuliert („das Team", „die Fachbereiche").

**Zahlen:** Ziffern ab 10, Wörter darunter, außer wenn die Zahl der Blickfang ist — dann immer
Ziffern („3 Köpfe pro Team" auf einer Kennzahlkachel). Prozente mit Zeichen, Zeiträume abgekürzt
(„6 Wo."). Deutsche Dezimal- und Tausenderzeichen.

**Emoji: nein.** In keinem Kanal, auch nicht auf LinkedIn. Unicode-Pfeile (→) und Bindestriche
übernehmen die Arbeit, die Emoji sonst machen würden.

**CTA-Formulierungen:** „Gespräch vereinbaren", „Termin anfragen", „Profil einreichen", „PDF laden",
„Alle Expert:innen". Verb plus Objekt, nie „Mehr erfahren" allein, nie „Jetzt" als Verstärker
(Ausnahme: knappe Social-Kacheln).

---

## Visual Foundations

### Grundgedanke

Das Logo gibt zwei Dinge her: ein sattes Teal und einen Punktwirbel. Daraus wird ein System, das
über **Typografie und Fläche** wirkt, nicht über Effekte. Die Marke ist überwiegend ruhig; sie wird
an genau zwei Stellen laut — bei **Kennzahlen** und bei **Statements**. Alles andere ist
zurückgenommen, damit diese beiden Momente tragen.

### Farbe

- **Teal `#0097b2`** ist Primärfarbe und Flächenfarbe. Auf Hell trägt es Buttons, Regeln, Eyebrows
  und Einheiten; als Vollfläche trägt es Hero und Abschluss-Sektion.
- **Marineblau `#06202d`** ist Textfarbe (nicht Schwarz) und die zweite Vollfläche — für Statements
  und Footer.
- **Sand `#f5ede1`** ist die **großflächige Lesefläche**: Whitepaper, Artikel, textlastige
  Sektionen. Sand und Weiß wechseln sich als Sektionshintergründe ab.
- **Höchstens zwei Flächenfarben pro Dokument** neben Weiß. In einem Deck: Teal für Auftakt und
  Abschluss, Navy für das Statement, Sand für Kennzahlen — mehr nicht.
- Semantikfarben (Grün, Amber, Rot) sind ausschließlich funktional. Nie dekorativ, nie als Akzent.
- Dunkelmodus ist gleichwertig: dieselben semantischen Aliase unter `[data-theme="dark"]`,
  Seitenfläche `--navy-950`, Sand-Aliase fallen auf Navy zurück (warme Flächen funktionieren im
  Dunkelmodus nicht).

### Typografie

- **Display: Oswald** (Ersatz, siehe Quellenlage), kondensiert, in Versalien, `letter-spacing:-.015em`,
  Zeilenhöhe **0.92** bei großen Graden. Gewicht 500 für Titel, **300 für Statements** — der leichte
  Schnitt in großem Grad ist das Erkennungsmerkmal der Marke.
- **Text: Archivo**, 17px Basis, Zeilenhöhe 1.6, Satzbreite **66ch** (Lauftext) bzw. 34ch (Lead).
- **Labels: IBM Plex Mono**, 12px, Versalien, 0.14em — Eyebrows, Formularlabels, Tabs, Kennziffern,
  Datumsangaben. Diese Mono-Ebene ist der zweite Erkennungsanker.
- Keine Serif im System. Keine vierte Schrift.

### Layout

- Container 1240px, Lauftext-Container 760px, Rand `clamp(1.25rem,4vw,3rem)`.
- 12-Spalten-Raster, Gutter 24px. Karten-Raster: 3 oder 4 Spalten, nie 5.
- Sektionsabstand `clamp(4rem,8vw,7.5rem)` — großzügig, damit Vollflächen als Blöcke lesbar bleiben.
- **Fixiert** ist nur der Header (72px, sticky) und in Verzeichnissen die Filterleiste (sticky
  unterhalb des Headers). Nichts sonst klebt.
- Vollflächige Sektionen laufen randlos über die gesamte Breite; der Inhalt bleibt im Container.

### Hintergründe

Keine Fotos als Vollflächen, keine Gradienten, keine Texturen, keine handgezeichneten
Illustrationen. Hintergründe sind **Farbflächen** — Weiß, Sand, Teal, Navy. Das einzige Grafikelement
ist der **Punktwirbel** aus dem Logo: maximal einer pro Sektion, immer angeschnitten (aus einer
Ecke herauslaufend), Deckkraft **0.2–0.35**, immer hinter dem Inhalt, nie über Text. Auf Teal und
Navy in Weiß, auf Hell in Teal.

Bildmaterial sind **Porträts**: 4:5, leicht entsättigt (`filter:saturate(.85)`), natürliches Licht,
kühl-neutral — kein Grain, keine Duotone-Einfärbung, keine Schwarzweiß-Ästhetik. Wo Porträts fehlen,
zeigen Karten Initialen in Display-Schrift auf Sand. **Es gibt bislang keine echten Porträts im
System** (siehe „Zu klären").

### Rahmen, Radien, Karten

- Radien sind klein: 2 / 3 / 6 / 12 / 20px, `999px` nur für Pills, `50%` nur für Avatare.
  Buttons haben **3px** — bewusst kantig.
- Standardkarte: weiße Fläche, **1px Haarlinie** `--border-1`, **6px Radius**, 24px Padding, **kein
  Schatten**. Schatten erscheint erst im Hover.
- Die **3px-Teal-Regel** ist der Sektionsmarker: über einer Karte (32px breit), über einer Kennzahl
  (volle Breite), über einem Testimonial (Oberkante). Sie ersetzt dekorative Icons und ist das
  einzige zugelassene „Akzent"-Element.
- Trennlinien sind 1px `--border-1`; auf Sand `--sand-300`.

### Schatten

Navy-getönt, nie schwarz: `--shadow-1` bis `--shadow-4`. Einsatz streng begrenzt — `shadow-2` für
freistehende Karten in Overlays, `shadow-3` im Hover interaktiver Karten, `shadow-4` für Dialoge.
Ruheflächen tragen keinen Schatten. Innenschatten gibt es nur als Haarlinie (`--shadow-inset-hairline`).

### Zustände

- **Hover, Buttons:** dunklere Fläche (`teal-500 → teal-600`), keine Aufhellung, keine Opazität.
- **Hover, sekundär/ghost:** Füllung `--fill-hover` (5 % Navy) statt Farbwechsel.
- **Hover, Karten:** Rahmen wird Teal, `shadow-3`, `translateY(-2px)` über 200ms.
- **Hover, Links:** von `teal-700` auf `teal-500`, Unterstreichung bleibt.
- **Press:** ein Pixel nach unten (`translateY(1px)`) plus nächste dunklere Stufe. Kein Skalieren,
  kein Schrumpfen.
- **Focus:** 2px Outline in `--focus-ring` mit 2px Offset, überall sichtbar; Formularfelder
  zusätzlich mit `--shadow-focus`.
- **Disabled:** Opazität 0.42, `cursor:not-allowed`, keine Farbänderung.

### Bewegung

130 / 200 / 320ms mit `--ease-out` (`cubic-bezier(.2,.8,.3,1)`). Overlays betreten die Bühne mit
`--ease-entrance` und 12px Aufwärtsbewegung. **Kein Bounce, kein Overshoot, kein Federn.** Fades und
kurze Verschiebungen, nichts sonst. Alle Dauern fallen unter `prefers-reduced-motion` auf 0.

### Transparenz und Blur

Nur an zwei Stellen: der sticky Header (88 % Seitenfarbe, `backdrop-filter:blur(12px)`) und die
sticky Filterleiste (92 %, 10px). Sonst nichts — keine Glasflächen, keine milchigen Karten. Scrims
über Dialogen sind deckendes Navy bei 55 % Alpha, ohne Blur. Schutzgradienten hinter Text auf Bildern
gibt es nicht; stattdessen liegt Text auf einer Farbfläche neben dem Bild.

---

## Iconography

**Substitution, bitte prüfen:** Das System hat keinen eigenen Icon-Satz — die einzige Quelle war das
Logo. Verwendet wird **[Lucide](https://lucide.dev)** über CDN
(`https://unpkg.com/lucide@0.474.0/dist/umd/lucide.js`), weil die Strichstärke (1.5–1.6px), die
offenen Formen und die kantigen Enden zur kondensierten Typografie und den kleinen Radien passen.
Kein Icon-Font, keine PNG-Icons, kein SVG-Sprite im Projekt.

- **Einbindung:** `assets/icons/aitc-icons.js` stellt `window.AITCIcon` bereit — ein React-Wrapper
  um den Lucide-UMD-Build. Aufruf: `<Icon name="Compass" size={28} strokeWidth={1.5} />`.
- **Größen:** 16px (in Buttons und Badges), 18px (Formularfelder), 20px (IconButton), 28px
  (Themenfeld-Kacheln). Strichstärke 1.6 im UI, 1.5 bei 28px.
- **Farbe:** Icons erben `currentColor`. In Kacheln und neben Eyebrows Teal, im UI `--text-2`.
- **Menge:** Icons sind Orientierung, keine Dekoration. Eine Kachel bekommt eines, eine Karte keines.
  Sektionen tragen die 3px-Regel statt eines Icons.
- **Verwendete Namen** in Screens und Cards: `ArrowRight`, `Search`, `SlidersHorizontal`, `Send`,
  `Download`, `MoreHorizontal`, `X`, `Compass`, `Database`, `Users`, `Scale`, `Workflow`,
  `MessagesSquare`, `Filter`, `Share2`.
- **Emoji: nie.** Unicode ist auf `→` (CTA-Pfeil), `·` (Trenner) und `×` (Schließen im Tag/Toast)
  begrenzt.
- **Logo als Icon:** `assets/logo-aitc-square.png` ist die einzige zugelassene Avatar-/Favicon-Form.
  Der Punktwirbel wird nie als Icon in Textgröße eingesetzt.

## Assets

| Datei | Verwendung |
| --- | --- |
| `assets/logo-aitc-square.png` | Original-Upload: weiß auf Teal, quadratisch — Avatar, Favicon, Social-Profil |
| `assets/logo-aitc-white.png` | Weiß auf Transparenz — auf Teal, Navy und Fotos |
| `assets/logo-aitc-teal.png` | Teal auf Transparenz — auf Weiß und Sand |
| `assets/motif-dots-white.png` | Freigestellter Punktwirbel, weiß — Hintergrundmotiv auf Teal/Navy |
| `assets/motif-dots-teal.png` | Derselbe Wirbel in Teal — auf hellen Flächen |
| `assets/icons/aitc-icons.js` | React-Wrapper um Lucide (CDN) |

Die drei abgeleiteten Dateien entstanden programmatisch aus dem Upload (Alpha-Extraktion über die
Luminanz, Ausmaskierung der Wortmarke). Es wurde **nichts nachgezeichnet**. Eine echte Vektorfassung
fehlt (siehe „Zu klären").

---

## Zu klären

1. **Schriftlizenzen.** Oswald, Archivo und IBM Plex Mono sind Google-Fonts-Ersatz. Gibt es eine
   lizenzierte Hausschrift — insbesondere die Schrift der Wortmarke —, ersetzen wir
   `tokens/fonts.css` durch selbst gehostete `@font-face`-Regeln.
2. **Logo als Vektor.** Für Print, große Formate und einfarbige Anwendungen brauchen wir das SVG
   oder EPS. Die PNG-Varianten sind eine Notlösung.
3. **Porträts.** Alle Expert:innen-Karten zeigen Initialen. Sobald Fotos vorliegen (4:5,
   einheitliches Licht), tauschen wir sie über die `photo`-Prop ein.
4. **Echte Inhalte.** Themenfelder, Kennzahlen, Referenzen, Namen und Städte sind Platzhalter in der
   Markenstimme. Sie sollten vor jeder Verwendung ersetzt werden.
5. **Zweite Sprache.** Aktuell nur Deutsch. Für Englisch bräuchten wir eine Entscheidung zur Ansprache
   und zu den Begriffen (Themenfelder, Kollektiv, Netzwerk).
6. **Icon-Satz.** Lucide ist gesetzt, nicht belegt. Wenn ihr einen anderen Satz nutzt, tauschen wir
   den Shim aus.
