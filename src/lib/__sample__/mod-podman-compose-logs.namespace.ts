export namespace modpodmancomposelogs {
  const conf = {
    usages: ["docker compose logs [OPTIONS] [SERVICE...]"],
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
    command: "podman compose logs",
    options: {
      dryRun: { keyName: "dryRun", flag: "--dry-run" },
      follow: { keyName: "follow", flag: "--follow" },
      index: { keyName: "index", flag: "--index", typeValue: "int" },
      noColor: { keyName: "noColor", flag: "--no-color" },
      noLogPrefix: { keyName: "noLogPrefix", flag: "--no-log-prefix" },
      since: { keyName: "since", flag: "--since", typeValue: "string" },
      tail: { keyName: "tail", flag: "--tail", typeValue: "string" },
      timestamps: { keyName: "timestamps", flag: "--timestamps" },
      until: { keyName: "until", flag: "--until", typeValue: "string" },
    },
  };

  type Options = {
    dryRun?: boolean; // [null]
    follow?: boolean; // [null]
    index?: number; // int
    noColor?: boolean; // [null]
    noLogPrefix?: boolean; // [null]
    since?: string; // string
    tail?: string; // string
    timestamps?: boolean; // [null]
    until?: string; // string
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
