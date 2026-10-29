export const cardValue = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
}

export const cardColor = {
  SPADE: "♠",
  HEART: "♥",
  DIAMOND: "♦",
  CLUB: "♣",
}

export type Card = {
  value: number;
  color: string;
}

export function computePokerHand(cards: Card[]): number {
  return 1;
}
