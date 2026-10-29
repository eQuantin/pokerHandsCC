import { assertEquals } from "@std/assert";
import { computePokerHand } from "./main.ts";

Deno.test("computePokerHand", () => {
  assertEquals(computePokerHand(), 0);
});
