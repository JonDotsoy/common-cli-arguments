export namespace modPodmanImageScp {
  const conf = {
    usages: ["podman image scp [options] IMAGE [HOST::]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "IMAGE", "[HOST::]"],
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
            keyword: "image",
            literal: "IMAGE",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
          {
            keyword: "host",
            literal: "[HOST::]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          image: { kind: "string", optional: false },
          host: { kind: "string", optional: true },
        },
        tsOptionsSort: ["options", "image", "host"],
        tsOptionsStr: "{options?: Options;image: string;host?: string;}",
      },
    ],
    command: "podman image scp",
    options: { quiet: { keyName: "quiet", flag: "--quiet" } },
  };

  type Options = {
    quiet?: boolean; // [null]
  };

  export type optionsArgument = {
    options?: Options;
    image: string;
    host?: string;
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
