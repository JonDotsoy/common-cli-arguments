export namespace modPodmanComposeWatch {
  const conf = {
    usages: ["docker compose watch [SERVICE...]"],
    usageMatrix: [
      {
        argsStr: ["[SERVICE...]"],
        args: [
          {
            keyword: "options",
            literal: "options",
            kind: "options",
            isOptional: true,
            isOptionsArg: true,
            isSpread: false,
          },
          {
            keyword: "service",
            literal: "[SERVICE...]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: true,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          service: { kind: "string[]", optional: true },
        },
        tsOptionsSort: ["options", "service"],
        tsOptionsStr: "{options?: Options;service?: string[];}",
      },
    ],
    command: "podman compose watch",
    options: {
      dryRun: { keyName: "dryRun", flag: "--dry-run" },
      noUp: { keyName: "noUp", flag: "--no-up" },
      prune: { keyName: "prune", flag: "--prune" },
      quiet: { keyName: "quiet", flag: "--quiet" },
    },
  };

  type Options = {
    dryRun?: boolean; // [null]
    noUp?: boolean; // [null]
    prune?: boolean; // [null]
    quiet?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; service?: string[] };

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
