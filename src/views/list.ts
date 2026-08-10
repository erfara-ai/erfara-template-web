import type { Item } from "../api/types";
import { formatDurationSec, scoreBand } from "../lib/format";

export function renderList(rows: Item[], onPick: (id: string) => void): HTMLElement {
  const ul = document.createElement("ul");
  ul.className = "list";
  for (const r of rows) {
    const li = document.createElement("li");
    li.className = "row";
    li.dataset.band = scoreBand(r.score);

    const title = document.createElement("button");
    title.className = "row-title";
    title.textContent = r.title;
    title.addEventListener("click", () => onPick(r.id));

    const meta = document.createElement("span");
    meta.className = "row-meta";
    meta.textContent = `${r.score} pts · ${formatDurationSec(r.durationSec)}`;

    li.append(title, meta);
    ul.append(li);
  }
  return ul;
}
