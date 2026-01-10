# ADR-P1-01 — Phase 1 Lifecycle Transitions Are Decision Objects Only

**Status:** Accepted  
**Date:** YYYY-MM-DD  
**Phase:** Phase 1 — System Truth  
**Scope:** Onboarding Wizard Lifecycle

---

## Context

Phase 1 defines the system truth for the Onboarding Wizard, including:
- canonical intents
- lifecycle states
- allowed transitions
- hard boundaries

During Phase 1 review and red-team diagnostics, ambiguity was identified regarding
the **semantics of lifecycle state transitions**:
specifically whether a transition implies **operational execution**
or merely **declarative state change**.

This ambiguity presents a risk of unintended automation or side effects
during implementation.

---

## Decision

In **Phase 1**, all lifecycle state transitions are **decision objects only**.

A Phase-1 lifecycle transition:

- represents an explicit recorded decision
- updates the declared lifecycle state
- has **no operational side effects**
- does **not** trigger execution, task progression, automation, reminders, or integrations

Any interpretation of a Phase-1 lifecycle transition as execution
is a violation of Phase-1 system truth.

---

## Consequences

- Phase 1 remains **purely declarative**
- Automation, execution logic, and side effects are **explicitly deferred** to later phases
- Implementation must treat lifecycle transitions as **state records only**
- This decision closes ambiguity identified in Phase-1 diagnostic review

---

## Non-Goals

This ADR does **not**:

- introduce new lifecycle states
- modify existing intents
- define execution semantics
- prescribe implementation details
- alter Phase-2 or Phase-3 behavior

---

## Notes

This ADR clarifies existing Phase-1 intent and lifecycle constraints.
It does **not** expand or relax system boundaries.
