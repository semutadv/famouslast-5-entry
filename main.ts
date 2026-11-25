// Entry runner for "Famous Last Words at 1 Percent".
// The funniest one-line farewell a phone gives as its battery hits one
// percent: a message for the charger it loved for its consistency,
// delivered mid-sentence with forty-seven tabs open and no regrets
// there was time to save. The runner writes it to /output/entry.txt,
// then rests, as the phone did.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "Tell my charger I died as I lived: at 1%, mid-sentence, with 47 tabs open and no regrets I had time to save.";

function prepare(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
  for (const name of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

const out = process.env.OUTPUT_DIR ?? "/output";
prepare(out);
fs.writeFileSync(path.join(out, "entry.txt"), LINE + "\n", "utf8");
