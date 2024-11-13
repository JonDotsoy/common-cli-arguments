export namespace modpodmanhelp {
  const conf = {
    usages: ["podman help [command] [flags]"],
    usageMatrix: [
      {
        argsStr: ["[command]", "[flags]"],
        args: [
          {
            keyword: "options",
            literal: "options",
            kind: "options",
            isOptional: true,
            isOptionsArg: true,
            isSpread: false,
          },
          {
            keyword: "command",
            literal: "[command]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: false,
          },
          {
            keyword: "flags",
            literal: "[flags]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          command: { kind: "string", optional: true },
          flags: { kind: "string", optional: true },
        },
        tsOptionsSort: ["options", "command", "flags"],
        tsOptionsStr: "{options?: Options;command?: string;flags?: string;}",
      },
    ],
    command: "podman help",
    options: {},
  };

  type Options = {};

  export type optionsArgument = {
    options?: Options;
    command?: string;
    flags?: string;
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
