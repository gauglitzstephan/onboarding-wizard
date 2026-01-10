# Onboarding Wizard
## Phase 1 Intent Specification — Red Team Version

*(Systemische Leitplanke für Phase 1. Verbindlich. Nicht marketinggetrieben. Nicht implementierungsgetrieben.)*

---

## 0. Zweck dieses Dokuments

Dieses Dokument definiert **explizit**, was Phase 1 des Onboarding Wizard **ist** und **nicht ist**.

Es dient als:
- Entscheidungsfilter für alle Phase-1-PRs
- Drift-Schutz gegen schleichende Engine- oder UX-Überladung
- Red-Team-Gegenpol zu „logischem Weiterbauen“

**Kein Code darf Phase 1 betreten, ohne mit diesem Dokument kompatibel zu sein.**

---

## 1. Phase-1-Leitprinzip (nicht verhandelbar)

> **Phase 1 macht Entscheidungen explizit.
> Phase 1 automatisiert nichts.
> Phase 1 hilft nicht.
> Phase 1 bewertet nicht.**

Phase 1 ist **keine Produktivitätsphase**, sondern eine **Strukturierungsphase**.

Der Wizard beginnt, **Verantwortung sichtbar zu machen**, nicht sie zu übernehmen.

---

## 2. Systemische Rolle von Phase 1

Phase 1 ist die **Schwelle** zwischen:
- einem regelbasierten Kern (Phase 0)
- und einer späteren operativen Ausführung (Phase 2+)

In Phase 1 gilt:
- Regeln sind bereits fixiert
- Blöcke sind technisch erzwingbar
- **Aber:** Es existiert noch keine „Maschine“, die Arbeit erledigt

Phase 1 ist das **Formalisieren von Entscheidungen**, nicht deren Durchsetzung.

---

## 3. Explizite Ziele von Phase 1

Phase 1 hat **genau drei Ziele**:

### Ziel 1 — Verantwortung explizit machen
- Jede relevante Änderung entsteht aus einer **benannten Entscheidung**
- Keine impliziten Mutationen
- Keine „stillen“ State-Changes

### Ziel 2 — Entscheidungstransparenz herstellen
- Entscheidungen sind sichtbar, datiert und zuordenbar
- Nicht-Entscheidungen werden sichtbar (Block bleibt bestehen)

### Ziel 3 — Irreversibilität markieren
- Bestimmte Entscheidungen sind **per System irreversibel**
- Reversibilität muss explizit modelliert werden

---

## 4. Was Phase 1 explizit NICHT tut (Anti-Goals)

Phase 1 ist **bewusst kein**:
- Workflow-Engine
- Task-Executor
- Reminder-System
- Integrations-Layer (IT, HRIS, Slack, E-Mail)
- UI zur Beschleunigung von Arbeit
- System zur Fehlerkorrektur oder -kompensation

**Wenn etwas „praktisch“ wäre, ist es sehr wahrscheinlich außerhalb von Phase 1.**

---

## 5. Erlaubte Systembausteine in Phase 1

### 5.1 Decision Objects (neu)

Phase 1 darf **Decision Objects** einführen.

Eigenschaften:
- rein deklarativ
- expliziter Entscheider (Person/Role-ID)
- Zeitstempel
- betroffener Scope (z. B. Task-ID)

Decision Objects **lösen nichts aus**. Sie existieren nur.

---

### 5.2 Responsibility Map (neu)

Phase 1 darf eine **Responsibility Map** einführen:
- Wer darf welche Decision Objects erzeugen?
- Wer darf es explizit nicht?

Wichtig:
- Verantwortung ≠ Aufgabe
- Verantwortung ≠ Ausführung

---

### 5.3 Read-only System Projections

Phase 1 darf **sichtbar machen**, aber nicht handeln:
- aktuelle Blocks
- offene Entscheidungen
- irreversible Marker

Keine Aktionen, keine Buttons mit Wirkung.

---

## 6. Verbotene Systembausteine in Phase 1

Explizit verboten:
- Automatische State-Transitions
- Side Effects (z. B. Task-Status ändern)
- Implizite Defaults („wenn nichts entschieden wird, dann …“)
- Heuristiken
- Priorisierungslogik

**Alles, was ohne explizite Entscheidung etwas verändert, ist verboten.**

---

## 7. Phase-1-Qualitätskriterien (Red Team Gates)

Ein Phase-1-PR ist **nicht merge-fähig**, wenn:

- er neue Regeln einführt
- er bestehende Invariants umgeht oder abschwächt
- er „Convenience“ über Klarheit stellt
- er Systemzustände repariert statt sie sichtbar zu machen
- er mehr Code als Entscheidungsoberfläche ist

Faustregel:
> **Wenn ein PR Zeit spart, ist er vermutlich falsch.**

---

## 8. Erfolgsdefinition von Phase 1

Phase 1 ist erfolgreich, wenn:

- jede relevante Änderung auf eine explizite Entscheidung zurückgeführt werden kann
- Block-Zustände nicht mehr „überraschen“
- Nicht-Entscheidungen sichtbar und unangenehm sind
- kein zusätzlicher operativer Nutzen entstanden ist

**Phase 1 fühlt sich langsam an. Das ist korrekt.**

---

## 9. Übergangskriterium zu Phase 2

Phase 1 endet **nicht**, wenn Features fertig sind.

Phase 1 endet, wenn:
- alle relevanten Entscheidungsarten formalisiert sind
- Verantwortung vollständig modelliert ist
- das System ohne neue Logik „bedienbar erklärbar“ ist

Erst dann darf Automatisierung beginnen.

---

## 10. Red Team Schlussstatement

> **Phase 1 ist der Moment, in dem Systeme typischerweise weich werden.
> Wenn Phase 1 unangenehm bleibt, ist sie richtig gebaut.**

Dieses Dokument ist ein Schutzmechanismus.
Wer es umgeht, baut ein anderes Produkt.

---

*Dieses Dokument ist verbindlich für alle Phase-1-Design- und Build-Entscheidungen.*

