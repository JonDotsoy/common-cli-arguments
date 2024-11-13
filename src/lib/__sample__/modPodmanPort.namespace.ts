export namespace modPodmanPort {
  const conf = {
    usages: ["podman port [options] CONTAINER [PORT]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "CONTAINER", "[PORT]"],
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
            keyword: "container",
            literal: "CONTAINER",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
          {
            keyword: "port",
            literal: "[PORT]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          container: { kind: "string", optional: false },
          port: { kind: "string", optional: true },
        },
        tsOptionsSort: ["options", "container", "port"],
        tsOptionsStr: "{options?: Options;container: string;port?: string;}",
      },
    ],
    command: "podman port",
    options: { all: { keyName: "all", flag: "--all" } },
  };

  type Options = {
    all?: boolean; // [null]
  };

  export type optionsArgument = {
    options?: Options;
    container: string;
    port?: string;
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
