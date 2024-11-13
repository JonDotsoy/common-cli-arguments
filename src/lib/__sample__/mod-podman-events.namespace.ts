export namespace modpodmanevents {
  const conf = {
    usages: ["podman events [options]"],
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
    command: "podman events",
    options: {
      filter: { keyName: "filter", flag: "--filter", typeValue: "stringArray" },
      format: { keyName: "format", flag: "--format", typeValue: "string" },
      noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
      since: { keyName: "since", flag: "--since", typeValue: "string" },
      stream: { keyName: "stream", flag: "--stream" },
      until: { keyName: "until", flag: "--until", typeValue: "string" },
    },
  };

  type Options = {
    filter?: string[]; // stringArray
    format?: string; // string
    noTrunc?: boolean; // [null]
    since?: string; // string
    stream?: boolean; // [null]
    until?: string; // string
  };

  export type optionsArgument = { options?: Options };

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
