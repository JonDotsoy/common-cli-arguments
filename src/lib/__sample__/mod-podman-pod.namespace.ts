export namespace modpodmanpod {
  const conf = {
    commands: {
      kill: {
        usages: ["podman pod kill [options] POD [POD...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "POD", "[POD...]"],
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
                keyword: "pod",
                literal: "POD",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "pod",
                literal: "[POD...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              pod: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "pod"],
            tsOptionsStr: "{options?: Options;pod: string[];}",
          },
        ],
        command: "podman pod kill",
        options: {
          all: { keyName: "all", flag: "--all" },
          signal: { keyName: "signal", flag: "--signal", typeValue: "string" },
        },
      },
      start: {
        usages: ["podman pod start [options] POD [POD...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "POD", "[POD...]"],
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
                keyword: "pod",
                literal: "POD",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "pod",
                literal: "[POD...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              pod: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "pod"],
            tsOptionsStr: "{options?: Options;pod: string[];}",
          },
        ],
        command: "podman pod start",
        options: {
          all: { keyName: "all", flag: "--all" },
          podIdFile: {
            keyName: "podIdFile",
            flag: "--pod-id-file",
            typeValue: "stringArray",
          },
        },
      },
      ps: {
        usages: ["podman pod ps [options]"],
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
        command: "podman pod ps",
        options: {
          ctrIds: { keyName: "ctrIds", flag: "--ctr-ids" },
          ctrNames: { keyName: "ctrNames", flag: "--ctr-names" },
          ctrStatus: { keyName: "ctrStatus", flag: "--ctr-status" },
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
          noheading: { keyName: "noheading", flag: "--noheading" },
          ns: { keyName: "ns", flag: "--ns" },
          quiet: { keyName: "quiet", flag: "--quiet" },
          sort: { keyName: "sort", flag: "--sort", typeValue: "string" },
        },
      },
      logs: {
        usages: ["podman pod logs [options] POD"],
        usageMatrix: [
          {
            argsStr: ["[options]", "POD"],
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
                keyword: "pod",
                literal: "POD",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              pod: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "pod"],
            tsOptionsStr: "{options?: Options;pod: string;}",
          },
        ],
        command: "podman pod logs",
        options: {
          color: { keyName: "color", flag: "--color" },
          container: {
            keyName: "container",
            flag: "--container",
            typeValue: "string",
          },
          follow: { keyName: "follow", flag: "--follow" },
          names: { keyName: "names", flag: "--names" },
          since: { keyName: "since", flag: "--since", typeValue: "string" },
          tail: { keyName: "tail", flag: "--tail", typeValue: "int" },
          timestamps: { keyName: "timestamps", flag: "--timestamps" },
          until: { keyName: "until", flag: "--until", typeValue: "string" },
        },
      },
      stop: {
        usages: ["podman pod stop [options] POD [POD...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "POD", "[POD...]"],
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
                keyword: "pod",
                literal: "POD",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "pod",
                literal: "[POD...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              pod: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "pod"],
            tsOptionsStr: "{options?: Options;pod: string[];}",
          },
        ],
        command: "podman pod stop",
        options: {
          all: { keyName: "all", flag: "--all" },
          podIdFile: {
            keyName: "podIdFile",
            flag: "--pod-id-file",
            typeValue: "stringArray",
          },
          time: { keyName: "time", flag: "--time", typeValue: "int" },
        },
      },
      pause: {
        usages: ["podman pod pause [options] POD [POD...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "POD", "[POD...]"],
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
                keyword: "pod",
                literal: "POD",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "pod",
                literal: "[POD...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              pod: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "pod"],
            tsOptionsStr: "{options?: Options;pod: string[];}",
          },
        ],
        command: "podman pod pause",
        options: { all: { keyName: "all", flag: "--all" } },
      },
      create: {
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
          addHost: {
            keyName: "addHost",
            flag: "--add-host",
            typeValue: "strings",
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
          device: {
            keyName: "device",
            flag: "--device",
            typeValue: "stringArray",
          },
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
          publish: {
            keyName: "publish",
            flag: "--publish",
            typeValue: "strings",
          },
          replace: { keyName: "replace", flag: "--replace" },
          restart: {
            keyName: "restart",
            flag: "--restart",
            typeValue: "string",
          },
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
        },
      },
      stats: {
        usages: ["podman pod stats [options] [POD...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "[POD...]"],
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
                keyword: "pod",
                literal: "[POD...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              pod: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "pod"],
            tsOptionsStr: "{options?: Options;pod?: string[];}",
          },
        ],
        command: "podman pod stats",
        options: {
          all: { keyName: "all", flag: "--all" },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          noReset: { keyName: "noReset", flag: "--no-reset" },
          noStream: { keyName: "noStream", flag: "--no-stream" },
        },
      },
      restart: {
        usages: ["podman pod restart [options] POD [POD...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "POD", "[POD...]"],
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
                keyword: "pod",
                literal: "POD",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "pod",
                literal: "[POD...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              pod: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "pod"],
            tsOptionsStr: "{options?: Options;pod: string[];}",
          },
        ],
        command: "podman pod restart",
        options: { all: { keyName: "all", flag: "--all" } },
      },
      prune: {
        usages: ["podman pod prune [options]"],
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
        command: "podman pod prune",
        options: { force: { keyName: "force", flag: "--force" } },
      },
      unpause: {
        usages: ["podman pod unpause [options] POD [POD...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "POD", "[POD...]"],
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
                keyword: "pod",
                literal: "POD",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "pod",
                literal: "[POD...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              pod: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "pod"],
            tsOptionsStr: "{options?: Options;pod: string[];}",
          },
        ],
        command: "podman pod unpause",
        options: { all: { keyName: "all", flag: "--all" } },
      },
      rm: {
        usages: ["podman pod rm [options] POD [POD...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "POD", "[POD...]"],
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
                keyword: "pod",
                literal: "POD",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "pod",
                literal: "[POD...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              pod: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "pod"],
            tsOptionsStr: "{options?: Options;pod: string[];}",
          },
        ],
        command: "podman pod rm",
        options: {
          all: { keyName: "all", flag: "--all" },
          force: { keyName: "force", flag: "--force" },
          podIdFile: {
            keyName: "podIdFile",
            flag: "--pod-id-file",
            typeValue: "stringArray",
          },
          time: { keyName: "time", flag: "--time", typeValue: "int" },
        },
      },
      top: {
        usages: ["podman pod top [options] POD [FORMAT-DESCRIPTORS|ARGS...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "POD", "[FORMAT-DESCRIPTORS|ARGS...]"],
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
                keyword: "pod",
                literal: "POD",
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
              pod: { kind: "string", optional: false },
              formatDescriptorsArgs: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "pod", "formatDescriptorsArgs"],
            tsOptionsStr:
              "{options?: Options;pod: string;formatDescriptorsArgs?: string[];}",
          },
        ],
        command: "podman pod top",
        options: {},
      },
      inspect: {
        usages: ["podman pod inspect [options] POD [POD...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "POD", "[POD...]"],
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
                keyword: "pod",
                literal: "POD",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "pod",
                literal: "[POD...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              pod: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "pod"],
            tsOptionsStr: "{options?: Options;pod: string[];}",
          },
        ],
        command: "podman pod inspect",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
        },
      },
      exists: {
        usages: ["podman pod exists POD"],
        usageMatrix: [
          {
            argsStr: ["POD"],
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
                keyword: "pod",
                literal: "POD",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              pod: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "pod"],
            tsOptionsStr: "{options?: Options;pod: string;}",
          },
        ],
        command: "podman pod exists",
        options: {},
      },
      clone: {
        usages: ["podman pod clone [options] POD NAME"],
        usageMatrix: [
          {
            argsStr: ["[options]", "POD", "NAME"],
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
                keyword: "pod",
                literal: "POD",
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
              pod: { kind: "string", optional: false },
              name: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "pod", "name"],
            tsOptionsStr: "{options?: Options;pod: string;name: string;}",
          },
        ],
        command: "podman pod clone",
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
          destroy: { keyName: "destroy", flag: "--destroy" },
          device: {
            keyName: "device",
            flag: "--device",
            typeValue: "stringArray",
          },
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
          gidmap: { keyName: "gidmap", flag: "--gidmap", typeValue: "strings" },
          gpus: { keyName: "gpus", flag: "--gpus", typeValue: "strings" },
          hostname: {
            keyName: "hostname",
            flag: "--hostname",
            typeValue: "string",
          },
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
          infraName: {
            keyName: "infraName",
            flag: "--infra-name",
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
          pid: { keyName: "pid", flag: "--pid", typeValue: "string" },
          restart: {
            keyName: "restart",
            flag: "--restart",
            typeValue: "string",
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
          start: { keyName: "start", flag: "--start" },
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
        },
      },
    },
    usages: ["podman pod [command]"],
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
    command: "podman pod",
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
