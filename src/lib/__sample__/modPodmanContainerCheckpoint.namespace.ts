export namespace modPodmanContainerCheckpoint {
  const conf = {
    usages: ["podman container checkpoint [options] CONTAINER [CONTAINER...]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "CONTAINER", "[CONTAINER...]"],
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
            keyword: "container",
            literal: "CONTAINER",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
          {
            keyword: "container",
            literal: "[CONTAINER...]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: true,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          container: { kind: "string[]", optional: false },
        },
        tsOptionsSort: ["options", "container"],
        tsOptionsStr: "{options?: Options;container: string[];}",
      },
    ],
    command: "podman container checkpoint",
    options: {
      all: { keyName: "all", flag: "--all" },
      compress: {
        keyName: "compress",
        flag: "--compress",
        typeValue: "string",
      },
      createImage: {
        keyName: "createImage",
        flag: "--create-image",
        typeValue: "string",
      },
      export: { keyName: "export", flag: "--export", typeValue: "string" },
      fileLocks: { keyName: "fileLocks", flag: "--file-locks" },
      ignoreRootfs: { keyName: "ignoreRootfs", flag: "--ignore-rootfs" },
      ignoreVolumes: { keyName: "ignoreVolumes", flag: "--ignore-volumes" },
      keep: { keyName: "keep", flag: "--keep" },
      leaveRunning: { keyName: "leaveRunning", flag: "--leave-running" },
      preCheckpoint: { keyName: "preCheckpoint", flag: "--pre-checkpoint" },
      printStats: { keyName: "printStats", flag: "--print-stats" },
      tcpEstablished: { keyName: "tcpEstablished", flag: "--tcp-established" },
      withPrevious: { keyName: "withPrevious", flag: "--with-previous" },
    },
  };

  type Options = {
    all?: boolean; // [null]
    compress?: string; // string
    createImage?: string; // string
    export?: string; // string
    fileLocks?: boolean; // [null]
    ignoreRootfs?: boolean; // [null]
    ignoreVolumes?: boolean; // [null]
    keep?: boolean; // [null]
    leaveRunning?: boolean; // [null]
    preCheckpoint?: boolean; // [null]
    printStats?: boolean; // [null]
    tcpEstablished?: boolean; // [null]
    withPrevious?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; container: string[] };

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
