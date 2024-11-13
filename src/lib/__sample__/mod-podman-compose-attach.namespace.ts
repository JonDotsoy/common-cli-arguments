export namespace modpodmancomposeattach {
  const conf = {
    usages: ["docker compose attach [OPTIONS] SERVICE"],
    usageMatrix: [
      {
        argsStr: ["[OPTIONS]", "SERVICE"],
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
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          service: { kind: "string", optional: false },
        },
        tsOptionsSort: ["options", "service"],
        tsOptionsStr: "{options?: Options;service: string;}",
      },
    ],
    command: "podman compose attach",
    options: {
      detachKeys: {
        keyName: "detachKeys",
        flag: "--detach-keys",
        typeValue: "string",
      },
      dryRun: { keyName: "dryRun", flag: "--dry-run" },
      index: { keyName: "index", flag: "--index", typeValue: "int" },
      noStdin: { keyName: "noStdin", flag: "--no-stdin" },
      sigProxy: { keyName: "sigProxy", flag: "--sig-proxy" },
    },
  };

  type Options = {
    detachKeys?: string; // string
    dryRun?: boolean; // [null]
    index?: number; // int
    noStdin?: boolean; // [null]
    sigProxy?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; service: string };

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
