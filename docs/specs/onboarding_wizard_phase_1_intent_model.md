# Onboarding Wizard
## Phase 1 Intent Model — Truth Definition

Classification: Phase 1 truth definition. No implementation is performed.

Spec grounding: This document is derived exclusively from:
- `docs/specs/onboarding_wizard_product_definition_system_level.md`
- `docs/specs/onboarding_wizard_structure_blueprint_taxonomy.md`
- `docs/specs/onboarding_wizard_system_enablement_surface_specification.md`
- `docs/specs/onboarding_wizard_phase_1_intent_spec.md`
- (Optional context, non-normative) `docs/specs/onboarding_wizard_mvp_slice_specification.md`
No additional assumptions are introduced.

---

## A. Intent Definition Rules (P0)

### What qualifies as a system intent
- A system intent is a declarative request that the system can accept or refuse.
- Each intent must result in a visible system state or a visible block with an explicit explanation.
- Intents operate at the system level and must align with explicit responsibility, state clarity, and end-state finality.
- Intents may create or record decision objects but must not trigger automatic execution or side effects.

### What is explicitly NOT an intent
- Anything that implies coaching, guidance, evaluation, or cultural shaping.
- Anything that requires implicit defaults, inferred decisions, or silent corrections.
- Anything that changes state without an explicit decision.
- Anything that performs or automates work on behalf of a user.

### Language constraints
- Neutral, non-guiding, non-evaluative phrasing.
- No recommendations or best-practice framing.
- No performance judgment or success labeling.

---

## B. Canonical Intent Taxonomy

The following intents are finite and complete for Phase 1. No additional intents are permitted.

### Intent 1 — Complete System Boundary Acknowledgment
- **Triggering actor (role-class):** System Operator
- **Preconditions:** Meta-onboarding not yet completed.
- **System effect:** Visible state: `Meta-Onboarding Completed`.
- **Fail-loud behavior:** Any attempt to proceed without completion is blocked with an explicit boundary explanation.
- **Explicit exclusions:** No bypass, no partial completion, no system-provided recommendations.

### Intent 2 — Define Role Onboarding Context
- **Triggering actor (role-class):** System Operator
- **Preconditions:** Meta-onboarding completed; no active cycle or explicit restart in progress.
- **System effect:** Visible state: `Context Fixed` with role, start date, timeframe, and organization unit recorded.
- **Fail-loud behavior:** Missing context fields result in a block with a state explanation.
- **Explicit exclusions:** No inferred role, no implicit timeframe selection, no silent changes.

### Intent 3 — Define Onboarding Lifecycle Structure
- **Triggering actor (role-class):** System Operator
- **Preconditions:** Context fixed.
- **System effect:** Visible state: `Lifecycle Defined` with ordered states and explicit transition criteria.
- **Fail-loud behavior:** Attempts to omit required states or skip transitions are blocked with an explanation.
- **Explicit exclusions:** No recommended phases, no duration guidance, no evaluation markers.

### Intent 4 — Define Responsibility Map
- **Triggering actor (role-class):** Responsibility Assigner
- **Preconditions:** Context fixed; lifecycle defined.
- **System effect:** Visible state: `Responsibility Map Complete` when every task slot has exactly one owner.
- **Fail-loud behavior:** Any task slot without an owner blocks activation and is explicitly shown.
- **Explicit exclusions:** No shared ownership, no owner removal without explicit handover, no owner scoring.

### Intent 5 — Define Information Artifact Slots
- **Triggering actor (role-class):** Responsibility Owner
- **Preconditions:** Context fixed; lifecycle defined; responsibility map complete for the relevant slot.
- **System effect:** Visible state: `Artifact Slot Recorded` with owner and availability status.
- **Fail-loud behavior:** Missing owner or missing lifecycle association blocks recording with an explanation.
- **Explicit exclusions:** No content validation, no knowledge evaluation, no completion scoring.

### Intent 6 — Activate Onboarding Cycle
- **Triggering actor (role-class):** System Operator
- **Preconditions:** Meta-onboarding completed; context fixed; lifecycle defined; responsibility map complete.
- **System effect:** Visible state: `Onboarding Cycle Active`.
- **Fail-loud behavior:** Any missing prerequisite blocks activation with explicit cause.
- **Explicit exclusions:** No automatic execution, no automation of tasks, no reminders.

### Intent 7 — Confirm Handover and Close Cycle
- **Triggering actor (role-class):** System Operator
- **Preconditions:** Onboarding cycle active; explicit handover confirmation present.
- **System effect:** Visible state: `Onboarding Closed and Archived`.
- **Fail-loud behavior:** Closure without explicit handover confirmation is blocked.
- **Explicit exclusions:** No extension, no reopening without explicit restart, no post-closure edits.

---

## C. Intent → State / Block Mapping

| Intent | State(s) Produced | Block(s) Produced | Enablement Surface Reference |
| --- | --- | --- | --- |
| Complete System Boundary Acknowledgment | Meta-Onboarding Completed | Block on any action before completion | Meta-Onboarding Flow; State & Block Explanation Surface |
| Define Role Onboarding Context | Context Fixed | Block on missing context fields | Responsibility Enforcement Surface; State & Block Explanation Surface |
| Define Onboarding Lifecycle Structure | Lifecycle Defined | Block on missing required states or skipped transitions | System Boundary Messaging; State & Block Explanation Surface |
| Define Responsibility Map | Responsibility Map Complete | Block on any task slot without exactly one owner | Responsibility Enforcement Surface; State & Block Explanation Surface |
| Define Information Artifact Slots | Artifact Slot Recorded | Block on missing owner or lifecycle association | Responsibility Enforcement Surface; State & Block Explanation Surface |
| Activate Onboarding Cycle | Onboarding Cycle Active | Block on unmet prerequisites | Meta-Onboarding Flow; State & Block Explanation Surface |
| Confirm Handover and Close Cycle | Onboarding Closed and Archived | Block on missing handover confirmation | Closure & End-State Surface; State & Block Explanation Surface |

---

## D. Boundary / Invalid Intents (CRITICAL)

The system must refuse the following intents. No workaround exists.

1. **Request system recommendations or best practices**
   - **Boundary violation:** The system explicitly excludes recommendations.
   - **Refusal explanation:** The system states that it does not provide recommendations and will not proceed.
   - **No workaround:** The request is rejected without alternative paths.

2. **Evaluate or rate people, owners, or outcomes**
   - **Boundary violation:** Performance evaluation is explicitly excluded.
   - **Refusal explanation:** The system states that evaluation is out of scope.
   - **No workaround:** The request is rejected without alternative paths.

3. **Extend the onboarding timeframe without explicit restart**
   - **Boundary violation:** Timeframes are fixed and changes require explicit restart.
   - **Refusal explanation:** The system blocks the change and explains the restart requirement.
   - **No workaround:** No implicit extension or soft override.

4. **Remove an owner without explicit handover**
   - **Boundary violation:** Ownership must remain explicit and traceable.
   - **Refusal explanation:** The system blocks removal and requires explicit handover.
   - **No workaround:** No silent owner removal.

5. **Add tasks or artifact slots after closure**
   - **Boundary violation:** Closure is final and immutable.
   - **Refusal explanation:** The system blocks edits and states that the cycle is closed.
   - **No workaround:** No post-closure edits.

6. **Bypass fail-loud blocks or proceed without prerequisites**
   - **Boundary violation:** Fail-loud enforcement is mandatory.
   - **Refusal explanation:** The system explains the missing prerequisite and blocks progress.
   - **No workaround:** No override or escalation path.

7. **Trigger automation, reminders, or integrations**
   - **Boundary violation:** Phase 1 forbids automation and integrations.
   - **Refusal explanation:** The system states that automation is not part of Phase 1.
   - **No workaround:** No indirect automation through defaults or rules.

8. **Create support escalation or human fallback paths**
   - **Boundary violation:** No human fallback is allowed.
   - **Refusal explanation:** The system states that it does not route to support.
   - **No workaround:** No escalation mechanism.

---

## E. Testable Invariants (Phase 1)

1. Exactly one owner exists per responsibility.
2. All relevant changes are explicit and recorded as decisions.
3. No implicit defaults exist for role, timeframe, or ownership.
4. Every intent results in a visible state or a visible block.
5. Fail-loud behavior is enforced with explicit explanations.
6. No performance evaluation or outcome judgment exists.
7. No recommendations, guidance, or best-practice content exists.
8. No automation or side effects are triggered by intent acceptance.
9. Onboarding has a fixed end-state and cannot be silently extended.
10. No human fallback or support dependency is required.
11. Post-closure edits are blocked.
12. Responsibility transfers are explicit and traceable.

---

## F. Open Questions / Spec Conflicts

1. **Timeframe options conflict:** The system-level definition allows multiple fixed timeframes, while the MVP slice specifies a single fixed timeframe. Decision required: confirm whether Phase 1 intent rules permit multiple fixed timeframes or a single fixed timeframe in the initial scope.
2. **Phase 1 interaction surface scope:** Phase 1 permits decision objects and read-only projections, while the intent model defines state transitions that imply explicit decisions. Decision required: confirm whether Phase 1 permits state transitions as recorded decision objects without operational execution.
