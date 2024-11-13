export namespace modPodmanContainer {
  const conf = {
    commands: {
      unpause: {
        usages: ["podman container unpause [options] CONTAINER [CONTAINER...]"],
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
        command: "podman container unpause",
        options: {
          all: { keyName: "all", flag: "--all" },
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
        },
      },
      stop: {
        usages: ["podman container stop [options] CONTAINER [CONTAINER...]"],
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
        command: "podman container stop",
        options: {
          all: { keyName: "all", flag: "--all" },
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
          time: { keyName: "time", flag: "--time", typeValue: "int" },
        },
      },
      top: {
        usages: [
          "podman container top [options] CONTAINER [FORMAT-DESCRIPTORS|ARGS...]",
        ],
        usageMatrix: [
          {
            argsStr: ["[options]", "CONTAINER", "[FORMAT-DESCRIPTORS|ARGS...]"],
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
                keyword: "formatDescriptorsArgs",
                literal: "[FORMAT-DESCRIPTORS|ARGS...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              container: { kind: "string", optional: false },
              formatDescriptorsArgs: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "container", "formatDescriptorsArgs"],
            tsOptionsStr:
              "{options?: Options;container: string;formatDescriptorsArgs?: string[];}",
          },
        ],
        command: "podman container top",
        options: {},
      },
      inspect: {
        usages: ["podman container inspect [options] CONTAINER [CONTAINER...]"],
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
        command: "podman container inspect",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          size: { keyName: "size", flag: "--size" },
        },
      },
      update: {
        usages: ["podman container update [options] CONTAINER"],
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
        command: "podman container update",
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
          restart: {
            keyName: "restart",
            flag: "--restart",
            typeValue: "string",
          },
        },
      },
      checkpoint: {
        usages: [
          "podman container checkpoint [options] CONTAINER [CONTAINER...]",
        ],
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
          tcpEstablished: {
            keyName: "tcpEstablished",
            flag: "--tcp-established",
          },
          withPrevious: { keyName: "withPrevious", flag: "--with-previous" },
        },
      },
      clone: {
        usages: ["podman container clone [options] CONTAINER NAME IMAGE"],
        usageMatrix: [
          {
            argsStr: ["[options]", "CONTAINER", "NAME", "IMAGE"],
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
                keyword: "name",
                literal: "NAME",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
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
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              container: { kind: "string", optional: false },
              name: { kind: "string", optional: false },
              image: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "container", "name", "image"],
            tsOptionsStr:
              "{options?: Options;container: string;name: string;image: string;}",
          },
        ],
        command: "podman container clone",
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
          destroy: { keyName: "destroy", flag: "--destroy" },
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
          force: { keyName: "force", flag: "--force" },
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
          name: { keyName: "name", flag: "--name", typeValue: "string" },
          pod: { keyName: "pod", flag: "--pod", typeValue: "string" },
          run: { keyName: "run", flag: "--run" },
        },
      },
      cp: {
        usages: [
          "podman container cp [options] [CONTAINER:]SRC_PATH [CONTAINER:]DEST_PATH",
        ],
        usageMatrix: [
          {
            argsStr: [
              "[options]",
              "[CONTAINER:]SRC_PATH",
              "[CONTAINER:]DEST_PATH",
            ],
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
                keyword: "containerSrcPath",
                literal: "[CONTAINER:]SRC_PATH",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "containerDestPath",
                literal: "[CONTAINER:]DEST_PATH",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              containerSrcPath: { kind: "string", optional: false },
              containerDestPath: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "containerSrcPath", "containerDestPath"],
            tsOptionsStr:
              "{options?: Options;containerSrcPath: string;containerDestPath: string;}",
          },
        ],
        command: "podman container cp",
        options: {
          archive: { keyName: "archive", flag: "--archive" },
          overwrite: { keyName: "overwrite", flag: "--overwrite" },
        },
      },
      create: {
        usages: ["podman container create [options] IMAGE [COMMAND [ARG...]]"],
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
            tsOptionsStr:
              "{options?: Options;image: string;commandArg?: string;}",
          },
        ],
        command: "podman container create",
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
          initCtr: {
            keyName: "initCtr",
            flag: "--init-ctr",
            typeValue: "string",
          },
          initPath: {
            keyName: "initPath",
            flag: "--init-path",
            typeValue: "string",
          },
          interactive: { keyName: "interactive", flag: "--interactive" },
          ip: { keyName: "ip", flag: "--ip", typeValue: "string" },
          ip6: { keyName: "ip6", flag: "--ip6", typeValue: "string" },
          ipc: { keyName: "ipc", flag: "--ipc", typeValue: "string" },
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
          oomKillDisable: {
            keyName: "oomKillDisable",
            flag: "--oom-kill-disable",
          },
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
          publish: {
            keyName: "publish",
            flag: "--publish",
            typeValue: "strings",
          },
          publishAll: { keyName: "publishAll", flag: "--publish-all" },
          pull: { keyName: "pull", flag: "--pull", typeValue: "string" },
          quiet: { keyName: "quiet", flag: "--quiet" },
          rdtClass: {
            keyName: "rdtClass",
            flag: "--rdt-class",
            typeValue: "string",
          },
          readOnly: { keyName: "readOnly", flag: "--read-only" },
          readOnlyTmpfs: {
            keyName: "readOnlyTmpfs",
            flag: "--read-only-tmpfs",
          },
          replace: { keyName: "replace", flag: "--replace" },
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
          systemd: {
            keyName: "systemd",
            flag: "--systemd",
            typeValue: "string",
          },
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
      },
      port: {
        usages: ["podman container port [options] CONTAINER [PORT]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "CONTAINER", "[PORT]"],
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
                keyword: "port",
                literal: "[PORT]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              container: { kind: "string", optional: false },
              port: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "container", "port"],
            tsOptionsStr:
              "{options?: Options;container: string;port?: string;}",
          },
        ],
        command: "podman container port",
        options: { all: { keyName: "all", flag: "--all" } },
      },
      diff: {
        usages: ["podman container diff [options] CONTAINER [CONTAINER]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "CONTAINER", "[CONTAINER]"],
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
                literal: "[CONTAINER]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
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
        command: "podman container diff",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
        },
      },
      logs: {
        usages: ["podman container logs [options] CONTAINER"],
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
        command: "podman container logs",
        options: {
          color: { keyName: "color", flag: "--color" },
          follow: { keyName: "follow", flag: "--follow" },
          names: { keyName: "names", flag: "--names" },
          since: { keyName: "since", flag: "--since", typeValue: "string" },
          tail: { keyName: "tail", flag: "--tail", typeValue: "int" },
          timestamps: { keyName: "timestamps", flag: "--timestamps" },
          until: { keyName: "until", flag: "--until", typeValue: "string" },
        },
      },
      rename: {
        usages: ["podman container rename CONTAINER NAME"],
        usageMatrix: [
          {
            argsStr: ["CONTAINER", "NAME"],
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
                keyword: "container",
                literal: "CONTAINER",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
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
              container: { kind: "string", optional: false },
              name: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "container", "name"],
            tsOptionsStr: "{options?: Options;container: string;name: string;}",
          },
        ],
        command: "podman container rename",
        options: {},
      },
      prune: {
        usages: ["podman container prune [options]"],
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
        command: "podman container prune",
        options: {
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
          force: { keyName: "force", flag: "--force" },
        },
      },
      run: {
        usages: ["podman container run [options] IMAGE [COMMAND [ARG...]]"],
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
            tsOptionsStr:
              "{options?: Options;image: string;commandArg?: string;}",
          },
        ],
        command: "podman container run",
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
          detach: { keyName: "detach", flag: "--detach" },
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
          initPath: {
            keyName: "initPath",
            flag: "--init-path",
            typeValue: "string",
          },
          interactive: { keyName: "interactive", flag: "--interactive" },
          ip: { keyName: "ip", flag: "--ip", typeValue: "string" },
          ip6: { keyName: "ip6", flag: "--ip6", typeValue: "string" },
          ipc: { keyName: "ipc", flag: "--ipc", typeValue: "string" },
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
          oomKillDisable: {
            keyName: "oomKillDisable",
            flag: "--oom-kill-disable",
          },
          oomScoreAdj: {
            keyName: "oomScoreAdj",
            flag: "--oom-score-adj",
            typeValue: "int",
          },
          os: { keyName: "os", flag: "--os", typeValue: "OS" },
          passwd: { keyName: "passwd", flag: "--passwd" },
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
          publish: {
            keyName: "publish",
            flag: "--publish",
            typeValue: "strings",
          },
          publishAll: { keyName: "publishAll", flag: "--publish-all" },
          pull: { keyName: "pull", flag: "--pull", typeValue: "string" },
          quiet: { keyName: "quiet", flag: "--quiet" },
          rdtClass: {
            keyName: "rdtClass",
            flag: "--rdt-class",
            typeValue: "string",
          },
          readOnly: { keyName: "readOnly", flag: "--read-only" },
          readOnlyTmpfs: {
            keyName: "readOnlyTmpfs",
            flag: "--read-only-tmpfs",
          },
          replace: { keyName: "replace", flag: "--replace" },
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
          retry: { keyName: "retry", flag: "--retry", typeValue: "uint" },
          retryDelay: {
            keyName: "retryDelay",
            flag: "--retry-delay",
            typeValue: "string",
          },
          rm: { keyName: "rm", flag: "--rm" },
          rmi: { keyName: "rmi", flag: "--rmi" },
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
          sigProxy: { keyName: "sigProxy", flag: "--sig-proxy" },
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
          systemd: {
            keyName: "systemd",
            flag: "--systemd",
            typeValue: "string",
          },
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
      },
      rm: {
        usages: ["podman container rm [options] CONTAINER [CONTAINER...]"],
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
        command: "podman container rm",
        options: {
          all: { keyName: "all", flag: "--all" },
          cidfile: {
            keyName: "cidfile",
            flag: "--cidfile",
            typeValue: "stringArray",
          },
          depend: { keyName: "depend", flag: "--depend" },
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
          force: { keyName: "force", flag: "--force" },
          ignore: { keyName: "ignore", flag: "--ignore" },
          time: { keyName: "time", flag: "--time", typeValue: "int" },
          volumes: { keyName: "volumes", flag: "--volumes" },
        },
      },
      init: {
        usages: ["podman container init [options] CONTAINER [CONTAINER...]"],
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
        command: "podman container init",
        options: { all: { keyName: "all", flag: "--all" } },
      },
      kill: {
        usages: ["podman container kill [options] CONTAINER [CONTAINER...]"],
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
        command: "podman container kill",
        options: {
          all: { keyName: "all", flag: "--all" },
          cidfile: {
            keyName: "cidfile",
            flag: "--cidfile",
            typeValue: "stringArray",
          },
          signal: { keyName: "signal", flag: "--signal", typeValue: "string" },
        },
      },
      pause: {
        usages: ["podman container pause [options] CONTAINER [CONTAINER...]"],
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
        command: "podman container pause",
        options: {
          all: { keyName: "all", flag: "--all" },
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
        },
      },
      wait: {
        usages: ["podman container wait [options] CONTAINER [CONTAINER...]"],
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
        command: "podman container wait",
        options: {
          condition: {
            keyName: "condition",
            flag: "--condition",
            typeValue: "strings",
          },
          ignore: { keyName: "ignore", flag: "--ignore" },
          interval: {
            keyName: "interval",
            flag: "--interval",
            typeValue: "string",
          },
        },
      },
      export: {
        usages: ["podman container export [options] CONTAINER"],
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
        command: "podman container export",
        options: {
          output: { keyName: "output", flag: "--output", typeValue: "string" },
        },
      },
      list: {
        usages: ["podman container list [options]"],
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
        command: "podman container list",
        options: {
          all: { keyName: "all", flag: "--all" },
          external: { keyName: "external", flag: "--external" },
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          last: { keyName: "last", flag: "--last", typeValue: "int" },
          noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
          noheading: { keyName: "noheading", flag: "--noheading" },
          ns: { keyName: "ns", flag: "--ns" },
          pod: { keyName: "pod", flag: "--pod" },
          quiet: { keyName: "quiet", flag: "--quiet" },
          size: { keyName: "size", flag: "--size" },
          sort: { keyName: "sort", flag: "--sort", typeValue: "choice" },
          sync: { keyName: "sync", flag: "--sync" },
          watch: { keyName: "watch", flag: "--watch", typeValue: "uint" },
        },
      },
      commit: {
        usages: ["podman container commit [options] CONTAINER [IMAGE]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "CONTAINER", "[IMAGE]"],
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
                keyword: "image",
                literal: "[IMAGE]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              container: { kind: "string", optional: false },
              image: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "container", "image"],
            tsOptionsStr:
              "{options?: Options;container: string;image?: string;}",
          },
        ],
        command: "podman container commit",
        options: {
          author: { keyName: "author", flag: "--author", typeValue: "string" },
          change: {
            keyName: "change",
            flag: "--change",
            typeValue: "stringArray",
          },
          config: { keyName: "config", flag: "--config", typeValue: "file" },
          format: { keyName: "format", flag: "--format", typeValue: "Format" },
          iidfile: { keyName: "iidfile", flag: "--iidfile", typeValue: "file" },
          includeVolumes: {
            keyName: "includeVolumes",
            flag: "--include-volumes",
          },
          message: {
            keyName: "message",
            flag: "--message",
            typeValue: "string",
          },
          pause: { keyName: "pause", flag: "--pause" },
          quiet: { keyName: "quiet", flag: "--quiet" },
          squash: { keyName: "squash", flag: "--squash" },
        },
      },
      attach: {
        usages: ["podman container attach [options] CONTAINER"],
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
        command: "podman container attach",
        options: {
          detachKeys: {
            keyName: "detachKeys",
            flag: "--detach-keys",
            typeValue: "[a-Z]",
          },
          noStdin: { keyName: "noStdin", flag: "--no-stdin" },
          sigProxy: { keyName: "sigProxy", flag: "--sig-proxy" },
        },
      },
      exec: {
        usages: [
          "podman container exec [options] CONTAINER [COMMAND [ARG...]]",
        ],
        usageMatrix: [
          {
            argsStr: ["[options]", "CONTAINER", "[COMMAND [ARG...]]"],
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
              container: { kind: "string", optional: false },
              commandArg: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "container", "commandArg"],
            tsOptionsStr:
              "{options?: Options;container: string;commandArg?: string;}",
          },
        ],
        command: "podman container exec",
        options: {
          detach: { keyName: "detach", flag: "--detach" },
          detachKeys: {
            keyName: "detachKeys",
            flag: "--detach-keys",
            typeValue: "string",
          },
          env: { keyName: "env", flag: "--env", typeValue: "stringArray" },
          envFile: {
            keyName: "envFile",
            flag: "--env-file",
            typeValue: "stringArray",
          },
          interactive: { keyName: "interactive", flag: "--interactive" },
          preserveFd: {
            keyName: "preserveFd",
            flag: "--preserve-fd",
            typeValue: "uints",
          },
          privileged: { keyName: "privileged", flag: "--privileged" },
          tty: { keyName: "tty", flag: "--tty" },
          user: { keyName: "user", flag: "--user", typeValue: "string" },
          workdir: {
            keyName: "workdir",
            flag: "--workdir",
            typeValue: "string",
          },
        },
      },
      stats: {
        usages: ["podman container stats [options] [CONTAINER...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "[CONTAINER...]"],
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
                literal: "[CONTAINER...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              container: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "container"],
            tsOptionsStr: "{options?: Options;container?: string[];}",
          },
        ],
        command: "podman container stats",
        options: {
          all: { keyName: "all", flag: "--all" },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          interval: {
            keyName: "interval",
            flag: "--interval",
            typeValue: "int",
          },
          noReset: { keyName: "noReset", flag: "--no-reset" },
          noStream: { keyName: "noStream", flag: "--no-stream" },
          noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
        },
      },
      ps: {
        usages: ["podman container ps [options]"],
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
        command: "podman container ps",
        options: {
          all: { keyName: "all", flag: "--all" },
          external: { keyName: "external", flag: "--external" },
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          last: { keyName: "last", flag: "--last", typeValue: "int" },
          noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
          noheading: { keyName: "noheading", flag: "--noheading" },
          ns: { keyName: "ns", flag: "--ns" },
          pod: { keyName: "pod", flag: "--pod" },
          quiet: { keyName: "quiet", flag: "--quiet" },
          size: { keyName: "size", flag: "--size" },
          sort: { keyName: "sort", flag: "--sort", typeValue: "choice" },
          sync: { keyName: "sync", flag: "--sync" },
          watch: { keyName: "watch", flag: "--watch", typeValue: "uint" },
        },
      },
      restart: {
        usages: ["podman container restart [options] CONTAINER [CONTAINER...]"],
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
        command: "podman container restart",
        options: {
          all: { keyName: "all", flag: "--all" },
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
          running: { keyName: "running", flag: "--running" },
          time: { keyName: "time", flag: "--time", typeValue: "int" },
        },
      },
      restore: {
        usages: [
          "podman container restore [options] CONTAINER|IMAGE [CONTAINER|IMAGE...]",
        ],
        usageMatrix: [
          {
            argsStr: ["[options]", "CONTAINER|IMAGE", "[CONTAINER|IMAGE...]"],
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
                keyword: "containerImage",
                literal: "CONTAINER|IMAGE",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "containerImage",
                literal: "[CONTAINER|IMAGE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              containerImage: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "containerImage"],
            tsOptionsStr: "{options?: Options;containerImage: string[];}",
          },
        ],
        command: "podman container restore",
        options: {
          all: { keyName: "all", flag: "--all" },
          fileLocks: { keyName: "fileLocks", flag: "--file-locks" },
          ignoreRootfs: { keyName: "ignoreRootfs", flag: "--ignore-rootfs" },
          ignoreStaticIp: {
            keyName: "ignoreStaticIp",
            flag: "--ignore-static-ip",
          },
          ignoreStaticMac: {
            keyName: "ignoreStaticMac",
            flag: "--ignore-static-mac",
          },
          ignoreVolumes: { keyName: "ignoreVolumes", flag: "--ignore-volumes" },
          import: { keyName: "import", flag: "--import", typeValue: "string" },
          importPrevious: {
            keyName: "importPrevious",
            flag: "--import-previous",
            typeValue: "string",
          },
          keep: { keyName: "keep", flag: "--keep" },
          name: { keyName: "name", flag: "--name", typeValue: "string" },
          pod: { keyName: "pod", flag: "--pod", typeValue: "string" },
          printStats: { keyName: "printStats", flag: "--print-stats" },
          publish: {
            keyName: "publish",
            flag: "--publish",
            typeValue: "strings",
          },
          tcpEstablished: {
            keyName: "tcpEstablished",
            flag: "--tcp-established",
          },
        },
      },
      exists: {
        usages: ["podman container exists [options] CONTAINER"],
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
        command: "podman container exists",
        options: { external: { keyName: "external", flag: "--external" } },
      },
      start: {
        usages: ["podman container start [options] CONTAINER [CONTAINER...]"],
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
        command: "podman container start",
        options: {
          all: { keyName: "all", flag: "--all" },
          attach: { keyName: "attach", flag: "--attach" },
          detachKeys: {
            keyName: "detachKeys",
            flag: "--detach-keys",
            typeValue: "[a-Z]",
          },
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
          interactive: { keyName: "interactive", flag: "--interactive" },
        },
      },
    },
    usages: ["podman container [command]"],
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
    command: "podman container",
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
