import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a robot vacuum's deadpan excuse after eating a sock.
// Bureaucratic-legal voice ("my warranty", "legally classified") gives
// the twist: the vacuum is not sorry, it is citing policy.
const LINE =
  "Per Section 4 of my warranty, socks left on the floor are legally classified as snacks.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check, mirroring the competition gate: 1-200 chars, one line,
// not only whitespace, and written with no trailing newline.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate (${LINE.length} chars)`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
