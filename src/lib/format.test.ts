import { describe, expect, it } from "vitest";
import { formatDurationSec, scoreBand } from "./format";

describe("formatDurationSec", () => {
  it("turns the raw value into the words people use", () => {
    expect(formatDurationSec(900)).toBe("15 min");
  });
  it("refuses nonsense rather than printing it", () => {
    expect(formatDurationSec(-1)).toBe("—");
    expect(formatDurationSec(Number.NaN)).toBe("—");
  });
});

describe("scoreBand", () => {
  it("labels the three bands", () => {
    expect(scoreBand(40 - 1)).toBe("low");
    expect(scoreBand(40)).toBe("middling");
    expect(scoreBand(75)).toBe("high");
  });
});
