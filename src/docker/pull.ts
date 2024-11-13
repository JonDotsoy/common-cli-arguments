import {
  pullHelpsMessages,
  pullVersion,
  helpMessageFilesToCommandsTsFile,
  generateCommandLib,
} from "../lib/utils";

console.time("pulling docker helps");

await pullVersion("docker");
await pullHelpsMessages("docker");
await helpMessageFilesToCommandsTsFile();
await generateCommandLib(
  await import("./commands"),
  new URL("./docker.ts", import.meta.url),
);

console.timeEnd("pulling docker helps");
