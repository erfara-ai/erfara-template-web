import type { Item } from "../api/types";

/** Everything carrying this tag, in the order the data gave them. */
export function byTag(rows: Item[], tag: string): Item[] {
  return rows.filter((r) => r.tags.includes(tag));
}

/** Lowest score first. Ties keep their original order. */
export function sortByScore(rows: Item[]): Item[] {
  return [...rows].sort((a, b) => a.score - b.score);
}
