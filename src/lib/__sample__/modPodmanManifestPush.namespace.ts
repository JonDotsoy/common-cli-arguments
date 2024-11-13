export namespace modPodmanManifestPush {
  const conf = {
    usages: ["podman manifest push [options] LIST DESTINATION"],
    usageMatrix: [
      {
        argsStr: ["[options]", "LIST", "DESTINATION"],
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
            keyword: "destination",
            literal: "DESTINATION",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          list: { kind: "string", optional: false },
          destination: { kind: "string", optional: false },
        },
        tsOptionsSort: ["options", "list", "destination"],
        tsOptionsStr: "{options?: Options;list: string;destination: string;}",
      },
    ],
    command: "podman manifest push",
    options: {
      addCompression: {
        keyName: "addCompression",
        flag: "--add-compression",
        typeValue: "strings",
      },
      all: { keyName: "all", flag: "--all" },
      authfile: {
        keyName: "authfile",
        flag: "--authfile",
        typeValue: "string",
      },
      compressionFormat: {
        keyName: "compressionFormat",
        flag: "--compression-format",
        typeValue: "string",
      },
      compressionLevel: {
        keyName: "compressionLevel",
        flag: "--compression-level",
        typeValue: "int",
      },
      creds: {
        keyName: "creds",
        flag: "--creds",
        typeValue: "[username[:password]]",
      },
      digestfile: {
        keyName: "digestfile",
        flag: "--digestfile",
        typeValue: "string",
      },
      forceCompression: {
        keyName: "forceCompression",
        flag: "--force-compression",
      },
      format: { keyName: "format", flag: "--format", typeValue: "string" },
      quiet: { keyName: "quiet", flag: "--quiet" },
      removeSignatures: {
        keyName: "removeSignatures",
        flag: "--remove-signatures",
      },
      rm: { keyName: "rm", flag: "--rm" },
      tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
    },
  };

  type Options = {
    addCompression?: string[]; // strings
    all?: boolean; // [null]
    authfile?: string; // string
    compressionFormat?: string; // string
    compressionLevel?: number; // int
    creds?: unknown; // [username[:password]]
    digestfile?: string; // string
    forceCompression?: boolean; // [null]
    format?: string; // string
    quiet?: boolean; // [null]
    removeSignatures?: boolean; // [null]
    rm?: boolean; // [null]
    tlsVerify?: boolean; // [null]
  };

  export type optionsArgument = {
    options?: Options;
    list: string;
    destination: string;
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
