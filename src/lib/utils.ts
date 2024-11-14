#!/usr/bin/env bun

import { $ } from "bun";
import { splitg } from "@jondotsoy/splitg";
import {
  createUniqueKeySanitizeKeywordContext,
  sanitizeKeyword,
} from "./sanatize-keyword";
import { get } from "@jondotsoy/utils-js/get";

function* matchSymbols(str: string) {
  let index = 0;

  const types: Record<string, string> = {
    "[": "openSquare",
    "]": "closeSquare",
    " ": "space",
  };

  while (index < str.length) {
    // console.log('c:', str[i]);
    if (str[index] === "[" || str[index] === "]" || str[index] === " ") {
      yield { type: types[str[index]], index: index };
    }
    index += 1;
  }
}

export function split(str: string) {
  return splitg(str);
}

function* listAvailableCommands(helpMessage: string) {
  let onAvailableCommandSection = false;

  const isStartAvailableCommands = (line: string) =>
    line.startsWith("Available Commands:") ||
    line.startsWith("Common Commands:") ||
    line.startsWith("Management Commands:") ||
    line.startsWith("Commands:");

  for (const line of helpMessage.split("\n")) {
    if (isStartAvailableCommands(line)) {
      onAvailableCommandSection = true;
      continue;
    }
    if (!line.startsWith("  ")) {
      onAvailableCommandSection = false;
      continue;
    }
    if (onAvailableCommandSection) {
      const lineOption = line.trim();
      const command = lineOption.substring(0, lineOption.indexOf(" "));
      if (/^\w+$/.test(command)) yield command.trim();
    }
  }
}

function* parseOptions(helpMessage: string) {
  let onOptionsSections = false;

  const isStartOptions = (line: string) => line.startsWith("Options:");

  for (const line of helpMessage.split("\n")) {
    if (isStartOptions(line)) {
      onOptionsSections = true;
      continue;
    }
    if (!line.startsWith("  ")) {
      onOptionsSections = false;
      continue;
    }
    if (onOptionsSections) {
      const lineOption = line.trim();
      const flagString = lineOption.substring(0, lineOption.indexOf("  "));
      if (!flagString.startsWith("-")) continue;
      const flags = flagString.split(" ");
      const flagsValid = flags.slice(
        flags.findIndex((flag) => flag.startsWith("--")),
      );
      if (!flagsValid.length) continue;
      const [flag, typeValue] = flagsValid;
      const keyName = flag.replace(
        /(\-+)(\w)/g,
        (_, s, r) => `${s === "--" ? r : r.toUpperCase()}`,
      );
      yield {
        keyName,
        flag,
        typeValue,
      };
    }
  }
}

function* parseUsageArgumentsInspectLines(helpMessage: string) {
  let onUsageSection = false;

  const isStartOptions = (line: string) => line.startsWith("Usage:");

  for (const line of helpMessage.split("\n")) {
    if (isStartOptions(line)) {
      onUsageSection = true;
      const l = line.substring(line.indexOf(":") + 1).trim();
      if (l) yield l;
      continue;
    }
    if (!line.startsWith("  ")) {
      onUsageSection = false;
      continue;
    }
    if (onUsageSection) {
      const lineOption = line.trim();
      yield lineOption;
    }
  }
}

function* parseUsageArguments(helpMessage: string) {
  for (const line of parseUsageArgumentsInspectLines(helpMessage)) {
    yield line;
  }
}

export async function pullVersion(command: string) {
  const versionFile = `${command}.version`;
  await Bun.write(versionFile, await $`${command} --version`.text());
}

export async function pullHelpsMessages(...args: string[]) {
  const helpMessageFile = `${args.join(" ")}.help.txt`;
  const helpMessageFileExists = await Bun.file(helpMessageFile).exists();

  const helpMessage = helpMessageFileExists
    ? await Bun.file(helpMessageFile).text()
    : await $`${args} --help`.text();

  if (!helpMessageFileExists) {
    await Bun.write(helpMessageFile, helpMessage);
  }

  for (const l of listAvailableCommands(helpMessage)) {
    await pullHelpsMessages(...args, l);
  }
}

export function* parseUsage(usages: string[]) {
  for (const usage of usages) {
    const indexArguments = /\[|[A-Z]|\(/.exec(usage)?.index ?? usage.length;
    const parts = Array.from(split(usage.substring(indexArguments)));

    let args = parts.map((arg) => {
      const isOptional = arg.startsWith("[") && arg.endsWith("]");
      const isSpread = arg.endsWith("...]");
      const isOptionsArg = /^\[OPTIONS\]$/i.test(arg);
      const kind = isOptionsArg ? "options" : "argument";
      const keyword = sanitizeKeyword(arg);

      return {
        keyword,
        literal: arg,
        kind,
        isOptionsArg,
        isOptional,
        isSpread,
      };
    });

    if (!args.find((e) => e.kind === "options")) {
      args = [
        {
          keyword: "options",
          literal: "options",
          kind: "options",
          isOptional: true,
          isOptionsArg: true,
          isSpread: false,
        },
        ...args,
      ];
    }

    type TsOption = {
      kind: "Options" | "string" | "string[]";
      optional: boolean;
    };

    const tsOptions: Record<string, TsOption> = {};
    const tsOptionsSort: string[] = [];

    for (const arg of args) {
      if (!tsOptionsSort.includes(arg.keyword)) tsOptionsSort.push(arg.keyword);
      const repeats = args.filter((a) => a.keyword === arg.keyword).length;

      const tsOption: TsOption =
        tsOptions[arg.keyword] ??
        ({
          kind:
            arg.kind === "options"
              ? "Options"
              : repeats > 1
                ? "string[]"
                : "string",
          optional: true,
        } satisfies TsOption);

      if (arg.isSpread) tsOption.kind = "string[]";
      if (!arg.isOptional) tsOption.optional = false;

      tsOptions[arg.keyword] = tsOption;
    }

    yield {
      argsStr: parts,
      args,
      tsOptions,
      tsOptionsSort,
      tsOptionsStr: `{${Array.from(Object.entries(tsOptions), ([keyword, tsOption]) => `${keyword}${tsOption.optional ? "?" : ""}: ${tsOption.kind};`).join("")}}`,
    };
  }
}

export function* generateNameSpaceToFunctionPerLines(
  namespace: string,
  object: unknown,
) {
  const usageMatrix = get.array(object, "usageMatrix") ?? [];
  const options = get.record(object, "options") ?? {};

  yield `export namespace ${namespace} {`;
  yield `  const conf = ${JSON.stringify(object)};`;
  yield ``;
  yield `  type Options = {`;

  for (const [k, v] of Object.entries(options)) {
    const typeValueOrigin = get.string(v, "typeValue");

    const kindTypes: Record<string, string | undefined> = {
      boolean: "boolean",
      string: "string",
      strings: "string[]",
      stringArray: "string[]",
      uint: "number",
      "<number>[<unit>]": "number",
      int: "number",
      float: "number",
    };

    const typeValue = kindTypes[typeValueOrigin ?? "boolean"] ?? "unknown";

    yield `    ${k}?: ${typeValue}; // ${typeValueOrigin ?? "[null]"}`;
  }

  yield `  };`;
  yield ``;

  yield `  export type optionsArgument =`;
  for (const u of usageMatrix) {
    const tsOptionsStr = get.string(u, "tsOptionsStr") ?? "";

    yield `    | ${tsOptionsStr}`;
  }

  yield `  ;`;
  yield ``;

  yield `  export function parseOptionsArgument(options: optionsArgument): string[] {`;
  yield `    const optionsArguments = Object.entries(options.options ?? {}).map(`;
  yield `      ([key, value]:[string,any]) => {`;
  yield `        return [`;
  yield `          \`\${Reflect.get(conf.options, key).flag}\`,`;
  yield `          ...(value === true ? [] : [\`\${value}\`]),`;
  yield `        ];`;
  yield `      },`;
  yield `    );`;
  yield ``;
  yield `    const usageMatrix = conf.usageMatrix[0];`;
  yield ``;
  yield `    const parseValues = usageMatrix.tsOptionsSort`;
  yield `      .map((key) => {`;
  yield `        const optionValue = Reflect.get(options, key);`;
  yield `        return Reflect.get(usageMatrix.tsOptions, key).kind === "Options"`;
  yield `          ? optionsArguments.flat()`;
  yield `          : optionValue === undefined`;
  yield `            ? []`;
  yield `            : [optionValue];`;
  yield `      })`;
  yield `      .flat();`;
  yield ``;
  yield `    return parseValues;`;
  yield `  }`;

  yield ``;
  yield `}`;
}

export function generateNameSpaceToFunction(
  namespace: string,
  object: unknown,
) {
  return Array.from(
    generateNameSpaceToFunctionPerLines(namespace, object),
  ).join("\n");
}

/** Read all help messages and make a commands.ts file */
export async function helpMessageFilesToCommandsTsFile() {
  const commandsFile = "commands.ts";
  const spec: any = {};
  const at = (parts: string[], obj = spec): any => {
    const [part, ...rest] = parts;
    if (!Reflect.has(obj, part)) {
      obj[part] = {};
    }
    if (rest.length) {
      return at(rest, obj[part]);
    }
    return obj[part];
  };

  for await (const file of new Bun.Glob("*.help.txt").scan()) {
    const command = file.replace(".help.txt", "");
    const commandParts = command.split(" ");
    const helpMessage = await Bun.file(file).text();
    const options = Array.from(parseOptions(helpMessage));
    const usageArguments = Array.from(parseUsageArguments(helpMessage));
    const chunk = at([
      ...commandParts
        .slice(0, commandParts.length - 1)
        .map((c) => [c, "commands"])
        .flat(),
      commandParts[commandParts.length - 1],
    ]);
    chunk.usages = usageArguments;
    chunk.usageMatrix = Array.from(parseUsage(usageArguments));
    chunk.command = command;
    chunk.options = Object.fromEntries(options.map((o) => [o.keyName, o]));
  }

  await Bun.write(
    commandsFile,
    `export const commands = ${JSON.stringify(spec, null, 2)} as const;`,
  );
  await $`bunx prettier --write ${commandsFile}`;
}

async function* generateCommandLibLines(commandsObject: unknown, dest: URL) {
  const commands = get.record(commandsObject, "commands");

  async function* genLinesCommand(
    pre: string | null,
    commands: unknown,
    pathCommands: string,
    parentRelation?: string,
  ): AsyncGenerator<{
    keywordMod: string;
    keyword: string;
    import: string;
    source: string;
    sourceRelation?: string;
    commandObject?: undefined;
    namespaceRelativeTsPath: string;
    namespaceSource: any;
  }> {
    for (const command of Array.from(Object.keys(commands ?? {}))) {
      const keywordMod = sanitizeKeyword(`mod-${pre ?? ""}${command}`);
      const keyword = sanitizeKeyword(`${pre ?? ""}${command}`);
      const namespaceRelativeTsPath = `./${keywordMod}.namespace.ts`;
      const namespaceRelativePath = `./${keywordMod}.namespace.js`;

      const namespaceSource = generateNameSpaceToFunction(
        keywordMod,
        get(commands, command),
      );

      await Bun.write(new URL(namespaceRelativeTsPath, dest), namespaceSource);

      yield {
        keywordMod,
        keyword,
        namespaceRelativeTsPath,
        import: `import { ${keywordMod} } from ${JSON.stringify(namespaceRelativePath)};`,
        source:
          `export const ${keyword} = async (optionsArgument: ${keywordMod}.optionsArgument) => {` +
          `const args = ${keywordMod}.parseOptionsArgument(optionsArgument);` +
          `return Bun.$\`${pathCommands}${command} \${args}\`;` +
          `}`,
        sourceRelation: parentRelation
          ? `${parentRelation}.${command} = ${keyword};`
          : undefined,
        namespaceSource: namespaceSource,
      };

      yield* genLinesCommand(
        `${pre ?? ""}${command}.`,
        get(commands, command, "commands"),
        `${pathCommands}${command} `,
        keyword,
      );
    }
  }

  const parts = await Array.fromAsync(genLinesCommand(null, commands, ""));

  yield* Array.from(parts, (e) => e.import);
  yield "";
  yield* Array.from(parts, (e) => e.source);
  yield "";
  yield* Array.from(parts, (e) => e.sourceRelation);
}

export const generateCommandLib = async (
  commandsObject: unknown,
  dest: URL,
) => {
  const source = (
    await Array.fromAsync(generateCommandLibLines(commandsObject, dest))
  ).join("\n");

  await Bun.write(dest, source);
};
