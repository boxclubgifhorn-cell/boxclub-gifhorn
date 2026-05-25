# Vorstand-Checkliste bis Go-Live

> **Wofür?** Liste der Punkte, die der Vereinsvorstand vor dem offiziellen
> Go-Live auf `boxclub-gifhorn.de` noch erledigen oder entscheiden muss.
> Häkchen direkt im GitHub-UI setzen (Edit → Checkbox aktivieren → Save).

Stand: 22. Mai 2026

---

## 🚨 1. Impressum-Pflichtfelder (RECHTLICH KRITISCH)

§ 5 TMG verlangt diese Angaben **zwingend** für eingetragene Vereine. Solange
sie fehlen, riskiert der Verein eine Abmahnung.

- [x] **Vereinsregister-Gericht** ermitteln → **Amtsgericht Hildesheim**
- [x] **Vereinsregister-Nummer** ermitteln → **VR 100147**
- [x] **Vorstandsname** prüfen — **Andreas Strom (1. Vorsitzender)** bestätigt
- [x] **Weitere vertretungsberechtigte Vorstände** ergänzt:
      **Ralf Böning (2. Vorsitzender)** und **Anton Grefenstein (Schatzmeister)**.
      Vertretungsregel laut Vereinsregister: jeweils zwei Vorstandsmitglieder,
      darunter 1. oder 2. Vorsitzender, gemeinsam vertretungsberechtigt
- [x] **USt-ID klären** → **keine** (gemeinnütziger Verein ohne
      wirtschaftlichen Geschäftsbetrieb)

→ Alle Daten am 25.05.2026 ins Impressum eingepflegt (Commit folgt).

---

## 🌐 2. Domain & DNS (für Go-Live)

Aktuell zeigt `boxclub-gifhorn.de` noch auf den alten All-Inkl-Webspace. Damit
die neue Website unter eurer eigentlichen Adresse live geht:

- [Alex] **All-Inkl KAS-Zugangsdaten** zusammensuchen (oder eigenen Login dafür
      anlegen, falls bisher externer Dienstleister)
- [Alex] **DNS-Records** bei All-Inkl umstellen (Anleitung: 4 Records, Details
      im Web-Verantwortlichen-Handover)
- [Alex] **MX-Records (E-Mail)** explizit **NICHT anfassen** — sonst kommen
      E-Mails an `info@boxclub-gifhorn.de` nicht mehr an
- [Alex] **24 h Wartezeit** nach DNS-Switch einplanen (Cache-Propagation)
- [Alex] **Alten Webspace bei All-Inkl** weiter laufen lassen (mind. 2 Wochen
      als Sicherheitsnetz, dann kündbar — Mail-Postfächer behalten oder
      migrieren)

---

## 📄 3. Vereinsdokumente

- [X] **Satzung** — ist die hochgeladene PDF
      (`/uploads/downloads/satzung-boxclub-gifhorn.pdf`) die aktuell
      gültige Fassung?
- [x] **Datum der letzten Mitgliederversammlungs-Beschluss** notieren →
      laut Vereinsregister-Auszug: **Beschluss vom 13.08.2016** (Satzung
      ursprünglich vom 15.01.1967, zuletzt geändert am 27.06.2003).
      Im Download-Eintrag „Vereinssatzung" als Stand eingepflegt.
- [X] **Beitrittserklärung** — Beträge (15 € U18, 25 € Erw., 50 € Familie,
      20 € Aufnahmegebühr) noch aktuell? Bankverbindung korrekt?
- [-] Optional: **Beitragsordnung als separates Dokument** anlegen, falls
      gewünscht (aktuell stehen Beiträge nur in der Beitrittserklärung)
- [-] Optional: **Datenschutzhinweis für Mitglieder** als Download
      bereitstellen (falls Mitglieder eine schriftliche DSGVO-Information
      erhalten sollen)

---

## 👥 4. Inhalt prüfen / aktualisieren

### Stammdaten
- [x] **Adresse** „Cardenap 2-4, 38518 Gifhorn" korrekt?
- [x] **Telefon** `05371 7599679` korrekt + wird betreut?
- [x] **E-Mail** `info@boxclub-gifhorn.de` korrekt + wird gelesen?
- [Anton] **WhatsApp-Nummer** `+49 5371 7599679` aktiviert + wird wirklich
      auf WhatsApp empfangen?
- [x] **Instagram** `@bcg_e.v` ist der offizielle Vereins-Account?
- [x] **Eingangs-Hinweis** „Eingang Konrad-Adenauer-Straße gegenüber
      Amtsgericht" stimmt?

### Trainer
- [Anton] **Aktuelle Trainerliste** zusammenstellen (Name, Disziplin, kurze Bio)
- [Anton] **Foto-Einverständnis** von jedem Trainer schriftlich einholen
      (DSGVO Art. 6 + KUG für Bildveröffentlichung)
- [Anton] **Trainerfotos** in einheitlichem Format (idealerweise Hochformat,
      mind. 600×800 px) bereitstellen
- [Anton/Alex] Im CMS unter „Trainer" einpflegen

### Kursplan
- [x] **Aktuelle Trainingszeiten** prüfen + ins CMS unter „Kursplan"
      einpflegen
- [x] **Feiertage/Ferien**-Berücksichtigung — die Seite zeigt automatisch
      Niedersachsen-Ferien, kein Pflegeaufwand

### Online-Anmeldung
- [x] **meinverein.de-Link** `https://web.meinverein.de/profile/32210`
      noch aktiv und korrekt?
- [x] **QR-Code-Plakate** im Vereinsheim aufhängen (URL führt zu /anmeldung
      bzw. direkt zum meinverein-Formular)

---

## 📸 5. Bildmaterial

Aktuell sind viele Hero- und Service-Bilder von **Unsplash/Pexels** (Stock).
Mit eigenen Fotos wirkt die Seite deutlich authentischer:

- [Anton] **Hero-Foto** vom eigenen Verein (Training im Ring, gute Lichtstimmung)
- [Anton] **Service-Karten-Fotos** pro Disziplin (Boxen, MMA, Judo, Ringen,
      Frauenfitness, Kinder) — jeweils 1-2 echte Trainingsmomente
- [Anton] **Galerie-Bilder** zusammenstellen (Wettkampf-Highlights,
      Vereinsfeier, Trainer-Lehrgänge)
- [Anton] **Foto-Freigaben** dokumentieren — wer ist abgebildet, gibt es
      schriftliches OK? (KUG + DSGVO)
- [Anton/Alex] Bilder im CMS hochladen unter den jeweiligen Sektionen

---

## 🔒 6. Datenschutz & Compliance

- [-] **Datenschutzbeauftragter** — wirklich nicht benötigt? Nur Pflicht
      bei ≥ 20 Personen mit regelmäßiger Datenverarbeitung. Bei einem
      Verein i. d. R. nicht erforderlich, aber kurz prüfen
- [Anton] **Verarbeitungsverzeichnis nach Art. 30 DSGVO** existiert intern?
      (eine einfache Tabelle reicht: was wird wofür gespeichert)
- [X] **AVV mit meinverein.de** abgeschlossen? (sollte beim Vertragsabschluss
      automatisch passiert sein, prüfen)
- [Anton] **Foto-/Video-Einverständnis** für Galerie + Wettkampfbilder ist
      Routine im Verein? (siehe Trainerbilder)

---

## 👨‍💻 7. CMS-Pflege organisieren

- [x] **Pflege-Verantwortliche/r** im Verein bestimmen (wer schreibt News,
      tauscht Fotos aus, pflegt Trainingszeiten)
- [x] **GitHub-Account** für diese Person anlegen (falls noch nicht
      vorhanden) — der Pflegeaufwand ist minimal, das Konto kann
      auch weiterhin „nur für die Website" genutzt werden
- [x] Account zur **Decap-Allowlist** hinzufügen (Repo →
      `public/admin/allowlist.json`) — sonst kein Login möglich
- [Alex] **Kurzeinweisung Decap** durch den Web-Verantwortlichen (15 min
      reichen für News + Trainer + Galerie)
- [x] **2-Faktor-Authentifizierung** für den GitHub-Account aktivieren
      (Pflicht für jeden mit Repo-Schreibrechten)

---

## 🚀 8. Pre-Launch-Audit (technisch — macht der Web-Verantwortliche)

Diese Punkte erledigt der Web-Verantwortliche kurz vor dem Go-Live, nur
zur Info hier:

- [Alex] DNS-Switch verifiziert (`nslookup boxclub-gifhorn.de` zeigt Vercel-IP)
- [Alex] HTTPS-Zertifikat von Vercel aktiv (Schloss-Symbol)
- [Alex] `site_url` in der Decap-Config zurück auf `https://boxclub-gifhorn.de`
- [Alex] Alle internen Links + Anchor-Sprünge funktionieren
- [Alex] Sitemap + robots.txt aktuell
- [Alex] Open Graph Bilder rendern korrekt (Test in Slack/WhatsApp)
- [Alex] Lighthouse-Audit ≥ 90 in allen Kategorien

---

## 📢 9. Go-Live-Kommunikation

- [Anton] **Mitglieder informieren** — kurze Info per E-Mail/WhatsApp:
      neue Website online, alte Links funktionieren weiter
- [X] **Google Business Profile** aktualisieren (Adresse + Telefon +
      neue Website-URL eintragen, falls noch alte URL drin)
- [X] **Instagram-Bio** updaten (Website-Link)
- [X] **Flyer/Drucksachen** mit alter URL aufbrauchen oder neu drucken
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

Web-Verantwortlicher: **Alexander Greb** — alexander.greb@onemillion-digital.de

Diese Checkliste lebt im Repo unter `CHECKLIST.md` und kann jederzeit
über das CMS oder direkt in GitHub bearbeitet werden.
