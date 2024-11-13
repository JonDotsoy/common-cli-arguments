export namespace modPodmanNetworkUpdate {
  const conf = {
    usages: ["podman network update [options] NETWORK"],
    usageMatrix: [
      {
        argsStr: ["[options]", "NETWORK"],
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
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          network: { kind: "string", optional: false },
        },
        tsOptionsSort: ["options", "network"],
        tsOptionsStr: "{options?: Options;network: string;}",
      },
    ],
    command: "podman network update",
    options: {
      dnsAdd: { keyName: "dnsAdd", flag: "--dns-add", typeValue: "strings" },
      dnsDrop: { keyName: "dnsDrop", flag: "--dns-drop", typeValue: "strings" },
    },
  };

  type Options = {
    dnsAdd?: string[]; // strings
    dnsDrop?: string[]; // strings
  };

  export type optionsArgument = { options?: Options; network: string };

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
