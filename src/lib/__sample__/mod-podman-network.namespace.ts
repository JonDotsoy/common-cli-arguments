export namespace modpodmannetwork {
  const conf = {
    commands: {
      rm: {
        usages: ["podman network rm [options] NETWORK [NETWORK...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "NETWORK", "[NETWORK...]"],
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
                keyword: "network",
                literal: "NETWORK",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "network",
                literal: "[NETWORK...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              network: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "network"],
            tsOptionsStr: "{options?: Options;network: string[];}",
          },
        ],
        command: "podman network rm",
        options: {
          force: { keyName: "force", flag: "--force" },
          time: { keyName: "time", flag: "--time", typeValue: "int" },
        },
      },
      ls: {
        usages: ["podman network ls [options]"],
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
        command: "podman network ls",
        options: {
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
          noheading: { keyName: "noheading", flag: "--noheading" },
          quiet: { keyName: "quiet", flag: "--quiet" },
        },
      },
      prune: {
        usages: ["podman network prune [options]"],
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
        command: "podman network prune",
        options: {
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
          force: { keyName: "force", flag: "--force" },
        },
      },
      create: {
        usages: ["podman network create [options] [NAME]"],
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
        command: "podman network create",
        options: {
          disableDns: { keyName: "disableDns", flag: "--disable-dns" },
          dns: { keyName: "dns", flag: "--dns", typeValue: "strings" },
          driver: { keyName: "driver", flag: "--driver", typeValue: "string" },
          gateway: {
            keyName: "gateway",
            flag: "--gateway",
            typeValue: "ipSlice",
          },
          ignore: { keyName: "ignore", flag: "--ignore" },
          interfaceName: {
            keyName: "interfaceName",
            flag: "--interface-name",
            typeValue: "string",
          },
          internal: { keyName: "internal", flag: "--internal" },
          ipRange: {
            keyName: "ipRange",
            flag: "--ip-range",
            typeValue: "stringArray",
          },
          ipamDriver: {
            keyName: "ipamDriver",
            flag: "--ipam-driver",
            typeValue: "string",
          },
          ipv6: { keyName: "ipv6", flag: "--ipv6" },
          label: {
            keyName: "label",
            flag: "--label",
            typeValue: "stringArray",
          },
          opt: { keyName: "opt", flag: "--opt", typeValue: "stringArray" },
          route: {
            keyName: "route",
            flag: "--route",
            typeValue: "stringArray",
          },
          subnet: {
            keyName: "subnet",
            flag: "--subnet",
            typeValue: "stringArray",
          },
        },
      },
      update: {
        usages: ["podman network update [options] NETWORK"],
        usageMatrix: [
          {
            argsStr: ["[options]", "NETWORK"],
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
                keyword: "network",
                literal: "NETWORK",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              network: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "network"],
            tsOptionsStr: "{options?: Options;network: string;}",
          },
        ],
        command: "podman network update",
        options: {
          dnsAdd: {
            keyName: "dnsAdd",
            flag: "--dns-add",
            typeValue: "strings",
          },
          dnsDrop: {
            keyName: "dnsDrop",
            flag: "--dns-drop",
            typeValue: "strings",
          },
        },
      },
      inspect: {
        usages: ["podman network inspect [options] NETWORK [NETWORK...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "NETWORK", "[NETWORK...]"],
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
                keyword: "network",
                literal: "NETWORK",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "network",
                literal: "[NETWORK...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              network: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "network"],
            tsOptionsStr: "{options?: Options;network: string[];}",
          },
        ],
        command: "podman network inspect",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
        },
      },
      exists: {
        usages: ["podman network exists NETWORK"],
        usageMatrix: [
          {
            argsStr: ["NETWORK"],
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
                keyword: "network",
                literal: "NETWORK",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              network: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "network"],
            tsOptionsStr: "{options?: Options;network: string;}",
          },
        ],
        command: "podman network exists",
        options: {},
      },
      connect: {
        usages: ["podman network connect [options] NETWORK CONTAINER"],
        usageMatrix: [
          {
            argsStr: ["[options]", "NETWORK", "CONTAINER"],
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
                keyword: "network",
                literal: "NETWORK",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "container",
                literal: "CONTAINER",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              network: { kind: "string", optional: false },
              container: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "network", "container"],
            tsOptionsStr:
              "{options?: Options;network: string;container: string;}",
          },
        ],
        command: "podman network connect",
        options: {
          alias: { keyName: "alias", flag: "--alias", typeValue: "strings" },
          ip: { keyName: "ip", flag: "--ip", typeValue: "ip" },
          ip6: { keyName: "ip6", flag: "--ip6", typeValue: "ip" },
          macAddress: {
            keyName: "macAddress",
            flag: "--mac-address",
            typeValue: "string",
          },
        },
      },
      disconnect: {
        usages: ["podman network disconnect [options] NETWORK CONTAINER"],
        usageMatrix: [
          {
            argsStr: ["[options]", "NETWORK", "CONTAINER"],
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
                keyword: "network",
                literal: "NETWORK",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "container",
                literal: "CONTAINER",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              network: { kind: "string", optional: false },
              container: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "network", "container"],
            tsOptionsStr:
              "{options?: Options;network: string;container: string;}",
          },
        ],
        command: "podman network disconnect",
        options: { force: { keyName: "force", flag: "--force" } },
      },
    },
    usages: ["podman network [command]"],
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
    command: "podman network",
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
