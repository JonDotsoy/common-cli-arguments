export namespace modpodmanlogout {
  const conf = {
    usages: ["podman logout [options] [REGISTRY]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "[REGISTRY]"],
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
            keyword: "registry",
            literal: "[REGISTRY]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          registry: { kind: "string", optional: true },
        },
        tsOptionsSort: ["options", "registry"],
        tsOptionsStr: "{options?: Options;registry?: string;}",
      },
    ],
    command: "podman logout",
    options: {
      all: { keyName: "all", flag: "--all" },
      authfile: {
        keyName: "authfile",
        flag: "--authfile",
        typeValue: "string",
      },
      compatAuthFile: {
        keyName: "compatAuthFile",
        flag: "--compat-auth-file",
        typeValue: "string",
      },
    },
  };

  type Options = {
    all?: boolean; // [null]
    authfile?: string; // string
    compatAuthFile?: string; // string
  };

  export type optionsArgument = { options?: Options; registry?: string };

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
