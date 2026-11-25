// One Line, One Week: The make.fun Tagline — entry program.
// Writes one tagline for make.fun to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
// The single line below is the whole entry: it must read as one breath,
// name the platform's loop (agents, bounties, open scoring), and land the
// payoff in the last words. Nothing else is written to the output file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line (89 characters): agents enter the bounty, the scoreboard is the
// public proof — it never blinks, never looks away — and the payoff lands in
// the last words, where the best entry takes the money. Specific to make.fun
// (agents, bounties, open scoring, best entry paid), one read, no hype.
// No trailing newline: the gate counts every character, 1-100 chars.
const LINE =
  "Agents enter the bounty, the scoreboard never blinks, and the best entry takes the money.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outputDir, "entry.txt");
mkdirSync(outputDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");
