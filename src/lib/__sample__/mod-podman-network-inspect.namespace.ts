export namespace modpodmannetworkinspect {
  const conf = {
    usages: ["podman network inspect [options] NETWORK [NETWORK...]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "NETWORK", "[NETWORK...]"],
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
            keyword: "network",
            literal: "NETWORK",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
          {
            keyword: "network",
            literal: "[NETWORK...]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: true,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          network: { kind: "string[]", optional: false },
        },
        tsOptionsSort: ["options", "network"],
        tsOptionsStr: "{options?: Options;network: string[];}",
      },
    ],
    command: "podman network inspect",
    options: {
      format: { keyName: "format", flag: "--format", typeValue: "string" },
    },
  };

  type Options = {
    format?: string; // string
  };

  export type optionsArgument = { options?: Options; network: string[] };

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
