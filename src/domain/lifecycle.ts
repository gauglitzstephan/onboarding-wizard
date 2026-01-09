export enum LifecycleState {
  DRAFT = "DRAFT",
  ACTIVE = "ACTIVE",
  CLOSING = "CLOSING",
  CLOSED = "CLOSED",
  ARCHIVED = "ARCHIVED",
}

export const allowedTransitions: Record<LifecycleState, LifecycleState[]> = {
  [LifecycleState.DRAFT]: [LifecycleState.ACTIVE],
  [LifecycleState.ACTIVE]: [LifecycleState.CLOSING],
  [LifecycleState.CLOSING]: [LifecycleState.CLOSED],
  [LifecycleState.CLOSED]: [LifecycleState.ARCHIVED],
  [LifecycleState.ARCHIVED]: [],
};

export function canTransition(
  from: LifecycleState,
  to: LifecycleState,
): boolean {
  return allowedTransitions[from].includes(to);
}
