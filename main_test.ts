import { assertEquals } from "@std/assert";
import { computePokerHand, type Card, cardValue, cardColor} from "./main.ts";

const hand = []

Deno.test("A poker hand with only a 1 should return 1", () => {
  assertEquals(computePokerHand([{value: cardValue[1], color: cardColor.SPADE}]), 1);
});
