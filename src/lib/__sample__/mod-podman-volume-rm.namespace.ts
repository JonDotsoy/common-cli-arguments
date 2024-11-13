export namespace modpodmanvolumerm {
  const conf = {
    usages: ["podman volume rm [options] VOLUME [VOLUME...]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "VOLUME", "[VOLUME...]"],
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
            keyword: "volume",
            literal: "VOLUME",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
          {
            keyword: "volume",
            literal: "[VOLUME...]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: true,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          volume: { kind: "string[]", optional: false },
        },
        tsOptionsSort: ["options", "volume"],
        tsOptionsStr: "{options?: Options;volume: string[];}",
      },
    ],
    command: "podman volume rm",
    options: {
      all: { keyName: "all", flag: "--all" },
      force: { keyName: "force", flag: "--force" },
      time: { keyName: "time", flag: "--time", typeValue: "int" },
    },
  };

  type Options = {
    all?: boolean; // [null]
    force?: boolean; // [null]
    time?: number; // int
  };

  export type optionsArgument = { options?: Options; volume: string[] };

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
