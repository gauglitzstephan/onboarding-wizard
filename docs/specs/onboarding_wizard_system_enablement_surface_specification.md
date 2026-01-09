# Onboarding Wizard
## System Enablement Surface Specification — Version 1.0

*(Operatives Ableitungsdokument der Product Definition (System Level) v1.2 und der Structure Blueprint Taxonomy v1.1)*

---

## 0. Zweck & Designziel

Diese Spezifikation definiert die **System Enablement Surface** des Onboarding Wizard.

Die Enablement Surface beschreibt **wie** das System:
- korrekt genutzt wird,
- falsche Nutzung verhindert,
- Verantwortung erzwingt,
- und Support durch Design ersetzt.

Enablement ist **kein Service**, **keine Beratung** und **keine UX-Optimierung**, sondern ein **Governance-Layer im Produkt**.

Designziel:
> *Ein Kunde kann das System vollständig betreiben, ohne je mit dem Anbieter sprechen zu müssen.*

---

## 1. Enablement-Prinzipien (nicht verhandelbar)

1. **Fail-loud statt Fail-soft**  
   Systemfehler werden sichtbar gemacht, nicht kompensiert.

2. **Erklärung statt Intervention**  
   Das System erklärt Zustände, greift aber nicht ein.

3. **Explizit schlägt bequem**  
   Jede relevante Aktion erzeugt einen Zustand.

4. **Blockieren ist erlaubt**  
   Fortschritt darf verhindert werden, wenn Systemregeln verletzt sind.

5. **Kein menschlicher Fallback**  
   Es gibt keinen Standard-Eskalationspfad zu Menschen.

---

## 2. Enablement Surface Taxonomie (P0 / P1)

### P0 — Kritische Enablement Surfaces
Diese Flächen sind zwingend erforderlich, damit das System überhaupt korrekt funktioniert.

---

### 2.1 Meta-Onboarding Flow (P0)

**Zweck:**
Stellt sicher, dass Kunden das System **als System** verstehen, bevor sie es nutzen.

**Mechaniken:**
- Pflichtdurchlauf vor erster Nutzung
- Erklärung von:
  - Endlichkeit
  - Verantwortung
  - Fail-loud-Prinzip
- Explizite Bestätigung:
  - „Wir verstehen, dass das System keine Empfehlungen gibt“

**Blockade:**
- Kein Start ohne Abschluss des Meta-Onboardings

---

### 2.2 System Boundary Messaging (P0)

**Zweck:**
Verhindert falsche Erwartungen in kritischen Momenten.

**Mechaniken:**
- Inline-Hinweise bei Grenzaktionen (z. B. Verlängerung, Bewertung, Feedback)
- Explizite Sprache:
  - „Das System tut dies bewusst nicht“

**Blockade:**
- Grenzverletzungen werden nicht ausgeführt

---

### 2.3 Responsibility Enforcement Surface (P0)

**Zweck:**
Erzwingt eindeutige Verantwortung gemäß Blueprint #2.

**Mechaniken:**
- Pflicht-Owner-Zuweisung
- Keine Sammel- oder Gruppenverantwortung
- Sichtbare Owner-Historie bei Übergaben

**Blockade:**
- Start und Fortschritt blockiert bei fehlendem Owner

---

### 2.4 State & Block Explanation Surface (P0)

**Zweck:**
Erklärt *warum* ein Zustand existiert oder ein Block greift.

**Mechaniken:**
- Zustandsbeschreibung in Klartext
- Ursache-Wirkungs-Erklärung
- Verweis auf Systemregel (nicht auf Hilfeartikel)

**Blockade:**
- Keine Umgehung möglich

---

### 2.5 Closure & End-State Surface (P0)

**Zweck:**
Macht das Ende des Onboardings explizit und unumkehrbar.

**Mechaniken:**
- Explizite Abschlussbestätigung
- Sichtbare Archivierung
- Hinweis: „Dieses Onboarding ist abgeschlossen“

**Blockade:**
- Nach Abschluss keine Änderungen oder Erweiterungen

---

## 3. P1 — Unterstützende Enablement Surfaces

Diese Flächen reduzieren Friktion, sind aber nicht systemkritisch.

---

### 3.1 Self-Service System FAQ (P1)

**Zweck:**
Beantwortet wiederkehrende Fragen zur **Systemlogik**.

**Inhalt:**
- Warum gibt es ein fixes Ende?
- Warum kann ich X nicht tun?
- Was passiert, wenn etwas offen bleibt?

**Explizit ausgeschlossen:**
- HR-Fragen
- Onboarding-Inhalte
- Best Practices

---

### 3.2 Progressive Disclosure Hints (P1)

**Zweck:**
Reduziert kognitive Last ohne Verhalten zu lenken.

**Mechaniken:**
- Kontextabhängige Hinweise
- Keine Empfehlungen, nur Erklärungen

---

### 3.3 Change Trace Surface (P1)

**Zweck:**
Macht explizite Änderungen nachvollziehbar.

**Mechaniken:**
- Sichtbare Änderungshistorie
- Klarer Unterschied zwischen Inhalt vs. Strukturänderung

---

## 4. Explizit ausgeschlossene Surfaces

Die folgenden Oberflächen oder Mechaniken dürfen **nicht** implementiert werden:
- Live-Chat oder Ticket-Systeme
- Beratungs- oder Coaching-Flows
- Automatische Optimierungsvorschläge
- KI-basierte Empfehlungen
- Eskalation an Anbieter oder „Customer Success"

---

## 5. Enablement Failure Modes

Die Enablement Surface gilt als **defekt**, wenn:
- Nutzer regelmäßig externe Hilfe benötigen
- Blockaden umgangen werden können
- Systemregeln erklärt, aber nicht durchgesetzt werden
- Support >10 % der Nutzungszeit beansprucht

---

## 6. Definition of Done (Enablement Layer)

Die Enablement Surface ist **fertig**, wenn:
- ein Erstnutzer das System ohne Erklärung bedienen kann
- Fehlkonfigurationen sichtbar blockiert werden
- keine impliziten Entscheidungen möglich sind
- kein Standard-Support notwendig ist

---

## 7. Zusammenfassung

Die System Enablement Surface ist der **entscheidende Skalierungshebel** des Onboarding Wizard.

Sie ersetzt:
- Support durch Erklärung
- Beratung durch Struktur
- Eskalation durch Sichtbarkeit

**Wenn diese Surface funktioniert, skaliert das Produkt.**
Wenn nicht, wird es ein Servicegeschäft.

