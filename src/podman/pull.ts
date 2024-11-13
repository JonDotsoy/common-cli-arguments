import {
  pullHelpsMessages,
  pullVersion,
  helpMessageFilesToCommandsTsFile,
  generateCommandLib,
} from "../lib/utils";

console.time("pulling podman helps");

await pullVersion("podman");
await pullHelpsMessages("podman");
await helpMessageFilesToCommandsTsFile();
await generateCommandLib(
  await import("./commands"),
  new URL("./podman.ts", import.meta.url),
);

console.timeEnd("pulling podman helps");
