// My Secret Logbook — make.fun entry (u-email-baru-my-secret-logbook-cc177449).
//
// This program writes one diary line to $MAKEFUN_OUTPUT_DIR/entry.txt
// ("/output/entry.txt" in the grader sandbox). The line is fixed and
// deterministic: the same bytes on every run, no randomness, no network,
// no input read. The gate allows 1-200 characters of UTF-8 text, so the
// line is kept well inside that bound.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Day 412: he types his password with one finger, like the keyboard owes him money, then blames me when the login times out.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Self-check the gate before writing: the entry must be 1-200 characters
// of non-whitespace text, or the judge never sees it.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${[...ENTRY].length} characters; gate allows 1-200`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
