export namespace modpodmancomposepull {
  const conf = {
    usages: ["docker compose pull [OPTIONS] [SERVICE...]"],
    usageMatrix: [
      {
        argsStr: ["[OPTIONS]", "[SERVICE...]"],
        args: [
          {
            keyword: "options",
            literal: "[OPTIONS]",
            kind: "options",
            isOptionsArg: true,
            isOptional: true,
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
    command: "podman compose pull",
    options: {
      dryRun: { keyName: "dryRun", flag: "--dry-run" },
      ignoreBuildable: {
        keyName: "ignoreBuildable",
        flag: "--ignore-buildable",
      },
      ignorePullFailures: {
        keyName: "ignorePullFailures",
        flag: "--ignore-pull-failures",
      },
      includeDeps: { keyName: "includeDeps", flag: "--include-deps" },
      policy: { keyName: "policy", flag: "--policy", typeValue: "string" },
      quiet: { keyName: "quiet", flag: "--quiet" },
    },
  };

  type Options = {
    dryRun?: boolean; // [null]
    ignoreBuildable?: boolean; // [null]
    ignorePullFailures?: boolean; // [null]
    includeDeps?: boolean; // [null]
    policy?: string; // string
    quiet?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; service?: string[] };

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
