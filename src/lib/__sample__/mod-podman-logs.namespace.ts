export namespace modpodmanlogs {
  const conf = {
    usages: ["podman logs [options] CONTAINER"],
    usageMatrix: [
      {
        argsStr: ["[options]", "CONTAINER"],
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
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          container: { kind: "string", optional: false },
        },
        tsOptionsSort: ["options", "container"],
        tsOptionsStr: "{options?: Options;container: string;}",
      },
    ],
    command: "podman logs",
    options: {
      color: { keyName: "color", flag: "--color" },
      follow: { keyName: "follow", flag: "--follow" },
      names: { keyName: "names", flag: "--names" },
      since: { keyName: "since", flag: "--since", typeValue: "string" },
      tail: { keyName: "tail", flag: "--tail", typeValue: "int" },
      timestamps: { keyName: "timestamps", flag: "--timestamps" },
      until: { keyName: "until", flag: "--until", typeValue: "string" },
    },
  };

  type Options = {
    color?: boolean; // [null]
    follow?: boolean; // [null]
    names?: boolean; // [null]
    since?: string; // string
    tail?: number; // int
    timestamps?: boolean; // [null]
    until?: string; // string
  };

  export type optionsArgument = { options?: Options; container: string };

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
