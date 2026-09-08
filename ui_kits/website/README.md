# UI-Kit: Website

Klickbare Rekonstruktion der öffentlichen Website des AI Transformation Collective. Es gab keine
bestehende Website als Vorlage — die Screens setzen ausschließlich die Foundations und Komponenten
dieses Design Systems um und zeigen, wie sie zusammenspielen. Inhalte sind Platzhaltertexte in der
Markenstimme, keine echten Personen oder Referenzen.

## Screens

| Datei | Screen | Zeigt |
| --- | --- | --- |
| `Home.jsx` | Landingpage | Teal-Hero mit Punkt-Motiv, Kennzahlenreihe, Themenfeld-Raster, Statement auf Navy, Expert:innen-Vorschau, Referenzen, CTA |
| `Network.jsx` | Netzwerk-Verzeichnis | Sticky Filterleiste (Suche, Pills, Switch), Karten-Raster, Detail-Dialog |
| `Insight.jsx` | Whitepaper-Artikel | Sand-Lesefläche, 760px Satzbreite, Pull-Quote, Kennzahlenblock, Weiterlesen-Karten |
| `Contact.jsx` | Kontakt | Vollständiges Formular mit Validierung, Erfolgs-Toast, Randspalte |
| `Shell.jsx` | Header + Footer | Sticky NavBar, Footer auf Navy |
| `App.jsx` | Router | Zustand für die Navigation zwischen den Screens |

## Interaktion

- Navigation im Header und Footer wechselt die Screens.
- Netzwerk: Suchfeld, Themenfeld-Pills und der Verfügbarkeits-Switch filtern; ein Klick auf eine Karte öffnet den Dialog.
- Kontakt: leere oder ungültige E-Mail zeigt den Feldfehler, ein gültiger Absenden-Klick den Toast.

## Platzhalter

Portraits sind bewusst nicht gesetzt — `ExpertCard` fällt auf Initialen auf Sand zurück. Echte
Porträts (4:5, leicht entsättigt) ersetzen sie 1:1 über die `photo`-Prop.
