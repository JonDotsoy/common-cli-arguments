export namespace modpodmanattach {
  const conf = {
    usages: ["podman attach [options] CONTAINER"],
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
    command: "podman attach",
    options: {
      detachKeys: {
        keyName: "detachKeys",
        flag: "--detach-keys",
        typeValue: "[a-Z]",
      },
      noStdin: { keyName: "noStdin", flag: "--no-stdin" },
      sigProxy: { keyName: "sigProxy", flag: "--sig-proxy" },
    },
  };

  type Options = {
    detachKeys?: unknown; // [a-Z]
    noStdin?: boolean; // [null]
    sigProxy?: boolean; // [null]
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
