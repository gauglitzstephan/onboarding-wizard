import { Block, BlockType, createBlock } from "./blocks";
import { LifecycleState } from "./lifecycle";

export type TaskStub = {
  id: string;
  ownerId?: string;
  required: boolean;
  status: "OPEN" | "DONE";
};

export type HandoverEventStub = {
  taskId: string;
  fromOwnerId: string;
  toOwnerId: string;
  atIso: string;
};

export type InvariantInput = {
  lifecycleState: LifecycleState;
  tasks: TaskStub[];
  handovers: HandoverEventStub[];
  currentEndDateIso: string;
  proposedEndDateIso: string;
};

export function evaluateInvariants(input: InvariantInput): Block[] {
  const blocks: Block[] = [];

  input.tasks.forEach((task) => {
    if (task.ownerId === undefined) {
      blocks.push(
        createBlock(
          BlockType.NO_OWNER_ASSIGNED,
          "Every task must have exactly one explicit owner.",
          `Task ${task.id} has no owner.`,
          "Assign a single responsible owner to the task.",
        ),
      );
    }
  });

  if (
    input.lifecycleState === LifecycleState.CLOSING ||
    input.lifecycleState === LifecycleState.CLOSED
  ) {
    const requiredOpenTasks = input.tasks.filter(
      (task) => task.required && task.status === "OPEN",
    );

    if (requiredOpenTasks.length > 0) {
      const taskIds = requiredOpenTasks.map((task) => task.id);
      const taskSuffix = taskIds.length > 0 ? `: ${taskIds.join(", ")}` : "";

      blocks.push(
        createBlock(
          BlockType.REQUIRED_TASKS_OPEN,
          "Required tasks must be completed before closure.",
          `There are ${requiredOpenTasks.length} required tasks still open${taskSuffix}.`,
          "Complete required tasks or mark them as not required (explicit decision).",
        ),
      );
    }
  }

  input.tasks.forEach((task) => {
    if (!task.ownerId) {
      return;
    }

    const taskHandovers = input.handovers.filter(
      (handover) => handover.taskId === task.id,
    );

    if (taskHandovers.length === 0) {
      return;
    }

    const lastHandover = taskHandovers[taskHandovers.length - 1];

    if (lastHandover.toOwnerId !== task.ownerId) {
      blocks.push(
        createBlock(
          BlockType.SYSTEM_CONSTRAINT_VIOLATION,
          "Owner changes require an explicit handover event.",
          `Task ${task.id} owner differs from last handover target.`,
          "Record a handover event that transfers ownership explicitly.",
        ),
      );
    }
  });

  if (input.proposedEndDateIso !== input.currentEndDateIso) {
    blocks.push(
      createBlock(
        BlockType.SYSTEM_CONSTRAINT_VIOLATION,
        "Onboarding end date is immutable for an instance.",
        "Proposed end date differs from current end date.",
        "Create a new onboarding instance instead of extending the current one.",
      ),
    );
  }

  return blocks;
}
