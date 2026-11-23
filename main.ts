// make.fun entry: The joke about the demo.
// Writes one line — a joke about working beside AI coding agents — to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "My AI agent fixed the demo bug by deleting the demo.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
