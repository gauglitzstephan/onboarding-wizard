import { describe, expect, it } from "vitest";

import { BlockType } from "../domain/blocks";
import { computeBlocks, type OnboardingInstanceStub } from "../domain/instance";
import { evaluateInvariants } from "../domain/invariants";
import { LifecycleState } from "../domain/lifecycle";

const baseInstance: OnboardingInstanceStub = {
  id: "instance-1",
  lifecycleState: LifecycleState.ACTIVE,
  tasks: [],
  handovers: [],
  currentEndDateIso: "2026-01-10",
  proposedEndDateIso: "2026-01-10",
};

describe("Instance block projection", () => {
  it("Given a task without owner when computing blocks then NO_OWNER_ASSIGNED is returned", () => {
    const instance: OnboardingInstanceStub = {
      ...baseInstance,
      tasks: [{ id: "task-1", required: false, status: "OPEN" }],
    };

    const blocks = computeBlocks(instance);

    expect(blocks.some((block) => block.type === BlockType.NO_OWNER_ASSIGNED)).toBe(
      true,
    );
    blocks.forEach((block) => {
      expect(typeof block.rule).toBe("string");
      expect(typeof block.cause).toBe("string");
      expect(typeof block.resolutionHint).toBe("string");
    });
  });

  it("Given identical input when computing blocks then the block types are deterministic", () => {
    const instance: OnboardingInstanceStub = {
      ...baseInstance,
      tasks: [{ id: "task-1", required: false, status: "OPEN" }],
    };

    const blocksFirst = computeBlocks(instance);
    const blocksSecond = computeBlocks(instance);

    const typesFirst = blocksFirst.map((block) => block.type).sort();
    const typesSecond = blocksSecond.map((block) => block.type).sort();

    expect(typesFirst).toEqual(typesSecond);
  });

  it("Given clean input when computing blocks then no blocks are returned", () => {
    const instance: OnboardingInstanceStub = {
      ...baseInstance,
      tasks: [
        { id: "task-1", ownerId: "owner-1", required: true, status: "DONE" },
      ],
    };

    const blocks = computeBlocks(instance);

    expect(blocks).toHaveLength(0);
  });

  it("computeBlocks block types match evaluateInvariants block types", () => {
    const instance: OnboardingInstanceStub = {
      ...baseInstance,
      lifecycleState: LifecycleState.CLOSING,
      tasks: [
        { id: "task-1", required: true, status: "OPEN" },
        { id: "task-2", ownerId: "owner-1", required: false, status: "DONE" },
      ],
      proposedEndDateIso: "2026-02-10",
    };

    const projectedBlocks = computeBlocks(instance);
    const invariantBlocks = evaluateInvariants({
      lifecycleState: instance.lifecycleState,
      tasks: instance.tasks,
      handovers: instance.handovers,
      currentEndDateIso: instance.currentEndDateIso,
      proposedEndDateIso: instance.proposedEndDateIso,
    });

    const projectedTypes = projectedBlocks.map((block) => block.type).sort();
    const invariantTypes = invariantBlocks.map((block) => block.type).sort();

    expect(projectedTypes).toEqual(invariantTypes);
  });

  it("computeBlocks does not introduce block types beyond evaluateInvariants", () => {
    const instance: OnboardingInstanceStub = {
      ...baseInstance,
      tasks: [
        { id: "task-1", required: false, status: "OPEN" },
        { id: "task-2", ownerId: "owner-1", required: true, status: "DONE" },
      ],
    };

    const projectedBlocks = computeBlocks(instance);
    const invariantBlocks = evaluateInvariants({
      lifecycleState: instance.lifecycleState,
      tasks: instance.tasks,
      handovers: instance.handovers,
      currentEndDateIso: instance.currentEndDateIso,
      proposedEndDateIso: instance.proposedEndDateIso,
    });

    const invariantTypes = new Set(
      invariantBlocks.map((block) => block.type),
    );
    const hasExtraTypes = projectedBlocks.some(
      (block) => !invariantTypes.has(block.type),
    );

    expect(hasExtraTypes).toBe(false);
  });
});
