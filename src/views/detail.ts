import type { Item } from "../api/types";
import { formatDurationSec, scoreBand } from "../lib/format";

export function renderDetail(row: Item): HTMLElement {
  const box = document.createElement("section");
  box.className = "detail";

  const h = document.createElement("h2");
  h.textContent = row.title;

  const p = document.createElement("p");
  p.className = "detail-meta";
  p.textContent = `${row.category} · ${row.score} pts (${scoreBand(row.score)}) · ${formatDurationSec(row.durationSec)}`;

  box.append(h, p);
  return box;
}
