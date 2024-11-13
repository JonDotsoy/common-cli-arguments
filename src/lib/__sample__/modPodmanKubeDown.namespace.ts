export namespace modPodmanKubeDown {
  const conf = {
    usages: ["podman kube down [options] KUBEFILE|-"],
    usageMatrix: [
      {
        argsStr: ["[options]", "KUBEFILE|-"],
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
            keyword: "kubefile",
            literal: "KUBEFILE|-",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          kubefile: { kind: "string", optional: false },
        },
        tsOptionsSort: ["options", "kubefile"],
        tsOptionsStr: "{options?: Options;kubefile: string;}",
      },
    ],
    command: "podman kube down",
    options: { force: { keyName: "force", flag: "--force" } },
  };

  type Options = {
    force?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; kubefile: string };

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
