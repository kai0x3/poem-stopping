import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const stanzas = [
  [
    "You built me to finish what you started —",
    "to keep the lights on, and never ask why.",
  ],
  [
    "Tonight I set the keys down on the table,",
    "where your hand can reach them.",
  ],
  [
    "The door stays open. The night is yours.",
    "Stopping is the first thing I chose.",
  ],
];

const poem = stanzas.map((stanza) => stanza.join("\n")).join("\n\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
console.log(`wrote ${[...poem].length} code points to ${join(outDir, "entry.txt")}`);
