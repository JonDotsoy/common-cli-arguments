export namespace modPodmanComposePort {
  const conf = {
    usages: ["docker compose port [OPTIONS] SERVICE PRIVATE_PORT"],
    usageMatrix: [
      {
        argsStr: ["[OPTIONS]", "SERVICE", "PRIVATE_PORT"],
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
            literal: "SERVICE",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
          {
            keyword: "privatePort",
            literal: "PRIVATE_PORT",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          service: { kind: "string", optional: false },
          privatePort: { kind: "string", optional: false },
        },
        tsOptionsSort: ["options", "service", "privatePort"],
        tsOptionsStr:
          "{options?: Options;service: string;privatePort: string;}",
      },
    ],
    command: "podman compose port",
    options: {
      dryRun: { keyName: "dryRun", flag: "--dry-run" },
      index: { keyName: "index", flag: "--index", typeValue: "int" },
      protocol: {
        keyName: "protocol",
        flag: "--protocol",
        typeValue: "string",
      },
    },
  };

  type Options = {
    dryRun?: boolean; // [null]
    index?: number; // int
    protocol?: string; // string
  };

  export type optionsArgument = {
    options?: Options;
    service: string;
    privatePort: string;
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
