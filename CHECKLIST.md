# Vorstand-Checkliste bis Go-Live

> **Wofür?** Liste der Punkte, die der Vereinsvorstand vor dem offiziellen
> Go-Live auf `boxclub-gifhorn.de` noch erledigen oder entscheiden muss.
> Häkchen direkt im GitHub-UI setzen (Edit → Checkbox aktivieren → Save).

Stand: 22. Mai 2026

---

## 🚨 1. Impressum-Pflichtfelder (RECHTLICH KRITISCH)

§ 5 TMG verlangt diese Angaben **zwingend** für eingetragene Vereine. Solange
sie fehlen, riskiert der Verein eine Abmahnung.

- [ ] **Vereinsregister-Gericht** ermitteln (z. B. „Amtsgericht Hildesheim"
      oder „Amtsgericht Braunschweig") — steht im Vereinsregister-Auszug
- [ ] **Vereinsregister-Nummer** ermitteln (Format: `VR XXXXX`)
- [ ] **Vorstandsname** prüfen — aktuell steht „Andreas Strom" im
      Impressum. Falls Vorsitz gewechselt: neuen Namen melden
- [ ] **Weitere vertretungsberechtigte Vorstände** ergänzen (falls
      Satzung vertretungsberechtigt sagt: 1. + 2. Vorsitzender + Kassenwart o. ä.)
- [ ] **USt-ID klären** — hat der Verein eine USt-ID (i. d. R. nur bei
      wirtschaftlichem Geschäftsbetrieb)? Falls nein, kann der Absatz
      auf einen kurzen Satz reduziert werden

→ Daten an den Web-Verantwortlichen schicken, der trägt sie im CMS unter
   **„Rechtliche Seiten → Impressum"** ein.

---

## 🌐 2. Domain & DNS (für Go-Live)

Aktuell zeigt `boxclub-gifhorn.de` noch auf den alten All-Inkl-Webspace. Damit
die neue Website unter eurer eigentlichen Adresse live geht:

- [ ] **All-Inkl KAS-Zugangsdaten** zusammensuchen (oder eigenen Login dafür
      anlegen, falls bisher externer Dienstleister)
- [ ] **DNS-Records** bei All-Inkl umstellen (Anleitung: 4 Records, Details
      im Web-Verantwortlichen-Handover)
- [ ] **MX-Records (E-Mail)** explizit **NICHT anfassen** — sonst kommen
      E-Mails an `info@boxclub-gifhorn.de` nicht mehr an
- [ ] **24 h Wartezeit** nach DNS-Switch einplanen (Cache-Propagation)
- [ ] **Alten Webspace bei All-Inkl** weiter laufen lassen (mind. 2 Wochen
      als Sicherheitsnetz, dann kündbar — Mail-Postfächer behalten oder
      migrieren)

---

## 📄 3. Vereinsdokumente

- [ ] **Satzung** — ist die hochgeladene PDF
      (`/uploads/downloads/satzung-boxclub-gifhorn.pdf`) die aktuell
      gültige Fassung?
- [ ] **Datum der letzten Mitgliederversammlungs-Beschluss** notieren
      → ins CMS unter „Downloads → Vereinssatzung → Stand" eintragen
- [ ] **Beitrittserklärung** — Beträge (15 € U18, 25 € Erw., 50 € Familie,
      20 € Aufnahmegebühr) noch aktuell? Bankverbindung korrekt?
- [ ] Optional: **Beitragsordnung als separates Dokument** anlegen, falls
      gewünscht (aktuell stehen Beiträge nur in der Beitrittserklärung)
- [ ] Optional: **Datenschutzhinweis für Mitglieder** als Download
      bereitstellen (falls Mitglieder eine schriftliche DSGVO-Information
      erhalten sollen)

---

## 👥 4. Inhalt prüfen / aktualisieren

### Stammdaten
- [ ] **Adresse** „Cardenap 2-4, 38518 Gifhorn" korrekt?
- [ ] **Telefon** `05371 7599679` korrekt + wird betreut?
- [ ] **E-Mail** `info@boxclub-gifhorn.de` korrekt + wird gelesen?
- [ ] **WhatsApp-Nummer** `+49 5371 7599679` aktiviert + wird wirklich
      auf WhatsApp empfangen?
- [ ] **Instagram** `@bcg_e.v` ist der offizielle Vereins-Account?
- [ ] **Eingangs-Hinweis** „Eingang Konrad-Adenauer-Straße gegenüber
      Amtsgericht" stimmt?

### Trainer
- [ ] **Aktuelle Trainerliste** zusammenstellen (Name, Disziplin, kurze Bio)
- [ ] **Foto-Einverständnis** von jedem Trainer schriftlich einholen
      (DSGVO Art. 6 + KUG für Bildveröffentlichung)
- [ ] **Trainerfotos** in einheitlichem Format (idealerweise Hochformat,
      mind. 600×800 px) bereitstellen
- [ ] Im CMS unter „Trainer" einpflegen

### Kursplan
- [ ] **Aktuelle Trainingszeiten** prüfen + ins CMS unter „Kursplan"
      einpflegen
- [ ] **Feiertage/Ferien**-Berücksichtigung — die Seite zeigt automatisch
      Niedersachsen-Ferien, kein Pflegeaufwand

### Online-Anmeldung
- [ ] **meinverein.de-Link** `https://web.meinverein.de/profile/32210`
      noch aktiv und korrekt?
- [ ] **QR-Code-Plakate** im Vereinsheim aufhängen (URL führt zu /anmeldung
      bzw. direkt zum meinverein-Formular)

---

## 📸 5. Bildmaterial

Aktuell sind viele Hero- und Service-Bilder von **Unsplash/Pexels** (Stock).
Mit eigenen Fotos wirkt die Seite deutlich authentischer:

- [ ] **Hero-Foto** vom eigenen Verein (Training im Ring, gute Lichtstimmung)
- [ ] **Service-Karten-Fotos** pro Disziplin (Boxen, MMA, Judo, Ringen,
      Frauenfitness, Kinder) — jeweils 1-2 echte Trainingsmomente
- [ ] **Galerie-Bilder** zusammenstellen (Wettkampf-Highlights,
      Vereinsfeier, Trainer-Lehrgänge)
- [ ] **Foto-Freigaben** dokumentieren — wer ist abgebildet, gibt es
      schriftliches OK? (KUG + DSGVO)
- [ ] Bilder im CMS hochladen unter den jeweiligen Sektionen

---

## 🔒 6. Datenschutz & Compliance

- [ ] **Datenschutzbeauftragter** — wirklich nicht benötigt? Nur Pflicht
      bei ≥ 20 Personen mit regelmäßiger Datenverarbeitung. Bei einem
      Verein i. d. R. nicht erforderlich, aber kurz prüfen
- [ ] **Verarbeitungsverzeichnis nach Art. 30 DSGVO** existiert intern?
      (eine einfache Tabelle reicht: was wird wofür gespeichert)
- [ ] **AVV mit meinverein.de** abgeschlossen? (sollte beim Vertragsabschluss
      automatisch passiert sein, prüfen)
- [ ] **Foto-/Video-Einverständnis** für Galerie + Wettkampfbilder ist
      Routine im Verein? (siehe Trainerbilder)

---

## 👨‍💻 7. CMS-Pflege organisieren

- [ ] **Pflege-Verantwortliche/r** im Verein bestimmen (wer schreibt News,
      tauscht Fotos aus, pflegt Trainingszeiten)
- [ ] **GitHub-Account** für diese Person anlegen (falls noch nicht
      vorhanden) — der Pflegeaufwand ist minimal, das Konto kann
      auch weiterhin „nur für die Website" genutzt werden
- [ ] Account zur **Decap-Allowlist** hinzufügen (Repo →
      `public/admin/allowlist.json`) — sonst kein Login möglich
- [ ] **Kurzeinweisung Decap** durch den Web-Verantwortlichen (15 min
      reichen für News + Trainer + Galerie)
- [ ] **2-Faktor-Authentifizierung** für den GitHub-Account aktivieren
      (Pflicht für jeden mit Repo-Schreibrechten)

---

## 🚀 8. Pre-Launch-Audit (technisch — macht der Web-Verantwortliche)

Diese Punkte erledigt der Web-Verantwortliche kurz vor dem Go-Live, nur
zur Info hier:

- [ ] DNS-Switch verifiziert (`nslookup boxclub-gifhorn.de` zeigt Vercel-IP)
- [ ] HTTPS-Zertifikat von Vercel aktiv (Schloss-Symbol)
- [ ] `site_url` in der Decap-Config zurück auf `https://boxclub-gifhorn.de`
- [ ] Alle internen Links + Anchor-Sprünge funktionieren
- [ ] Sitemap + robots.txt aktuell
- [ ] Open Graph Bilder rendern korrekt (Test in Slack/WhatsApp)
- [ ] Lighthouse-Audit ≥ 90 in allen Kategorien

---

## 📢 9. Go-Live-Kommunikation

- [ ] **Mitglieder informieren** — kurze Info per E-Mail/WhatsApp:
      neue Website online, alte Links funktionieren weiter
- [ ] **Google Business Profile** aktualisieren (Adresse + Telefon +
      neue Website-URL eintragen, falls noch alte URL drin)
- [ ] **Instagram-Bio** updaten (Website-Link)
- [ ] **Flyer/Drucksachen** mit alter URL aufbrauchen oder neu drucken
      (URL bleibt ja `boxclub-gifhorn.de` — Aufgabe entfällt meistens)

---

## 🧹 10. Laufende Pflege (nach Go-Live)

Damit die Site frisch bleibt — als grobe Hausnummer:

- **Wöchentlich:** News-Beitrag, falls etwas anliegt (Wettkampf, Feiertag,
      Trainingsausfall)
- **Monatlich:** Galerie-Bilder ergänzen, Stand-Datum bei Impressum/
      Datenschutz prüfen
- **Halbjährlich:** Trainer-Liste prüfen + aktualisieren
- **Jährlich:** Satzung-PDF + Beitrittserklärung-PDF auf Aktualität
      checken; Datenschutzerklärung daraufhin lesen, ob noch alle
      eingesetzten Tools beschrieben sind

---

## Bei Fragen

Web-Verantwortlicher: **Alexander Greb** — grebalexander@gmail.com

Diese Checkliste lebt im Repo unter `CHECKLIST.md` und kann jederzeit
über das CMS oder direkt in GitHub bearbeitet werden.
