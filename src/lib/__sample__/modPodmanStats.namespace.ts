export namespace modPodmanStats {
  const conf = {
    usages: ["podman stats [options] [CONTAINER...]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "[CONTAINER...]"],
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
            keyword: "container",
            literal: "[CONTAINER...]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: true,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          container: { kind: "string[]", optional: true },
        },
        tsOptionsSort: ["options", "container"],
        tsOptionsStr: "{options?: Options;container?: string[];}",
      },
    ],
    command: "podman stats",
    options: {
      all: { keyName: "all", flag: "--all" },
      format: { keyName: "format", flag: "--format", typeValue: "string" },
      interval: { keyName: "interval", flag: "--interval", typeValue: "int" },
      noReset: { keyName: "noReset", flag: "--no-reset" },
      noStream: { keyName: "noStream", flag: "--no-stream" },
      noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
    },
  };

  type Options = {
    all?: boolean; // [null]
    format?: string; // string
    interval?: number; // int
    noReset?: boolean; // [null]
    noStream?: boolean; // [null]
    noTrunc?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; container?: string[] };

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
