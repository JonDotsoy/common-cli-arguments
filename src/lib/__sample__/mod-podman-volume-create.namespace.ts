export namespace modpodmanvolumecreate {
  const conf = {
    usages: ["podman volume create [options] [NAME]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "[NAME]"],
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
            literal: "[NAME]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          name: { kind: "string", optional: true },
        },
        tsOptionsSort: ["options", "name"],
        tsOptionsStr: "{options?: Options;name?: string;}",
      },
    ],
    command: "podman volume create",
    options: {
      driver: { keyName: "driver", flag: "--driver", typeValue: "string" },
      ignore: { keyName: "ignore", flag: "--ignore" },
      label: { keyName: "label", flag: "--label", typeValue: "stringArray" },
      opt: { keyName: "opt", flag: "--opt", typeValue: "stringArray" },
    },
  };

  type Options = {
    driver?: string; // string
    ignore?: boolean; // [null]
    label?: string[]; // stringArray
    opt?: string[]; // stringArray
  };

  export type optionsArgument = { options?: Options; name?: string };

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
