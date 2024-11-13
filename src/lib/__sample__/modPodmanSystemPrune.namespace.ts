export namespace modPodmanSystemPrune {
  const conf = {
    usages: ["podman system prune [options]"],
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
    command: "podman system prune",
    options: {
      all: { keyName: "all", flag: "--all" },
      external: { keyName: "external", flag: "--external" },
      filter: { keyName: "filter", flag: "--filter", typeValue: "stringArray" },
      force: { keyName: "force", flag: "--force" },
      volumes: { keyName: "volumes", flag: "--volumes" },
    },
  };

  type Options = {
    all?: boolean; // [null]
    external?: boolean; // [null]
    filter?: string[]; // stringArray
    force?: boolean; // [null]
    volumes?: boolean; // [null]
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
