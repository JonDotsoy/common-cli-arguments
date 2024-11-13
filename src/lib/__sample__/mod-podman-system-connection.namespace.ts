export namespace modpodmansystemconnection {
  const conf = {
    commands: {
      add: {
        usages: ["podman system connection add [options] NAME DESTINATION"],
        usageMatrix: [
          {
            argsStr: ["[options]", "NAME", "DESTINATION"],
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
              name: { kind: "string", optional: false },
              destination: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "name", "destination"],
            tsOptionsStr:
              "{options?: Options;name: string;destination: string;}",
          },
        ],
        command: "podman system connection add",
        options: {
          default: { keyName: "default", flag: "--default" },
          identity: {
            keyName: "identity",
            flag: "--identity",
            typeValue: "string",
          },
          port: { keyName: "port", flag: "--port", typeValue: "int" },
          socketPath: {
            keyName: "socketPath",
            flag: "--socket-path",
            typeValue: "string",
          },
        },
      },
      list: {
        usages: ["podman system connection list [options]"],
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
        command: "podman system connection list",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          quiet: { keyName: "quiet", flag: "--quiet" },
        },
      },
      remove: {
        usages: ["podman system connection remove [options] NAME"],
        usageMatrix: [
          {
            argsStr: ["[options]", "NAME"],
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
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              name: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "name"],
            tsOptionsStr: "{options?: Options;name: string;}",
          },
        ],
        command: "podman system connection remove",
        options: { all: { keyName: "all", flag: "--all" } },
      },
      rename: {
        usages: ["podman system connection rename OLD NEW"],
        usageMatrix: [
          {
            argsStr: ["OLD", "NEW"],
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
                keyword: "old",
                literal: "OLD",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "new",
                literal: "NEW",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              old: { kind: "string", optional: false },
              new: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "old", "new"],
            tsOptionsStr: "{options?: Options;old: string;new: string;}",
          },
        ],
        command: "podman system connection rename",
        options: {},
      },
      default: {
        usages: ["podman system connection default NAME"],
        usageMatrix: [
          {
            argsStr: ["NAME"],
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
                keyword: "name",
                literal: "NAME",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              name: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "name"],
            tsOptionsStr: "{options?: Options;name: string;}",
          },
        ],
        command: "podman system connection default",
        options: {},
      },
    },
    usages: ["podman system connection [command]"],
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
    command: "podman system connection",
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
