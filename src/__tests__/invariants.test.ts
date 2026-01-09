import { describe, expect, it } from "vitest";

import {
  evaluateInvariants,
  type HandoverEventStub,
  type InvariantInput,
  type TaskStub,
} from "../domain/invariants";
import { BlockType } from "../domain/blocks";
import { LifecycleState } from "../domain/lifecycle";

const baseInput: InvariantInput = {
  lifecycleState: LifecycleState.ACTIVE,
  tasks: [],
  handovers: [],
  currentEndDateIso: "2026-01-10",
  proposedEndDateIso: "2026-01-10",
};

const expectStringFields = (blocks: ReturnType<typeof evaluateInvariants>) => {
  blocks.forEach((block) => {
    expect(typeof block.rule).toBe("string");
    expect(typeof block.cause).toBe("string");
    expect(typeof block.resolutionHint).toBe("string");
  });
};

describe("Invariant evaluation", () => {
  it("Given a task without owner when evaluating invariants then NO_OWNER_ASSIGNED is returned", () => {
    const tasks: TaskStub[] = [
      { id: "task-1", required: false, status: "OPEN" },
    ];

    const blocks = evaluateInvariants({ ...baseInput, tasks });

    expect(blocks.some((block) => block.type === BlockType.NO_OWNER_ASSIGNED)).toBe(
      true,
    );
    expectStringFields(blocks);
  });

  it("Given required tasks open in closing state when evaluating invariants then REQUIRED_TASKS_OPEN is returned", () => {
    const tasks: TaskStub[] = [
      { id: "task-1", ownerId: "owner-1", required: true, status: "OPEN" },
    ];

    const blocks = evaluateInvariants({
      ...baseInput,
      lifecycleState: LifecycleState.CLOSING,
      tasks,
    });

    expect(blocks.some((block) => block.type === BlockType.REQUIRED_TASKS_OPEN)).toBe(
      true,
    );
    expectStringFields(blocks);
  });

  it("Given a handover mismatch when evaluating invariants then SYSTEM_CONSTRAINT_VIOLATION is returned", () => {
    const tasks: TaskStub[] = [
      { id: "task-1", ownerId: "owner-2", required: false, status: "DONE" },
    ];
    const handovers: HandoverEventStub[] = [
      {
        taskId: "task-1",
        fromOwnerId: "owner-1",
        toOwnerId: "owner-1",
        atIso: "2026-01-01T12:00:00Z",
      },
    ];

    const blocks = evaluateInvariants({ ...baseInput, tasks, handovers });

    expect(
      blocks.some(
        (block) => block.type === BlockType.SYSTEM_CONSTRAINT_VIOLATION,
      ),
    ).toBe(true);
    expectStringFields(blocks);
  });

  it("Given an end date change when evaluating invariants then SYSTEM_CONSTRAINT_VIOLATION is returned", () => {
    const blocks = evaluateInvariants({
      ...baseInput,
      proposedEndDateIso: "2026-02-10",
    });

    expect(
      blocks.some(
        (block) => block.type === BlockType.SYSTEM_CONSTRAINT_VIOLATION,
      ),
    ).toBe(true);
    expectStringFields(blocks);
  });

  it("Given clean input when evaluating invariants then no blocks are returned", () => {
    const tasks: TaskStub[] = [
      { id: "task-1", ownerId: "owner-1", required: true, status: "DONE" },
    ];

    const blocks = evaluateInvariants({ ...baseInput, tasks });

    expect(blocks).toHaveLength(0);
    expectStringFields(blocks);
  });

  it("Given identical input when evaluating invariants then the block types are deterministic", () => {
    const tasks: TaskStub[] = [
      { id: "task-1", required: false, status: "OPEN" },
    ];

    const input = { ...baseInput, tasks };
    const blocksFirst = evaluateInvariants(input);
    const blocksSecond = evaluateInvariants(input);

    const typesFirst = blocksFirst.map((block) => block.type).sort();
    const typesSecond = blocksSecond.map((block) => block.type).sort();

    expect(typesFirst).toEqual(typesSecond);
  });
});
