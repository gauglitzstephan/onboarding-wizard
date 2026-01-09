import { describe, expect, it } from "vitest";

import { BlockType, createBlock } from "../domain/blocks";

describe("Every block is explicit, descriptive, and fail-loud.", () => {
  it("defines all block types", () => {
    expect(BlockType.NO_OWNER_ASSIGNED).toBe("NO_OWNER_ASSIGNED");
    expect(BlockType.REQUIRED_TASKS_OPEN).toBe("REQUIRED_TASKS_OPEN");
    expect(BlockType.MISSING_REQUIRED_INPUT).toBe("MISSING_REQUIRED_INPUT");
    expect(BlockType.SYSTEM_CONSTRAINT_VIOLATION).toBe(
      "SYSTEM_CONSTRAINT_VIOLATION",
    );
  });

  it("creates explicit, descriptive blocks with required fields", () => {
    const type = BlockType.NO_OWNER_ASSIGNED;
    const rule = "Onboarding must have an assigned owner";
    const cause = "No owner has been assigned to the onboarding";
    const resolutionHint = "Assign an owner before continuing";

    expect(rule).not.toHaveLength(0);
    expect(cause).not.toHaveLength(0);
    expect(resolutionHint).not.toHaveLength(0);

    expect(createBlock(type, rule, cause, resolutionHint)).toEqual({
      type,
      rule,
      cause,
      resolutionHint,
    });
  });
});
