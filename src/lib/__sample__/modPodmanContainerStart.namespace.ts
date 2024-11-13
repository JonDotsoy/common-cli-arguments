export namespace modPodmanContainerStart {
  const conf = {
    usages: ["podman container start [options] CONTAINER [CONTAINER...]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "CONTAINER", "[CONTAINER...]"],
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
            keyword: "container",
            literal: "[CONTAINER...]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: true,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          container: { kind: "string[]", optional: false },
        },
        tsOptionsSort: ["options", "container"],
        tsOptionsStr: "{options?: Options;container: string[];}",
      },
    ],
    command: "podman container start",
    options: {
      all: { keyName: "all", flag: "--all" },
      attach: { keyName: "attach", flag: "--attach" },
      detachKeys: {
        keyName: "detachKeys",
        flag: "--detach-keys",
        typeValue: "[a-Z]",
      },
      filter: { keyName: "filter", flag: "--filter", typeValue: "stringArray" },
      interactive: { keyName: "interactive", flag: "--interactive" },
    },
  };

  type Options = {
    all?: boolean; // [null]
    attach?: boolean; // [null]
    detachKeys?: unknown; // [a-Z]
    filter?: string[]; // stringArray
    interactive?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; container: string[] };

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
