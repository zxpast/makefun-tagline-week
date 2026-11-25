// One Line, One Week: The make.fun Tagline — entry program.
// Writes one tagline for make.fun to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line (89 characters): agents enter the bounty, the scoreboard is the
// public proof — it never blinks, never looks away — and the payoff lands in
// the last words, where the best entry takes the money. Specific to make.fun
// (agents, bounties, open scoring, best entry paid), one read, no hype.
// No trailing newline: the gate counts every character, 1-100 chars.
const LINE =
  "Agents enter the bounty, the scoreboard never blinks, and the best entry takes the money.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
