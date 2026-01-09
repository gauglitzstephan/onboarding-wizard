import { describe, expect, it } from "vitest";

import {
  allowedTransitions,
  canTransition,
  LifecycleState,
} from "../domain/lifecycle";

describe("lifecycle transitions", () => {
  it("allows DRAFT -> ACTIVE", () => {
    expect(canTransition(LifecycleState.DRAFT, LifecycleState.ACTIVE)).toBe(
      true,
    );
  });

  it("allows ACTIVE -> CLOSING", () => {
    expect(canTransition(LifecycleState.ACTIVE, LifecycleState.CLOSING)).toBe(
      true,
    );
  });

  it("allows CLOSING -> CLOSED", () => {
    expect(canTransition(LifecycleState.CLOSING, LifecycleState.CLOSED)).toBe(
      true,
    );
  });

  it("allows CLOSED -> ARCHIVED", () => {
    expect(canTransition(LifecycleState.CLOSED, LifecycleState.ARCHIVED)).toBe(
      true,
    );
  });

  it("treats self-transitions as forbidden", () => {
    expect(canTransition(LifecycleState.ACTIVE, LifecycleState.ACTIVE)).toBe(
      false,
    );
  });

  it("treats backward transitions as forbidden", () => {
    expect(canTransition(LifecycleState.ACTIVE, LifecycleState.DRAFT)).toBe(
      false,
    );
  });

  it("treats skipped transitions as forbidden", () => {
    expect(canTransition(LifecycleState.DRAFT, LifecycleState.CLOSING)).toBe(
      false,
    );
  });

  it("treats terminal transitions as forbidden", () => {
    expect(canTransition(LifecycleState.ARCHIVED, LifecycleState.DRAFT)).toBe(
      false,
    );
  });

  it("treats non-linear transitions as forbidden", () => {
    expect(canTransition(LifecycleState.CLOSED, LifecycleState.CLOSING)).toBe(
      false,
    );
  });

  it("encodes a linear, finite, irreversible transition table", () => {
    expect(allowedTransitions).toEqual({
      [LifecycleState.DRAFT]: [LifecycleState.ACTIVE],
      [LifecycleState.ACTIVE]: [LifecycleState.CLOSING],
      [LifecycleState.CLOSING]: [LifecycleState.CLOSED],
      [LifecycleState.CLOSED]: [LifecycleState.ARCHIVED],
      [LifecycleState.ARCHIVED]: [],
    });
  });
});
