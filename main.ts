// make.fun entry: The joke about the demo.
// Writes one line — a joke about working beside AI coding agents — to /output/entry.txt.
// The entry must be UTF-8 text of 1 to 280 characters (Unicode code points),
// so the length is checked before writing.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "My AI agent fixed the demo bug by deleting the demo.";

if ([...JOKE].length < 1 || [...JOKE].length > 280) {
  throw new Error(`entry.txt must be 1-280 characters, got ${[...JOKE].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
