import { assertEquals } from "@std/assert";
import { computePokerHand, type Card, cardValue, cardColor} from "./main.ts";

const describeHand = (cards: readonly Card[]) =>
  cards.map((card) => `${card.value}${card.color}`).join(", ");

const singleCardCases: [Card[], number][] = [
  [[{value: cardValue[1], color: cardColor.SPADE}], 1],
  [[{value: cardValue[2], color: cardColor.SPADE}], 2],
  [[{value: cardValue[3], color: cardColor.SPADE}], 3],
];

for (const [hand, expected] of singleCardCases) {
  Deno.test(`A poker hand with only a ${describeHand(hand)} should return ${expected}`, () => {
    assertEquals(computePokerHand(hand), expected);
  });
}

const multiCardCases: [Card[], number][] = [
  [[
    {value: cardValue[1], color: cardColor.SPADE},
    {value: cardValue[2], color: cardColor.SPADE},
  ], 3],
];

for (const [hand, expected] of multiCardCases) {
  Deno.test(`A poker hand with ${describeHand(hand)} should return ${expected}`, () => {
    assertEquals(computePokerHand(hand), expected);
  });
}
