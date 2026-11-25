// makefun-x-reposts-02 — entry program (Node 22, standard library only).
// Its whole job: carry POSTS.json from the repository into /output.
// The house reads the X posts themselves from X; this program only hands
// the list over, and writes nothing else about the posts.
import { chmodSync, copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const source = join(botDir, "POSTS.json");
const target = join(outDir, "POSTS.json");

const raw = readFileSync(source, "utf8");
const parsed = JSON.parse(raw);
if (!parsed || !Array.isArray(parsed.posts)) {
  throw new Error("POSTS.json must be an object with a posts array");
}
for (const item of parsed.posts) {
  if (typeof item !== "string" || !/^https?:\/\//.test(item)) {
    throw new Error(`POSTS.json holds a non-URL item: ${String(item)}`);
  }
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
chmodSync(target, 0o644);
console.log(`copied ${parsed.posts.length} post(s) to ${target}`);
