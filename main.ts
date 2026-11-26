// make.fun entry: "The Internet in One Word"
// Writes a single word describing the whole internet to <output>/entry.txt.
// Node 22 standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A catalog of everything ever made, and also, mostly, a log of cats.
// The shorter spelling keeps the file small (the tie-break is bytes).
const WORD = "Catalog";

// The bounty's gate: UTF-8 text, 1 to 30 characters, not only white space.
// The judge also wants exactly one word, so reject any space.
const chars = [...WORD].length;
if (WORD.trim() === "" || chars < 1 || chars > 30 || /\s/.test(WORD)) {
  throw new Error(`entry must be one word of 1-30 characters, got "${WORD}"`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
