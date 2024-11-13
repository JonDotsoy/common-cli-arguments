export namespace modPodmanMachine {
  const conf = {
    commands: {
      info: {
        usages: ["podman machine info [options]"],
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
        command: "podman machine info",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
        },
      },
      os: {
        usages: ["podman machine os [command]"],
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
        command: "podman machine os",
        options: {},
        commands: {
          apply: {
            usages: ["podman machine os apply [options] IMAGE [NAME]"],
            usageMatrix: [
              {
                argsStr: ["[options]", "IMAGE", "[NAME]"],
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
                    keyword: "name",
                    literal: "[NAME]",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: true,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  image: { kind: "string", optional: false },
                  name: { kind: "string", optional: true },
                },
                tsOptionsSort: ["options", "image", "name"],
                tsOptionsStr:
                  "{options?: Options;image: string;name?: string;}",
              },
            ],
            command: "podman machine os apply",
            options: { restart: { keyName: "restart", flag: "--restart" } },
          },
        },
      },
      stop: {
        usages: ["podman machine stop [MACHINE]"],
        usageMatrix: [
          {
            argsStr: ["[MACHINE]"],
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
                keyword: "machine",
                literal: "[MACHINE]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              machine: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "machine"],
            tsOptionsStr: "{options?: Options;machine?: string;}",
          },
        ],
        command: "podman machine stop",
        options: {},
      },
      ssh: {
        usages: ["podman machine ssh [options] [NAME] [COMMAND [ARG ...]]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "[NAME]", "[COMMAND [ARG ...]]"],
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
                literal: "[NAME]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "commandArg",
                literal: "[COMMAND [ARG ...]]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              name: { kind: "string", optional: true },
              commandArg: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "name", "commandArg"],
            tsOptionsStr:
              "{options?: Options;name?: string;commandArg?: string;}",
          },
        ],
        command: "podman machine ssh",
        options: {
          username: {
            keyName: "username",
            flag: "--username",
            typeValue: "string",
          },
        },
      },
      reset: {
        usages: ["podman machine reset [options]"],
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
        command: "podman machine reset",
        options: { force: { keyName: "force", flag: "--force" } },
      },
      init: {
        usages: ["podman machine init [options] [NAME]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "[NAME]"],
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
                literal: "[NAME]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              name: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "name"],
            tsOptionsStr: "{options?: Options;name?: string;}",
          },
        ],
        command: "podman machine init",
        options: {
          cpus: { keyName: "cpus", flag: "--cpus", typeValue: "uint" },
          diskSize: {
            keyName: "diskSize",
            flag: "--disk-size",
            typeValue: "uint",
          },
          ignitionPath: {
            keyName: "ignitionPath",
            flag: "--ignition-path",
            typeValue: "string",
          },
          image: { keyName: "image", flag: "--image", typeValue: "string" },
          memory: { keyName: "memory", flag: "--memory", typeValue: "uint" },
          now: { keyName: "now", flag: "--now" },
          rootful: { keyName: "rootful", flag: "--rootful" },
          timezone: {
            keyName: "timezone",
            flag: "--timezone",
            typeValue: "string",
          },
          usb: { keyName: "usb", flag: "--usb", typeValue: "stringArray" },
          userModeNetworking: {
            keyName: "userModeNetworking",
            flag: "--user-mode-networking",
          },
          username: {
            keyName: "username",
            flag: "--username",
            typeValue: "string",
          },
          volume: {
            keyName: "volume",
            flag: "--volume",
            typeValue: "stringArray",
          },
        },
      },
      set: {
        usages: ["podman machine set [options] [NAME]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "[NAME]"],
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
                literal: "[NAME]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              name: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "name"],
            tsOptionsStr: "{options?: Options;name?: string;}",
          },
        ],
        command: "podman machine set",
        options: {
          cpus: { keyName: "cpus", flag: "--cpus", typeValue: "uint" },
          diskSize: {
            keyName: "diskSize",
            flag: "--disk-size",
            typeValue: "uint",
          },
          memory: { keyName: "memory", flag: "--memory", typeValue: "uint" },
          rootful: { keyName: "rootful", flag: "--rootful" },
          usb: { keyName: "usb", flag: "--usb", typeValue: "stringArray" },
          userModeNetworking: {
            keyName: "userModeNetworking",
            flag: "--user-mode-networking",
          },
        },
      },
      list: {
        usages: ["podman machine list [options]"],
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
        command: "podman machine list",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          noheading: { keyName: "noheading", flag: "--noheading" },
          quiet: { keyName: "quiet", flag: "--quiet" },
        },
      },
      start: {
        usages: ["podman machine start [options] [MACHINE]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "[MACHINE]"],
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
                keyword: "machine",
                literal: "[MACHINE]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              machine: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "machine"],
            tsOptionsStr: "{options?: Options;machine?: string;}",
          },
        ],
        command: "podman machine start",
        options: {
          noInfo: { keyName: "noInfo", flag: "--no-info" },
          quiet: { keyName: "quiet", flag: "--quiet" },
        },
      },
      rm: {
        usages: ["podman machine rm [options] [MACHINE]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "[MACHINE]"],
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
                keyword: "machine",
                literal: "[MACHINE]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              machine: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "machine"],
            tsOptionsStr: "{options?: Options;machine?: string;}",
          },
        ],
        command: "podman machine rm",
        options: {
          force: { keyName: "force", flag: "--force" },
          saveIgnition: { keyName: "saveIgnition", flag: "--save-ignition" },
          saveImage: { keyName: "saveImage", flag: "--save-image" },
        },
      },
      inspect: {
        usages: ["podman machine inspect [options] [MACHINE...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "[MACHINE...]"],
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
                keyword: "machine",
                literal: "[MACHINE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              machine: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "machine"],
            tsOptionsStr: "{options?: Options;machine?: string[];}",
          },
        ],
        command: "podman machine inspect",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
        },
      },
    },
    usages: ["podman machine [command]"],
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
    command: "podman machine",
    options: {},
  };

  type Options = {};

  export type optionsArgument = { options?: Options; command?: string };

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
