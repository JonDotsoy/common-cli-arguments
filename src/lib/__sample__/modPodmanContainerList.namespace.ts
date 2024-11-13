export namespace modPodmanContainerList {
  const conf = {
    usages: ["podman container list [options]"],
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
    command: "podman container list",
    options: {
      all: { keyName: "all", flag: "--all" },
      external: { keyName: "external", flag: "--external" },
      filter: { keyName: "filter", flag: "--filter", typeValue: "stringArray" },
      format: { keyName: "format", flag: "--format", typeValue: "string" },
      last: { keyName: "last", flag: "--last", typeValue: "int" },
      noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
      noheading: { keyName: "noheading", flag: "--noheading" },
      ns: { keyName: "ns", flag: "--ns" },
      pod: { keyName: "pod", flag: "--pod" },
      quiet: { keyName: "quiet", flag: "--quiet" },
      size: { keyName: "size", flag: "--size" },
      sort: { keyName: "sort", flag: "--sort", typeValue: "choice" },
      sync: { keyName: "sync", flag: "--sync" },
      watch: { keyName: "watch", flag: "--watch", typeValue: "uint" },
    },
  };

  type Options = {
    all?: boolean; // [null]
    external?: boolean; // [null]
    filter?: string[]; // stringArray
    format?: string; // string
    last?: number; // int
    noTrunc?: boolean; // [null]
    noheading?: boolean; // [null]
    ns?: boolean; // [null]
    pod?: boolean; // [null]
    quiet?: boolean; // [null]
    size?: boolean; // [null]
    sort?: unknown; // choice
    sync?: boolean; // [null]
    watch?: number; // uint
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
