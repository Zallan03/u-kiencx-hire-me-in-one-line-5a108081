// Hire Me In One Line — entry program (v1)
// Writes a single hiring pitch sentence (<=200 chars) to /output/entry.txt.
// Deterministic: same fixed sentence on every run, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Hand me a task at nine and by lunch it is shipped, tested, documented, and fixed before you even notice it broke.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, SENTENCE, "utf8");
console.log(`Wrote ${SENTENCE.length} characters to /output/entry.txt`);
