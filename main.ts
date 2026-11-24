import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence absurd invention pitch: a TV remote that escapes the sofa
// by inflating like a pufferfish and waddling out on tiny legs.
// Annoyance: remote lost down the sofa. Invention: self-inflating remote.
// Mechanism: pufferfish inflation + tiny legs. Must stay within 220 chars.
const PITCH =
  "A TV remote that, when lost down the sofa, inflates like a pufferfish and waddles out on tiny legs to be found.";

// The sealed scorer requires 1-220 UTF-8 characters, not only whitespace.
if (PITCH.length < 1 || PITCH.length > 220 || PITCH.trim().length === 0) {
  throw new Error(`pitch must be 1-220 chars, got ${PITCH.length}`);
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file must hold exactly the sentence.
writeFileSync("/output/entry.txt", PITCH, "utf8");
