export namespace modpodmanpush {
  const conf = {
    usages: ["podman push [options] IMAGE [DESTINATION]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "IMAGE", "[DESTINATION]"],
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
            keyword: "destination",
            literal: "[DESTINATION]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          image: { kind: "string", optional: false },
          destination: { kind: "string", optional: true },
        },
        tsOptionsSort: ["options", "image", "destination"],
        tsOptionsStr: "{options?: Options;image: string;destination?: string;}",
      },
    ],
    command: "podman push",
    options: {
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
      creds: { keyName: "creds", flag: "--creds", typeValue: "Credentials" },
      digestfile: {
        keyName: "digestfile",
        flag: "--digestfile",
        typeValue: "string",
      },
      disableContentTrust: {
        keyName: "disableContentTrust",
        flag: "--disable-content-trust",
      },
      forceCompression: {
        keyName: "forceCompression",
        flag: "--force-compression",
      },
      format: { keyName: "format", flag: "--format", typeValue: "string" },
      removeSignatures: {
        keyName: "removeSignatures",
        flag: "--remove-signatures",
      },
      retry: { keyName: "retry", flag: "--retry", typeValue: "uint" },
      retryDelay: {
        keyName: "retryDelay",
        flag: "--retry-delay",
        typeValue: "string",
      },
      tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
    },
  };

  type Options = {
    authfile?: string; // string
    compressionFormat?: string; // string
    compressionLevel?: number; // int
    creds?: unknown; // Credentials
    digestfile?: string; // string
    disableContentTrust?: boolean; // [null]
    forceCompression?: boolean; // [null]
    format?: string; // string
    removeSignatures?: boolean; // [null]
    retry?: number; // uint
    retryDelay?: string; // string
    tlsVerify?: boolean; // [null]
  };

  export type optionsArgument = {
    options?: Options;
    image: string;
    destination?: string;
  };

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
