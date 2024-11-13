export namespace modPodmanSearch {
  const conf = {
    usages: ["podman search [options] TERM"],
    usageMatrix: [
      {
        argsStr: ["[options]", "TERM"],
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
            keyword: "term",
            literal: "TERM",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          term: { kind: "string", optional: false },
        },
        tsOptionsSort: ["options", "term"],
        tsOptionsStr: "{options?: Options;term: string;}",
      },
    ],
    command: "podman search",
    options: {
      authfile: {
        keyName: "authfile",
        flag: "--authfile",
        typeValue: "string",
      },
      compatible: { keyName: "compatible", flag: "--compatible" },
      creds: { keyName: "creds", flag: "--creds", typeValue: "Credentials" },
      filter: { keyName: "filter", flag: "--filter", typeValue: "stringArray" },
      format: { keyName: "format", flag: "--format", typeValue: "string" },
      limit: { keyName: "limit", flag: "--limit", typeValue: "int" },
      listTags: { keyName: "listTags", flag: "--list-tags" },
      noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
      tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
    },
  };

  type Options = {
    authfile?: string; // string
    compatible?: boolean; // [null]
    creds?: unknown; // Credentials
    filter?: string[]; // stringArray
    format?: string; // string
    limit?: number; // int
    listTags?: boolean; // [null]
    noTrunc?: boolean; // [null]
    tlsVerify?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; term: string };

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
