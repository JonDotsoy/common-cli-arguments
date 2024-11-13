export namespace modPodmanComposeWait {
  const conf = {
    usages: ["docker compose wait SERVICE [SERVICE...] [OPTIONS]"],
    usageMatrix: [
      {
        argsStr: ["SERVICE", "[SERVICE...]", "[OPTIONS]"],
        args: [
          {
            keyword: "service",
            literal: "SERVICE",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
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
          {
            keyword: "options",
            literal: "[OPTIONS]",
            kind: "options",
            isOptionsArg: true,
            isOptional: true,
            isSpread: false,
          },
        ],
        tsOptions: {
          service: { kind: "string[]", optional: false },
          options: { kind: "Options", optional: true },
        },
        tsOptionsSort: ["service", "options"],
        tsOptionsStr: "{service: string[];options?: Options;}",
      },
    ],
    command: "podman compose wait",
    options: {
      downProject: { keyName: "downProject", flag: "--down-project" },
      dryRun: { keyName: "dryRun", flag: "--dry-run" },
    },
  };

  type Options = {
    downProject?: boolean; // [null]
    dryRun?: boolean; // [null]
  };

  export type optionsArgument = { service: string[]; options?: Options };

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
