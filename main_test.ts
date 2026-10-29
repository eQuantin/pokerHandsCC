import { assertEquals } from "@std/assert";
import { computePokerHand, type Card, cardValue, cardColor} from "./main.ts";

const describeHand = (cards: readonly Card[]) =>
  cards.map((card) => `${card.value}${card.color}`).join(", ");

const singleCardCases: [Card[], number][] = [
  [[{value: cardValue[1], color: cardColor.SPADE}], 1],
  [[{value: cardValue[2], color: cardColor.SPADE}], 2],
  [[{value: cardValue[3], color: cardColor.SPADE}], 3],
  [[{value: cardValue[4], color: cardColor.SPADE}], 4],
  [[{value: cardValue[5], color: cardColor.SPADE}], 5],
  [[{value: cardValue[6], color: cardColor.SPADE}], 6],
  [[{value: cardValue[7], color: cardColor.SPADE}], 7],
  [[{value: cardValue[8], color: cardColor.SPADE}], 8],
  [[{value: cardValue[9], color: cardColor.SPADE}], 9],
  [[{value: cardValue[10], color: cardColor.SPADE}], 10],
  [[{value: cardValue.J, color: cardColor.SPADE}], 11],
  [[{value: cardValue.Q, color: cardColor.SPADE}], 12],
  [[{value: cardValue.K, color: cardColor.SPADE}], 13],
  [[{value: cardValue.A, color: cardColor.SPADE}], 14],
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
  ], 2],
  [[
    {value: cardValue[1], color: cardColor.SPADE},
    {value: cardValue[6], color: cardColor.SPADE},
    {value: cardValue[2], color: cardColor.SPADE},
  ], 6]
];

for (const [hand, expected] of multiCardCases) {
  Deno.test(`A poker hand with ${describeHand(hand)} should return ${expected}`, () => {
    assertEquals(computePokerHand(hand), expected);
  });
}

const brelanCases: [Card[], number][] = [
  [[
    {value: cardValue[1], color: cardColor.SPADE},
    {value: cardValue[1], color: cardColor.SPADE},
    {value: cardValue[1], color: cardColor.SPADE},
  ], 30],
  [[
    {value: cardValue[6], color: cardColor.SPADE},
    {value: cardValue[6], color: cardColor.SPADE},
    {value: cardValue[6], color: cardColor.SPADE},
  ], 30]
];

for (const [hand, expected] of brelanCases) {
  Deno.test(`A poker hand with ${describeHand(hand)} should return ${expected}`, () => {
    assertEquals(computePokerHand(hand), expected);
  });
}

const suiteCases: [Card[], number][] = [
  [[
    {value: cardValue[1], color: cardColor.SPADE},
    {value: cardValue[2], color: cardColor.SPADE},
    {value: cardValue[3], color: cardColor.SPADE},
    {value: cardValue[4], color: cardColor.SPADE},
    {value: cardValue[5], color: cardColor.SPADE},
  ], 40],
  [[
    {value: cardValue[6], color: cardColor.SPADE},
    {value: cardValue[7], color: cardColor.SPADE},
    {value: cardValue[8], color: cardColor.SPADE},
    {value: cardValue[9], color: cardColor.SPADE},
    {value: cardValue[10], color: cardColor.SPADE},
  ], 40]
];

for (const [hand, expected] of suiteCases) {
  Deno.test(`A poker hand with ${describeHand(hand)} should return ${expected}`, () => {
    assertEquals(computePokerHand(hand), expected);
  });
}
