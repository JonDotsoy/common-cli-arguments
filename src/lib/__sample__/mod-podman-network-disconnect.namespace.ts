export namespace modpodmannetworkdisconnect {
  const conf = {
    usages: ["podman network disconnect [options] NETWORK CONTAINER"],
    usageMatrix: [
      {
        argsStr: ["[options]", "NETWORK", "CONTAINER"],
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
            keyword: "network",
            literal: "NETWORK",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
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
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          network: { kind: "string", optional: false },
          container: { kind: "string", optional: false },
        },
        tsOptionsSort: ["options", "network", "container"],
        tsOptionsStr: "{options?: Options;network: string;container: string;}",
      },
    ],
    command: "podman network disconnect",
    options: { force: { keyName: "force", flag: "--force" } },
  };

  type Options = {
    force?: boolean; // [null]
  };

  export type optionsArgument = {
    options?: Options;
    network: string;
    container: string;
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
