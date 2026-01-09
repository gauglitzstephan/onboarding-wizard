# Onboarding Wizard
## Structure Blueprint Taxonomy — Version 1.1

*(Operatives Ableitungsdokument der Product Definition (System Level) v1.2; build-relevant, nicht marketinggetrieben)*

---

## 0. Zweck & Einordnung

Dieses Dokument definiert die **kanonischen Struktur-Blueprints**, die der Onboarding Wizard bereitstellt.

Blueprints sind **strukturelle Container**, keine inhaltlichen Vorlagen. Sie legen fest:
- **Form** (welche Elemente existieren),
- **Reihenfolge** (wann etwas relevant wird),
- **Verantwortungslogik** (wer zuständig ist),

und **explizit nicht**:
- Inhalte,
- Empfehlungen,
- Best Practices,
- kulturelle oder fachliche Annahmen.

Die Taxonomie ist bewusst **klein (3–5 Blueprints)**, da sie den **strukturellen Kern des Produkts** darstellt. Alle Änderungen an Blueprints müssen **explizit**, **nachvollziehbar** und **zustandsklar** erfolgen.

---

## 1. Blueprint #1 — Role Onboarding Structure

### Zweck
Definiert **für welche Rolle** ein Onboarding-Zyklus gilt und friert den Kontext ein.

Dieser Blueprint verhindert implizite Annahmen wie:
- „Das ist ja klar, was ein Entwickler braucht“
- „Das klären wir unterwegs“

---

### Struktur (keine Inhalte)
- Rollenbezeichnung (frei benannt)
- Startdatum
- Onboarding-Zeitraum (30 / 45 / 90 Tage)
- Zugehörige Organisationseinheit

---

### Erzwingungslogik
- Kein Start ohne explizite Rolle
- Zeitraum ist bei Start fixiert
- Zeitraum kann **nicht stillschweigend geändert** werden
- Änderungen am Zeitraum erfordern einen **expliziten Neustart des Zyklus**

---

### Explizite Nicht-Inhalte
- Keine Rollenbeschreibung
- Keine Skill- oder Kompetenzannahmen
- Keine senioritätsabhängigen Empfehlungen

---

## 2. Blueprint #2 — Responsibility Map

### Zweck
Macht Verantwortung **eindeutig, sichtbar und nicht delegierbar**.

Dieser Blueprint ist der zentrale Mechanismus zur Eliminierung von „Hinterherrennen“ und menschlicher Kompensation.

---

### Struktur (keine Inhalte)
- Liste aller Onboarding-Aufgaben (nur Titel)
- Genau **ein Owner pro Aufgabe**
- Optional: informierte Rollen (ohne Verantwortung)

---

### Erzwingungslogik
- Jede Aufgabe benötigt exakt einen Owner
- Aufgaben ohne Owner blockieren den Start
- Owner können **nicht entfernt**, sondern nur **explizit übergeben** werden
- Jede Übergabe erzeugt einen sichtbaren Systemzustand

---

### Explizite Nicht-Inhalte
- Keine Eskalationslogik
- Keine Priorisierungsvorschläge
- Keine Bewertung von Owner-Performance

---

## 3. Blueprint #3 — Onboarding Lifecycle & Zustände

### Zweck
Strukturiert den Onboarding-Zyklus in **endliche, sequenzielle Zustände**.

Dieser Blueprint beschreibt **keinen idealen Prozess**. Er macht lediglich Übergänge explizit sichtbar, wo sie sonst implizit oder diffus bleiben.

---

### Struktur (keine Inhalte)
- Neutrale Zustände (z. B. Start, Zwischenzustand, Übergabe)
- Zustandsübergänge mit klarer Eintritts- und Austrittsbedingung
- Abhängigkeiten zwischen Zuständen

---

### Erzwingungslogik
- Zustände können **nicht stillschweigend übersprungen** werden
- Übergänge sind zustandsbasiert (nicht zeitbasiert allein)
- Abschluss ist ein expliziter Systemzustand

---

### Explizite Nicht-Inhalte
- Keine inhaltlichen Aufgaben pro Zustand
- Keine empfohlenen Phasen oder Dauern
- Keine Fortschritts- oder Leistungsbewertung

---

## 4. Blueprint #4 — Information Artifact Slots (progressiv)

### Zweck
Trennt **Struktur von Wissen** und verhindert implizite Informationsabhängigkeiten.

Dieser Blueprint definiert, *dass* Informationen oder Zugänge bereitgestellt werden **können** — nicht *welche*, nicht *wann im Detail* und nicht *wie umfangreich*.

---

### Struktur (keine Inhalte)
- Artefakt-Typ (z. B. Dokument, Zugang, Kontakt)
- Verantwortlicher Owner
- Sichtbarer Verfügbarkeitsstatus
- Zuordnung zu einem Lifecycle-Zustand

---

### Erzwingungslogik
- Kein Artefakt ohne Owner
- Artefakte können **jederzeit progressiv ergänzt** werden
- Nicht vorhandene Artefakte sind **sichtbar abwesend**, nicht implizit vorausgesetzt

---

### Explizite Nicht-Inhalte
- Keine Wissensinhalte oder Lernmaterialien
- Keine Dokumentationspflicht
- Keine Qualitäts- oder Vollständigkeitsbewertung

---

## 5. Blueprint #5 — Handover & Closure Structure

### Zweck
Erzwingt ein **klares, explizites Ende** des Onboarding-Zyklus.

Dieser Blueprint verhindert das typische „Auslaufen ohne Abschluss“.

---

### Struktur (keine Inhalte)
- Abschlusskriterium (zustandsbasiert)
- Explizite Übergabebestätigung
- Archivierungsstatus

---

### Erzwingungslogik
- Onboarding kann nur durch explizite Übergabe abgeschlossen werden
- Offene Aufgaben werden **sichtbar archiviert**, nicht gelöscht
- Nach Abschluss können keine neuen Aufgaben hinzugefügt werden

---

### Explizite Nicht-Inhalte
- Kein Feedback- oder Review-Formular
- Keine Bewertung des Mitarbeiters
- Keine Verlängerungsoption

---

## 6. Globaler Boundary-Check

Ein Blueprint ist **nur zulässig**, wenn:
1. Er keine inhaltliche Empfehlung enthält
2. Er Verantwortung explizit macht
3. Er Endlichkeit respektiert
4. Änderungen nur **explizit und zustandsklar** möglich sind

Jeder Verstoß ist ein **Systembruch**, kein Feature-Wunsch.

---

## 7. Zusammenfassung

Diese fünf Blueprints bilden gemeinsam:
- den **strukturellen Kern** des Onboarding Wizard
- die verbindliche Grundlage für MVP Slice, Feature-Landkarte und Tech-Architektur
- den primären Hebel zur Reduktion von Support-, Service- und Interpretationsaufwand

Alles Weitere ist Ableitung — nicht Kern.
