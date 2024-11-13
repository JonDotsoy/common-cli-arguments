export const podmanRunCommandSpec = {
  usages: ["podman run [options] IMAGE [COMMAND [ARG...]]"],
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
        options: {
          kind: "Options",
          optional: true,
        },
        image: {
          kind: "string",
          optional: false,
        },
        commandArg: {
          kind: "string",
          optional: true,
        },
      },
      tsOptionsSort: ["options", "image", "commandArg"],
      tsOptionsStr: "{options?: Options;image: string;commandArg?: string;}",
    },
  ],
  command: "podman run",
  options: {
    addHost: {
      keyName: "addHost",
      flag: "--add-host",
      typeValue: "strings",
    },
    annotation: {
      keyName: "annotation",
      flag: "--annotation",
      typeValue: "stringArray",
    },
    arch: {
      keyName: "arch",
      flag: "--arch",
      typeValue: "ARCH",
    },
    attach: {
      keyName: "attach",
      flag: "--attach",
      typeValue: "strings",
    },
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
    capAdd: {
      keyName: "capAdd",
      flag: "--cap-add",
      typeValue: "strings",
    },
    capDrop: {
      keyName: "capDrop",
      flag: "--cap-drop",
      typeValue: "strings",
    },
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
    cgroups: {
      keyName: "cgroups",
      flag: "--cgroups",
      typeValue: "string",
    },
    chrootdirs: {
      keyName: "chrootdirs",
      flag: "--chrootdirs",
      typeValue: "stringArray",
    },
    cidfile: {
      keyName: "cidfile",
      flag: "--cidfile",
      typeValue: "string",
    },
    cpuPeriod: {
      keyName: "cpuPeriod",
      flag: "--cpu-period",
      typeValue: "uint",
    },
    cpuQuota: {
      keyName: "cpuQuota",
      flag: "--cpu-quota",
      typeValue: "int",
    },
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
    cpus: {
      keyName: "cpus",
      flag: "--cpus",
      typeValue: "float",
    },
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
    detach: {
      keyName: "detach",
      flag: "--detach",
    },
    detachKeys: {
      keyName: "detachKeys",
      flag: "--detach-keys",
      typeValue: "[a-Z]",
    },
    device: {
      keyName: "device",
      flag: "--device",
      typeValue: "stringArray",
    },
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
    dns: {
      keyName: "dns",
      flag: "--dns",
      typeValue: "strings",
    },
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
    env: {
      keyName: "env",
      flag: "--env",
      typeValue: "stringArray",
    },
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
    expose: {
      keyName: "expose",
      flag: "--expose",
      typeValue: "strings",
    },
    gidmap: {
      keyName: "gidmap",
      flag: "--gidmap",
      typeValue: "strings",
    },
    gpus: {
      keyName: "gpus",
      flag: "--gpus",
      typeValue: "strings",
    },
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
    httpProxy: {
      keyName: "httpProxy",
      flag: "--http-proxy",
    },
    imageVolume: {
      keyName: "imageVolume",
      flag: "--image-volume",
      typeValue: "string",
    },
    init: {
      keyName: "init",
      flag: "--init",
    },
    initPath: {
      keyName: "initPath",
      flag: "--init-path",
      typeValue: "string",
    },
    interactive: {
      keyName: "interactive",
      flag: "--interactive",
    },
    ip: {
      keyName: "ip",
      flag: "--ip",
      typeValue: "string",
    },
    ip6: {
      keyName: "ip6",
      flag: "--ip6",
      typeValue: "string",
    },
    ipc: {
      keyName: "ipc",
      flag: "--ipc",
      typeValue: "string",
    },
    label: {
      keyName: "label",
      flag: "--label",
      typeValue: "stringArray",
    },
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
    mount: {
      keyName: "mount",
      flag: "--mount",
      typeValue: "stringArray",
    },
    name: {
      keyName: "name",
      flag: "--name",
      typeValue: "string",
    },
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
    noHealthcheck: {
      keyName: "noHealthcheck",
      flag: "--no-healthcheck",
    },
    noHosts: {
      keyName: "noHosts",
      flag: "--no-hosts",
    },
    oomKillDisable: {
      keyName: "oomKillDisable",
      flag: "--oom-kill-disable",
    },
    oomScoreAdj: {
      keyName: "oomScoreAdj",
      flag: "--oom-score-adj",
      typeValue: "int",
    },
    os: {
      keyName: "os",
      flag: "--os",
      typeValue: "OS",
    },
    passwd: {
      keyName: "passwd",
      flag: "--passwd",
    },
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
    pid: {
      keyName: "pid",
      flag: "--pid",
      typeValue: "string",
    },
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
    pod: {
      keyName: "pod",
      flag: "--pod",
      typeValue: "string",
    },
    podIdFile: {
      keyName: "podIdFile",
      flag: "--pod-id-file",
      typeValue: "string",
    },
    privileged: {
      keyName: "privileged",
      flag: "--privileged",
    },
    publish: {
      keyName: "publish",
      flag: "--publish",
      typeValue: "strings",
    },
    publishAll: {
      keyName: "publishAll",
      flag: "--publish-all",
    },
    pull: {
      keyName: "pull",
      flag: "--pull",
      typeValue: "string",
    },
    quiet: {
      keyName: "quiet",
      flag: "--quiet",
    },
    rdtClass: {
      keyName: "rdtClass",
      flag: "--rdt-class",
      typeValue: "string",
    },
    readOnly: {
      keyName: "readOnly",
      flag: "--read-only",
    },
    readOnlyTmpfs: {
      keyName: "readOnlyTmpfs",
      flag: "--read-only-tmpfs",
    },
    replace: {
      keyName: "replace",
      flag: "--replace",
    },
    requires: {
      keyName: "requires",
      flag: "--requires",
      typeValue: "strings",
    },
    restart: {
      keyName: "restart",
      flag: "--restart",
      typeValue: "string",
    },
    retry: {
      keyName: "retry",
      flag: "--retry",
      typeValue: "uint",
    },
    retryDelay: {
      keyName: "retryDelay",
      flag: "--retry-delay",
      typeValue: "string",
    },
    rm: {
      keyName: "rm",
      flag: "--rm",
    },
    rmi: {
      keyName: "rmi",
      flag: "--rmi",
    },
    rootfs: {
      keyName: "rootfs",
      flag: "--rootfs",
    },
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
    secret: {
      keyName: "secret",
      flag: "--secret",
      typeValue: "stringArray",
    },
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
    sigProxy: {
      keyName: "sigProxy",
      flag: "--sig-proxy",
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
    sysctl: {
      keyName: "sysctl",
      flag: "--sysctl",
      typeValue: "strings",
    },
    systemd: {
      keyName: "systemd",
      flag: "--systemd",
      typeValue: "string",
    },
    timeout: {
      keyName: "timeout",
      flag: "--timeout",
      typeValue: "uint",
    },
    tlsVerify: {
      keyName: "tlsVerify",
      flag: "--tls-verify",
    },
    tmpfs: {
      keyName: "tmpfs",
      flag: "--tmpfs",
      typeValue: "tmpfs",
    },
    tty: {
      keyName: "tty",
      flag: "--tty",
    },
    tz: {
      keyName: "tz",
      flag: "--tz",
      typeValue: "string",
    },
    uidmap: {
      keyName: "uidmap",
      flag: "--uidmap",
      typeValue: "strings",
    },
    ulimit: {
      keyName: "ulimit",
      flag: "--ulimit",
      typeValue: "strings",
    },
    umask: {
      keyName: "umask",
      flag: "--umask",
      typeValue: "string",
    },
    unsetenv: {
      keyName: "unsetenv",
      flag: "--unsetenv",
      typeValue: "stringArray",
    },
    unsetenvAll: {
      keyName: "unsetenvAll",
      flag: "--unsetenv-all",
    },
    user: {
      keyName: "user",
      flag: "--user",
      typeValue: "string",
    },
    userns: {
      keyName: "userns",
      flag: "--userns",
      typeValue: "string",
    },
    uts: {
      keyName: "uts",
      flag: "--uts",
      typeValue: "string",
    },
    variant: {
      keyName: "variant",
      flag: "--variant",
      typeValue: "VARIANT",
    },
    volume: {
      keyName: "volume",
      flag: "--volume",
      typeValue: "stringArray",
    },
    volumesFrom: {
      keyName: "volumesFrom",
      flag: "--volumes-from",
      typeValue: "stringArray",
    },
    workdir: {
      keyName: "workdir",
      flag: "--workdir",
      typeValue: "string",
    },
  },
};
