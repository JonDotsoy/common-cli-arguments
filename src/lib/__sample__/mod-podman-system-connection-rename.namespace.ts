export namespace modpodmansystemconnectionrename {
  const conf = {
    usages: ["podman system connection rename OLD NEW"],
    usageMatrix: [
      {
        argsStr: ["OLD", "NEW"],
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
            keyword: "old",
            literal: "OLD",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
          {
            keyword: "new",
            literal: "NEW",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          old: { kind: "string", optional: false },
          new: { kind: "string", optional: false },
        },
        tsOptionsSort: ["options", "old", "new"],
        tsOptionsStr: "{options?: Options;old: string;new: string;}",
      },
    ],
    command: "podman system connection rename",
    options: {},
  };

  type Options = {};

  export type optionsArgument = { options?: Options; old: string; new: string };

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
