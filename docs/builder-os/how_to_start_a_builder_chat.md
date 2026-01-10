# How to Start a New Builder Chat

This project operates under **Builder OS**.  
Every new ChatGPT / Codex / AI session **must start in Builder Mode**.

This document defines the **mandatory startup procedure**.

---

## 1. When to Use This

Use this checklist whenever you:
- start a **new ChatGPT chat**
- switch to **Codex cloud / CLI**
- onboard a **new team member**
- create a **specialized agent** (Builder, Reviewer, Checker)

If this is skipped, **outputs are not trusted**.

---

## 2. Mandatory Startup Steps (Do Not Skip)

### Step 1 — Load Context
Before asking for any work, make sure the agent has access to:
- the repository (read access at minimum)
- the `docs/` directory
- current specs and ADRs

If the agent cannot see the specs, **stop**.

---

### Step 2 — Paste the Builder OS Handover Prompt
Paste the full contents of:

docs/builder-os/handover_prompt.md

yaml
Code kopieren

This activates **Builder OS** and sets the execution constraints.

Do not summarize.  
Do not paraphrase.  
Paste it verbatim.

---

### Step 3 — Confirm Activation
Wait for the agent to acknowledge Builder OS, e.g.:
- “Builder OS is active.”
- “Operating in Spec-Locked, Human-Driven mode.”

If the agent does **not** confirm this explicitly:
→ re-paste the prompt  
→ do not proceed

---

## 3. How to Issue Tasks (Required Format)

Every task request must include:

1. **What artifact is requested**
   - code change
   - test
   - spec clarification
   - ADR
   - analysis / review

2. **What you believe the change type is**
   - Implementation Change  
   - or potential Truth Change (if unsure, say so)

3. **Relevant references**
   - spec section(s)
   - ADR ID(s)
   - invariant(s), if applicable

Example:
> “Implement X as an implementation change under SPEC-ABC §3.  
> This must not alter lifecycle rules or invariants.”

---

## 4. What to Expect From the Agent

In Builder Mode, the agent will:
- restate relevant specs before acting
- classify the change (Truth vs Implementation)
- stop if a spec or decision is missing
- ask for confirmation before core logic changes
- refuse to invent rules or soften constraints

This is **correct behavior**, not friction.

---

## 5. Common Failure Signals (Abort Immediately)

Stop the session if the agent:
- proposes features not in the specs
- says “this would be nicer UX if…”
- introduces defaults or exceptions
- implements while still discussing the plan
- resolves spec conflicts on its own

Restart the chat and re-apply Builder OS.

---

## 6. Golden Rule

> If it is not explicit in a spec or ADR,  
> it does not exist.

Builder OS exists to protect:
- system integrity
- scalability
- founder time
- future maintainability

---

**Builder OS must be activated for every session.**  
No exceptions.
