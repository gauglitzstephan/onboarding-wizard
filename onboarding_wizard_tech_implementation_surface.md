# Onboarding Wizard
## Tech & Implementation Surface — Version 1.1 (Spec-Locked + Codex-Assisted)

*(Update nach Red-Team: Build-Ansatz Option B; detailliertes Setup & Tooling Walkthrough)*

---

## 0. Ziel dieses Updates

Version 1.1 ergänzt zur v1.0:
- den **verbindlichen Build-Modus**: *Spec-Locked, Human-Driven, Codex-Assisted* (Option B)
- ein **konkretes Tooling-Setup** für Codex über:
  1) ChatGPT (Codex cloud),
  2) Codex CLI,
  3) GitHub-Integration (ChatGPT GitHub Connector + Codex in GitHub)
- klare **Guardrails**, welche Teile niemals „AI-first“ gebaut werden

---

## 1. Build-Modus (verbindlich)

### 1.1 Spec-Locked (Read-only Specs)
Folgende Artefakte sind **Quelle der Wahrheit** und werden im Build nicht „neu interpretiert“:
- Product Definition (System Level) v1.2
- Structure Blueprint Taxonomy v1.1
- System Enablement Surface Spec v1.0
- MVP Slice Spec v1.1 (Value-Anchored)

Regel:
- Änderungen an Specs sind **Versioned Changes** (neues Canvas-Dokument), keine stillen Anpassungen.

---

### 1.2 Human-Driven für Core Logic (nicht delegierbar)
Diese Komponenten werden **menschengeführt** implementiert (AI nur als Assistent):
- State Machine / Lifecycle Transition Rules
- Block Engine (Fail-Loud Core)
- Responsibility Enforcement (Owner-Regeln, Übergaben)
- Closure Gate & End-State Regeln
- Kill-Criteria Assertions (technisch erzwingbar)

AI darf:
- Boilerplate generieren
- Tests vorschlagen
- Refactoring-Optionen aufzeigen

AI darf nicht:
- neue Systemregeln „einführen“
- Defaults stillschweigend setzen
- Blockaden „weich“ machen

---

### 1.3 Codex-Assisted für Peripheral Work
Codex wird gezielt genutzt für:
- CRUD/Scaffolding (Model/Repo/DTO)
- Read-only Views
- Minimal UI Skeleton
- Test-Case-Generierung (Given/When/Then)

---

## 2. Implementation Surface (MVP) — bestätigt

### Architekturentscheidung
**Minimal Web App (Single-Tenant, MVP-Modus)**

Begründung bleibt:
- Guardrails erzwingbar
- Zustände/Blockaden explizit modellierbar
- keine versteckte Flexibilität

---

## 3. Tooling-Optionen: Welche Codex-Fläche wofür?

### Option 1 — Codex cloud in ChatGPT (für Tasks & PRs)
- geeignet für: Repo-Inspektion, Aufgabenbearbeitung, PR-Erstellung
- Zugang über ChatGPT Sidebar / Codex Web

Quelle: OpenAI beschreibt Codex als Agent in ChatGPT mit isolierten Umgebungen und Task-Modus. ([openai.com](https://openai.com/index/introducing-codex/?utm_source=chatgpt.com))

---

### Option 2 — Codex CLI (für lokale, kontrollierte Arbeit)
- geeignet für: lokale Iteration, schnelle Änderungen, Tests lokal ausführen
- Installation via npm, Login beim ersten Run

Quelle: Codex CLI Install/Run und Auth-Flow. ([developers.openai.com](https://developers.openai.com/codex/cli/?utm_source=chatgpt.com))

---

### Option 3 — GitHub Integration (für Reviews & Automatisierung)
Drei Ebenen:
1) **ChatGPT GitHub Connector** (ChatGPT → Repo Access)
2) **Codex in GitHub / Code Review Toggle** (Codex cloud → Reviews)
3) **Codex GitHub Action** (CI/Workflow-Check)

Quellen: GitHub Connector in ChatGPT Settings, Codex GitHub Integration, Codex GitHub Action. ([help.openai.com](https://help.openai.com/en/articles/11145903-connecting-github-to-chatgpt-deep-research?utm_source=chatgpt.com))

---

## 4. Detaillierter Setup & Tooling Walkthrough

> Ziel: In < 1 Stunde ein Setup, das **kontrolliert**, **reproduzierbar** und **review-fähig** ist.

### 4.1 Baseline: Repo & Branch-Policy
- Default Branch: `main`
- Working Branch: `mvp/*`
- PR-Policy: **kein Direkt-Push auf main**
- PR benötigt:
  - „Spec check“ (manuell)
  - „Core invariants tests“ (automatisiert)

---

### 4.2 Codex cloud in ChatGPT aktivieren
1) In ChatGPT öffnen: Codex (Sidebar / Codex Web)
2) GitHub verbinden (Connector)
3) Repos auswählen, auf die ChatGPT/Codex Zugriff erhält

Quelle: GitHub in ChatGPT über Settings → Apps verbinden und Repo-Auswahl. ([help.openai.com](https://help.openai.com/en/articles/11145903-connecting-github-to-chatgpt-deep-research?utm_source=chatgpt.com))

**Empfehlung für MVP:**
- Zugriff nur auf *ein* Repo
- Least-privilege: nur notwendige Repos, später erweitern

---

### 4.3 Codex CLI installieren & konfigurieren

**Install (npm):**
- `npm i -g @openai/codex`

**Run:**
- `codex`
- beim ersten Start: Login mit ChatGPT Account oder API Key

Quelle: CLI Install/Run und Auth. ([developers.openai.com](https://developers.openai.com/codex/cli/?utm_source=chatgpt.com))

**Konfiguration:**
- Config liegt unter `~/.codex/config.toml`
- CLI und IDE-Extension teilen diese Datei

Quelle: Basic Config und Speicherort `config.toml`. ([developers.openai.com](https://developers.openai.com/codex/config-basic/?utm_source=chatgpt.com))

**MVP Guardrail Empfehlung (config):**
- `approval_policy = "on-request"` oder `"on-failure"`
  - Ziel: Codex darf nicht still „kommandieren“ ohne Sichtbarkeit

(Die konkreten Werte sind in der Config Reference dokumentiert.) ([developers.openai.com](https://developers.openai.com/codex/config-reference/?utm_source=chatgpt.com))

---

### 4.4 IDE Extension (optional, nur wenn ihr es braucht)
- Codex Extension für VS Code / Cursor / Windsurf
- nutzt die gleiche `config.toml`

Quelle: Codex Quickstart (IDE/CLI/Cloud) + IDE Extension Hinweise. ([developers.openai.com](https://developers.openai.com/codex/quickstart/?utm_source=chatgpt.com))

**Empfehlung:**
- Optional. Für MVP reicht CLI + Cloud.

---

### 4.5 GitHub Code Review mit Codex (optional, sehr wertvoll)
- Codex cloud einrichten
- in Codex Settings: Code Review für Repo aktivieren

Quelle: „Use Codex in GitHub“ (Code Review Toggle). ([developers.openai.com](https://developers.openai.com/codex/integrations/github/?utm_source=chatgpt.com))

**Review-Scope (streng):**
- Codex reviewt:
  - Guardrails/Checks fehlen?
  - Tests vorhanden?
  - „Fail-soft“ patterns?
- Codex reviewt NICHT:
  - Produktentscheidungen
  - Copy/UX Ton

---

### 4.6 Codex GitHub Action (CI, optional)
- OpenAI Key als GitHub Secret (`OPENAI_API_KEY`)
- Workflow ruft Codex mit `prompt` oder `prompt-file`

Quelle: Codex GitHub Action Prerequisites. ([developers.openai.com](https://developers.openai.com/codex/github-action/?utm_source=chatgpt.com))

**Empfehlung für MVP:**
- Nutzt Action nur für PR-Checks (z. B. „Spec lock violations“), nicht fürs „Bauen“.

---

## 5. Praktisches Arbeitsmodell (wie wir Codex nutzen)

### 5.1 „Prompt → Plan → Patch“ (Standard Loop)
1) **Prompt** (klarer Task + Constraints)
2) **Plan** (Codex liefert Plan; Mensch akzeptiert oder korrigiert)
3) **Patch** (Codex erstellt diff/PR)
4) **Review** (Human + optional Codex Review)
5) **Merge** (nur wenn Invarianten grün)

Quelle: Codex arbeitet task-basiert in isolierten Umgebungen in ChatGPT/Codex cloud. ([openai.com](https://openai.com/index/introducing-codex/?utm_source=chatgpt.com))

---

### 5.2 Zwei feste Prompt-Templates

#### Template A — Core Logic (Human-Driven)
- Zweck: Codex als Pair-Programmer, nicht Entscheider
- Prompt enthält:
  - Invarianten
  - erlaubte Übergänge
  - verbotene Patterns

#### Template B — Peripheral Work (Codex-Assisted)
- Zweck: CRUD/UI/Test scaffolding
- Prompt enthält:
  - Dateistruktur
  - Code-Style
  - „No business logic changes“

---

## 6. Minimum Guardrail Suite (Tests/Checks)

**MVP Pflicht (automatisiert):**
- `invariants.spec` (Tests):
  - Task ohne Owner → Block
  - Owner-Change nur via Übergabe-Event
  - EndDate nicht verlängerbar
  - Close nur bei erlaubten Bedingungen

**MVP Pflicht (manuell):**
- „Spec check“: PR-Reviewer bestätigt keine Regelabweichung

---

## 7. Empfohlene Wahl (für euch)

### Default Setup (minimal & robust)
- **Codex cloud in ChatGPT** für Tasks/PRs
- **Codex CLI** für lokale Iteration
- **ChatGPT GitHub Connector** für Repo Access

Optional danach:
- Codex Code Review Toggle
- Codex GitHub Action

---

## 8. Nächster Build-Schritt (Phase 0)

Als nächstes wird **ohne UI** formalisiert:
- State Machine (Lifecycle Zustände + Transition Matrix)
- Block Types (Enum + Trigger + Resolution)
- Invariants (als Tests)

Danach erst: Code.

