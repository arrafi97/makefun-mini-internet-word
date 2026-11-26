// make.fun Mini entry: "The Internet in One Word"
// A tiny Node 22 program (standard library only, no network). It writes a
// single word that sums up the whole internet to <output>/entry.txt and
// reports its length.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word for the entire internet: a catalog of everything anyone has
// ever made, said or sold — and, read the other way, a log of cats.
const WORD = "Catalog";

// The bounty's gate: UTF-8 text, 1 to 30 characters, not blank, and
// exactly one word, so any whitespace is rejected. Count code points,
// not UTF-16 units.
function checkWord(text: string): number {
  const n = [...text].length;
  if (text.trim() === "" || n < 1 || n > 30 || /\s/.test(text)) {
    throw new Error(`entry must be one word of 1-30 characters, got "${text}"`);
  }
  return n;
}

const chars = checkWord(WORD);

// Write the word. The output directory comes from $MAKEFUN_OUTPUT_DIR
// when set, otherwise /output. The file holds exactly the word — no
// trailing newline — so two runs always produce byte-identical files.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, WORD, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
