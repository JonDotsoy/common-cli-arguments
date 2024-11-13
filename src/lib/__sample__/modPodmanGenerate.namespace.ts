export namespace modPodmanGenerate {
  const conf = {
    usages: ["podman generate [command]"],
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
    command: "podman generate",
    options: {},
    commands: {
      systemd: {
        usages: ["podman generate systemd [options] {CONTAINER|POD}"],
        usageMatrix: [
          {
            argsStr: ["[options]", "{CONTAINER|POD}"],
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
                keyword: "containerPod",
                literal: "{CONTAINER|POD}",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              containerPod: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "containerPod"],
            tsOptionsStr: "{options?: Options;containerPod: string;}",
          },
        ],
        command: "podman generate systemd",
        options: {
          after: {
            keyName: "after",
            flag: "--after",
            typeValue: "stringArray",
          },
          containerPrefix: {
            keyName: "containerPrefix",
            flag: "--container-prefix",
            typeValue: "string",
          },
          env: { keyName: "env", flag: "--env", typeValue: "stringArray" },
          files: { keyName: "files", flag: "--files" },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          name: { keyName: "name", flag: "--name" },
          new: { keyName: "new", flag: "--new" },
          noHeader: { keyName: "noHeader", flag: "--no-header" },
          podPrefix: {
            keyName: "podPrefix",
            flag: "--pod-prefix",
            typeValue: "string",
          },
          requires: {
            keyName: "requires",
            flag: "--requires",
            typeValue: "stringArray",
          },
          restartPolicy: {
            keyName: "restartPolicy",
            flag: "--restart-policy",
            typeValue: "string",
          },
          restartSec: {
            keyName: "restartSec",
            flag: "--restart-sec",
            typeValue: "uint",
          },
          separator: {
            keyName: "separator",
            flag: "--separator",
            typeValue: "string",
          },
          startTimeout: {
            keyName: "startTimeout",
            flag: "--start-timeout",
            typeValue: "uint",
          },
          stopTimeout: {
            keyName: "stopTimeout",
            flag: "--stop-timeout",
            typeValue: "uint",
          },
          template: { keyName: "template", flag: "--template" },
          wants: {
            keyName: "wants",
            flag: "--wants",
            typeValue: "stringArray",
          },
        },
      },
      spec: {
        usages: ["podman generate spec [options] {CONTAINER|POD}"],
        usageMatrix: [
          {
            argsStr: ["[options]", "{CONTAINER|POD}"],
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
                keyword: "containerPod",
                literal: "{CONTAINER|POD}",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              containerPod: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "containerPod"],
            tsOptionsStr: "{options?: Options;containerPod: string;}",
          },
        ],
        command: "podman generate spec",
        options: {
          compact: { keyName: "compact", flag: "--compact" },
          filename: {
            keyName: "filename",
            flag: "--filename",
            typeValue: "string",
          },
          name: { keyName: "name", flag: "--name" },
        },
      },
      kube: {
        usages: [
          "podman generate kube [options] {CONTAINER...|POD...|VOLUME...}",
        ],
        usageMatrix: [
          {
            argsStr: ["[options]", "{CONTAINER...|POD...|VOLUME...}"],
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
                keyword: "containerPodVolume",
                literal: "{CONTAINER...|POD...|VOLUME...}",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              containerPodVolume: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "containerPodVolume"],
            tsOptionsStr: "{options?: Options;containerPodVolume: string;}",
          },
        ],
        command: "podman generate kube",
        options: {
          filename: {
            keyName: "filename",
            flag: "--filename",
            typeValue: "string",
          },
          podmanOnly: { keyName: "podmanOnly", flag: "--podman-only" },
          replicas: {
            keyName: "replicas",
            flag: "--replicas",
            typeValue: "int32",
          },
          service: { keyName: "service", flag: "--service" },
          type: { keyName: "type", flag: "--type", typeValue: "string" },
        },
      },
    },
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
