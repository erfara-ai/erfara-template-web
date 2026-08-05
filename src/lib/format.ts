/** The raw durationSec in, the words people actually use out. */
export function formatDurationSec(value: number): string {
  if (!Number.isFinite(value) || value < 0) return "—";
  return `${Math.round(value / 60)} min`;
}

/** The label people actually use, from the raw score. */
export function scoreBand(value: number): "low" | "middling" | "high" {
  if (value < 40) return "low";
  if (value < 75) return "middling";
  return "high";
}
