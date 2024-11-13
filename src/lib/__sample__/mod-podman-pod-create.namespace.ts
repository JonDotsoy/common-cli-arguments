export namespace modpodmanpodcreate {
  const conf = {
    usages: ["podman pod create [options] [NAME]"],
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
    command: "podman pod create",
    options: {
      addHost: { keyName: "addHost", flag: "--add-host", typeValue: "strings" },
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
      cgroupParent: {
        keyName: "cgroupParent",
        flag: "--cgroup-parent",
        typeValue: "string",
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
      device: { keyName: "device", flag: "--device", typeValue: "stringArray" },
      deviceReadBps: {
        keyName: "deviceReadBps",
        flag: "--device-read-bps",
        typeValue: "stringArray",
      },
      deviceWriteBps: {
        keyName: "deviceWriteBps",
        flag: "--device-write-bps",
        typeValue: "stringArray",
      },
      dns: { keyName: "dns", flag: "--dns", typeValue: "strings" },
      dnsOption: {
        keyName: "dnsOption",
        flag: "--dns-option",
        typeValue: "strings",
      },
      dnsSearch: {
        keyName: "dnsSearch",
        flag: "--dns-search",
        typeValue: "strings",
      },
      exitPolicy: {
        keyName: "exitPolicy",
        flag: "--exit-policy",
        typeValue: "string",
      },
      gidmap: { keyName: "gidmap", flag: "--gidmap", typeValue: "strings" },
      gpus: { keyName: "gpus", flag: "--gpus", typeValue: "strings" },
      hostname: {
        keyName: "hostname",
        flag: "--hostname",
        typeValue: "string",
      },
      infra: { keyName: "infra", flag: "--infra" },
      infraCommand: {
        keyName: "infraCommand",
        flag: "--infra-command",
        typeValue: "string",
      },
      infraConmonPidfile: {
        keyName: "infraConmonPidfile",
        flag: "--infra-conmon-pidfile",
        typeValue: "string",
      },
      infraImage: {
        keyName: "infraImage",
        flag: "--infra-image",
        typeValue: "string",
      },
      infraName: {
        keyName: "infraName",
        flag: "--infra-name",
        typeValue: "string",
      },
      ip: { keyName: "ip", flag: "--ip", typeValue: "string" },
      ip6: { keyName: "ip6", flag: "--ip6", typeValue: "string" },
      label: { keyName: "label", flag: "--label", typeValue: "stringArray" },
      labelFile: {
        keyName: "labelFile",
        flag: "--label-file",
        typeValue: "stringArray",
      },
      macAddress: {
        keyName: "macAddress",
        flag: "--mac-address",
        typeValue: "string",
      },
      memory: {
        keyName: "memory",
        flag: "--memory",
        typeValue: "<number>[<unit>]",
      },
      memorySwap: {
        keyName: "memorySwap",
        flag: "--memory-swap",
        typeValue: "string",
      },
      name: { keyName: "name", flag: "--name", typeValue: "string" },
      network: {
        keyName: "network",
        flag: "--network",
        typeValue: "stringArray",
      },
      networkAlias: {
        keyName: "networkAlias",
        flag: "--network-alias",
        typeValue: "strings",
      },
      noHosts: { keyName: "noHosts", flag: "--no-hosts" },
      pid: { keyName: "pid", flag: "--pid", typeValue: "string" },
      podIdFile: {
        keyName: "podIdFile",
        flag: "--pod-id-file",
        typeValue: "string",
      },
      publish: { keyName: "publish", flag: "--publish", typeValue: "strings" },
      replace: { keyName: "replace", flag: "--replace" },
      restart: { keyName: "restart", flag: "--restart", typeValue: "string" },
      securityOpt: {
        keyName: "securityOpt",
        flag: "--security-opt",
        typeValue: "stringArray",
      },
      share: { keyName: "share", flag: "--share", typeValue: "string" },
      shareParent: { keyName: "shareParent", flag: "--share-parent" },
      shmSize: {
        keyName: "shmSize",
        flag: "--shm-size",
        typeValue: "<number>[<unit>]",
      },
      shmSizeSystemd: {
        keyName: "shmSizeSystemd",
        flag: "--shm-size-systemd",
        typeValue: "<number>[<unit>]",
      },
      subgidname: {
        keyName: "subgidname",
        flag: "--subgidname",
        typeValue: "string",
      },
      subuidname: {
        keyName: "subuidname",
        flag: "--subuidname",
        typeValue: "string",
      },
      sysctl: { keyName: "sysctl", flag: "--sysctl", typeValue: "strings" },
      uidmap: { keyName: "uidmap", flag: "--uidmap", typeValue: "strings" },
      userns: { keyName: "userns", flag: "--userns", typeValue: "string" },
      uts: { keyName: "uts", flag: "--uts", typeValue: "string" },
      volume: { keyName: "volume", flag: "--volume", typeValue: "stringArray" },
      volumesFrom: {
        keyName: "volumesFrom",
        flag: "--volumes-from",
        typeValue: "stringArray",
      },
    },
  };

  type Options = {
    addHost?: string[]; // strings
    blkioWeight?: string; // string
    blkioWeightDevice?: unknown; // DEVICE_NAME:WEIGHT
    cgroupParent?: string; // string
    cpuShares?: number; // uint
    cpus?: number; // float
    cpusetCpus?: string; // string
    cpusetMems?: string; // string
    device?: string[]; // stringArray
    deviceReadBps?: string[]; // stringArray
    deviceWriteBps?: string[]; // stringArray
    dns?: string[]; // strings
    dnsOption?: string[]; // strings
    dnsSearch?: string[]; // strings
    exitPolicy?: string; // string
    gidmap?: string[]; // strings
    gpus?: string[]; // strings
    hostname?: string; // string
    infra?: boolean; // [null]
    infraCommand?: string; // string
    infraConmonPidfile?: string; // string
    infraImage?: string; // string
    infraName?: string; // string
    ip?: string; // string
    ip6?: string; // string
    label?: string[]; // stringArray
    labelFile?: string[]; // stringArray
    macAddress?: string; // string
    memory?: number; // <number>[<unit>]
    memorySwap?: string; // string
    name?: string; // string
    network?: string[]; // stringArray
    networkAlias?: string[]; // strings
    noHosts?: boolean; // [null]
    pid?: string; // string
    podIdFile?: string; // string
    publish?: string[]; // strings
    replace?: boolean; // [null]
    restart?: string; // string
    securityOpt?: string[]; // stringArray
    share?: string; // string
    shareParent?: boolean; // [null]
    shmSize?: number; // <number>[<unit>]
    shmSizeSystemd?: number; // <number>[<unit>]
    subgidname?: string; // string
    subuidname?: string; // string
    sysctl?: string[]; // strings
    uidmap?: string[]; // strings
    userns?: string; // string
    uts?: string; // string
    volume?: string[]; // stringArray
    volumesFrom?: string[]; // stringArray
  };

  export type optionsArgument = { options?: Options; name?: string };

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
