import type { Page, Item } from "./types";
import raw from "../data/items.json";

/**
 * The data layer.
 *
 * There is no server yet — this app deploys as static files to GitHub Pages,
 * so the "API" reads a JSON file that ships with the build. It is shaped like
 * a network call on purpose: when a real endpoint lands, only this file
 * changes and nothing that calls it has to.
 */
export async function listItems(limit: number): Promise<Page<Item>> {
  const all = raw as Item[];
  return { items: all.slice(0, limit), total: all.length };
}

export async function getItem(id: string): Promise<Item | null> {
  const all = raw as Item[];
  return all.find((r) => r.id === id) ?? null;
}
