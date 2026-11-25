// Fortune Cookie for the Liquidated Trader — u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c
// Writes one fortune-cookie line for a liquidated trader to /output/entry.txt
// (./output/entry.txt locally). Node 22, no dependencies, no network.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Congratulations! Your portfolio has finally achieved perfect balance: zero.";

// Gate: 1–160 characters, at most 20 words. This line is 76 characters, 9 words.
const WORDS = LINE.trim().split(/\s+/).length;
if (LINE.length > 160 || WORDS > 20) {
  throw new Error(`Line fails the gate: ${LINE.length} chars, ${WORDS} words`);
}

// The grading sandbox provides /output; locally we fall back to ./output.
const outDir = existsSync("/output") ? "/output" : "output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
