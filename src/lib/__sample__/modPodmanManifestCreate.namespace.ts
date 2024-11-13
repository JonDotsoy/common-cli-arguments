export namespace modPodmanManifestCreate {
  const conf = {
    usages: ["podman manifest create [options] LIST [IMAGE...]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "LIST", "[IMAGE...]"],
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
            keyword: "list",
            literal: "LIST",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
          {
            keyword: "image",
            literal: "[IMAGE...]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: true,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          list: { kind: "string", optional: false },
          image: { kind: "string[]", optional: true },
        },
        tsOptionsSort: ["options", "list", "image"],
        tsOptionsStr: "{options?: Options;list: string;image?: string[];}",
      },
    ],
    command: "podman manifest create",
    options: {
      all: { keyName: "all", flag: "--all" },
      amend: { keyName: "amend", flag: "--amend" },
      annotation: {
        keyName: "annotation",
        flag: "--annotation",
        typeValue: "stringArray",
      },
      tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
    },
  };

  type Options = {
    all?: boolean; // [null]
    amend?: boolean; // [null]
    annotation?: string[]; // stringArray
    tlsVerify?: boolean; // [null]
  };

  export type optionsArgument = {
    options?: Options;
    list: string;
    image?: string[];
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
