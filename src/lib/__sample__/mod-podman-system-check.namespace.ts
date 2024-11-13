export namespace modpodmansystemcheck {
  const conf = {
    usages: ["podman system check [options]"],
    usageMatrix: [
      {
        argsStr: ["[options]"],
        args: [
          {
            keyword: "options",
            literal: "[options]",
            kind: "options",
            isOptionsArg: true,
            isOptional: true,
            isSpread: false,
          },
        ],
        tsOptions: { options: { kind: "Options", optional: true } },
        tsOptionsSort: ["options"],
        tsOptionsStr: "{options?: Options;}",
      },
    ],
    command: "podman system check",
    options: {
      force: { keyName: "force", flag: "--force" },
      max: { keyName: "max", flag: "--max", typeValue: "duration" },
      quick: { keyName: "quick", flag: "--quick" },
      repair: { keyName: "repair", flag: "--repair" },
    },
  };

  type Options = {
    force?: boolean; // [null]
    max?: unknown; // duration
    quick?: boolean; // [null]
    repair?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options };

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
