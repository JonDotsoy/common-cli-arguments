export namespace modpodmantop {
  const conf = {
    usages: ["podman top [options] CONTAINER [FORMAT-DESCRIPTORS|ARGS...]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "CONTAINER", "[FORMAT-DESCRIPTORS|ARGS...]"],
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
            literal: "CONTAINER",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
          {
            keyword: "formatDescriptorsArgs",
            literal: "[FORMAT-DESCRIPTORS|ARGS...]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: true,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          container: { kind: "string", optional: false },
          formatDescriptorsArgs: { kind: "string[]", optional: true },
        },
        tsOptionsSort: ["options", "container", "formatDescriptorsArgs"],
        tsOptionsStr:
          "{options?: Options;container: string;formatDescriptorsArgs?: string[];}",
      },
    ],
    command: "podman top",
    options: {},
  };

  type Options = {};

  export type optionsArgument = {
    options?: Options;
    container: string;
    formatDescriptorsArgs?: string[];
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
