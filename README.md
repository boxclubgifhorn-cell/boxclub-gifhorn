# Boxclub Gifhorn e.V. — Website

Astro-basierte Vereinswebsite mit Decap CMS (Self-Service-Editor).

**Live:** https://om-boxclub-gifhorn.vercel.app  (perspektivisch: https://boxclub-gifhorn.de)

## Inhalte selbst bearbeiten (Decap CMS)

Nach dem Deployment ist der Editor erreichbar unter:

- **https://om-boxclub-gifhorn.vercel.app/admin**

Login per GitHub. Berechtigte GitHub-Accounts werden in der Allowlist
des OAuth-Proxy geführt.

Bearbeitbar sind unter anderem:

- Startseite (Hero, Benefits, FAQ, CTA)
- Leistungen / Kurse
- Mitgliedsbeiträge + FAQ
- Trainer:innen
- Kursplan (inkl. Wochenstundenplan)
- News, Galerie, Sponsoren
- Downloads (z.B. Beitrittserklärung)
- Rechtliche Seiten (Impressum, Datenschutz, Satzung)
- Globale Vereinsdaten (Telefon, Adresse, Social, WhatsApp)

## Lokal entwickeln

```bash
npm install
npm run dev          # Astro dev server (http://localhost:4321)
npx decap-server     # paralleler CMS-Proxy (in zweitem Terminal)
```

Lokales CMS unter `http://localhost:4321/admin/`.

## Build

```bash
npm run build
```

Output: `dist/`. Vercel baut automatisch bei jedem Push auf `main`.

## Tech-Stack

- [Astro](https://astro.build) (Static-Site)
- [Tailwind CSS](https://tailwindcss.com)
- [Decap CMS](https://decapcms.org) (GitHub-basierter Editor)
- Deployment: [Vercel](https://vercel.com)

## Struktur

```
src/
  components/   Astro-Komponenten (Header, Footer, Hero, …)
  content/      Vereinsinhalte (YAML/Markdown via Decap editierbar)
  layouts/      Layout.astro
  pages/        Routes (index, kursplan, kontakt, …)
public/
  admin/        Decap CMS Admin-UI (config.yml, index.html)
  uploads/      Bilder & PDFs aus dem CMS
```
