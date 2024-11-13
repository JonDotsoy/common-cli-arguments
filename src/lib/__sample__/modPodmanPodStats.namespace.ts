export namespace modPodmanPodStats {
  const conf = {
    usages: ["podman pod stats [options] [POD...]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "[POD...]"],
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
            keyword: "pod",
            literal: "[POD...]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: true,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          pod: { kind: "string[]", optional: true },
        },
        tsOptionsSort: ["options", "pod"],
        tsOptionsStr: "{options?: Options;pod?: string[];}",
      },
    ],
    command: "podman pod stats",
    options: {
      all: { keyName: "all", flag: "--all" },
      format: { keyName: "format", flag: "--format", typeValue: "string" },
      noReset: { keyName: "noReset", flag: "--no-reset" },
      noStream: { keyName: "noStream", flag: "--no-stream" },
    },
  };

  type Options = {
    all?: boolean; // [null]
    format?: string; // string
    noReset?: boolean; // [null]
    noStream?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; pod?: string[] };

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
