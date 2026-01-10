import type { Block } from "./blocks";
import type { LifecycleState } from "./lifecycle";
import type { HandoverEventStub, TaskStub } from "./invariants";
import { evaluateInvariants } from "./invariants";

export type OnboardingInstanceStub = {
  id: string;
  lifecycleState: LifecycleState;
  tasks: TaskStub[];
  handovers: HandoverEventStub[];
  currentEndDateIso: string;
  proposedEndDateIso: string;
};

export function computeBlocks(instance: OnboardingInstanceStub): Block[] {
  return evaluateInvariants({
    lifecycleState: instance.lifecycleState,
    tasks: instance.tasks,
    handovers: instance.handovers,
    currentEndDateIso: instance.currentEndDateIso,
    proposedEndDateIso: instance.proposedEndDateIso,
  });
}
