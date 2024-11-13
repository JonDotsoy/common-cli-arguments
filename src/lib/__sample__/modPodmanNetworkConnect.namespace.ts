export namespace modPodmanNetworkConnect {
  const conf = {
    usages: ["podman network connect [options] NETWORK CONTAINER"],
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
    command: "podman network connect",
    options: {
      alias: { keyName: "alias", flag: "--alias", typeValue: "strings" },
      ip: { keyName: "ip", flag: "--ip", typeValue: "ip" },
      ip6: { keyName: "ip6", flag: "--ip6", typeValue: "ip" },
      macAddress: {
        keyName: "macAddress",
        flag: "--mac-address",
        typeValue: "string",
      },
    },
  };

  type Options = {
    alias?: string[]; // strings
    ip?: unknown; // ip
    ip6?: unknown; // ip
    macAddress?: string; // string
  };

  export type optionsArgument = {
    options?: Options;
    network: string;
    container: string;
  };

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
