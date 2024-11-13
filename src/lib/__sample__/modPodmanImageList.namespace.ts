export namespace modPodmanImageList {
  const conf = {
    usages: ["podman image list [options] [IMAGE]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "[IMAGE]"],
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
            keyword: "image",
            literal: "[IMAGE]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          image: { kind: "string", optional: true },
        },
        tsOptionsSort: ["options", "image"],
        tsOptionsStr: "{options?: Options;image?: string;}",
      },
    ],
    command: "podman image list",
    options: {
      all: { keyName: "all", flag: "--all" },
      digests: { keyName: "digests", flag: "--digests" },
      filter: { keyName: "filter", flag: "--filter", typeValue: "stringArray" },
      format: { keyName: "format", flag: "--format", typeValue: "string" },
      history: { keyName: "history", flag: "--history" },
      noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
      noheading: { keyName: "noheading", flag: "--noheading" },
      quiet: { keyName: "quiet", flag: "--quiet" },
      sort: { keyName: "sort", flag: "--sort", typeValue: "string" },
    },
  };

  type Options = {
    all?: boolean; // [null]
    digests?: boolean; // [null]
    filter?: string[]; // stringArray
    format?: string; // string
    history?: boolean; // [null]
    noTrunc?: boolean; // [null]
    noheading?: boolean; // [null]
    quiet?: boolean; // [null]
    sort?: string; // string
  };

  export type optionsArgument = { options?: Options; image?: string };

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
