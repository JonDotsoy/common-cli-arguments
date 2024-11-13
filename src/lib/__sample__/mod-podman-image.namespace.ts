export namespace modpodmanimage {
  const conf = {
    commands: {
      scp: {
        usages: ["podman image scp [options] IMAGE [HOST::]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "IMAGE", "[HOST::]"],
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
                keyword: "host",
                literal: "[HOST::]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              image: { kind: "string", optional: false },
              host: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "image", "host"],
            tsOptionsStr: "{options?: Options;image: string;host?: string;}",
          },
        ],
        command: "podman image scp",
        options: { quiet: { keyName: "quiet", flag: "--quiet" } },
      },
      push: {
        usages: ["podman image push [options] IMAGE [DESTINATION]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "IMAGE", "[DESTINATION]"],
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
                keyword: "destination",
                literal: "[DESTINATION]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              image: { kind: "string", optional: false },
              destination: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "image", "destination"],
            tsOptionsStr:
              "{options?: Options;image: string;destination?: string;}",
          },
        ],
        command: "podman image push",
        options: {
          authfile: {
            keyName: "authfile",
            flag: "--authfile",
            typeValue: "string",
          },
          compressionFormat: {
            keyName: "compressionFormat",
            flag: "--compression-format",
            typeValue: "string",
          },
          compressionLevel: {
            keyName: "compressionLevel",
            flag: "--compression-level",
            typeValue: "int",
          },
          creds: {
            keyName: "creds",
            flag: "--creds",
            typeValue: "Credentials",
          },
          digestfile: {
            keyName: "digestfile",
            flag: "--digestfile",
            typeValue: "string",
          },
          disableContentTrust: {
            keyName: "disableContentTrust",
            flag: "--disable-content-trust",
          },
          forceCompression: {
            keyName: "forceCompression",
            flag: "--force-compression",
          },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          removeSignatures: {
            keyName: "removeSignatures",
            flag: "--remove-signatures",
          },
          retry: { keyName: "retry", flag: "--retry", typeValue: "uint" },
          retryDelay: {
            keyName: "retryDelay",
            flag: "--retry-delay",
            typeValue: "string",
          },
          tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
        },
      },
      diff: {
        usages: ["podman image diff [options] IMAGE [IMAGE]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "IMAGE", "[IMAGE]"],
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
              image: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "image"],
            tsOptionsStr: "{options?: Options;image: string[];}",
          },
        ],
        command: "podman image diff",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
        },
      },
      import: {
        usages: ["podman image import [options] PATH [REFERENCE]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "PATH", "[REFERENCE]"],
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
                keyword: "path",
                literal: "PATH",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "reference",
                literal: "[REFERENCE]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              path: { kind: "string", optional: false },
              reference: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "path", "reference"],
            tsOptionsStr:
              "{options?: Options;path: string;reference?: string;}",
          },
        ],
        command: "podman image import",
        options: {
          arch: { keyName: "arch", flag: "--arch", typeValue: "string" },
          change: {
            keyName: "change",
            flag: "--change",
            typeValue: "stringArray",
          },
          message: {
            keyName: "message",
            flag: "--message",
            typeValue: "string",
          },
          os: { keyName: "os", flag: "--os", typeValue: "string" },
          quiet: { keyName: "quiet", flag: "--quiet" },
          variant: {
            keyName: "variant",
            flag: "--variant",
            typeValue: "string",
          },
        },
      },
      tree: {
        usages: ["podman image tree [options] IMAGE"],
        usageMatrix: [
          {
            argsStr: ["[options]", "IMAGE"],
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
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              image: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "image"],
            tsOptionsStr: "{options?: Options;image: string;}",
          },
        ],
        command: "podman image tree",
        options: {
          whatrequires: { keyName: "whatrequires", flag: "--whatrequires" },
        },
      },
      tag: {
        usages: ["podman image tag IMAGE TARGET_NAME [TARGET_NAME...]"],
        usageMatrix: [
          {
            argsStr: ["IMAGE", "TARGET_NAME", "[TARGET_NAME...]"],
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
                keyword: "image",
                literal: "IMAGE",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "targetName",
                literal: "TARGET_NAME",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "targetName",
                literal: "[TARGET_NAME...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              image: { kind: "string", optional: false },
              targetName: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "image", "targetName"],
            tsOptionsStr:
              "{options?: Options;image: string;targetName: string[];}",
          },
        ],
        command: "podman image tag",
        options: {},
      },
      search: {
        usages: ["podman image search [options] TERM"],
        usageMatrix: [
          {
            argsStr: ["[options]", "TERM"],
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
                keyword: "term",
                literal: "TERM",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              term: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "term"],
            tsOptionsStr: "{options?: Options;term: string;}",
          },
        ],
        command: "podman image search",
        options: {
          authfile: {
            keyName: "authfile",
            flag: "--authfile",
            typeValue: "string",
          },
          compatible: { keyName: "compatible", flag: "--compatible" },
          creds: {
            keyName: "creds",
            flag: "--creds",
            typeValue: "Credentials",
          },
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          limit: { keyName: "limit", flag: "--limit", typeValue: "int" },
          listTags: { keyName: "listTags", flag: "--list-tags" },
          noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
          tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
        },
      },
      save: {
        usages: ["podman image save [options] IMAGE [IMAGE...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "IMAGE", "[IMAGE...]"],
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
                keyword: "image",
                literal: "[IMAGE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              image: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "image"],
            tsOptionsStr: "{options?: Options;image: string[];}",
          },
        ],
        command: "podman image save",
        options: {
          compress: { keyName: "compress", flag: "--compress" },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          multiImageArchive: {
            keyName: "multiImageArchive",
            flag: "--multi-image-archive",
          },
          output: { keyName: "output", flag: "--output", typeValue: "string" },
          quiet: { keyName: "quiet", flag: "--quiet" },
          uncompressed: { keyName: "uncompressed", flag: "--uncompressed" },
        },
      },
      build: {
        usages: ["podman image build [options] [CONTEXT]"],
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
        command: "podman image build",
        options: {
          addHost: {
            keyName: "addHost",
            flag: "--add-host",
            typeValue: "host:ip",
          },
          allPlatforms: { keyName: "allPlatforms", flag: "--all-platforms" },
          annotation: {
            keyName: "annotation",
            flag: "--annotation",
            typeValue: "stringArray",
          },
          arch: { keyName: "arch", flag: "--arch", typeValue: "string" },
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
          logfile: { keyName: "logfile", flag: "--logfile", typeValue: "file" },
          manifest: {
            keyName: "manifest",
            flag: "--manifest",
            typeValue: "string",
          },
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
          os: { keyName: "os", flag: "--os", typeValue: "string" },
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
          platform: {
            keyName: "platform",
            flag: "--platform",
            typeValue: "OS/ARCH[/VARIANT]",
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
          stdin: { keyName: "stdin", flag: "--stdin" },
          tag: { keyName: "tag", flag: "--tag", typeValue: "name" },
          target: { keyName: "target", flag: "--target", typeValue: "string" },
          timestamp: {
            keyName: "timestamp",
            flag: "--timestamp",
            typeValue: "int",
          },
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
          variant: {
            keyName: "variant",
            flag: "--variant",
            typeValue: "variant",
          },
          volume: {
            keyName: "volume",
            flag: "--volume",
            typeValue: "stringArray",
          },
        },
      },
      rm: {
        usages: ["podman image rm [options] IMAGE [IMAGE...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "IMAGE", "[IMAGE...]"],
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
                keyword: "image",
                literal: "[IMAGE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              image: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "image"],
            tsOptionsStr: "{options?: Options;image: string[];}",
          },
        ],
        command: "podman image rm",
        options: {
          all: { keyName: "all", flag: "--all" },
          force: { keyName: "force", flag: "--force" },
          ignore: { keyName: "ignore", flag: "--ignore" },
          noPrune: { keyName: "noPrune", flag: "--no-prune" },
        },
      },
      history: {
        usages: ["podman image history [options] IMAGE"],
        usageMatrix: [
          {
            argsStr: ["[options]", "IMAGE"],
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
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              image: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "image"],
            tsOptionsStr: "{options?: Options;image: string;}",
          },
        ],
        command: "podman image history",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          human: { keyName: "human", flag: "--human" },
          noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
          quiet: { keyName: "quiet", flag: "--quiet" },
        },
      },
      list: {
        usages: ["podman image list [options] [IMAGE]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "[IMAGE]"],
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
                literal: "[IMAGE]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              image: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "image"],
            tsOptionsStr: "{options?: Options;image?: string;}",
          },
        ],
        command: "podman image list",
        options: {
          all: { keyName: "all", flag: "--all" },
          digests: { keyName: "digests", flag: "--digests" },
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          history: { keyName: "history", flag: "--history" },
          noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
          noheading: { keyName: "noheading", flag: "--noheading" },
          quiet: { keyName: "quiet", flag: "--quiet" },
          sort: { keyName: "sort", flag: "--sort", typeValue: "string" },
        },
      },
      inspect: {
        usages: ["podman image inspect [options] IMAGE [IMAGE...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "IMAGE", "[IMAGE...]"],
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
                keyword: "image",
                literal: "[IMAGE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              image: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "image"],
            tsOptionsStr: "{options?: Options;image: string[];}",
          },
        ],
        command: "podman image inspect",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
        },
      },
      pull: {
        usages: ["podman image pull [options] IMAGE [IMAGE...]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "IMAGE", "[IMAGE...]"],
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
                keyword: "image",
                literal: "[IMAGE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              image: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "image"],
            tsOptionsStr: "{options?: Options;image: string[];}",
          },
        ],
        command: "podman image pull",
        options: {
          allTags: { keyName: "allTags", flag: "--all-tags" },
          arch: { keyName: "arch", flag: "--arch", typeValue: "ARCH" },
          authfile: {
            keyName: "authfile",
            flag: "--authfile",
            typeValue: "string",
          },
          creds: {
            keyName: "creds",
            flag: "--creds",
            typeValue: "Credentials",
          },
          disableContentTrust: {
            keyName: "disableContentTrust",
            flag: "--disable-content-trust",
          },
          os: { keyName: "os", flag: "--os", typeValue: "OS" },
          platform: {
            keyName: "platform",
            flag: "--platform",
            typeValue: "string",
          },
          quiet: { keyName: "quiet", flag: "--quiet" },
          retry: { keyName: "retry", flag: "--retry", typeValue: "uint" },
          retryDelay: {
            keyName: "retryDelay",
            flag: "--retry-delay",
            typeValue: "string",
          },
          tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
          variant: {
            keyName: "variant",
            flag: "--variant",
            typeValue: "string",
          },
        },
      },
      prune: {
        usages: ["podman image prune [options]"],
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
        command: "podman image prune",
        options: {
          all: { keyName: "all", flag: "--all" },
          external: { keyName: "external", flag: "--external" },
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
          force: { keyName: "force", flag: "--force" },
        },
      },
      exists: {
        usages: ["podman image exists IMAGE"],
        usageMatrix: [
          {
            argsStr: ["IMAGE"],
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
              image: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "image"],
            tsOptionsStr: "{options?: Options;image: string;}",
          },
        ],
        command: "podman image exists",
        options: {},
      },
      untag: {
        usages: ["podman image untag IMAGE [IMAGE...]"],
        usageMatrix: [
          {
            argsStr: ["IMAGE", "[IMAGE...]"],
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
                keyword: "image",
                literal: "IMAGE",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "image",
                literal: "[IMAGE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              image: { kind: "string[]", optional: false },
            },
            tsOptionsSort: ["options", "image"],
            tsOptionsStr: "{options?: Options;image: string[];}",
          },
        ],
        command: "podman image untag",
        options: {},
      },
      load: {
        usages: ["podman image load [options]"],
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
        command: "podman image load",
        options: {
          input: { keyName: "input", flag: "--input", typeValue: "string" },
          quiet: { keyName: "quiet", flag: "--quiet" },
        },
      },
    },
    usages: ["podman image [command]"],
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
    command: "podman image",
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
