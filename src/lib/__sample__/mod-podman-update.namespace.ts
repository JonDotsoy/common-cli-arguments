export namespace modpodmanupdate {
  const conf = {
    usages: ["podman update [options] CONTAINER"],
    usageMatrix: [
      {
        argsStr: ["[options]", "CONTAINER"],
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
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          container: { kind: "string", optional: false },
        },
        tsOptionsSort: ["options", "container"],
        tsOptionsStr: "{options?: Options;container: string;}",
      },
    ],
    command: "podman update",
    options: {
      blkioWeight: {
        keyName: "blkioWeight",
        flag: "--blkio-weight",
        typeValue: "string",
      },
      blkioWeightDevice: {
        keyName: "blkioWeightDevice",
        flag: "--blkio-weight-device",
        typeValue: "DEVICE_NAME:WEIGHT",
      },
      cpuPeriod: {
        keyName: "cpuPeriod",
        flag: "--cpu-period",
        typeValue: "uint",
      },
      cpuQuota: { keyName: "cpuQuota", flag: "--cpu-quota", typeValue: "int" },
      cpuRtPeriod: {
        keyName: "cpuRtPeriod",
        flag: "--cpu-rt-period",
        typeValue: "uint",
      },
      cpuRtRuntime: {
        keyName: "cpuRtRuntime",
        flag: "--cpu-rt-runtime",
        typeValue: "int",
      },
      cpuShares: {
        keyName: "cpuShares",
        flag: "--cpu-shares",
        typeValue: "uint",
      },
      cpus: { keyName: "cpus", flag: "--cpus", typeValue: "float" },
      cpusetCpus: {
        keyName: "cpusetCpus",
        flag: "--cpuset-cpus",
        typeValue: "string",
      },
      cpusetMems: {
        keyName: "cpusetMems",
        flag: "--cpuset-mems",
        typeValue: "string",
      },
      deviceReadBps: {
        keyName: "deviceReadBps",
        flag: "--device-read-bps",
        typeValue: "stringArray",
      },
      deviceReadIops: {
        keyName: "deviceReadIops",
        flag: "--device-read-iops",
        typeValue: "stringArray",
      },
      deviceWriteBps: {
        keyName: "deviceWriteBps",
        flag: "--device-write-bps",
        typeValue: "stringArray",
      },
      deviceWriteIops: {
        keyName: "deviceWriteIops",
        flag: "--device-write-iops",
        typeValue: "stringArray",
      },
      memory: {
        keyName: "memory",
        flag: "--memory",
        typeValue: "<number>[<unit>]",
      },
      memoryReservation: {
        keyName: "memoryReservation",
        flag: "--memory-reservation",
        typeValue: "<number>[<unit>]",
      },
      memorySwap: {
        keyName: "memorySwap",
        flag: "--memory-swap",
        typeValue: "string",
      },
      memorySwappiness: {
        keyName: "memorySwappiness",
        flag: "--memory-swappiness",
        typeValue: "int",
      },
      pidsLimit: {
        keyName: "pidsLimit",
        flag: "--pids-limit",
        typeValue: "int",
      },
      restart: { keyName: "restart", flag: "--restart", typeValue: "string" },
    },
  };

  type Options = {
    blkioWeight?: string; // string
    blkioWeightDevice?: unknown; // DEVICE_NAME:WEIGHT
    cpuPeriod?: number; // uint
    cpuQuota?: number; // int
    cpuRtPeriod?: number; // uint
    cpuRtRuntime?: number; // int
    cpuShares?: number; // uint
    cpus?: number; // float
    cpusetCpus?: string; // string
    cpusetMems?: string; // string
    deviceReadBps?: string[]; // stringArray
    deviceReadIops?: string[]; // stringArray
    deviceWriteBps?: string[]; // stringArray
    deviceWriteIops?: string[]; // stringArray
    memory?: number; // <number>[<unit>]
    memoryReservation?: number; // <number>[<unit>]
    memorySwap?: string; // string
    memorySwappiness?: number; // int
    pidsLimit?: number; // int
    restart?: string; // string
  };

  export type optionsArgument = { options?: Options; container: string };

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
