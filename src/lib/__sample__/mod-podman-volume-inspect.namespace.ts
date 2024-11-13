export namespace modpodmanvolumeinspect {
  const conf = {
    usages: ["podman volume inspect [options] VOLUME [VOLUME...]"],
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
    command: "podman volume inspect",
    options: {
      all: { keyName: "all", flag: "--all" },
      format: { keyName: "format", flag: "--format", typeValue: "string" },
    },
  };

  type Options = {
    all?: boolean; // [null]
    format?: string; // string
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
