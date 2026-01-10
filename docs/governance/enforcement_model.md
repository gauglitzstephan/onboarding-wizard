# Enforcement Model

## Canonical evaluation rule
- Integration-facing canonical path: `computeBlocks(instance)` from `src/domain/instance.ts`.
- Domain primitive: `evaluateInvariants(input)` from `src/domain/invariants.ts` is internal-only.
- No engine layer exists before Phase 2+.

## CI rule
- CI green is required to merge.

## Spec rule
- Specs changes only via PR (`docs/specs/*`).

## Solo-mode note
- Solo mode: branch protection expectations may differ.
- Team mode must enable:
  - Required CI checks on the main branch.
  - PR review (at least one approver).
  - No direct pushes to main.
