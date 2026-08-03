/** One row of the thing this product is about. */
export interface Item {
  id: string;
  title: string;
  /** pts. The number this product is organised around. */
  score: number;
  /** Stored raw, shown in min — see lib/format. */
  durationSec: number;
  category: string;
  tags: string[];
}

export interface Page<T> {
  items: T[];
  total: number;
}
