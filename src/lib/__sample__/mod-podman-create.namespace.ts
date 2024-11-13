export namespace modpodmancreate {
  const conf = {
    usages: ["podman create [options] IMAGE [COMMAND [ARG...]]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "IMAGE", "[COMMAND [ARG...]]"],
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
            keyword: "commandArg",
            literal: "[COMMAND [ARG...]]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          image: { kind: "string", optional: false },
          commandArg: { kind: "string", optional: true },
        },
        tsOptionsSort: ["options", "image", "commandArg"],
        tsOptionsStr: "{options?: Options;image: string;commandArg?: string;}",
      },
    ],
    command: "podman create",
    options: {
      addHost: { keyName: "addHost", flag: "--add-host", typeValue: "strings" },
      annotation: {
        keyName: "annotation",
        flag: "--annotation",
        typeValue: "stringArray",
      },
      arch: { keyName: "arch", flag: "--arch", typeValue: "ARCH" },
      attach: { keyName: "attach", flag: "--attach", typeValue: "strings" },
      authfile: {
        keyName: "authfile",
        flag: "--authfile",
        typeValue: "string",
      },
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
      capAdd: { keyName: "capAdd", flag: "--cap-add", typeValue: "strings" },
      capDrop: { keyName: "capDrop", flag: "--cap-drop", typeValue: "strings" },
      cgroupConf: {
        keyName: "cgroupConf",
        flag: "--cgroup-conf",
        typeValue: "strings",
      },
      cgroupParent: {
        keyName: "cgroupParent",
        flag: "--cgroup-parent",
        typeValue: "string",
      },
      cgroupns: {
        keyName: "cgroupns",
        flag: "--cgroupns",
        typeValue: "string",
      },
      cgroups: { keyName: "cgroups", flag: "--cgroups", typeValue: "string" },
      chrootdirs: {
        keyName: "chrootdirs",
        flag: "--chrootdirs",
        typeValue: "stringArray",
      },
      cidfile: { keyName: "cidfile", flag: "--cidfile", typeValue: "string" },
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
      device: { keyName: "device", flag: "--device", typeValue: "stringArray" },
      deviceCgroupRule: {
        keyName: "deviceCgroupRule",
        flag: "--device-cgroup-rule",
        typeValue: "strings",
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
      disableContentTrust: {
        keyName: "disableContentTrust",
        flag: "--disable-content-trust",
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
      entrypoint: {
        keyName: "entrypoint",
        flag: "--entrypoint",
        typeValue: "string",
      },
      env: { keyName: "env", flag: "--env", typeValue: "stringArray" },
      envFile: {
        keyName: "envFile",
        flag: "--env-file",
        typeValue: "stringArray",
      },
      envMerge: {
        keyName: "envMerge",
        flag: "--env-merge",
        typeValue: "stringArray",
      },
      expose: { keyName: "expose", flag: "--expose", typeValue: "strings" },
      gidmap: { keyName: "gidmap", flag: "--gidmap", typeValue: "strings" },
      gpus: { keyName: "gpus", flag: "--gpus", typeValue: "strings" },
      groupAdd: {
        keyName: "groupAdd",
        flag: "--group-add",
        typeValue: "strings",
      },
      groupEntry: {
        keyName: "groupEntry",
        flag: "--group-entry",
        typeValue: "string",
      },
      healthCmd: {
        keyName: "healthCmd",
        flag: "--health-cmd",
        typeValue: "string",
      },
      healthInterval: {
        keyName: "healthInterval",
        flag: "--health-interval",
        typeValue: "string",
      },
      healthOnFailure: {
        keyName: "healthOnFailure",
        flag: "--health-on-failure",
        typeValue: "string",
      },
      healthRetries: {
        keyName: "healthRetries",
        flag: "--health-retries",
        typeValue: "uint",
      },
      healthStartPeriod: {
        keyName: "healthStartPeriod",
        flag: "--health-start-period",
        typeValue: "string",
      },
      healthStartupCmd: {
        keyName: "healthStartupCmd",
        flag: "--health-startup-cmd",
        typeValue: "string",
      },
      healthStartupInterval: {
        keyName: "healthStartupInterval",
        flag: "--health-startup-interval",
        typeValue: "string",
      },
      healthStartupRetries: {
        keyName: "healthStartupRetries",
        flag: "--health-startup-retries",
        typeValue: "uint",
      },
      healthStartupSuccess: {
        keyName: "healthStartupSuccess",
        flag: "--health-startup-success",
        typeValue: "uint",
      },
      healthStartupTimeout: {
        keyName: "healthStartupTimeout",
        flag: "--health-startup-timeout",
        typeValue: "string",
      },
      healthTimeout: {
        keyName: "healthTimeout",
        flag: "--health-timeout",
        typeValue: "string",
      },
      hostname: {
        keyName: "hostname",
        flag: "--hostname",
        typeValue: "string",
      },
      hostuser: {
        keyName: "hostuser",
        flag: "--hostuser",
        typeValue: "strings",
      },
      httpProxy: { keyName: "httpProxy", flag: "--http-proxy" },
      imageVolume: {
        keyName: "imageVolume",
        flag: "--image-volume",
        typeValue: "string",
      },
      init: { keyName: "init", flag: "--init" },
      initCtr: { keyName: "initCtr", flag: "--init-ctr", typeValue: "string" },
      initPath: {
        keyName: "initPath",
        flag: "--init-path",
        typeValue: "string",
      },
      interactive: { keyName: "interactive", flag: "--interactive" },
      ip: { keyName: "ip", flag: "--ip", typeValue: "string" },
      ip6: { keyName: "ip6", flag: "--ip6", typeValue: "string" },
      ipc: { keyName: "ipc", flag: "--ipc", typeValue: "string" },
      label: { keyName: "label", flag: "--label", typeValue: "stringArray" },
      labelFile: {
        keyName: "labelFile",
        flag: "--label-file",
        typeValue: "stringArray",
      },
      logDriver: {
        keyName: "logDriver",
        flag: "--log-driver",
        typeValue: "string",
      },
      logOpt: {
        keyName: "logOpt",
        flag: "--log-opt",
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
      mount: { keyName: "mount", flag: "--mount", typeValue: "stringArray" },
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
      noHealthcheck: { keyName: "noHealthcheck", flag: "--no-healthcheck" },
      noHosts: { keyName: "noHosts", flag: "--no-hosts" },
      oomKillDisable: { keyName: "oomKillDisable", flag: "--oom-kill-disable" },
      oomScoreAdj: {
        keyName: "oomScoreAdj",
        flag: "--oom-score-adj",
        typeValue: "int",
      },
      os: { keyName: "os", flag: "--os", typeValue: "OS" },
      passwdEntry: {
        keyName: "passwdEntry",
        flag: "--passwd-entry",
        typeValue: "string",
      },
      personality: {
        keyName: "personality",
        flag: "--personality",
        typeValue: "string",
      },
      pid: { keyName: "pid", flag: "--pid", typeValue: "string" },
      pidsLimit: {
        keyName: "pidsLimit",
        flag: "--pids-limit",
        typeValue: "int",
      },
      platform: {
        keyName: "platform",
        flag: "--platform",
        typeValue: "string",
      },
      pod: { keyName: "pod", flag: "--pod", typeValue: "string" },
      podIdFile: {
        keyName: "podIdFile",
        flag: "--pod-id-file",
        typeValue: "string",
      },
      privileged: { keyName: "privileged", flag: "--privileged" },
      publish: { keyName: "publish", flag: "--publish", typeValue: "strings" },
      publishAll: { keyName: "publishAll", flag: "--publish-all" },
      pull: { keyName: "pull", flag: "--pull", typeValue: "string" },
      quiet: { keyName: "quiet", flag: "--quiet" },
      rdtClass: {
        keyName: "rdtClass",
        flag: "--rdt-class",
        typeValue: "string",
      },
      readOnly: { keyName: "readOnly", flag: "--read-only" },
      readOnlyTmpfs: { keyName: "readOnlyTmpfs", flag: "--read-only-tmpfs" },
      replace: { keyName: "replace", flag: "--replace" },
      requires: {
        keyName: "requires",
        flag: "--requires",
        typeValue: "strings",
      },
      restart: { keyName: "restart", flag: "--restart", typeValue: "string" },
      retry: { keyName: "retry", flag: "--retry", typeValue: "uint" },
      retryDelay: {
        keyName: "retryDelay",
        flag: "--retry-delay",
        typeValue: "string",
      },
      rm: { keyName: "rm", flag: "--rm" },
      rootfs: { keyName: "rootfs", flag: "--rootfs" },
      sdnotify: {
        keyName: "sdnotify",
        flag: "--sdnotify",
        typeValue: "string",
      },
      seccompPolicy: {
        keyName: "seccompPolicy",
        flag: "--seccomp-policy",
        typeValue: "string",
      },
      secret: { keyName: "secret", flag: "--secret", typeValue: "stringArray" },
      securityOpt: {
        keyName: "securityOpt",
        flag: "--security-opt",
        typeValue: "stringArray",
      },
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
      stopSignal: {
        keyName: "stopSignal",
        flag: "--stop-signal",
        typeValue: "string",
      },
      stopTimeout: {
        keyName: "stopTimeout",
        flag: "--stop-timeout",
        typeValue: "uint",
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
      systemd: { keyName: "systemd", flag: "--systemd", typeValue: "string" },
      timeout: { keyName: "timeout", flag: "--timeout", typeValue: "uint" },
      tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
      tmpfs: { keyName: "tmpfs", flag: "--tmpfs", typeValue: "tmpfs" },
      tty: { keyName: "tty", flag: "--tty" },
      tz: { keyName: "tz", flag: "--tz", typeValue: "string" },
      uidmap: { keyName: "uidmap", flag: "--uidmap", typeValue: "strings" },
      ulimit: { keyName: "ulimit", flag: "--ulimit", typeValue: "strings" },
      umask: { keyName: "umask", flag: "--umask", typeValue: "string" },
      unsetenv: {
        keyName: "unsetenv",
        flag: "--unsetenv",
        typeValue: "stringArray",
      },
      unsetenvAll: { keyName: "unsetenvAll", flag: "--unsetenv-all" },
      user: { keyName: "user", flag: "--user", typeValue: "string" },
      userns: { keyName: "userns", flag: "--userns", typeValue: "string" },
      uts: { keyName: "uts", flag: "--uts", typeValue: "string" },
      variant: { keyName: "variant", flag: "--variant", typeValue: "VARIANT" },
      volume: { keyName: "volume", flag: "--volume", typeValue: "stringArray" },
      volumesFrom: {
        keyName: "volumesFrom",
        flag: "--volumes-from",
        typeValue: "stringArray",
      },
      workdir: { keyName: "workdir", flag: "--workdir", typeValue: "string" },
    },
  };

  type Options = {
    addHost?: string[]; // strings
    annotation?: string[]; // stringArray
    arch?: unknown; // ARCH
    attach?: string[]; // strings
    authfile?: string; // string
    blkioWeight?: string; // string
    blkioWeightDevice?: unknown; // DEVICE_NAME:WEIGHT
    capAdd?: string[]; // strings
    capDrop?: string[]; // strings
    cgroupConf?: string[]; // strings
    cgroupParent?: string; // string
    cgroupns?: string; // string
    cgroups?: string; // string
    chrootdirs?: string[]; // stringArray
    cidfile?: string; // string
    cpuPeriod?: number; // uint
    cpuQuota?: number; // int
    cpuRtPeriod?: number; // uint
    cpuRtRuntime?: number; // int
    cpuShares?: number; // uint
    cpus?: number; // float
    cpusetCpus?: string; // string
    cpusetMems?: string; // string
    device?: string[]; // stringArray
    deviceCgroupRule?: string[]; // strings
    deviceReadBps?: string[]; // stringArray
    deviceReadIops?: string[]; // stringArray
    deviceWriteBps?: string[]; // stringArray
    deviceWriteIops?: string[]; // stringArray
    disableContentTrust?: boolean; // [null]
    dns?: string[]; // strings
    dnsOption?: string[]; // strings
    dnsSearch?: string[]; // strings
    entrypoint?: string; // string
    env?: string[]; // stringArray
    envFile?: string[]; // stringArray
    envMerge?: string[]; // stringArray
    expose?: string[]; // strings
    gidmap?: string[]; // strings
    gpus?: string[]; // strings
    groupAdd?: string[]; // strings
    groupEntry?: string; // string
    healthCmd?: string; // string
    healthInterval?: string; // string
    healthOnFailure?: string; // string
    healthRetries?: number; // uint
    healthStartPeriod?: string; // string
    healthStartupCmd?: string; // string
    healthStartupInterval?: string; // string
    healthStartupRetries?: number; // uint
    healthStartupSuccess?: number; // uint
    healthStartupTimeout?: string; // string
    healthTimeout?: string; // string
    hostname?: string; // string
    hostuser?: string[]; // strings
    httpProxy?: boolean; // [null]
    imageVolume?: string; // string
    init?: boolean; // [null]
    initCtr?: string; // string
    initPath?: string; // string
    interactive?: boolean; // [null]
    ip?: string; // string
    ip6?: string; // string
    ipc?: string; // string
    label?: string[]; // stringArray
    labelFile?: string[]; // stringArray
    logDriver?: string; // string
    logOpt?: string[]; // stringArray
    macAddress?: string; // string
    memory?: number; // <number>[<unit>]
    memoryReservation?: number; // <number>[<unit>]
    memorySwap?: string; // string
    memorySwappiness?: number; // int
    mount?: string[]; // stringArray
    name?: string; // string
    network?: string[]; // stringArray
    networkAlias?: string[]; // strings
    noHealthcheck?: boolean; // [null]
    noHosts?: boolean; // [null]
    oomKillDisable?: boolean; // [null]
    oomScoreAdj?: number; // int
    os?: unknown; // OS
    passwdEntry?: string; // string
    personality?: string; // string
    pid?: string; // string
    pidsLimit?: number; // int
    platform?: string; // string
    pod?: string; // string
    podIdFile?: string; // string
    privileged?: boolean; // [null]
    publish?: string[]; // strings
    publishAll?: boolean; // [null]
    pull?: string; // string
    quiet?: boolean; // [null]
    rdtClass?: string; // string
    readOnly?: boolean; // [null]
    readOnlyTmpfs?: boolean; // [null]
    replace?: boolean; // [null]
    requires?: string[]; // strings
    restart?: string; // string
    retry?: number; // uint
    retryDelay?: string; // string
    rm?: boolean; // [null]
    rootfs?: boolean; // [null]
    sdnotify?: string; // string
    seccompPolicy?: string; // string
    secret?: string[]; // stringArray
    securityOpt?: string[]; // stringArray
    shmSize?: number; // <number>[<unit>]
    shmSizeSystemd?: number; // <number>[<unit>]
    stopSignal?: string; // string
    stopTimeout?: number; // uint
    subgidname?: string; // string
    subuidname?: string; // string
    sysctl?: string[]; // strings
    systemd?: string; // string
    timeout?: number; // uint
    tlsVerify?: boolean; // [null]
    tmpfs?: unknown; // tmpfs
    tty?: boolean; // [null]
    tz?: string; // string
    uidmap?: string[]; // strings
    ulimit?: string[]; // strings
    umask?: string; // string
    unsetenv?: string[]; // stringArray
    unsetenvAll?: boolean; // [null]
    user?: string; // string
    userns?: string; // string
    uts?: string; // string
    variant?: unknown; // VARIANT
    volume?: string[]; // stringArray
    volumesFrom?: string[]; // stringArray
    workdir?: string; // string
  };

  export type optionsArgument = {
    options?: Options;
    image: string;
    commandArg?: string;
  };

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
