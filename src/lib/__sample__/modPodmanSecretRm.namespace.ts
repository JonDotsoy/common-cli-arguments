export namespace modPodmanSecretRm {
  const conf = {
    usages: ["podman secret rm [options] SECRET [SECRET...]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "SECRET", "[SECRET...]"],
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
            keyword: "secret",
            literal: "SECRET",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
          {
            keyword: "secret",
            literal: "[SECRET...]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: true,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          secret: { kind: "string[]", optional: false },
        },
        tsOptionsSort: ["options", "secret"],
        tsOptionsStr: "{options?: Options;secret: string[];}",
      },
    ],
    command: "podman secret rm",
    options: {
      all: { keyName: "all", flag: "--all" },
      ignore: { keyName: "ignore", flag: "--ignore" },
    },
  };

  type Options = {
    all?: boolean; // [null]
    ignore?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; secret: string[] };

  export function parseOptionsArgument(options: optionsArgument): string[] {
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
