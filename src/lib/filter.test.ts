import { describe, expect, it } from "vitest";
import { byTag, sortByScore } from "./filter";
import type { Item } from "../api/types";

const row = (id: string, score: number, tags: string[]): Item => ({
  id,
  title: id,
  score,
  durationSec: 900,
  category: "draft",
  tags,
});

describe("byTag", () => {
  it("keeps only the rows carrying the tag", () => {
    const rows = [row("a", 40, ["keep"]), row("b", 75, ["other"])];
    expect(byTag(rows, "keep").map((r) => r.id)).toEqual(["a"]);
  });
});

describe("sortByScore", () => {
  it("puts the lowest first", () => {
    const rows = [row("high", 75, []), row("low", 40, [])];
    expect(sortByScore(rows).map((r) => r.id)).toEqual(["low", "high"]);
  });
  it("does not modify the array it was given", () => {
    const rows = [row("high", 75, []), row("low", 40, [])];
    sortByScore(rows);
    expect(rows.map((r) => r.id)).toEqual(["high", "low"]);
  });
});
