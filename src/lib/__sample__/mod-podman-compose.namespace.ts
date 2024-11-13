export namespace modpodmancompose {
  const conf = {
    commands: {
      wait: {
        usages: ["docker compose wait SERVICE [SERVICE...] [OPTIONS]"],
        usageMatrix: [
          {
            argsStr: ["SERVICE", "[SERVICE...]", "[OPTIONS]"],
            args: [
              {
                keyword: "service",
                literal: "SERVICE",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              service: { kind: "string[]", optional: false },
              options: { kind: "Options", optional: true },
            },
            tsOptionsSort: ["service", "options"],
            tsOptionsStr: "{service: string[];options?: Options;}",
          },
        ],
        command: "podman compose wait",
        options: {
          downProject: { keyName: "downProject", flag: "--down-project" },
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
        },
      },
      config: {
        usages: ["docker compose config [OPTIONS] [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICE...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose config",
        options: {
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          environment: { keyName: "environment", flag: "--environment" },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          hash: { keyName: "hash", flag: "--hash", typeValue: "string" },
          images: { keyName: "images", flag: "--images" },
          noConsistency: { keyName: "noConsistency", flag: "--no-consistency" },
          noInterpolate: { keyName: "noInterpolate", flag: "--no-interpolate" },
          noNormalize: { keyName: "noNormalize", flag: "--no-normalize" },
          noPathResolution: {
            keyName: "noPathResolution",
            flag: "--no-path-resolution",
          },
          output: { keyName: "output", flag: "--output", typeValue: "string" },
          profiles: { keyName: "profiles", flag: "--profiles" },
          quiet: { keyName: "quiet", flag: "--quiet" },
          resolveImageDigests: {
            keyName: "resolveImageDigests",
            flag: "--resolve-image-digests",
          },
          services: { keyName: "services", flag: "--services" },
          variables: { keyName: "variables", flag: "--variables" },
          volumes: { keyName: "volumes", flag: "--volumes" },
        },
      },
      down: {
        usages: ["docker compose down [OPTIONS] [SERVICES]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICES]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "services",
                literal: "[SERVICES]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              services: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "services"],
            tsOptionsStr: "{options?: Options;services?: string;}",
          },
        ],
        command: "podman compose down",
        options: {
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          removeOrphans: { keyName: "removeOrphans", flag: "--remove-orphans" },
          rmi: { keyName: "rmi", flag: "--rmi", typeValue: "string" },
          timeout: { keyName: "timeout", flag: "--timeout", typeValue: "int" },
          volumes: { keyName: "volumes", flag: "--volumes" },
        },
      },
      up: {
        usages: ["docker compose up [OPTIONS] [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICE...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose up",
        options: {
          abortOnContainerExit: {
            keyName: "abortOnContainerExit",
            flag: "--abort-on-container-exit",
          },
          abortOnContainerFailure: {
            keyName: "abortOnContainerFailure",
            flag: "--abort-on-container-failure",
          },
          alwaysRecreateDeps: {
            keyName: "alwaysRecreateDeps",
            flag: "--always-recreate-deps",
          },
          attach: {
            keyName: "attach",
            flag: "--attach",
            typeValue: "stringArray",
          },
          attachDependencies: {
            keyName: "attachDependencies",
            flag: "--attach-dependencies",
          },
          build: { keyName: "build", flag: "--build" },
          detach: { keyName: "detach", flag: "--detach" },
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          exitCodeFrom: {
            keyName: "exitCodeFrom",
            flag: "--exit-code-from",
            typeValue: "string",
          },
          forceRecreate: { keyName: "forceRecreate", flag: "--force-recreate" },
          menu: { keyName: "menu", flag: "--menu" },
          noAttach: {
            keyName: "noAttach",
            flag: "--no-attach",
            typeValue: "stringArray",
          },
          noBuild: { keyName: "noBuild", flag: "--no-build" },
          noColor: { keyName: "noColor", flag: "--no-color" },
          noDeps: { keyName: "noDeps", flag: "--no-deps" },
          noLogPrefix: { keyName: "noLogPrefix", flag: "--no-log-prefix" },
          noRecreate: { keyName: "noRecreate", flag: "--no-recreate" },
          noStart: { keyName: "noStart", flag: "--no-start" },
          pull: { keyName: "pull", flag: "--pull", typeValue: "string" },
          quietPull: { keyName: "quietPull", flag: "--quiet-pull" },
          removeOrphans: { keyName: "removeOrphans", flag: "--remove-orphans" },
          renewAnonVolumes: {
            keyName: "renewAnonVolumes",
            flag: "--renew-anon-volumes",
          },
          scale: { keyName: "scale", flag: "--scale", typeValue: "scale" },
          timeout: { keyName: "timeout", flag: "--timeout", typeValue: "int" },
          timestamps: { keyName: "timestamps", flag: "--timestamps" },
          wait: { keyName: "wait", flag: "--wait" },
          waitTimeout: {
            keyName: "waitTimeout",
            flag: "--wait-timeout",
            typeValue: "int",
          },
          watch: { keyName: "watch", flag: "--watch" },
        },
      },
      top: {
        usages: ["docker compose top [SERVICES...]"],
        usageMatrix: [
          {
            argsStr: ["[SERVICES...]"],
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
                keyword: "services",
                literal: "[SERVICES...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              services: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "services"],
            tsOptionsStr: "{options?: Options;services?: string[];}",
          },
        ],
        command: "podman compose top",
        options: { dryRun: { keyName: "dryRun", flag: "--dry-run" } },
      },
      watch: {
        usages: ["docker compose watch [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[SERVICE...]"],
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
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose watch",
        options: {
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          noUp: { keyName: "noUp", flag: "--no-up" },
          prune: { keyName: "prune", flag: "--prune" },
          quiet: { keyName: "quiet", flag: "--quiet" },
        },
      },
      create: {
        usages: ["docker compose create [OPTIONS] [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICE...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose create",
        options: {
          build: { keyName: "build", flag: "--build" },
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          forceRecreate: { keyName: "forceRecreate", flag: "--force-recreate" },
          noBuild: { keyName: "noBuild", flag: "--no-build" },
          noRecreate: { keyName: "noRecreate", flag: "--no-recreate" },
          pull: { keyName: "pull", flag: "--pull", typeValue: "string" },
          quietPull: { keyName: "quietPull", flag: "--quiet-pull" },
          removeOrphans: { keyName: "removeOrphans", flag: "--remove-orphans" },
          scale: { keyName: "scale", flag: "--scale", typeValue: "scale" },
        },
      },
      stats: {
        usages: ["docker compose stats [OPTIONS] [SERVICE]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICE]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string;}",
          },
        ],
        command: "podman compose stats",
        options: {
          all: { keyName: "all", flag: "--all" },
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          noStream: { keyName: "noStream", flag: "--no-stream" },
          noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
        },
      },
      images: {
        usages: ["docker compose images [OPTIONS] [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICE...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose images",
        options: {
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          quiet: { keyName: "quiet", flag: "--quiet" },
        },
      },
      exec: {
        usages: ["docker compose exec [OPTIONS] SERVICE COMMAND [ARGS...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "SERVICE", "COMMAND", "[ARGS...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "SERVICE",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "command",
                literal: "COMMAND",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "args",
                literal: "[ARGS...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string", optional: false },
              command: { kind: "string", optional: false },
              args: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service", "command", "args"],
            tsOptionsStr:
              "{options?: Options;service: string;command: string;args?: string[];}",
          },
        ],
        command: "podman compose exec",
        options: {
          detach: { keyName: "detach", flag: "--detach" },
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          env: { keyName: "env", flag: "--env", typeValue: "stringArray" },
          index: { keyName: "index", flag: "--index", typeValue: "int" },
          noTTY: { keyName: "noTTY", flag: "--no-TTY", typeValue: "docker" },
          privileged: { keyName: "privileged", flag: "--privileged" },
          user: { keyName: "user", flag: "--user", typeValue: "string" },
          workdir: {
            keyName: "workdir",
            flag: "--workdir",
            typeValue: "string",
          },
        },
      },
      pull: {
        usages: ["docker compose pull [OPTIONS] [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICE...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose pull",
        options: {
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          ignoreBuildable: {
            keyName: "ignoreBuildable",
            flag: "--ignore-buildable",
          },
          ignorePullFailures: {
            keyName: "ignorePullFailures",
            flag: "--ignore-pull-failures",
          },
          includeDeps: { keyName: "includeDeps", flag: "--include-deps" },
          policy: { keyName: "policy", flag: "--policy", typeValue: "string" },
          quiet: { keyName: "quiet", flag: "--quiet" },
        },
      },
      pause: {
        usages: ["docker compose pause [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[SERVICE...]"],
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
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose pause",
        options: { dryRun: { keyName: "dryRun", flag: "--dry-run" } },
      },
      scale: {
        usages: ["docker compose scale [SERVICE=REPLICAS...]"],
        usageMatrix: [
          {
            argsStr: ["[SERVICE=REPLICAS...]"],
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
                keyword: "serviceReplicas",
                literal: "[SERVICE=REPLICAS...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              serviceReplicas: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "serviceReplicas"],
            tsOptionsStr: "{options?: Options;serviceReplicas?: string[];}",
          },
        ],
        command: "podman compose scale",
        options: {
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          noDeps: { keyName: "noDeps", flag: "--no-deps" },
        },
      },
      restart: {
        usages: ["docker compose restart [OPTIONS] [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICE...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose restart",
        options: {
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          noDeps: { keyName: "noDeps", flag: "--no-deps" },
          timeout: { keyName: "timeout", flag: "--timeout", typeValue: "int" },
        },
      },
      start: {
        usages: ["docker compose start [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[SERVICE...]"],
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
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose start",
        options: { dryRun: { keyName: "dryRun", flag: "--dry-run" } },
      },
      ps: {
        usages: ["docker compose ps [OPTIONS] [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICE...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose ps",
        options: {
          all: { keyName: "all", flag: "--all" },
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          filter: { keyName: "filter", flag: "--filter", typeValue: "string" },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
          orphans: { keyName: "orphans", flag: "--orphans" },
          quiet: { keyName: "quiet", flag: "--quiet" },
          services: { keyName: "services", flag: "--services" },
          status: {
            keyName: "status",
            flag: "--status",
            typeValue: "stringArray",
          },
        },
      },
      run: {
        usages: ["docker compose run [OPTIONS] SERVICE [COMMAND] [ARGS...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "SERVICE", "[COMMAND]", "[ARGS...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "SERVICE",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "command",
                literal: "[COMMAND]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "args",
                literal: "[ARGS...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string", optional: false },
              command: { kind: "string", optional: true },
              args: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service", "command", "args"],
            tsOptionsStr:
              "{options?: Options;service: string;command?: string;args?: string[];}",
          },
        ],
        command: "podman compose run",
        options: {
          build: { keyName: "build", flag: "--build" },
          capAdd: { keyName: "capAdd", flag: "--cap-add", typeValue: "list" },
          capDrop: {
            keyName: "capDrop",
            flag: "--cap-drop",
            typeValue: "list",
          },
          detach: { keyName: "detach", flag: "--detach" },
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          entrypoint: {
            keyName: "entrypoint",
            flag: "--entrypoint",
            typeValue: "string",
          },
          env: { keyName: "env", flag: "--env", typeValue: "stringArray" },
          interactive: { keyName: "interactive", flag: "--interactive" },
          label: {
            keyName: "label",
            flag: "--label",
            typeValue: "stringArray",
          },
          name: { keyName: "name", flag: "--name", typeValue: "string" },
          noTTY: { keyName: "noTTY", flag: "--no-TTY" },
          noDeps: { keyName: "noDeps", flag: "--no-deps" },
          publish: {
            keyName: "publish",
            flag: "--publish",
            typeValue: "stringArray",
          },
          quietPull: { keyName: "quietPull", flag: "--quiet-pull" },
          removeOrphans: { keyName: "removeOrphans", flag: "--remove-orphans" },
          rm: { keyName: "rm", flag: "--rm" },
          servicePorts: { keyName: "servicePorts", flag: "--service-ports" },
          useAliases: { keyName: "useAliases", flag: "--use-aliases" },
          user: { keyName: "user", flag: "--user", typeValue: "string" },
          volume: {
            keyName: "volume",
            flag: "--volume",
            typeValue: "stringArray",
          },
          workdir: {
            keyName: "workdir",
            flag: "--workdir",
            typeValue: "string",
          },
        },
      },
      push: {
        usages: ["docker compose push [OPTIONS] [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICE...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose push",
        options: {
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          ignorePushFailures: {
            keyName: "ignorePushFailures",
            flag: "--ignore-push-failures",
          },
          includeDeps: { keyName: "includeDeps", flag: "--include-deps" },
          quiet: { keyName: "quiet", flag: "--quiet" },
        },
      },
      unpause: {
        usages: ["docker compose unpause [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[SERVICE...]"],
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
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose unpause",
        options: { dryRun: { keyName: "dryRun", flag: "--dry-run" } },
      },
      build: {
        usages: ["docker compose build [OPTIONS] [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICE...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose build",
        options: {
          buildArg: {
            keyName: "buildArg",
            flag: "--build-arg",
            typeValue: "stringArray",
          },
          builder: {
            keyName: "builder",
            flag: "--builder",
            typeValue: "string",
          },
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          memory: { keyName: "memory", flag: "--memory", typeValue: "bytes" },
          noCache: { keyName: "noCache", flag: "--no-cache" },
          pull: { keyName: "pull", flag: "--pull" },
          push: { keyName: "push", flag: "--push" },
          quiet: { keyName: "quiet", flag: "--quiet" },
          ssh: { keyName: "ssh", flag: "--ssh", typeValue: "string" },
          withDependencies: {
            keyName: "withDependencies",
            flag: "--with-dependencies",
          },
        },
      },
      stop: {
        usages: ["docker compose stop [OPTIONS] [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICE...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose stop",
        options: {
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          timeout: { keyName: "timeout", flag: "--timeout", typeValue: "int" },
        },
      },
      logs: {
        usages: ["docker compose logs [OPTIONS] [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICE...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose logs",
        options: {
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          follow: { keyName: "follow", flag: "--follow" },
          index: { keyName: "index", flag: "--index", typeValue: "int" },
          noColor: { keyName: "noColor", flag: "--no-color" },
          noLogPrefix: { keyName: "noLogPrefix", flag: "--no-log-prefix" },
          since: { keyName: "since", flag: "--since", typeValue: "string" },
          tail: { keyName: "tail", flag: "--tail", typeValue: "string" },
          timestamps: { keyName: "timestamps", flag: "--timestamps" },
          until: { keyName: "until", flag: "--until", typeValue: "string" },
        },
      },
      events: {
        usages: ["docker compose events [OPTIONS] [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICE...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose events",
        options: {
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          json: { keyName: "json", flag: "--json" },
        },
      },
      cp: {
        usages: ["docker compose cp [OPTIONS] SERVICE:SRC_PATH DEST_PATH|-"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "SERVICE:SRC_PATH", "DEST_PATH|-"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "serviceSrcPath",
                literal: "SERVICE:SRC_PATH",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "destPath",
                literal: "DEST_PATH|-",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              serviceSrcPath: { kind: "string", optional: false },
              destPath: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "serviceSrcPath", "destPath"],
            tsOptionsStr:
              "{options?: Options;serviceSrcPath: string;destPath: string;}",
          },
        ],
        command: "podman compose cp",
        options: {
          archive: { keyName: "archive", flag: "--archive" },
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          followLink: { keyName: "followLink", flag: "--follow-link" },
          index: { keyName: "index", flag: "--index", typeValue: "int" },
        },
      },
      port: {
        usages: ["docker compose port [OPTIONS] SERVICE PRIVATE_PORT"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "SERVICE", "PRIVATE_PORT"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "SERVICE",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "privatePort",
                literal: "PRIVATE_PORT",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string", optional: false },
              privatePort: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "service", "privatePort"],
            tsOptionsStr:
              "{options?: Options;service: string;privatePort: string;}",
          },
        ],
        command: "podman compose port",
        options: {
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          index: { keyName: "index", flag: "--index", typeValue: "int" },
          protocol: {
            keyName: "protocol",
            flag: "--protocol",
            typeValue: "string",
          },
        },
      },
      ls: {
        usages: ["docker compose ls [OPTIONS]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
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
        command: "podman compose ls",
        options: {
          all: { keyName: "all", flag: "--all" },
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          filter: { keyName: "filter", flag: "--filter", typeValue: "filter" },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          quiet: { keyName: "quiet", flag: "--quiet" },
        },
      },
      version: {
        usages: ["docker compose version [OPTIONS]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
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
        command: "podman compose version",
        options: {
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          short: { keyName: "short", flag: "--short" },
        },
      },
      rm: {
        usages: ["docker compose rm [OPTIONS] [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICE...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose rm",
        options: {
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          force: { keyName: "force", flag: "--force" },
          stop: { keyName: "stop", flag: "--stop" },
          volumes: { keyName: "volumes", flag: "--volumes" },
        },
      },
      kill: {
        usages: ["docker compose kill [OPTIONS] [SERVICE...]"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "[SERVICE...]"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "[SERVICE...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service?: string[];}",
          },
        ],
        command: "podman compose kill",
        options: {
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          removeOrphans: { keyName: "removeOrphans", flag: "--remove-orphans" },
          signal: { keyName: "signal", flag: "--signal", typeValue: "string" },
        },
      },
      attach: {
        usages: ["docker compose attach [OPTIONS] SERVICE"],
        usageMatrix: [
          {
            argsStr: ["[OPTIONS]", "SERVICE"],
            args: [
              {
                keyword: "options",
                literal: "[OPTIONS]",
                kind: "options",
                isOptionsArg: true,
                isOptional: true,
                isSpread: false,
              },
              {
                keyword: "service",
                literal: "SERVICE",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              service: { kind: "string", optional: false },
            },
            tsOptionsSort: ["options", "service"],
            tsOptionsStr: "{options?: Options;service: string;}",
          },
        ],
        command: "podman compose attach",
        options: {
          detachKeys: {
            keyName: "detachKeys",
            flag: "--detach-keys",
            typeValue: "string",
          },
          dryRun: { keyName: "dryRun", flag: "--dry-run" },
          index: { keyName: "index", flag: "--index", typeValue: "int" },
          noStdin: { keyName: "noStdin", flag: "--no-stdin" },
          sigProxy: { keyName: "sigProxy", flag: "--sig-proxy" },
        },
      },
    },
    usages: ["podman compose [options]", "docker compose [OPTIONS] COMMAND"],
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
      {
        argsStr: ["[OPTIONS]", "COMMAND"],
        args: [
          {
            keyword: "options",
            literal: "[OPTIONS]",
            kind: "options",
            isOptionsArg: true,
            isOptional: true,
            isSpread: false,
          },
          {
            keyword: "command",
            literal: "COMMAND",
            kind: "argument",
            isOptionsArg: false,
            isOptional: false,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          command: { kind: "string", optional: false },
        },
        tsOptionsSort: ["options", "command"],
        tsOptionsStr: "{options?: Options;command: string;}",
      },
    ],
    command: "podman compose",
    options: {
      allResources: { keyName: "allResources", flag: "--all-resources" },
      ansi: { keyName: "ansi", flag: "--ansi", typeValue: "string" },
      compatibility: { keyName: "compatibility", flag: "--compatibility" },
      dryRun: { keyName: "dryRun", flag: "--dry-run" },
      envFile: {
        keyName: "envFile",
        flag: "--env-file",
        typeValue: "stringArray",
      },
      file: { keyName: "file", flag: "--file", typeValue: "stringArray" },
      parallel: { keyName: "parallel", flag: "--parallel", typeValue: "int" },
      profile: {
        keyName: "profile",
        flag: "--profile",
        typeValue: "stringArray",
      },
      progress: {
        keyName: "progress",
        flag: "--progress",
        typeValue: "string",
      },
      projectDirectory: {
        keyName: "projectDirectory",
        flag: "--project-directory",
        typeValue: "string",
      },
      projectName: {
        keyName: "projectName",
        flag: "--project-name",
        typeValue: "string",
      },
    },
  };

  type Options = {
    allResources?: boolean; // [null]
    ansi?: string; // string
    compatibility?: boolean; // [null]
    dryRun?: boolean; // [null]
    envFile?: string[]; // stringArray
    file?: string[]; // stringArray
    parallel?: number; // int
    profile?: string[]; // stringArray
    progress?: string; // string
    projectDirectory?: string; // string
    projectName?: string; // string
  };

  export type optionsArgument =
    | { options?: Options }
    | { options?: Options; command: string };

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
