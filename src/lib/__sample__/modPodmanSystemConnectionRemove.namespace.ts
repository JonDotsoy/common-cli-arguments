export namespace modPodmanSystemConnectionRemove {
  const conf = {
    usages: ["podman system connection remove [options] NAME"],
    usageMatrix: [
      {
        argsStr: ["[options]", "NAME"],
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
            keyword: "name",
            literal: "NAME",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          name: { kind: "string", optional: false },
        },
        tsOptionsSort: ["options", "name"],
        tsOptionsStr: "{options?: Options;name: string;}",
      },
    ],
    command: "podman system connection remove",
    options: { all: { keyName: "all", flag: "--all" } },
  };

  type Options = {
    all?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; name: string };

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
