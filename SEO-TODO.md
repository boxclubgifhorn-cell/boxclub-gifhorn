# SEO Aktionsplan — Boxclub Gifhorn

> Erstellt: 25. Juni 2026 | Letztes Update: 25. Juni 2026

## ✅ Erledigt

- [x] H1 Startseite gekürzt (127→55 Zeichen)
- [x] `llms.txt` erstellt (maschinenlesbare Vereins-Info für KI-Suchmaschinen)
- [x] `robots.txt` — GPTBot, ClaudeBot, PerplexityBot explizit erlaubt
- [x] `llms.txt` im Layout als `<link rel="alternate">` verknüpft
- [x] Title "Leistungen" gekürzt (82→70 Zeichen)
- [x] Title "Mitgliedsbeiträge" — Preis-Info "ab 15 €/Monat" ergänzt
- [x] Kursplan H1: "Trainingsplan" → "Trainingszeiten — Boxen & Kampfsport in Gifhorn"
- [x] Mitgliedsbeiträge H1: → "Mitgliedsbeiträge — Kampfsport ab 15 €/Monat"
- [x] FAQ-Schema auf Mitgliedsbeiträge sauber via Layout `jsonLd` Prop
- [x] Landing Page: `/selbstverteidigung-gifhorn`
- [x] Landing Page: `/boxen-kinder-gifhorn`
- [x] Landing Page: `/mma-gifhorn`
- [x] Landing Page: `/kickboxen-gifhorn`
- [x] Service-Kacheln auf Startseite klickbar gemacht (div→a, link-Feld in YAMLs)

---

## 🟡 Offen — Kurzfristig

### Trainer-Profile ausbauen
- **Was:** Alle Trainer mit Foto, Disziplin, Kurzbio und ggf. Lizenzen listen
- **Warum:** E-E-A-T Signal (Expertise, Trust), mehr Content
- **Fotos vorhanden:** `artur_reis.jpg`, `sartison.jpg`, `svenja.jpg` (in `/public/uploads/`)
- **Braucht Input:** Ja — Disziplin, kurze Bio, Lizenzen pro Trainer
- **Aufwand:** 30 min (wenn Texte vorliegen)
- **Datei:** `src/content/trainer/` — je eine .md-Datei pro Trainer anlegen

### 301-Redirect non-www → www
- **Was:** `boxclub-gifhorn.de` soll per 301 auf `www.boxclub-gifhorn.de` weiterleiten
- **Warum:** Canonical-Konsistenz, kein Duplicate Content
- **Braucht Input:** Nein
- **Aufwand:** 5 min (Vercel Redirect-Config oder `astro.config.mjs`)
- **Wo:** `vercel.json` oder Vercel Dashboard → Domains

---

## 🟡 Offen — Mittelfristig (1-3 Monate)

### Weitere Landing Pages
- [ ] `/frauenfitness-gifhorn` — "Fitness Frauen Gifhorn", "Frauensport Gifhorn"
- [ ] `/judo-kinder-gifhorn` — "Judo Kinder Gifhorn", "Judo ab 6 Jahren"
- **Aufwand:** je 30 min pro Seite
- **Template:** Gleiche Struktur wie die bestehenden LPs (Hero, Content, FAQ mit Schema)

### Blog starten
- **Was:** `/blog`-Bereich mit Fachartikeln
- **Warum:** Long-Tail-Keywords, Freshness-Signal, Topical Authority, AI-SEO
- **Artikel-Ideen:**
  - [ ] "Was ist MMA? Ein Einsteiger-Guide" (500-1000 Suchen/Monat!)
  - [ ] "Ab welchem Alter sollten Kinder Boxen lernen?"
  - [ ] "Boxen vs. Kickboxen: Was ist der Unterschied?"
  - [ ] "5 Gründe warum Boxtraining dein Selbstbewusstsein stärkt"
  - [ ] "Wie läuft ein Probetraining beim Boxclub Gifhorn ab?"
- **Aufwand:** Blog-Setup ~1h, dann je 30-60 min pro Artikel
- **Technik:** Astro Content Collection `src/content/blog/`, dynamische Route `/blog/[slug].astro`

### Google Business Profile optimieren
- **Was:** Maps-Eintrag aktiv pflegen
- **Braucht:** Zugang zum Google Business Profile
- **Aktionen:**
  - [ ] Alle Disziplinen als "Services" eintragen
  - [ ] Regelmäßig Posts (1x/Woche: Trainingsfotos, Events)
  - [ ] Bewertungen aktiv sammeln (QR-Code in der Halle)
  - [ ] Öffnungszeiten = Trainingszeiten aktuell halten
  - [ ] Fotos der Halle, Ring, Trainer hochladen

### Breadcrumb-Schema auf allen Seiten
- **Was:** `BreadcrumbList` JSON-LD auf Kontakt, Kursplan, Galerie, News etc.
- **Warum:** Rich Snippets in Google (Breadcrumb-Pfad unter dem Titel)
- **Aufwand:** 30 min
- **Seiten die es noch brauchen:** Kontakt, Kursplan, Galerie, News, Anmeldung, Sponsoren

---

## 🟢 Offen — Langfristig (3-6 Monate)

### Stadt-Seiten (Programmatic SEO)
- [ ] `/kampfsport-wolfsburg` — "Von Wolfsburg sind es nur 20 min zu uns..."
- [ ] `/boxen-braunschweig` — Gleiches Prinzip
- [ ] `/kampfsport-landkreis-gifhorn` — Für umliegende Dörfer
- **WICHTIG:** Kein Doorway-Page-Spam! Jede Seite braucht einzigartigen lokalen Content
- **Aufwand:** je 1-2h

### Glossar "Kampfsport A-Z"
- **Was:** 20+ Einzelseiten die Kampfsport-Begriffe erklären
- **Warum:** Topical Authority, AI-SEO (Definitionen = perfektes Zitat-Format)
- **Beispiel-Begriffe:** Jab, Cross, Uppercut, Sparring, Grappling, Takedown, Guard, Kata, Randori, Ippon
- **Aufwand:** ~20 min pro Begriff, Template einmal bauen
- **Technik:** Content Collection `src/content/glossar/`, Route `/glossar/[slug].astro`

### Video-Content + YouTube
- **Was:** Kurze Trainings-Clips (30-60 Sek) auf YouTube + eingebettet
- **Warum:** YouTube = zweitgrößte Suchmaschine, Video-Transkripte werden indexiert
- **Aufwand:** Vereins-Aufgabe (Handy-Videos im Training aufnehmen)

### Backlink-Aufbau
- [ ] Lokalpresse (Gifhorner Rundschau, Aller-Zeitung)
- [ ] Sportverbände (Niedersächsischer Boxverband, LSB)
- [ ] Schulkooperationen (AG-Angebote → Verlinkung)
- [ ] Verzeichnisse (Sportvereine Gifhorn, Kampfsport-Verzeichnisse)

---

## Technische Notizen

- **Tech-Stack:** Astro v4.16.19 (SSG), Tailwind CSS, Vercel Hosting
- **Content:** YAML-basierte Content Collections
- **Schema:** Organization + SportsClub + LocalBusiness + FAQPage (global), BreadcrumbList (pro Seite)
- **Deployment:** Push zu `boxclubgifhorn-cell/boxclub-gifhorn` → Vercel auto-deploy
- **SEO-Score (Stand 25.06.2026):** 78/100 → Ziel: 90/100
- **SERP-Position:** #1 für "Boxen Gifhorn" ✅
