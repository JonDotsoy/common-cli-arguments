export namespace modPodmanKubeApply {
  const conf = {
    usages: ["podman kube apply [options] [CONTAINER...|POD...|VOLUME...]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "[CONTAINER...|POD...|VOLUME...]"],
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
            literal: "[CONTAINER...|POD...|VOLUME...]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: true,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          containerPodVolume: { kind: "string[]", optional: true },
        },
        tsOptionsSort: ["options", "containerPodVolume"],
        tsOptionsStr: "{options?: Options;containerPodVolume?: string[];}",
      },
    ],
    command: "podman kube apply",
    options: {
      caCertFile: {
        keyName: "caCertFile",
        flag: "--ca-cert-file",
        typeValue: "string",
      },
      file: { keyName: "file", flag: "--file", typeValue: "string" },
      kubeconfig: {
        keyName: "kubeconfig",
        flag: "--kubeconfig",
        typeValue: "string",
      },
      ns: { keyName: "ns", flag: "--ns", typeValue: "string" },
      service: { keyName: "service", flag: "--service" },
    },
  };

  type Options = {
    caCertFile?: string; // string
    file?: string; // string
    kubeconfig?: string; // string
    ns?: string; // string
    service?: boolean; // [null]
  };

  export type optionsArgument = {
    options?: Options;
    containerPodVolume?: string[];
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
