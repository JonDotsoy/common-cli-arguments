export namespace modpodmanlogin {
  const conf = {
    usages: ["podman login [options] [REGISTRY]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "[REGISTRY]"],
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
            keyword: "registry",
            literal: "[REGISTRY]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          registry: { kind: "string", optional: true },
        },
        tsOptionsSort: ["options", "registry"],
        tsOptionsStr: "{options?: Options;registry?: string;}",
      },
    ],
    command: "podman login",
    options: {
      authfile: {
        keyName: "authfile",
        flag: "--authfile",
        typeValue: "string",
      },
      certDir: { keyName: "certDir", flag: "--cert-dir", typeValue: "string" },
      compatAuthFile: {
        keyName: "compatAuthFile",
        flag: "--compat-auth-file",
        typeValue: "string",
      },
      getLogin: { keyName: "getLogin", flag: "--get-login" },
      password: {
        keyName: "password",
        flag: "--password",
        typeValue: "string",
      },
      passwordStdin: { keyName: "passwordStdin", flag: "--password-stdin" },
      secret: { keyName: "secret", flag: "--secret", typeValue: "string" },
      tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
      username: {
        keyName: "username",
        flag: "--username",
        typeValue: "string",
      },
      verbose: { keyName: "verbose", flag: "--verbose" },
    },
  };

  type Options = {
    authfile?: string; // string
    certDir?: string; // string
    compatAuthFile?: string; // string
    getLogin?: boolean; // [null]
    password?: string; // string
    passwordStdin?: boolean; // [null]
    secret?: string; // string
    tlsVerify?: boolean; // [null]
    username?: string; // string
    verbose?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; registry?: string };

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
