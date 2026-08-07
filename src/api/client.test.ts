import { describe, expect, it } from "vitest";
import { getItem, listItems } from "./client";

describe("listItems", () => {
  it("stops at the limit and still reports the true total", async () => {
    const page = await listItems(2);
    expect(page.items).toHaveLength(2);
    expect(page.total).toBeGreaterThan(2);
  });
});

describe("getItem", () => {
  it("answers null for an id that is not there", async () => {
    expect(await getItem("nope")).toBeNull();
  });
});
