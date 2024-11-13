export namespace modpodmangeneratespec {
  const conf = {
    usages: ["podman generate spec [options] {CONTAINER|POD}"],
    usageMatrix: [
      {
        argsStr: ["[options]", "{CONTAINER|POD}"],
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
            keyword: "containerPod",
            literal: "{CONTAINER|POD}",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          containerPod: { kind: "string", optional: false },
        },
        tsOptionsSort: ["options", "containerPod"],
        tsOptionsStr: "{options?: Options;containerPod: string;}",
      },
    ],
    command: "podman generate spec",
    options: {
      compact: { keyName: "compact", flag: "--compact" },
      filename: {
        keyName: "filename",
        flag: "--filename",
        typeValue: "string",
      },
      name: { keyName: "name", flag: "--name" },
    },
  };

  type Options = {
    compact?: boolean; // [null]
    filename?: string; // string
    name?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; containerPod: string };

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
