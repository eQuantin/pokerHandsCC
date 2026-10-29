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

export function computePokerHand(cards: readonly Card[]): number {
  const valueCount: Record<number, number> = {};
  for (const card of cards) {
    valueCount[card.value] = (valueCount[card.value] || 0) + 1;
  }

  const maxCount = Math.max(...Object.values(valueCount));

  if (maxCount == 3) {
    return 30;
  }

  if (maxCount == 4) {
    return 60;
  }


  return cards.reduce((acc, card) => card.value > acc ? card.value : acc, 0);
}
