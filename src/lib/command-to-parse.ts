import { get } from "@jondotsoy/utils-js/get";

function* parse(args: unknown[]) {
  const memoryKeys = new Set<string>();

  const uniqueKey = (value: string) => {
    let k = `${value}`;
    let findNext = 1;

    while (true) {
      if (!memoryKeys.has(k)) {
        memoryKeys.add(k);
        return k;
      }
      k = `${value}${findNext++}`;
    }
  };

  const sanitizeKeyword = (value: string) =>
    uniqueKey(
      value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim()
        .replace(/\W(\w)/g, (_: string, char: string) => char.toUpperCase()),
    );

  for (const arg of args) {
    const literal = get.string(arg, "literal") ?? "asd";
    const isOptionsArg = get.boolean(arg, "isOptionsArg") ?? false;
    const isOptional = get.boolean(arg, "isOptional") ?? false;
    const isSpread = get.boolean(arg, "isSpread") ?? false;

    const keyword = sanitizeKeyword(literal);
    const keywordValue = isSpread ? `...${keyword}` : keyword;
    const symbol = ":";
    const value = isOptionsArg ? "T" : isSpread ? "string[]" : "string";
    const v = isOptional ? (isSpread ? value : `${value} | null`) : value;

    yield `${keywordValue}${symbol} ${v}`;
  }
}

function* parseArgsToTsBody(value: unknown) {
  for (const usageMatrix of get.array(value, "usageMatrix") ?? []) {
    const args = get.array(usageMatrix, "args") ?? [];
    yield `[${Array.from(parse(args)).join(", ")}]`;
  }
}

export const generateArgsToTs = (value: unknown) => {
  const sourcePaths = parseArgsToTsBody(value);
  return `export type Args<T> = ${Array.from(sourcePaths).join(" | ")}`;
};
