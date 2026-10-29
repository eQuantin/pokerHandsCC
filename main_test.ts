import { assertEquals } from "@std/assert";
import { computePokerHand, type Card, cardValue, cardColor} from "./main.ts";

Deno.test.each([
  [[{value: cardValue[1], color: cardColor.SPADE}], 1],
  [[{value: cardValue[2], color: cardColor.SPADE}], 2],
  [[{value: cardValue[2], color: cardColor.SPADE}], 3],
])("A poker hand with only a %s should return %s", (hand, expected) => {
  assertEquals(computePokerHand(hand), expected);
});
