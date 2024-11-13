export namespace modPodmanFarm {
  const conf = {
    usages: ["podman farm [command]"],
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
    command: "podman farm",
    options: {},
    commands: {
      remove: {
        usages: ["podman farm remove [options] [FARM...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "[FARM...]"],
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
                keyword: "farm",
                literal: "[FARM...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              farm: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "farm"],
            tsOptionsStr: "{options?: Options;farm?: string[];}",
          },
        ],
        command: "podman farm remove",
        options: { all: { keyName: "all", flag: "--all" } },
      },
      update: {
        usages: ["podman farm update [options] FARM"],
        usageMatrix: [
          {
            argsStr: ["[options]", "FARM"],
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
                keyword: "farm",
                literal: "FARM",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              farm: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "farm"],
            tsOptionsStr: "{options?: Options;farm: string;}",
          },
        ],
        command: "podman farm update",
        options: {
          add: { keyName: "add", flag: "--add", typeValue: "strings" },
          default: { keyName: "default", flag: "--default" },
          remove: { keyName: "remove", flag: "--remove", typeValue: "strings" },
        },
      },
      create: {
        usages: ["podman farm create NAME [CONNECTIONS...]"],
        usageMatrix: [
          {
            argsStr: ["NAME", "[CONNECTIONS...]"],
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
                keyword: "name",
                literal: "NAME",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "connections",
                literal: "[CONNECTIONS...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              name: { kind: "string", optional: false },
              connections: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "name", "connections"],
            tsOptionsStr:
              "{options?: Options;name: string;connections?: string[];}",
          },
        ],
        command: "podman farm create",
        options: {},
      },
      list: {
        usages: ["podman farm list [options]"],
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
        command: "podman farm list",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
        },
      },
      build: {
        usages: ["podman farm build [options] [CONTEXT]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "[CONTEXT]"],
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
                keyword: "context",
                literal: "[CONTEXT]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              context: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "context"],
            tsOptionsStr: "{options?: Options;context?: string;}",
          },
        ],
        command: "podman farm build",
        options: {
          addHost: {
            keyName: "addHost",
            flag: "--add-host",
            typeValue: "host:ip",
          },
          annotation: {
            keyName: "annotation",
            flag: "--annotation",
            typeValue: "stringArray",
          },
          authfile: {
            keyName: "authfile",
            flag: "--authfile",
            typeValue: "string",
          },
          buildArg: {
            keyName: "buildArg",
            flag: "--build-arg",
            typeValue: "argument=value",
          },
          buildArgFile: {
            keyName: "buildArgFile",
            flag: "--build-arg-file",
            typeValue: "argfile.conf",
          },
          buildContext: {
            keyName: "buildContext",
            flag: "--build-context",
            typeValue: "argument=value",
          },
          cacheFrom: {
            keyName: "cacheFrom",
            flag: "--cache-from",
            typeValue: "stringArray",
          },
          cacheTo: {
            keyName: "cacheTo",
            flag: "--cache-to",
            typeValue: "stringArray",
          },
          cacheTtl: {
            keyName: "cacheTtl",
            flag: "--cache-ttl",
            typeValue: "string",
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
          certDir: {
            keyName: "certDir",
            flag: "--cert-dir",
            typeValue: "string",
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
          cleanup: { keyName: "cleanup", flag: "--cleanup" },
          compatVolumes: { keyName: "compatVolumes", flag: "--compat-volumes" },
          cppFlag: {
            keyName: "cppFlag",
            flag: "--cpp-flag",
            typeValue: "stringArray",
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
          cpuShares: {
            keyName: "cpuShares",
            flag: "--cpu-shares",
            typeValue: "uint",
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
          creds: {
            keyName: "creds",
            flag: "--creds",
            typeValue: "[username[:password]]",
          },
          decryptionKey: {
            keyName: "decryptionKey",
            flag: "--decryption-key",
            typeValue: "strings",
          },
          device: {
            keyName: "device",
            flag: "--device",
            typeValue: "stringArray",
          },
          disableCompression: {
            keyName: "disableCompression",
            flag: "--disable-compression",
          },
          dns: { keyName: "dns", flag: "--dns", typeValue: "/etc/resolv.conf" },
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
          env: { keyName: "env", flag: "--env", typeValue: "stringArray" },
          farm: { keyName: "farm", flag: "--farm", typeValue: "string" },
          file: { keyName: "file", flag: "--file", typeValue: "pathname" },
          forceRm: { keyName: "forceRm", flag: "--force-rm" },
          format: { keyName: "format", flag: "--format", typeValue: "format" },
          from: { keyName: "from", flag: "--from", typeValue: "string" },
          groupAdd: {
            keyName: "groupAdd",
            flag: "--group-add",
            typeValue: "strings",
          },
          hooksDir: {
            keyName: "hooksDir",
            flag: "--hooks-dir",
            typeValue: "stringArray",
          },
          httpProxy: { keyName: "httpProxy", flag: "--http-proxy" },
          identityLabel: { keyName: "identityLabel", flag: "--identity-label" },
          ignorefile: {
            keyName: "ignorefile",
            flag: "--ignorefile",
            typeValue: "string",
          },
          iidfile: { keyName: "iidfile", flag: "--iidfile", typeValue: "file" },
          ipc: { keyName: "ipc", flag: "--ipc", typeValue: "path" },
          isolation: {
            keyName: "isolation",
            flag: "--isolation",
            typeValue: "type",
          },
          jobs: { keyName: "jobs", flag: "--jobs", typeValue: "int" },
          label: {
            keyName: "label",
            flag: "--label",
            typeValue: "stringArray",
          },
          layerLabel: {
            keyName: "layerLabel",
            flag: "--layer-label",
            typeValue: "stringArray",
          },
          layers: { keyName: "layers", flag: "--layers" },
          local: { keyName: "local", flag: "--local" },
          logfile: { keyName: "logfile", flag: "--logfile", typeValue: "file" },
          memory: { keyName: "memory", flag: "--memory", typeValue: "string" },
          memorySwap: {
            keyName: "memorySwap",
            flag: "--memory-swap",
            typeValue: "string",
          },
          network: {
            keyName: "network",
            flag: "--network",
            typeValue: "string",
          },
          noCache: { keyName: "noCache", flag: "--no-cache" },
          noHostname: { keyName: "noHostname", flag: "--no-hostname" },
          noHosts: { keyName: "noHosts", flag: "--no-hosts" },
          omitHistory: { keyName: "omitHistory", flag: "--omit-history" },
          osFeature: {
            keyName: "osFeature",
            flag: "--os-feature",
            typeValue: "feature",
          },
          osVersion: {
            keyName: "osVersion",
            flag: "--os-version",
            typeValue: "version",
          },
          pid: { keyName: "pid", flag: "--pid", typeValue: "path" },
          platforms: {
            keyName: "platforms",
            flag: "--platforms",
            typeValue: "strings",
          },
          pull: {
            keyName: "pull",
            flag: "--pull",
            typeValue: 'string[="missing"]',
          },
          quiet: { keyName: "quiet", flag: "--quiet" },
          retry: { keyName: "retry", flag: "--retry", typeValue: "int" },
          retryDelay: {
            keyName: "retryDelay",
            flag: "--retry-delay",
            typeValue: "string",
          },
          rm: { keyName: "rm", flag: "--rm" },
          runtimeFlag: {
            keyName: "runtimeFlag",
            flag: "--runtime-flag",
            typeValue: "strings",
          },
          sbom: { keyName: "sbom", flag: "--sbom", typeValue: "preset" },
          sbomImageOutput: {
            keyName: "sbomImageOutput",
            flag: "--sbom-image-output",
            typeValue: "path",
          },
          sbomImagePurlOutput: {
            keyName: "sbomImagePurlOutput",
            flag: "--sbom-image-purl-output",
            typeValue: "path",
          },
          sbomMergeStrategy: {
            keyName: "sbomMergeStrategy",
            flag: "--sbom-merge-strategy",
            typeValue: "strategy",
          },
          sbomOutput: {
            keyName: "sbomOutput",
            flag: "--sbom-output",
            typeValue: "file",
          },
          sbomPurlOutput: {
            keyName: "sbomPurlOutput",
            flag: "--sbom-purl-output",
            typeValue: "file",
          },
          sbomScannerCommand: {
            keyName: "sbomScannerCommand",
            flag: "--sbom-scanner-command",
            typeValue: "command",
          },
          sbomScannerImage: {
            keyName: "sbomScannerImage",
            flag: "--sbom-scanner-image",
            typeValue: "image",
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
            typeValue: "<number><unit>",
          },
          skipUnusedStages: {
            keyName: "skipUnusedStages",
            flag: "--skip-unused-stages",
          },
          squash: { keyName: "squash", flag: "--squash" },
          squashAll: { keyName: "squashAll", flag: "--squash-all" },
          ssh: { keyName: "ssh", flag: "--ssh", typeValue: "stringArray" },
          tag: { keyName: "tag", flag: "--tag", typeValue: "name" },
          target: { keyName: "target", flag: "--target", typeValue: "string" },
          timestamp: {
            keyName: "timestamp",
            flag: "--timestamp",
            typeValue: "int",
          },
          tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
          ulimit: { keyName: "ulimit", flag: "--ulimit", typeValue: "strings" },
          unsetenv: {
            keyName: "unsetenv",
            flag: "--unsetenv",
            typeValue: "strings",
          },
          unsetlabel: {
            keyName: "unsetlabel",
            flag: "--unsetlabel",
            typeValue: "strings",
          },
          userns: { keyName: "userns", flag: "--userns", typeValue: "path" },
          usernsGidMap: {
            keyName: "usernsGidMap",
            flag: "--userns-gid-map",
            typeValue: "containerGID:hostGID:length",
          },
          usernsGidMapGroup: {
            keyName: "usernsGidMapGroup",
            flag: "--userns-gid-map-group",
            typeValue: "name",
          },
          usernsUidMap: {
            keyName: "usernsUidMap",
            flag: "--userns-uid-map",
            typeValue: "containerUID:hostUID:length",
          },
          usernsUidMapUser: {
            keyName: "usernsUidMapUser",
            flag: "--userns-uid-map-user",
            typeValue: "name",
          },
          uts: { keyName: "uts", flag: "--uts", typeValue: "path" },
          volume: {
            keyName: "volume",
            flag: "--volume",
            typeValue: "stringArray",
          },
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
