export namespace modPodmanComposeLs {
  const conf = {
    usages: ["docker compose ls [OPTIONS]"],
    usageMatrix: [
      {
        argsStr: ["[OPTIONS]"],
        args: [
          {
            keyword: "options",
            literal: "[OPTIONS]",
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
    command: "podman compose ls",
    options: {
      all: { keyName: "all", flag: "--all" },
      dryRun: { keyName: "dryRun", flag: "--dry-run" },
      filter: { keyName: "filter", flag: "--filter", typeValue: "filter" },
      format: { keyName: "format", flag: "--format", typeValue: "string" },
      quiet: { keyName: "quiet", flag: "--quiet" },
    },
  };

  type Options = {
    all?: boolean; // [null]
    dryRun?: boolean; // [null]
    filter?: unknown; // filter
    format?: string; // string
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
