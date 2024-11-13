export namespace modpodmanimagepull {
  const conf = {
    usages: ["podman image pull [options] IMAGE [IMAGE...]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "IMAGE", "[IMAGE...]"],
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
          image: { kind: "string[]", optional: false },
        },
        tsOptionsSort: ["options", "image"],
        tsOptionsStr: "{options?: Options;image: string[];}",
      },
    ],
    command: "podman image pull",
    options: {
      allTags: { keyName: "allTags", flag: "--all-tags" },
      arch: { keyName: "arch", flag: "--arch", typeValue: "ARCH" },
      authfile: {
        keyName: "authfile",
        flag: "--authfile",
        typeValue: "string",
      },
      creds: { keyName: "creds", flag: "--creds", typeValue: "Credentials" },
      disableContentTrust: {
        keyName: "disableContentTrust",
        flag: "--disable-content-trust",
      },
      os: { keyName: "os", flag: "--os", typeValue: "OS" },
      platform: {
        keyName: "platform",
        flag: "--platform",
        typeValue: "string",
      },
      quiet: { keyName: "quiet", flag: "--quiet" },
      retry: { keyName: "retry", flag: "--retry", typeValue: "uint" },
      retryDelay: {
        keyName: "retryDelay",
        flag: "--retry-delay",
        typeValue: "string",
      },
      tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
      variant: { keyName: "variant", flag: "--variant", typeValue: "string" },
    },
  };

  type Options = {
    allTags?: boolean; // [null]
    arch?: unknown; // ARCH
    authfile?: string; // string
    creds?: unknown; // Credentials
    disableContentTrust?: boolean; // [null]
    os?: unknown; // OS
    platform?: string; // string
    quiet?: boolean; // [null]
    retry?: number; // uint
    retryDelay?: string; // string
    tlsVerify?: boolean; // [null]
    variant?: string; // string
  };

  export type optionsArgument = { options?: Options; image: string[] };

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
