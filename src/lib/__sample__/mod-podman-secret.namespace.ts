export namespace modpodmansecret {
  const conf = {
    commands: {
      ls: {
        usages: ["podman secret ls [options]"],
        usageMatrix: [
          {
            argsStr: ["[options]"],
            args: [
              {
                keyword: "options",
                literal: "[options]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: { options: { kind: "Options", optional: true } },
            tsOptionsSort: ["options"],
            tsOptionsStr: "{options?: Options;}",
          },
        ],
        command: "podman secret ls",
        options: {
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          noheading: { keyName: "noheading", flag: "--noheading" },
          quiet: { keyName: "quiet", flag: "--quiet" },
        },
      },
      rm: {
        usages: ["podman secret rm [options] SECRET [SECRET...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "SECRET", "[SECRET...]"],
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
                keyword: "secret",
                literal: "SECRET",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "secret",
                literal: "[SECRET...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              secret: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "secret"],
            tsOptionsStr: "{options?: Options;secret: string[];}",
          },
        ],
        command: "podman secret rm",
        options: {
          all: { keyName: "all", flag: "--all" },
          ignore: { keyName: "ignore", flag: "--ignore" },
        },
      },
      inspect: {
        usages: ["podman secret inspect [options] SECRET [SECRET...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "SECRET", "[SECRET...]"],
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
                keyword: "secret",
                literal: "SECRET",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "secret",
                literal: "[SECRET...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              secret: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "secret"],
            tsOptionsStr: "{options?: Options;secret: string[];}",
          },
        ],
        command: "podman secret inspect",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          pretty: { keyName: "pretty", flag: "--pretty" },
          showsecret: { keyName: "showsecret", flag: "--showsecret" },
        },
      },
      create: {
        usages: ["podman secret create [options] NAME FILE|-"],
        usageMatrix: [
          {
            argsStr: ["[options]", "NAME", "FILE|-"],
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
                keyword: "name",
                literal: "NAME",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "file",
                literal: "FILE|-",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              name: { kind: "string", optional: false },
              file: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "name", "file"],
            tsOptionsStr: "{options?: Options;name: string;file: string;}",
          },
        ],
        command: "podman secret create",
        options: {
          driver: { keyName: "driver", flag: "--driver", typeValue: "string" },
          driverOpts: {
            keyName: "driverOpts",
            flag: "--driver-opts",
            typeValue: "stringToString",
          },
          env: { keyName: "env", flag: "--env" },
          label: {
            keyName: "label",
            flag: "--label",
            typeValue: "stringArray",
          },
          replace: { keyName: "replace", flag: "--replace" },
        },
      },
      exists: {
        usages: ["podman secret exists SECRET"],
        usageMatrix: [
          {
            argsStr: ["SECRET"],
            args: [
              {
                keyword: "options",
                literal: "options",
                kind: "options",
                isOptional: true,
                isOptionsArg: true,
                isSpread: false,
              },
              {
                keyword: "secret",
                literal: "SECRET",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              secret: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "secret"],
            tsOptionsStr: "{options?: Options;secret: string;}",
          },
        ],
        command: "podman secret exists",
        options: {},
      },
    },
    usages: ["podman secret [command]"],
    usageMatrix: [
      {
        argsStr: ["[command]"],
        args: [
          {
            keyword: "options",
            literal: "options",
            kind: "options",
            isOptional: true,
            isOptionsArg: true,
            isSpread: false,
          },
          {
            keyword: "command",
            literal: "[command]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          command: { kind: "string", optional: true },
        },
        tsOptionsSort: ["options", "command"],
        tsOptionsStr: "{options?: Options;command?: string;}",
      },
    ],
    command: "podman secret",
    options: {},
  };

  type Options = {};

  export type optionsArgument = { options?: Options; command?: string };

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
