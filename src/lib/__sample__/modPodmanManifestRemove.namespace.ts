export namespace modPodmanManifestRemove {
  const conf = {
    usages: ["podman manifest remove LIST IMAGE"],
    usageMatrix: [
      {
        argsStr: ["LIST", "IMAGE"],
        args: [
          {
            keyword: "options",
            literal: "options",
            kind: "options",
            isOptional: true,
            isOptionsArg: true,
            isSpread: false,
          },
          {
            keyword: "list",
            literal: "LIST",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
          {
            keyword: "image",
            literal: "IMAGE",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          list: { kind: "string", optional: false },
          image: { kind: "string", optional: false },
        },
        tsOptionsSort: ["options", "list", "image"],
        tsOptionsStr: "{options?: Options;list: string;image: string;}",
      },
    ],
    command: "podman manifest remove",
    options: {},
  };

  type Options = {};

  export type optionsArgument = {
    options?: Options;
    list: string;
    image: string;
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
