export enum BlockType {
  NO_OWNER_ASSIGNED = "NO_OWNER_ASSIGNED",
  REQUIRED_TASKS_OPEN = "REQUIRED_TASKS_OPEN",
  MISSING_REQUIRED_INPUT = "MISSING_REQUIRED_INPUT",
  SYSTEM_CONSTRAINT_VIOLATION = "SYSTEM_CONSTRAINT_VIOLATION",
}

export type Block = {
  type: BlockType;
  rule: string;
  cause: string;
  resolutionHint: string;
};

export function createBlock(
  type: BlockType,
  rule: string,
  cause: string,
  resolutionHint: string,
): Block {
  return {
    type,
    rule,
    cause,
    resolutionHint,
  };
}
