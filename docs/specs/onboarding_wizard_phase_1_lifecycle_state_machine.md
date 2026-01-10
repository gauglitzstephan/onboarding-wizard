# Onboarding Wizard
## Phase 1 Lifecycle / State Machine — Truth Definition

### A) Purpose
This document defines the Phase 1 onboarding lifecycle as a finite, decision-gated state machine with explicit entry/exit conditions, blocks, and closure semantics; it is a Phase 1 truth artifact only and introduces no implementation, automation, or side effects.

### B) Spec Grounding (explicit)
Grounded in the following authoritative clauses:
- Blueprint #3 (Lifecycle & Zustände):
  - "Zustände können **nicht stillschweigend übersprungen** werden." (Erzwingungslogik)
  - "Abschluss ist ein **expliziter Systemzustand**." (Erzwingungslogik)
  - "Zustandsübergänge mit klarer Eintritts- und Austrittsbedingung" (Struktur)
- Phase 1 Intent Spec (Forbidden Building Blocks):
  - "Automatische State-Transitions"
  - "Side Effects (z. B. Task-Status ändern)"
  - "Implizite Defaults (\"wenn nichts entschieden wird, dann …\")"
  - "Heuristiken"
  - "Priorisierungslogik"
- Blueprint #2 (Responsibility Map):
  - "Owner können **nicht entfernt**, sondern nur **explizit übergeben** werden."
- Blueprint #5 (Handover & Closure Structure):
  - "Onboarding kann nur durch explizite Übergabe abgeschlossen werden."
  - "Offene Aufgaben werden **sichtbar archiviert**, nicht gelöscht."
  - "Nach Abschluss können keine neuen Aufgaben hinzugefügt werden."

### C) State Set (finite list)
Each state is neutral and sequential. All entry/exit conditions are decision-gated and declarative. Allowed decision objects reference Phase 1 intent names.

1) **Meta-Onboarding Pending**
   - **Definition:** No boundary acknowledgment decision has been recorded.
   - **Entry condition:** System initialized without Intent 1 recorded.
   - **Exit condition:** Intent 1 — Complete System Boundary Acknowledgment is explicitly recorded.
   - **Allowed decision objects / intents:**
     - Intent 1 — Complete System Boundary Acknowledgment (only)
   - **Visible projections (read-only):**
     - Block: boundary acknowledgment required
     - System boundary explanation

2) **Meta-Onboarding Completed**
   - **Definition:** System boundary acknowledgment has been recorded.
   - **Entry condition:** Intent 1 recorded.
   - **Exit condition:** Intent 2 — Define Role Onboarding Context recorded.
   - **Allowed decision objects / intents:**
     - Intent 2 — Define Role Onboarding Context
     - Intent 3 — Define Onboarding Lifecycle Structure (only if Context Fixed is completed first; otherwise blocked)
     - Intent 5 — Define Information Artifact Slots (only if explicit owner + lifecycle association exist; otherwise blocked)
   - **Visible projections (read-only):**
     - Meta-onboarding completion marker
     - Blocks for missing context fields

3) **Context Fixed**
   - **Definition:** Role, start date, timeframe, and organization unit are explicitly recorded.
   - **Entry condition:** Intent 2 recorded.
   - **Exit condition:** Intent 3 — Define Onboarding Lifecycle Structure recorded.
   - **Allowed decision objects / intents:**
     - Intent 3 — Define Onboarding Lifecycle Structure
     - Intent 5 — Define Information Artifact Slots (requires explicit owner + lifecycle association)
   - **Visible projections (read-only):**
     - Context fields with immutable status marker
     - Block list for missing lifecycle definition

4) **Lifecycle Defined**
   - **Definition:** Ordered states and explicit transition criteria are recorded.
   - **Entry condition:** Intent 3 recorded.
   - **Exit condition:** Intent 4 — Define Responsibility Map recorded (and complete).
   - **Allowed decision objects / intents:**
     - Intent 4 — Define Responsibility Map
     - Intent 5 — Define Information Artifact Slots (requires explicit owner + lifecycle association)
   - **Visible projections (read-only):**
     - Lifecycle state list and transition criteria
     - Blocks for missing responsibility owners

5) **Responsibility Map Complete**
   - **Definition:** Every task slot has exactly one owner.
   - **Entry condition:** Intent 4 recorded with completion.
   - **Exit condition:** Intent 6 — Activate Onboarding Cycle recorded.
   - **Allowed decision objects / intents:**
     - Intent 6 — Activate Onboarding Cycle
     - Intent 5 — Define Information Artifact Slots (requires explicit owner + lifecycle association)
   - **Visible projections (read-only):**
     - Responsibility map with owners
     - Blocks for any owner-less task slot

6) **Onboarding Cycle Active**
   - **Definition:** The onboarding cycle is explicitly activated.
   - **Entry condition:** Intent 6 recorded.
   - **Exit condition:** Intent 7 — Confirm Handover and Close Cycle recorded.
   - **Allowed decision objects / intents:**
     - Intent 5 — Define Information Artifact Slots (requires explicit owner + lifecycle association)
     - Intent 7 — Confirm Handover and Close Cycle
   - **Visible projections (read-only):**
     - Active state marker
     - Open blocks and pending decisions
     - Read-only artifact slot status

7) **Onboarding Closed and Archived**
   - **Definition:** The onboarding cycle is explicitly closed after handover confirmation.
   - **Entry condition:** Intent 7 recorded with explicit handover confirmation.
   - **Exit condition:** None (terminal state).
   - **Allowed decision objects / intents:**
     - None (all lifecycle-changing intents are blocked).
   - **Visible projections (read-only):**
     - Closure marker (irreversible)
     - Archived task/artefact visibility (inactive)

### D) Transition Rules (matrix)
All transitions are decision/event-gated and never automatic.

| From | To | Triggering decision/event (explicit) | Preconditions | Fail-loud block condition + explanation requirement |
| --- | --- | --- | --- | --- |
| Meta-Onboarding Pending | Meta-Onboarding Completed | Intent 1 — Complete System Boundary Acknowledgment | No prior Intent 1 recorded | Block any other intent; explain boundary acknowledgment requirement. |
| Meta-Onboarding Completed | Context Fixed | Intent 2 — Define Role Onboarding Context | Meta-onboarding completed | Block if any required context field missing; explain missing fields. |
| Context Fixed | Lifecycle Defined | Intent 3 — Define Onboarding Lifecycle Structure | Context fixed | Block if any required lifecycle state or transition criteria missing; explain omissions. |
| Lifecycle Defined | Responsibility Map Complete | Intent 4 — Define Responsibility Map | Lifecycle defined | Block if any task slot lacks exactly one owner; explain owner gaps. |
| Responsibility Map Complete | Onboarding Cycle Active | Intent 6 — Activate Onboarding Cycle | Meta-onboarding completed; context fixed; lifecycle defined; responsibility map complete | Block activation if any prerequisite missing; explain each unmet prerequisite. |
| Onboarding Cycle Active | Onboarding Closed and Archived | Intent 7 — Confirm Handover and Close Cycle | Explicit handover confirmation present | Block closure without explicit handover confirmation; explain requirement. |

### E) Block Semantics
- **What constitutes a block:** Any attempt to record an intent when its explicit preconditions are not satisfied results in a visible block state with a mandatory explanation of the missing prerequisite.
- **Persistence of blocks:** Blocks persist and remain visible until the missing decision is explicitly recorded; non-decisions remain visible and unresolved.
- **Block resolution:** A block is resolved only by recording the explicit, named decision object that satisfies the stated precondition (no automatic resolution).

### F) Closure Semantics
- **Explicit closed state:** The lifecycle ends only in the "Onboarding Closed and Archived" state, recorded via Intent 7 with explicit handover confirmation.
- **Irreversibility marker (Phase 1 goal):** Closure is irreversible; no reopening occurs without an explicit restart outside this lifecycle.
- **Post-closure behavior (declarative):** All tasks and artifacts remain visible but inactive and archived; no new tasks or artifact slots can be added post-closure.

### G) Invariants (8–12, testable)
1. The lifecycle is finite and sequential; states cannot be silently skipped. 
2. Every state transition is gated by an explicit decision object (no automatic transitions). 
3. Every accepted intent produces either a visible state or a visible block with explanation. 
4. Meta-onboarding acknowledgment is required before any context definition. 
5. Context must be fixed before lifecycle definition is recorded. 
6. Lifecycle definition must exist before the responsibility map can be completed. 
7. Responsibility map completion requires exactly one owner per task slot; owners are never removed without explicit handover. 
8. Activation of the onboarding cycle requires all prerequisites to be explicitly satisfied. 
9. Closure requires explicit handover confirmation and results in an irreversible terminal state. 
10. Post-closure edits (new tasks or artifact slots) are blocked and must remain blocked. 
11. Blocks persist and remain visible until the required decision is recorded. 

### H) Open Questions / Spec Conflicts (if any)
1. Phase 1 intent model open question: confirm whether state transitions in this lifecycle are recorded solely as decision objects without any operational execution (alignment with Phase 1 interaction surface scope).
