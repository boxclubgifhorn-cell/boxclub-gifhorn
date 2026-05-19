import { defineCollection, z } from 'astro:content';

// -----------------------------------------------------------------------------
// Trainer (mehrere Einträge)
// -----------------------------------------------------------------------------
const trainer = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    disziplin: z.string(),
    reihenfolge: z.number().default(99),
    foto: z.string().optional(),
    kurzbio: z.string().optional(),
  }),
});

// -----------------------------------------------------------------------------
// Kursplan (Single-Entry)
// -----------------------------------------------------------------------------
const kursplan = defineCollection({
  type: 'data',
  schema: z.object({
    titel: z.string().default('Trainingsplan'),
    beschreibung: z.string().optional(),
    bild: z.string().optional(),
    bild_alt: z.string().optional(),
    pdf: z.string().optional(),
    stand: z.string().optional(),
    hinweis: z.string().optional(),
    eintraege: z.array(z.object({
      tag: z.enum(['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag']),
      zeit: z.string(),
      kurs: z.string(),
      zielgruppe: z.string().optional(),
      farbe: z.enum(['neutral', 'orange', 'blau', 'gold', 'rot']).default('neutral'),
      hinweis: z.string().optional(),
    })).default([]),
  }),
});

// -----------------------------------------------------------------------------
// Globale Vereinsdaten (Single-Entry) — verwendet in Header, Footer, Contact, Impressum
// -----------------------------------------------------------------------------
const global = defineCollection({
  type: 'data',
  schema: z.object({
    firma_name: z.string().default('Boxclub Gifhorn e.V.'),
    telefon: z.string().default('05371 7599679'),
    telefon_link: z.string().default('+4953717599679'),
    email: z.string().default('info@boxclub-gifhorn.de'),
    adresse: z.string().default('Cardenap 2-4, 38518 Gifhorn'),
    adresse_hinweis: z.string().optional(),
    brand_subtitel: z.string().optional(),
    footer_brand_text: z.string().optional(),
    instagram: z.string().optional(),
    whatsapp: z.string().optional(),
    whatsapp_link: z.string().optional(),
    whatsapp_text: z.string().optional(),
  }),
});

// -----------------------------------------------------------------------------
// Startseite (Single-Entry) — Hero, Benefits, FAQ, CTA, Contact-Header
// -----------------------------------------------------------------------------
const startseite = defineCollection({
  type: 'data',
  schema: z.object({
    hero: z.object({
      badge: z.string().default('Seit über 50 Jahren'),
      headline_zeile1: z.string().default('Ring frei.'),
      headline_zeile2_rot: z.string().default('Für dein Training,'),
      headline_zeile3: z.string().default('deinen Charakter,'),
      headline_zeile4_gold: z.string().default('deine Stärke.'),
      subheadline: z.string(),
      cta_primary_label: z.string().default('Trainingszeiten ansehen'),
      cta_secondary_label: z.string().default('Unsere Leistungen'),
      bild: z.string().optional(),
      bild_seitlich: z.string().optional(),
      stats: z.array(z.object({
        wert: z.string(),
        label_oben: z.string(),
        label_unten: z.string(),
        farbe: z.enum(['orange', 'gold']).default('orange'),
      })).default([]),
    }),
    claim: z.object({
      kicker: z.string().optional(),
      headline: z.string().optional(),
      text: z.string().optional(),
    }).optional(),
    benefits: z.object({
      kicker: z.string().default('Warum wir'),
      headline_part1: z.string().default('Was uns'),
      headline_part2_gold: z.string().default('auszeichnet'),
      subtitle: z.string().default('Mehr als ein Verein — eine Familie, die dich stärker macht.'),
      items: z.array(z.object({
        title: z.string(),
        description: z.string(),
      })).default([]),
    }),
    faq: z.object({
      kicker: z.string().default('FAQ'),
      headline_part1: z.string().default('Häufig gestellte'),
      headline_part2_orange: z.string().default('Fragen'),
      subtitle: z.string().default('Du hast Fragen? Hier findest du Antworten auf die häufigsten Fragen rund um unser Training und den Verein.'),
      items: z.array(z.object({
        frage: z.string(),
        antwort: z.string(),
      })).default([]),
    }),
    cta: z.object({
      kicker: z.string().default('Jetzt starten'),
      headline_part1: z.string().default('Dein erster'),
      headline_part2_orange: z.string().default('Kampf'),
      headline_part3: z.string().default('beginnt mit dem'),
      headline_part4_gold: z.string().default('ersten Schritt.'),
      subtext: z.string().default('Komm zum nächsten Training vorbei und erlebe, was der Boxclub Gifhorn für dich bereithält.'),
      primary_label: z.string().default('Trainingszeiten ansehen'),
      trust_items: z.array(z.string()).default([]),
    }),
    contact_section: z.object({
      kicker: z.string().default('Kontakt'),
      headline_part1: z.string().default('Bereit für den'),
      headline_part2_orange: z.string().default('ersten Schritt?'),
      intro: z.string().default('Keine Anmeldung nötig. Schau zu den Trainingszeiten vorbei, bring Sportzeug mit und mach mit.'),
      form_titel: z.string().default('Direkt vorbeikommen'),
      form_subtitel: z.string().default('Fülle das Formular aus und wir melden uns bei dir.'),
    }),
  }),
});

// -----------------------------------------------------------------------------
// Leistungen / Kurse (mehrere Einträge — wie Trainer)
// -----------------------------------------------------------------------------
const leistung = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    bild: z.string().optional(),
    bild_alt: z.string().optional(),
    reihenfolge: z.number().default(99),
  }),
});

// -----------------------------------------------------------------------------
// Rechtliche / statische Seiten (Markdown-Body) — Impressum, Datenschutz, …
// -----------------------------------------------------------------------------
const seite = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    intro: z.string().optional(),
    stand: z.string().optional(),
  }),
});

// -----------------------------------------------------------------------------
// Downloads (PDFs etc. für Satzung & Downloads-Seite)
// -----------------------------------------------------------------------------
const download = defineCollection({
  type: 'data',
  schema: z.object({
    titel: z.string(),
    beschreibung: z.string().optional(),
    datei: z.string(),
    kategorie: z.string().optional(),
    stand: z.string().optional(),
    reihenfolge: z.number().default(99),
  }),
});

// -----------------------------------------------------------------------------
// Sponsoren
// -----------------------------------------------------------------------------
const sponsor = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    logo: z.string().optional(),
    link: z.string().optional(),
    beschreibung: z.string().optional(),
    kategorie: z.string().optional(),
    reihenfolge: z.number().default(99),
  }),
});

// -----------------------------------------------------------------------------
// News / Blog (Markdown-Body, einzelne Artikel)
// -----------------------------------------------------------------------------
const news = defineCollection({
  type: 'content',
  schema: z.object({
    titel: z.string(),
    datum: z.date(),
    bild: z.string().optional(),
    bild_alt: z.string().optional(),
    teaser: z.string().optional(),
    autor: z.string().optional(),
    kategorie: z.string().optional(),
    veroeffentlicht: z.boolean().default(true),
  }),
});

// -----------------------------------------------------------------------------
// Galerie (Bilder)
// -----------------------------------------------------------------------------
const galerie = defineCollection({
  type: 'data',
  schema: z.object({
    titel: z.string(),
    bild: z.string(),
    bild_alt: z.string().optional(),
    kategorie: z.string().optional(),
    datum: z.string().optional(),
    reihenfolge: z.number().default(99),
  }),
});

// -----------------------------------------------------------------------------
// Mitgliedsbeiträge (Single-Entry)
// -----------------------------------------------------------------------------
const beitraege = defineCollection({
  type: 'data',
  schema: z.object({
    titel: z.string().default('Mitgliedsbeiträge'),
    intro: z.string().optional(),
    monatsbeitraege: z.array(z.object({
      gruppe: z.string(),
      preis: z.string(),
      hinweis: z.string().optional(),
    })).default([]),
    aufnahmegebuehr: z.object({
      label: z.string().default('Aufnahmegebühr (einmalig)'),
      preis: z.string(),
      hinweis: z.string().optional(),
    }).optional(),
    zahlung_info: z.string().optional(),
    cta: z.object({
      kicker: z.string().default('Jetzt Mitglied werden'),
      headline: z.string().default('Bereit für den ersten Schritt?'),
      text: z.string().optional(),
      primary_label: z.string().default('Jetzt anmelden'),
      primary_href: z.string().default('/anmeldung'),
      secondary_label: z.string().optional(),
      secondary_href: z.string().optional(),
    }).optional(),
    faq: z.array(z.object({
      frage: z.string(),
      antwort: z.string(),
    })).default([]),
  }),
});

// -----------------------------------------------------------------------------
// Anmeldung / Mitgliedsantrag (Single-Entry, PDF-basiert)
// -----------------------------------------------------------------------------
const anmeldung = defineCollection({
  type: 'data',
  schema: z.object({
    titel: z.string().default('Mitglied werden'),
    intro: z.string().optional(),
    online_url: z.string().optional(),
    online_anbieter: z.string().optional(),
    formular_pdf: z.string().optional(),
    formular_stand: z.string().optional(),
    video_url: z.string().optional(),
    video_titel: z.string().optional(),
    video_beschreibung: z.string().optional(),
    rueckgabe_email: z.string().optional(),
    rueckgabe_adresse: z.string().optional(),
    hinweis: z.string().optional(),
    schritte: z.array(z.object({
      titel: z.string(),
      beschreibung: z.string(),
    })).default([]),
  }),
});

export const collections = {
  trainer, kursplan, global, startseite, leistung,
  seite, download, sponsor, news, galerie, anmeldung, beitraege,
};
