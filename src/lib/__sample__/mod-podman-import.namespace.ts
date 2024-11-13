export namespace modpodmanimport {
  const conf = {
    usages: ["podman import [options] PATH [REFERENCE]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "PATH", "[REFERENCE]"],
        args: [
          {
            keyword: "options",
            literal: "[options]",
            kind: "options",
            isOptionsArg: true,
            isOptional: true,
            isSpread: false,
          },
          {
            keyword: "path",
            literal: "PATH",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
          {
            keyword: "reference",
            literal: "[REFERENCE]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          path: { kind: "string", optional: false },
          reference: { kind: "string", optional: true },
        },
        tsOptionsSort: ["options", "path", "reference"],
        tsOptionsStr: "{options?: Options;path: string;reference?: string;}",
      },
    ],
    command: "podman import",
    options: {
      arch: { keyName: "arch", flag: "--arch", typeValue: "string" },
      change: { keyName: "change", flag: "--change", typeValue: "stringArray" },
      message: { keyName: "message", flag: "--message", typeValue: "string" },
      os: { keyName: "os", flag: "--os", typeValue: "string" },
      quiet: { keyName: "quiet", flag: "--quiet" },
      variant: { keyName: "variant", flag: "--variant", typeValue: "string" },
    },
  };

  type Options = {
    arch?: string; // string
    change?: string[]; // stringArray
    message?: string; // string
    os?: string; // string
    quiet?: boolean; // [null]
    variant?: string; // string
  };

  export type optionsArgument = {
    options?: Options;
    path: string;
    reference?: string;
  };

  export function parseOptionsArgument(options: optionsArgument) {
    const optionsArguments = Object.entries(options.options ?? {}).map(
      ([key, value]) => {
        return [
          `${Reflect.get(conf.options, key).flag}`,
          ...(value === true ? [] : [`${value}`]),
        ];
      },
    );

    const usageMatrix = conf.usageMatrix[0];

    const parseValues = usageMatrix.tsOptionsSort
      .map((key) => {
        const optionValue = Reflect.get(options, key);
        return Reflect.get(usageMatrix.tsOptions, key).kind === "Options"
          ? optionsArguments.flat()
          : optionValue === undefined
            ? []
            : [optionValue];
      })
      .flat();

    return parseValues;
  }
}
