export namespace modPodmanNetworkLs {
  const conf = {
    usages: ["podman network ls [options]"],
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
    command: "podman network ls",
    options: {
      filter: { keyName: "filter", flag: "--filter", typeValue: "stringArray" },
      format: { keyName: "format", flag: "--format", typeValue: "string" },
      noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
      noheading: { keyName: "noheading", flag: "--noheading" },
      quiet: { keyName: "quiet", flag: "--quiet" },
    },
  };

  type Options = {
    filter?: string[]; // stringArray
    format?: string; // string
    noTrunc?: boolean; // [null]
    noheading?: boolean; // [null]
    quiet?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options };

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
