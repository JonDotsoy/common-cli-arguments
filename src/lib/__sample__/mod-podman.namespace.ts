export namespace modpodman {
  const conf = {
    commands: {
      machine: {
        commands: {
          info: {
            usages: ["podman machine info [options]"],
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
            command: "podman machine info",
            options: {
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
            },
          },
          os: {
            usages: ["podman machine os [command]"],
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
            command: "podman machine os",
            options: {},
            commands: {
              apply: {
                usages: ["podman machine os apply [options] IMAGE [NAME]"],
                usageMatrix: [
                  {
                    argsStr: ["[options]", "IMAGE", "[NAME]"],
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
                      image: { kind: "string", optional: false },
                      name: { kind: "string", optional: true },
                    },
                    tsOptionsSort: ["options", "image", "name"],
                    tsOptionsStr:
                      "{options?: Options;image: string;name?: string;}",
                  },
                ],
                command: "podman machine os apply",
                options: { restart: { keyName: "restart", flag: "--restart" } },
              },
            },
          },
          stop: {
            usages: ["podman machine stop [MACHINE]"],
            usageMatrix: [
              {
                argsStr: ["[MACHINE]"],
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
                    keyword: "machine",
                    literal: "[MACHINE]",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: true,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  machine: { kind: "string", optional: true },
                },
                tsOptionsSort: ["options", "machine"],
                tsOptionsStr: "{options?: Options;machine?: string;}",
              },
            ],
            command: "podman machine stop",
            options: {},
          },
          ssh: {
            usages: ["podman machine ssh [options] [NAME] [COMMAND [ARG ...]]"],
            usageMatrix: [
              {
                argsStr: ["[options]", "[NAME]", "[COMMAND [ARG ...]]"],
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
                  {
                    keyword: "commandArg",
                    literal: "[COMMAND [ARG ...]]",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: true,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  name: { kind: "string", optional: true },
                  commandArg: { kind: "string", optional: true },
                },
                tsOptionsSort: ["options", "name", "commandArg"],
                tsOptionsStr:
                  "{options?: Options;name?: string;commandArg?: string;}",
              },
            ],
            command: "podman machine ssh",
            options: {
              username: {
                keyName: "username",
                flag: "--username",
                typeValue: "string",
              },
            },
          },
          reset: {
            usages: ["podman machine reset [options]"],
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
            command: "podman machine reset",
            options: { force: { keyName: "force", flag: "--force" } },
          },
          init: {
            usages: ["podman machine init [options] [NAME]"],
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
            command: "podman machine init",
            options: {
              cpus: { keyName: "cpus", flag: "--cpus", typeValue: "uint" },
              diskSize: {
                keyName: "diskSize",
                flag: "--disk-size",
                typeValue: "uint",
              },
              ignitionPath: {
                keyName: "ignitionPath",
                flag: "--ignition-path",
                typeValue: "string",
              },
              image: { keyName: "image", flag: "--image", typeValue: "string" },
              memory: {
                keyName: "memory",
                flag: "--memory",
                typeValue: "uint",
              },
              now: { keyName: "now", flag: "--now" },
              rootful: { keyName: "rootful", flag: "--rootful" },
              timezone: {
                keyName: "timezone",
                flag: "--timezone",
                typeValue: "string",
              },
              usb: { keyName: "usb", flag: "--usb", typeValue: "stringArray" },
              userModeNetworking: {
                keyName: "userModeNetworking",
                flag: "--user-mode-networking",
              },
              username: {
                keyName: "username",
                flag: "--username",
                typeValue: "string",
              },
              volume: {
                keyName: "volume",
                flag: "--volume",
                typeValue: "stringArray",
              },
            },
          },
          set: {
            usages: ["podman machine set [options] [NAME]"],
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
            command: "podman machine set",
            options: {
              cpus: { keyName: "cpus", flag: "--cpus", typeValue: "uint" },
              diskSize: {
                keyName: "diskSize",
                flag: "--disk-size",
                typeValue: "uint",
              },
              memory: {
                keyName: "memory",
                flag: "--memory",
                typeValue: "uint",
              },
              rootful: { keyName: "rootful", flag: "--rootful" },
              usb: { keyName: "usb", flag: "--usb", typeValue: "stringArray" },
              userModeNetworking: {
                keyName: "userModeNetworking",
                flag: "--user-mode-networking",
              },
            },
          },
          list: {
            usages: ["podman machine list [options]"],
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
            command: "podman machine list",
            options: {
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
              noheading: { keyName: "noheading", flag: "--noheading" },
              quiet: { keyName: "quiet", flag: "--quiet" },
            },
          },
          start: {
            usages: ["podman machine start [options] [MACHINE]"],
            usageMatrix: [
              {
                argsStr: ["[options]", "[MACHINE]"],
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
                    keyword: "machine",
                    literal: "[MACHINE]",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: true,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  machine: { kind: "string", optional: true },
                },
                tsOptionsSort: ["options", "machine"],
                tsOptionsStr: "{options?: Options;machine?: string;}",
              },
            ],
            command: "podman machine start",
            options: {
              noInfo: { keyName: "noInfo", flag: "--no-info" },
              quiet: { keyName: "quiet", flag: "--quiet" },
            },
          },
          rm: {
            usages: ["podman machine rm [options] [MACHINE]"],
            usageMatrix: [
              {
                argsStr: ["[options]", "[MACHINE]"],
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
                    keyword: "machine",
                    literal: "[MACHINE]",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: true,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  machine: { kind: "string", optional: true },
                },
                tsOptionsSort: ["options", "machine"],
                tsOptionsStr: "{options?: Options;machine?: string;}",
              },
            ],
            command: "podman machine rm",
            options: {
              force: { keyName: "force", flag: "--force" },
              saveIgnition: {
                keyName: "saveIgnition",
                flag: "--save-ignition",
              },
              saveImage: { keyName: "saveImage", flag: "--save-image" },
            },
          },
          inspect: {
            usages: ["podman machine inspect [options] [MACHINE...]"],
            usageMatrix: [
              {
                argsStr: ["[options]", "[MACHINE...]"],
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
                    keyword: "machine",
                    literal: "[MACHINE...]",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: true,
                    isSpread: true,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  machine: { kind: "string[]", optional: true },
                },
                tsOptionsSort: ["options", "machine"],
                tsOptionsStr: "{options?: Options;machine?: string[];}",
              },
            ],
            command: "podman machine inspect",
            options: {
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
            },
          },
        },
        usages: ["podman machine [command]"],
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
        command: "podman machine",
        options: {},
      },
      compose: {
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
              hash: { keyName: "hash", flag: "--hash", typeValue: "string" },
              images: { keyName: "images", flag: "--images" },
              noConsistency: {
                keyName: "noConsistency",
                flag: "--no-consistency",
              },
              noInterpolate: {
                keyName: "noInterpolate",
                flag: "--no-interpolate",
              },
              noNormalize: { keyName: "noNormalize", flag: "--no-normalize" },
              noPathResolution: {
                keyName: "noPathResolution",
                flag: "--no-path-resolution",
              },
              output: {
                keyName: "output",
                flag: "--output",
                typeValue: "string",
              },
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
              removeOrphans: {
                keyName: "removeOrphans",
                flag: "--remove-orphans",
              },
              rmi: { keyName: "rmi", flag: "--rmi", typeValue: "string" },
              timeout: {
                keyName: "timeout",
                flag: "--timeout",
                typeValue: "int",
              },
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
              forceRecreate: {
                keyName: "forceRecreate",
                flag: "--force-recreate",
              },
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
              removeOrphans: {
                keyName: "removeOrphans",
                flag: "--remove-orphans",
              },
              renewAnonVolumes: {
                keyName: "renewAnonVolumes",
                flag: "--renew-anon-volumes",
              },
              scale: { keyName: "scale", flag: "--scale", typeValue: "scale" },
              timeout: {
                keyName: "timeout",
                flag: "--timeout",
                typeValue: "int",
              },
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
              forceRecreate: {
                keyName: "forceRecreate",
                flag: "--force-recreate",
              },
              noBuild: { keyName: "noBuild", flag: "--no-build" },
              noRecreate: { keyName: "noRecreate", flag: "--no-recreate" },
              pull: { keyName: "pull", flag: "--pull", typeValue: "string" },
              quietPull: { keyName: "quietPull", flag: "--quiet-pull" },
              removeOrphans: {
                keyName: "removeOrphans",
                flag: "--remove-orphans",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
              noTTY: {
                keyName: "noTTY",
                flag: "--no-TTY",
                typeValue: "docker",
              },
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
              policy: {
                keyName: "policy",
                flag: "--policy",
                typeValue: "string",
              },
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
              timeout: {
                keyName: "timeout",
                flag: "--timeout",
                typeValue: "int",
              },
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
              filter: {
                keyName: "filter",
                flag: "--filter",
                typeValue: "string",
              },
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
            usages: [
              "docker compose run [OPTIONS] SERVICE [COMMAND] [ARGS...]",
            ],
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
              capAdd: {
                keyName: "capAdd",
                flag: "--cap-add",
                typeValue: "list",
              },
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
              removeOrphans: {
                keyName: "removeOrphans",
                flag: "--remove-orphans",
              },
              rm: { keyName: "rm", flag: "--rm" },
              servicePorts: {
                keyName: "servicePorts",
                flag: "--service-ports",
              },
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
              memory: {
                keyName: "memory",
                flag: "--memory",
                typeValue: "bytes",
              },
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
              timeout: {
                keyName: "timeout",
                flag: "--timeout",
                typeValue: "int",
              },
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
            usages: [
              "docker compose cp [OPTIONS] SERVICE:SRC_PATH DEST_PATH|-",
            ],
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
              filter: {
                keyName: "filter",
                flag: "--filter",
                typeValue: "filter",
              },
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
              removeOrphans: {
                keyName: "removeOrphans",
                flag: "--remove-orphans",
              },
              signal: {
                keyName: "signal",
                flag: "--signal",
                typeValue: "string",
              },
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
        usages: [
          "podman compose [options]",
          "docker compose [OPTIONS] COMMAND",
        ],
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
          parallel: {
            keyName: "parallel",
            flag: "--parallel",
            typeValue: "int",
          },
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
      },
      system: {
        commands: {
          connection: {
            commands: {
              add: {
                usages: [
                  "podman system connection add [options] NAME DESTINATION",
                ],
                usageMatrix: [
                  {
                    argsStr: ["[options]", "NAME", "DESTINATION"],
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
                        literal: "NAME",
                        kind: "argument",
                        isOptionsArg: false,
                        isOptional: false,
                        isSpread: false,
                      },
                      {
                        keyword: "destination",
                        literal: "DESTINATION",
                        kind: "argument",
                        isOptionsArg: false,
                        isOptional: false,
                        isSpread: false,
                      },
                    ],
                    tsOptions: {
                      options: { kind: "Options", optional: true },
                      name: { kind: "string", optional: false },
                      destination: { kind: "string", optional: false },
                    },
                    tsOptionsSort: ["options", "name", "destination"],
                    tsOptionsStr:
                      "{options?: Options;name: string;destination: string;}",
                  },
                ],
                command: "podman system connection add",
                options: {
                  default: { keyName: "default", flag: "--default" },
                  identity: {
                    keyName: "identity",
                    flag: "--identity",
                    typeValue: "string",
                  },
                  port: { keyName: "port", flag: "--port", typeValue: "int" },
                  socketPath: {
                    keyName: "socketPath",
                    flag: "--socket-path",
                    typeValue: "string",
                  },
                },
              },
              list: {
                usages: ["podman system connection list [options]"],
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
                command: "podman system connection list",
                options: {
                  format: {
                    keyName: "format",
                    flag: "--format",
                    typeValue: "string",
                  },
                  quiet: { keyName: "quiet", flag: "--quiet" },
                },
              },
              remove: {
                usages: ["podman system connection remove [options] NAME"],
                usageMatrix: [
                  {
                    argsStr: ["[options]", "NAME"],
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
                        literal: "NAME",
                        kind: "argument",
                        isOptionsArg: false,
                        isOptional: false,
                        isSpread: false,
                      },
                    ],
                    tsOptions: {
                      options: { kind: "Options", optional: true },
                      name: { kind: "string", optional: false },
                    },
                    tsOptionsSort: ["options", "name"],
                    tsOptionsStr: "{options?: Options;name: string;}",
                  },
                ],
                command: "podman system connection remove",
                options: { all: { keyName: "all", flag: "--all" } },
              },
              rename: {
                usages: ["podman system connection rename OLD NEW"],
                usageMatrix: [
                  {
                    argsStr: ["OLD", "NEW"],
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
                        keyword: "old",
                        literal: "OLD",
                        kind: "argument",
                        isOptionsArg: false,
                        isOptional: false,
                        isSpread: false,
                      },
                      {
                        keyword: "new",
                        literal: "NEW",
                        kind: "argument",
                        isOptionsArg: false,
                        isOptional: false,
                        isSpread: false,
                      },
                    ],
                    tsOptions: {
                      options: { kind: "Options", optional: true },
                      old: { kind: "string", optional: false },
                      new: { kind: "string", optional: false },
                    },
                    tsOptionsSort: ["options", "old", "new"],
                    tsOptionsStr:
                      "{options?: Options;old: string;new: string;}",
                  },
                ],
                command: "podman system connection rename",
                options: {},
              },
              default: {
                usages: ["podman system connection default NAME"],
                usageMatrix: [
                  {
                    argsStr: ["NAME"],
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
                    ],
                    tsOptions: {
                      options: { kind: "Options", optional: true },
                      name: { kind: "string", optional: false },
                    },
                    tsOptionsSort: ["options", "name"],
                    tsOptionsStr: "{options?: Options;name: string;}",
                  },
                ],
                command: "podman system connection default",
                options: {},
              },
            },
            usages: ["podman system connection [command]"],
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
            command: "podman system connection",
            options: {},
          },
          info: {
            usages: ["podman system info [options]"],
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
            command: "podman system info",
            options: {
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
            },
          },
          events: {
            usages: ["podman system events [options]"],
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
            command: "podman system events",
            options: {
              filter: {
                keyName: "filter",
                flag: "--filter",
                typeValue: "stringArray",
              },
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
              noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
              since: { keyName: "since", flag: "--since", typeValue: "string" },
              stream: { keyName: "stream", flag: "--stream" },
              until: { keyName: "until", flag: "--until", typeValue: "string" },
            },
          },
          df: {
            usages: ["podman system df [options]"],
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
            command: "podman system df",
            options: {
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
              verbose: { keyName: "verbose", flag: "--verbose" },
            },
          },
          prune: {
            usages: ["podman system prune [options]"],
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
            command: "podman system prune",
            options: {
              all: { keyName: "all", flag: "--all" },
              external: { keyName: "external", flag: "--external" },
              filter: {
                keyName: "filter",
                flag: "--filter",
                typeValue: "stringArray",
              },
              force: { keyName: "force", flag: "--force" },
              volumes: { keyName: "volumes", flag: "--volumes" },
            },
          },
          check: {
            usages: ["podman system check [options]"],
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
            command: "podman system check",
            options: {
              force: { keyName: "force", flag: "--force" },
              max: { keyName: "max", flag: "--max", typeValue: "duration" },
              quick: { keyName: "quick", flag: "--quick" },
              repair: { keyName: "repair", flag: "--repair" },
            },
          },
        },
        usages: ["podman system [command]"],
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
        command: "podman system",
        options: {},
      },
      image: {
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
                tsOptionsStr:
                  "{options?: Options;image: string;host?: string;}",
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
              multiImageArchive: {
                keyName: "multiImageArchive",
                flag: "--multi-image-archive",
              },
              output: {
                keyName: "output",
                flag: "--output",
                typeValue: "string",
              },
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
              allPlatforms: {
                keyName: "allPlatforms",
                flag: "--all-platforms",
              },
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
              compatVolumes: {
                keyName: "compatVolumes",
                flag: "--compat-volumes",
              },
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
              dns: {
                keyName: "dns",
                flag: "--dns",
                typeValue: "/etc/resolv.conf",
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
              env: { keyName: "env", flag: "--env", typeValue: "stringArray" },
              file: { keyName: "file", flag: "--file", typeValue: "pathname" },
              forceRm: { keyName: "forceRm", flag: "--force-rm" },
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "format",
              },
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
              identityLabel: {
                keyName: "identityLabel",
                flag: "--identity-label",
              },
              ignorefile: {
                keyName: "ignorefile",
                flag: "--ignorefile",
                typeValue: "string",
              },
              iidfile: {
                keyName: "iidfile",
                flag: "--iidfile",
                typeValue: "file",
              },
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
              logfile: {
                keyName: "logfile",
                flag: "--logfile",
                typeValue: "file",
              },
              manifest: {
                keyName: "manifest",
                flag: "--manifest",
                typeValue: "string",
              },
              memory: {
                keyName: "memory",
                flag: "--memory",
                typeValue: "string",
              },
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
              target: {
                keyName: "target",
                flag: "--target",
                typeValue: "string",
              },
              timestamp: {
                keyName: "timestamp",
                flag: "--timestamp",
                typeValue: "int",
              },
              ulimit: {
                keyName: "ulimit",
                flag: "--ulimit",
                typeValue: "strings",
              },
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
              userns: {
                keyName: "userns",
                flag: "--userns",
                typeValue: "path",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
      },
      healthcheck: {
        commands: {
          run: {
            usages: ["podman healthcheck run CONTAINER"],
            usageMatrix: [
              {
                argsStr: ["CONTAINER"],
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
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  container: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "container"],
                tsOptionsStr: "{options?: Options;container: string;}",
              },
            ],
            command: "podman healthcheck run",
            options: {},
          },
        },
        usages: ["podman healthcheck [command]"],
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
        command: "podman healthcheck",
        options: {},
      },
      farm: {
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
              remove: {
                keyName: "remove",
                flag: "--remove",
                typeValue: "strings",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
              compatVolumes: {
                keyName: "compatVolumes",
                flag: "--compat-volumes",
              },
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
              dns: {
                keyName: "dns",
                flag: "--dns",
                typeValue: "/etc/resolv.conf",
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
              env: { keyName: "env", flag: "--env", typeValue: "stringArray" },
              farm: { keyName: "farm", flag: "--farm", typeValue: "string" },
              file: { keyName: "file", flag: "--file", typeValue: "pathname" },
              forceRm: { keyName: "forceRm", flag: "--force-rm" },
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "format",
              },
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
              identityLabel: {
                keyName: "identityLabel",
                flag: "--identity-label",
              },
              ignorefile: {
                keyName: "ignorefile",
                flag: "--ignorefile",
                typeValue: "string",
              },
              iidfile: {
                keyName: "iidfile",
                flag: "--iidfile",
                typeValue: "file",
              },
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
              logfile: {
                keyName: "logfile",
                flag: "--logfile",
                typeValue: "file",
              },
              memory: {
                keyName: "memory",
                flag: "--memory",
                typeValue: "string",
              },
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
              target: {
                keyName: "target",
                flag: "--target",
                typeValue: "string",
              },
              timestamp: {
                keyName: "timestamp",
                flag: "--timestamp",
                typeValue: "int",
              },
              tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
              ulimit: {
                keyName: "ulimit",
                flag: "--ulimit",
                typeValue: "strings",
              },
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
              userns: {
                keyName: "userns",
                flag: "--userns",
                typeValue: "path",
              },
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
      },
      manifest: {
        commands: {
          inspect: {
            usages: ["podman manifest inspect [options] IMAGE"],
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
            command: "podman manifest inspect",
            options: {
              authfile: {
                keyName: "authfile",
                flag: "--authfile",
                typeValue: "string",
              },
              tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
            },
          },
          annotate: {
            usages: ["podman manifest annotate [options] LIST IMAGEORARTIFACT"],
            usageMatrix: [
              {
                argsStr: ["[options]", "LIST", "IMAGEORARTIFACT"],
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
                    keyword: "list",
                    literal: "LIST",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                  {
                    keyword: "imageorartifact",
                    literal: "IMAGEORARTIFACT",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  list: { kind: "string", optional: false },
                  imageorartifact: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "list", "imageorartifact"],
                tsOptionsStr:
                  "{options?: Options;list: string;imageorartifact: string;}",
              },
            ],
            command: "podman manifest annotate",
            options: {
              annotation: {
                keyName: "annotation",
                flag: "--annotation",
                typeValue: "annotation",
              },
              arch: {
                keyName: "arch",
                flag: "--arch",
                typeValue: "architecture",
              },
              features: {
                keyName: "features",
                flag: "--features",
                typeValue: "features",
              },
              index: { keyName: "index", flag: "--index" },
              os: { keyName: "os", flag: "--os", typeValue: "OS" },
              osFeatures: {
                keyName: "osFeatures",
                flag: "--os-features",
                typeValue: "features",
              },
              osVersion: {
                keyName: "osVersion",
                flag: "--os-version",
                typeValue: "version",
              },
              subject: {
                keyName: "subject",
                flag: "--subject",
                typeValue: "subject",
              },
              variant: {
                keyName: "variant",
                flag: "--variant",
                typeValue: "Variant",
              },
            },
          },
          create: {
            usages: ["podman manifest create [options] LIST [IMAGE...]"],
            usageMatrix: [
              {
                argsStr: ["[options]", "LIST", "[IMAGE...]"],
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
                    keyword: "list",
                    literal: "LIST",
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
                  list: { kind: "string", optional: false },
                  image: { kind: "string[]", optional: true },
                },
                tsOptionsSort: ["options", "list", "image"],
                tsOptionsStr:
                  "{options?: Options;list: string;image?: string[];}",
              },
            ],
            command: "podman manifest create",
            options: {
              all: { keyName: "all", flag: "--all" },
              amend: { keyName: "amend", flag: "--amend" },
              annotation: {
                keyName: "annotation",
                flag: "--annotation",
                typeValue: "stringArray",
              },
              tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
            },
          },
          remove: {
            usages: ["podman manifest remove LIST IMAGE"],
            usageMatrix: [
              {
                argsStr: ["LIST", "IMAGE"],
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
                    keyword: "list",
                    literal: "LIST",
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
                  list: { kind: "string", optional: false },
                  image: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "list", "image"],
                tsOptionsStr: "{options?: Options;list: string;image: string;}",
              },
            ],
            command: "podman manifest remove",
            options: {},
          },
          add: {
            usages: [
              "podman manifest add [options] LIST IMAGEORARTIFACT [IMAGEORARTIFACT...]",
            ],
            usageMatrix: [
              {
                argsStr: [
                  "[options]",
                  "LIST",
                  "IMAGEORARTIFACT",
                  "[IMAGEORARTIFACT...]",
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
                    keyword: "list",
                    literal: "LIST",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                  {
                    keyword: "imageorartifact",
                    literal: "IMAGEORARTIFACT",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                  {
                    keyword: "imageorartifact",
                    literal: "[IMAGEORARTIFACT...]",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: true,
                    isSpread: true,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  list: { kind: "string", optional: false },
                  imageorartifact: { kind: "string[]", optional: false },
                },
                tsOptionsSort: ["options", "list", "imageorartifact"],
                tsOptionsStr:
                  "{options?: Options;list: string;imageorartifact: string[];}",
              },
            ],
            command: "podman manifest add",
            options: {
              all: { keyName: "all", flag: "--all" },
              annotation: {
                keyName: "annotation",
                flag: "--annotation",
                typeValue: "annotation",
              },
              arch: {
                keyName: "arch",
                flag: "--arch",
                typeValue: "architecture",
              },
              artifact: { keyName: "artifact", flag: "--artifact" },
              artifactConfig: {
                keyName: "artifactConfig",
                flag: "--artifact-config",
                typeValue: "string",
              },
              artifactConfigType: {
                keyName: "artifactConfigType",
                flag: "--artifact-config-type",
                typeValue: "string",
              },
              artifactExcludeTitles: {
                keyName: "artifactExcludeTitles",
                flag: "--artifact-exclude-titles",
              },
              artifactLayerType: {
                keyName: "artifactLayerType",
                flag: "--artifact-layer-type",
                typeValue: "string",
              },
              artifactSubject: {
                keyName: "artifactSubject",
                flag: "--artifact-subject",
                typeValue: "string",
              },
              artifactType: {
                keyName: "artifactType",
                flag: "--artifact-type",
                typeValue: "string",
              },
              authfile: {
                keyName: "authfile",
                flag: "--authfile",
                typeValue: "string",
              },
              creds: {
                keyName: "creds",
                flag: "--creds",
                typeValue: "[username[:password]]",
              },
              features: {
                keyName: "features",
                flag: "--features",
                typeValue: "features",
              },
              os: { keyName: "os", flag: "--os", typeValue: "OS" },
              osVersion: {
                keyName: "osVersion",
                flag: "--os-version",
                typeValue: "version",
              },
              tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
              variant: {
                keyName: "variant",
                flag: "--variant",
                typeValue: "Variant",
              },
            },
          },
          rm: {
            usages: ["podman manifest rm LIST [LIST...]"],
            usageMatrix: [
              {
                argsStr: ["LIST", "[LIST...]"],
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
                    keyword: "list",
                    literal: "LIST",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                  {
                    keyword: "list",
                    literal: "[LIST...]",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: true,
                    isSpread: true,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  list: { kind: "string[]", optional: false },
                },
                tsOptionsSort: ["options", "list"],
                tsOptionsStr: "{options?: Options;list: string[];}",
              },
            ],
            command: "podman manifest rm",
            options: {},
          },
          push: {
            usages: ["podman manifest push [options] LIST DESTINATION"],
            usageMatrix: [
              {
                argsStr: ["[options]", "LIST", "DESTINATION"],
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
                    keyword: "list",
                    literal: "LIST",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                  {
                    keyword: "destination",
                    literal: "DESTINATION",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  list: { kind: "string", optional: false },
                  destination: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "list", "destination"],
                tsOptionsStr:
                  "{options?: Options;list: string;destination: string;}",
              },
            ],
            command: "podman manifest push",
            options: {
              addCompression: {
                keyName: "addCompression",
                flag: "--add-compression",
                typeValue: "strings",
              },
              all: { keyName: "all", flag: "--all" },
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
                typeValue: "[username[:password]]",
              },
              digestfile: {
                keyName: "digestfile",
                flag: "--digestfile",
                typeValue: "string",
              },
              forceCompression: {
                keyName: "forceCompression",
                flag: "--force-compression",
              },
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
              quiet: { keyName: "quiet", flag: "--quiet" },
              removeSignatures: {
                keyName: "removeSignatures",
                flag: "--remove-signatures",
              },
              rm: { keyName: "rm", flag: "--rm" },
              tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
            },
          },
          exists: {
            usages: ["podman manifest exists MANIFEST"],
            usageMatrix: [
              {
                argsStr: ["MANIFEST"],
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
                    keyword: "manifest",
                    literal: "MANIFEST",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  manifest: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "manifest"],
                tsOptionsStr: "{options?: Options;manifest: string;}",
              },
            ],
            command: "podman manifest exists",
            options: {},
          },
        },
        usages: ["podman manifest [command]"],
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
        command: "podman manifest",
        options: {},
      },
      kube: {
        commands: {
          generate: {
            usages: [
              "podman kube generate [options] {CONTAINER...|POD...|VOLUME...}",
            ],
            usageMatrix: [
              {
                argsStr: ["[options]", "{CONTAINER...|POD...|VOLUME...}"],
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
                    keyword: "containerPodVolume",
                    literal: "{CONTAINER...|POD...|VOLUME...}",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  containerPodVolume: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "containerPodVolume"],
                tsOptionsStr: "{options?: Options;containerPodVolume: string;}",
              },
            ],
            command: "podman kube generate",
            options: {
              filename: {
                keyName: "filename",
                flag: "--filename",
                typeValue: "string",
              },
              podmanOnly: { keyName: "podmanOnly", flag: "--podman-only" },
              replicas: {
                keyName: "replicas",
                flag: "--replicas",
                typeValue: "int32",
              },
              service: { keyName: "service", flag: "--service" },
              type: { keyName: "type", flag: "--type", typeValue: "string" },
            },
          },
          down: {
            usages: ["podman kube down [options] KUBEFILE|-"],
            usageMatrix: [
              {
                argsStr: ["[options]", "KUBEFILE|-"],
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
                    keyword: "kubefile",
                    literal: "KUBEFILE|-",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  kubefile: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "kubefile"],
                tsOptionsStr: "{options?: Options;kubefile: string;}",
              },
            ],
            command: "podman kube down",
            options: { force: { keyName: "force", flag: "--force" } },
          },
          apply: {
            usages: [
              "podman kube apply [options] [CONTAINER...|POD...|VOLUME...]",
            ],
            usageMatrix: [
              {
                argsStr: ["[options]", "[CONTAINER...|POD...|VOLUME...]"],
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
                    keyword: "containerPodVolume",
                    literal: "[CONTAINER...|POD...|VOLUME...]",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: true,
                    isSpread: true,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  containerPodVolume: { kind: "string[]", optional: true },
                },
                tsOptionsSort: ["options", "containerPodVolume"],
                tsOptionsStr:
                  "{options?: Options;containerPodVolume?: string[];}",
              },
            ],
            command: "podman kube apply",
            options: {
              caCertFile: {
                keyName: "caCertFile",
                flag: "--ca-cert-file",
                typeValue: "string",
              },
              file: { keyName: "file", flag: "--file", typeValue: "string" },
              kubeconfig: {
                keyName: "kubeconfig",
                flag: "--kubeconfig",
                typeValue: "string",
              },
              ns: { keyName: "ns", flag: "--ns", typeValue: "string" },
              service: { keyName: "service", flag: "--service" },
            },
          },
          play: {
            usages: ["podman kube play [options] KUBEFILE|-"],
            usageMatrix: [
              {
                argsStr: ["[options]", "KUBEFILE|-"],
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
                    keyword: "kubefile",
                    literal: "KUBEFILE|-",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  kubefile: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "kubefile"],
                tsOptionsStr: "{options?: Options;kubefile: string;}",
              },
            ],
            command: "podman kube play",
            options: {
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
              configmap: {
                keyName: "configmap",
                flag: "--configmap",
                typeValue: "Pathname",
              },
              creds: {
                keyName: "creds",
                flag: "--creds",
                typeValue: "Credentials",
              },
              force: { keyName: "force", flag: "--force" },
              ip: { keyName: "ip", flag: "--ip", typeValue: "ipSlice" },
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
                typeValue: "strings",
              },
              network: {
                keyName: "network",
                flag: "--network",
                typeValue: "stringArray",
              },
              noHosts: { keyName: "noHosts", flag: "--no-hosts" },
              publish: {
                keyName: "publish",
                flag: "--publish",
                typeValue: "strings",
              },
              publishAll: { keyName: "publishAll", flag: "--publish-all" },
              quiet: { keyName: "quiet", flag: "--quiet" },
              replace: { keyName: "replace", flag: "--replace" },
              start: { keyName: "start", flag: "--start" },
              tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
              userns: {
                keyName: "userns",
                flag: "--userns",
                typeValue: "string",
              },
              wait: { keyName: "wait", flag: "--wait" },
            },
          },
        },
        usages: ["podman kube [command]"],
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
        command: "podman kube",
        options: {},
      },
      login: {
        usages: ["podman login [options] [REGISTRY]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "[REGISTRY]"],
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
                keyword: "registry",
                literal: "[REGISTRY]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              registry: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "registry"],
            tsOptionsStr: "{options?: Options;registry?: string;}",
          },
        ],
        command: "podman login",
        options: {
          authfile: {
            keyName: "authfile",
            flag: "--authfile",
            typeValue: "string",
          },
          certDir: {
            keyName: "certDir",
            flag: "--cert-dir",
            typeValue: "string",
          },
          compatAuthFile: {
            keyName: "compatAuthFile",
            flag: "--compat-auth-file",
            typeValue: "string",
          },
          getLogin: { keyName: "getLogin", flag: "--get-login" },
          password: {
            keyName: "password",
            flag: "--password",
            typeValue: "string",
          },
          passwordStdin: { keyName: "passwordStdin", flag: "--password-stdin" },
          secret: { keyName: "secret", flag: "--secret", typeValue: "string" },
          tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
          username: {
            keyName: "username",
            flag: "--username",
            typeValue: "string",
          },
          verbose: { keyName: "verbose", flag: "--verbose" },
        },
      },
      import: {
        usages: ["podman import [options] PATH [REFERENCE]"],
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
        command: "podman import",
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
      generate: {
        usages: ["podman generate [command]"],
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
        command: "podman generate",
        options: {},
        commands: {
          systemd: {
            usages: ["podman generate systemd [options] {CONTAINER|POD}"],
            usageMatrix: [
              {
                argsStr: ["[options]", "{CONTAINER|POD}"],
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
                    keyword: "containerPod",
                    literal: "{CONTAINER|POD}",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  containerPod: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "containerPod"],
                tsOptionsStr: "{options?: Options;containerPod: string;}",
              },
            ],
            command: "podman generate systemd",
            options: {
              after: {
                keyName: "after",
                flag: "--after",
                typeValue: "stringArray",
              },
              containerPrefix: {
                keyName: "containerPrefix",
                flag: "--container-prefix",
                typeValue: "string",
              },
              env: { keyName: "env", flag: "--env", typeValue: "stringArray" },
              files: { keyName: "files", flag: "--files" },
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
              name: { keyName: "name", flag: "--name" },
              new: { keyName: "new", flag: "--new" },
              noHeader: { keyName: "noHeader", flag: "--no-header" },
              podPrefix: {
                keyName: "podPrefix",
                flag: "--pod-prefix",
                typeValue: "string",
              },
              requires: {
                keyName: "requires",
                flag: "--requires",
                typeValue: "stringArray",
              },
              restartPolicy: {
                keyName: "restartPolicy",
                flag: "--restart-policy",
                typeValue: "string",
              },
              restartSec: {
                keyName: "restartSec",
                flag: "--restart-sec",
                typeValue: "uint",
              },
              separator: {
                keyName: "separator",
                flag: "--separator",
                typeValue: "string",
              },
              startTimeout: {
                keyName: "startTimeout",
                flag: "--start-timeout",
                typeValue: "uint",
              },
              stopTimeout: {
                keyName: "stopTimeout",
                flag: "--stop-timeout",
                typeValue: "uint",
              },
              template: { keyName: "template", flag: "--template" },
              wants: {
                keyName: "wants",
                flag: "--wants",
                typeValue: "stringArray",
              },
            },
          },
          spec: {
            usages: ["podman generate spec [options] {CONTAINER|POD}"],
            usageMatrix: [
              {
                argsStr: ["[options]", "{CONTAINER|POD}"],
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
                    keyword: "containerPod",
                    literal: "{CONTAINER|POD}",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  containerPod: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "containerPod"],
                tsOptionsStr: "{options?: Options;containerPod: string;}",
              },
            ],
            command: "podman generate spec",
            options: {
              compact: { keyName: "compact", flag: "--compact" },
              filename: {
                keyName: "filename",
                flag: "--filename",
                typeValue: "string",
              },
              name: { keyName: "name", flag: "--name" },
            },
          },
          kube: {
            usages: [
              "podman generate kube [options] {CONTAINER...|POD...|VOLUME...}",
            ],
            usageMatrix: [
              {
                argsStr: ["[options]", "{CONTAINER...|POD...|VOLUME...}"],
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
                    keyword: "containerPodVolume",
                    literal: "{CONTAINER...|POD...|VOLUME...}",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  containerPodVolume: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "containerPodVolume"],
                tsOptionsStr: "{options?: Options;containerPodVolume: string;}",
              },
            ],
            command: "podman generate kube",
            options: {
              filename: {
                keyName: "filename",
                flag: "--filename",
                typeValue: "string",
              },
              podmanOnly: { keyName: "podmanOnly", flag: "--podman-only" },
              replicas: {
                keyName: "replicas",
                flag: "--replicas",
                typeValue: "int32",
              },
              service: { keyName: "service", flag: "--service" },
              type: { keyName: "type", flag: "--type", typeValue: "string" },
            },
          },
        },
      },
      container: {
        commands: {
          unpause: {
            usages: [
              "podman container unpause [options] CONTAINER [CONTAINER...]",
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
            usages: [
              "podman container stop [options] CONTAINER [CONTAINER...]",
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
                argsStr: [
                  "[options]",
                  "CONTAINER",
                  "[FORMAT-DESCRIPTORS|ARGS...]",
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
                tsOptionsSort: [
                  "options",
                  "container",
                  "formatDescriptorsArgs",
                ],
                tsOptionsStr:
                  "{options?: Options;container: string;formatDescriptorsArgs?: string[];}",
              },
            ],
            command: "podman container top",
            options: {},
          },
          inspect: {
            usages: [
              "podman container inspect [options] CONTAINER [CONTAINER...]",
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
            command: "podman container inspect",
            options: {
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
              export: {
                keyName: "export",
                flag: "--export",
                typeValue: "string",
              },
              fileLocks: { keyName: "fileLocks", flag: "--file-locks" },
              ignoreRootfs: {
                keyName: "ignoreRootfs",
                flag: "--ignore-rootfs",
              },
              ignoreVolumes: {
                keyName: "ignoreVolumes",
                flag: "--ignore-volumes",
              },
              keep: { keyName: "keep", flag: "--keep" },
              leaveRunning: {
                keyName: "leaveRunning",
                flag: "--leave-running",
              },
              preCheckpoint: {
                keyName: "preCheckpoint",
                flag: "--pre-checkpoint",
              },
              printStats: { keyName: "printStats", flag: "--print-stats" },
              tcpEstablished: {
                keyName: "tcpEstablished",
                flag: "--tcp-established",
              },
              withPrevious: {
                keyName: "withPrevious",
                flag: "--with-previous",
              },
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
                tsOptionsSort: [
                  "options",
                  "containerSrcPath",
                  "containerDestPath",
                ],
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
            usages: [
              "podman container create [options] IMAGE [COMMAND [ARG...]]",
            ],
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
              noHealthcheck: {
                keyName: "noHealthcheck",
                flag: "--no-healthcheck",
              },
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
              tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
              tmpfs: { keyName: "tmpfs", flag: "--tmpfs", typeValue: "tmpfs" },
              tty: { keyName: "tty", flag: "--tty" },
              tz: { keyName: "tz", flag: "--tz", typeValue: "string" },
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
              umask: { keyName: "umask", flag: "--umask", typeValue: "string" },
              unsetenv: {
                keyName: "unsetenv",
                flag: "--unsetenv",
                typeValue: "stringArray",
              },
              unsetenvAll: { keyName: "unsetenvAll", flag: "--unsetenv-all" },
              user: { keyName: "user", flag: "--user", typeValue: "string" },
              userns: {
                keyName: "userns",
                flag: "--userns",
                typeValue: "string",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
                tsOptionsStr:
                  "{options?: Options;container: string;name: string;}",
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
              noHealthcheck: {
                keyName: "noHealthcheck",
                flag: "--no-healthcheck",
              },
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
              tlsVerify: { keyName: "tlsVerify", flag: "--tls-verify" },
              tmpfs: { keyName: "tmpfs", flag: "--tmpfs", typeValue: "tmpfs" },
              tty: { keyName: "tty", flag: "--tty" },
              tz: { keyName: "tz", flag: "--tz", typeValue: "string" },
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
              umask: { keyName: "umask", flag: "--umask", typeValue: "string" },
              unsetenv: {
                keyName: "unsetenv",
                flag: "--unsetenv",
                typeValue: "stringArray",
              },
              unsetenvAll: { keyName: "unsetenvAll", flag: "--unsetenv-all" },
              user: { keyName: "user", flag: "--user", typeValue: "string" },
              userns: {
                keyName: "userns",
                flag: "--userns",
                typeValue: "string",
              },
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
            usages: [
              "podman container init [options] CONTAINER [CONTAINER...]",
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
            command: "podman container init",
            options: { all: { keyName: "all", flag: "--all" } },
          },
          kill: {
            usages: [
              "podman container kill [options] CONTAINER [CONTAINER...]",
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
            command: "podman container kill",
            options: {
              all: { keyName: "all", flag: "--all" },
              cidfile: {
                keyName: "cidfile",
                flag: "--cidfile",
                typeValue: "stringArray",
              },
              signal: {
                keyName: "signal",
                flag: "--signal",
                typeValue: "string",
              },
            },
          },
          pause: {
            usages: [
              "podman container pause [options] CONTAINER [CONTAINER...]",
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
            usages: [
              "podman container wait [options] CONTAINER [CONTAINER...]",
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
              output: {
                keyName: "output",
                flag: "--output",
                typeValue: "string",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
              author: {
                keyName: "author",
                flag: "--author",
                typeValue: "string",
              },
              change: {
                keyName: "change",
                flag: "--change",
                typeValue: "stringArray",
              },
              config: {
                keyName: "config",
                flag: "--config",
                typeValue: "file",
              },
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "Format",
              },
              iidfile: {
                keyName: "iidfile",
                flag: "--iidfile",
                typeValue: "file",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
            usages: [
              "podman container restart [options] CONTAINER [CONTAINER...]",
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
                argsStr: [
                  "[options]",
                  "CONTAINER|IMAGE",
                  "[CONTAINER|IMAGE...]",
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
              ignoreRootfs: {
                keyName: "ignoreRootfs",
                flag: "--ignore-rootfs",
              },
              ignoreStaticIp: {
                keyName: "ignoreStaticIp",
                flag: "--ignore-static-ip",
              },
              ignoreStaticMac: {
                keyName: "ignoreStaticMac",
                flag: "--ignore-static-mac",
              },
              ignoreVolumes: {
                keyName: "ignoreVolumes",
                flag: "--ignore-volumes",
              },
              import: {
                keyName: "import",
                flag: "--import",
                typeValue: "string",
              },
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
            usages: [
              "podman container start [options] CONTAINER [CONTAINER...]",
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
      },
      network: {
        commands: {
          rm: {
            usages: ["podman network rm [options] NETWORK [NETWORK...]"],
            usageMatrix: [
              {
                argsStr: ["[options]", "NETWORK", "[NETWORK...]"],
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
                    keyword: "network",
                    literal: "NETWORK",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                  {
                    keyword: "network",
                    literal: "[NETWORK...]",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: true,
                    isSpread: true,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  network: { kind: "string[]", optional: false },
                },
                tsOptionsSort: ["options", "network"],
                tsOptionsStr: "{options?: Options;network: string[];}",
              },
            ],
            command: "podman network rm",
            options: {
              force: { keyName: "force", flag: "--force" },
              time: { keyName: "time", flag: "--time", typeValue: "int" },
            },
          },
          ls: {
            usages: ["podman network ls [options]"],
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
            command: "podman network ls",
            options: {
              filter: {
                keyName: "filter",
                flag: "--filter",
                typeValue: "stringArray",
              },
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
              noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
              noheading: { keyName: "noheading", flag: "--noheading" },
              quiet: { keyName: "quiet", flag: "--quiet" },
            },
          },
          prune: {
            usages: ["podman network prune [options]"],
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
            command: "podman network prune",
            options: {
              filter: {
                keyName: "filter",
                flag: "--filter",
                typeValue: "stringArray",
              },
              force: { keyName: "force", flag: "--force" },
            },
          },
          create: {
            usages: ["podman network create [options] [NAME]"],
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
            command: "podman network create",
            options: {
              disableDns: { keyName: "disableDns", flag: "--disable-dns" },
              dns: { keyName: "dns", flag: "--dns", typeValue: "strings" },
              driver: {
                keyName: "driver",
                flag: "--driver",
                typeValue: "string",
              },
              gateway: {
                keyName: "gateway",
                flag: "--gateway",
                typeValue: "ipSlice",
              },
              ignore: { keyName: "ignore", flag: "--ignore" },
              interfaceName: {
                keyName: "interfaceName",
                flag: "--interface-name",
                typeValue: "string",
              },
              internal: { keyName: "internal", flag: "--internal" },
              ipRange: {
                keyName: "ipRange",
                flag: "--ip-range",
                typeValue: "stringArray",
              },
              ipamDriver: {
                keyName: "ipamDriver",
                flag: "--ipam-driver",
                typeValue: "string",
              },
              ipv6: { keyName: "ipv6", flag: "--ipv6" },
              label: {
                keyName: "label",
                flag: "--label",
                typeValue: "stringArray",
              },
              opt: { keyName: "opt", flag: "--opt", typeValue: "stringArray" },
              route: {
                keyName: "route",
                flag: "--route",
                typeValue: "stringArray",
              },
              subnet: {
                keyName: "subnet",
                flag: "--subnet",
                typeValue: "stringArray",
              },
            },
          },
          update: {
            usages: ["podman network update [options] NETWORK"],
            usageMatrix: [
              {
                argsStr: ["[options]", "NETWORK"],
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
                    keyword: "network",
                    literal: "NETWORK",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  network: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "network"],
                tsOptionsStr: "{options?: Options;network: string;}",
              },
            ],
            command: "podman network update",
            options: {
              dnsAdd: {
                keyName: "dnsAdd",
                flag: "--dns-add",
                typeValue: "strings",
              },
              dnsDrop: {
                keyName: "dnsDrop",
                flag: "--dns-drop",
                typeValue: "strings",
              },
            },
          },
          inspect: {
            usages: ["podman network inspect [options] NETWORK [NETWORK...]"],
            usageMatrix: [
              {
                argsStr: ["[options]", "NETWORK", "[NETWORK...]"],
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
                    keyword: "network",
                    literal: "NETWORK",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                  {
                    keyword: "network",
                    literal: "[NETWORK...]",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: true,
                    isSpread: true,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  network: { kind: "string[]", optional: false },
                },
                tsOptionsSort: ["options", "network"],
                tsOptionsStr: "{options?: Options;network: string[];}",
              },
            ],
            command: "podman network inspect",
            options: {
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
            },
          },
          exists: {
            usages: ["podman network exists NETWORK"],
            usageMatrix: [
              {
                argsStr: ["NETWORK"],
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
                    keyword: "network",
                    literal: "NETWORK",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  network: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "network"],
                tsOptionsStr: "{options?: Options;network: string;}",
              },
            ],
            command: "podman network exists",
            options: {},
          },
          connect: {
            usages: ["podman network connect [options] NETWORK CONTAINER"],
            usageMatrix: [
              {
                argsStr: ["[options]", "NETWORK", "CONTAINER"],
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
                    keyword: "network",
                    literal: "NETWORK",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
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
                  network: { kind: "string", optional: false },
                  container: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "network", "container"],
                tsOptionsStr:
                  "{options?: Options;network: string;container: string;}",
              },
            ],
            command: "podman network connect",
            options: {
              alias: {
                keyName: "alias",
                flag: "--alias",
                typeValue: "strings",
              },
              ip: { keyName: "ip", flag: "--ip", typeValue: "ip" },
              ip6: { keyName: "ip6", flag: "--ip6", typeValue: "ip" },
              macAddress: {
                keyName: "macAddress",
                flag: "--mac-address",
                typeValue: "string",
              },
            },
          },
          disconnect: {
            usages: ["podman network disconnect [options] NETWORK CONTAINER"],
            usageMatrix: [
              {
                argsStr: ["[options]", "NETWORK", "CONTAINER"],
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
                    keyword: "network",
                    literal: "NETWORK",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
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
                  network: { kind: "string", optional: false },
                  container: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "network", "container"],
                tsOptionsStr:
                  "{options?: Options;network: string;container: string;}",
              },
            ],
            command: "podman network disconnect",
            options: { force: { keyName: "force", flag: "--force" } },
          },
        },
        usages: ["podman network [command]"],
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
        command: "podman network",
        options: {},
      },
      pause: {
        usages: ["podman pause [options] CONTAINER [CONTAINER...]"],
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
        command: "podman pause",
        options: {
          all: { keyName: "all", flag: "--all" },
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
        },
      },
      rm: {
        usages: ["podman rm [options] CONTAINER [CONTAINER...]"],
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
        command: "podman rm",
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
      unpause: {
        usages: ["podman unpause [options] CONTAINER [CONTAINER...]"],
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
        command: "podman unpause",
        options: {
          all: { keyName: "all", flag: "--all" },
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
        },
      },
      load: {
        usages: ["podman load [options]"],
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
        command: "podman load",
        options: {
          input: { keyName: "input", flag: "--input", typeValue: "string" },
          quiet: { keyName: "quiet", flag: "--quiet" },
        },
      },
      history: {
        usages: ["podman history [options] IMAGE"],
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
        command: "podman history",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          human: { keyName: "human", flag: "--human" },
          noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
          quiet: { keyName: "quiet", flag: "--quiet" },
        },
      },
      pod: {
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
              signal: {
                keyName: "signal",
                flag: "--signal",
                typeValue: "string",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
              gidmap: {
                keyName: "gidmap",
                flag: "--gidmap",
                typeValue: "strings",
              },
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
              sysctl: {
                keyName: "sysctl",
                flag: "--sysctl",
                typeValue: "strings",
              },
              uidmap: {
                keyName: "uidmap",
                flag: "--uidmap",
                typeValue: "strings",
              },
              userns: {
                keyName: "userns",
                flag: "--userns",
                typeValue: "string",
              },
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
            usages: [
              "podman pod top [options] POD [FORMAT-DESCRIPTORS|ARGS...]",
            ],
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
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
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
              gidmap: {
                keyName: "gidmap",
                flag: "--gidmap",
                typeValue: "strings",
              },
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
              sysctl: {
                keyName: "sysctl",
                flag: "--sysctl",
                typeValue: "strings",
              },
              uidmap: {
                keyName: "uidmap",
                flag: "--uidmap",
                typeValue: "strings",
              },
              userns: {
                keyName: "userns",
                flag: "--userns",
                typeValue: "string",
              },
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
      },
      search: {
        usages: ["podman search [options] TERM"],
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
        command: "podman search",
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
      volume: {
        commands: {
          prune: {
            usages: ["podman volume prune [options]"],
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
            command: "podman volume prune",
            options: {
              filter: {
                keyName: "filter",
                flag: "--filter",
                typeValue: "stringArray",
              },
              force: { keyName: "force", flag: "--force" },
            },
          },
          exists: {
            usages: ["podman volume exists VOLUME"],
            usageMatrix: [
              {
                argsStr: ["VOLUME"],
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
                    keyword: "volume",
                    literal: "VOLUME",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  volume: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "volume"],
                tsOptionsStr: "{options?: Options;volume: string;}",
              },
            ],
            command: "podman volume exists",
            options: {},
          },
          reload: {
            usages: ["podman volume reload"],
            usageMatrix: [
              {
                argsStr: [""],
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
                    keyword: "",
                    literal: "",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  "": { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", ""],
                tsOptionsStr: "{options?: Options;: string;}",
              },
            ],
            command: "podman volume reload",
            options: {},
          },
          inspect: {
            usages: ["podman volume inspect [options] VOLUME [VOLUME...]"],
            usageMatrix: [
              {
                argsStr: ["[options]", "VOLUME", "[VOLUME...]"],
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
                    keyword: "volume",
                    literal: "VOLUME",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                  {
                    keyword: "volume",
                    literal: "[VOLUME...]",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: true,
                    isSpread: true,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  volume: { kind: "string[]", optional: false },
                },
                tsOptionsSort: ["options", "volume"],
                tsOptionsStr: "{options?: Options;volume: string[];}",
              },
            ],
            command: "podman volume inspect",
            options: {
              all: { keyName: "all", flag: "--all" },
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
            },
          },
          create: {
            usages: ["podman volume create [options] [NAME]"],
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
            command: "podman volume create",
            options: {
              driver: {
                keyName: "driver",
                flag: "--driver",
                typeValue: "string",
              },
              ignore: { keyName: "ignore", flag: "--ignore" },
              label: {
                keyName: "label",
                flag: "--label",
                typeValue: "stringArray",
              },
              opt: { keyName: "opt", flag: "--opt", typeValue: "stringArray" },
            },
          },
          rm: {
            usages: ["podman volume rm [options] VOLUME [VOLUME...]"],
            usageMatrix: [
              {
                argsStr: ["[options]", "VOLUME", "[VOLUME...]"],
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
                    keyword: "volume",
                    literal: "VOLUME",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                  {
                    keyword: "volume",
                    literal: "[VOLUME...]",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: true,
                    isSpread: true,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  volume: { kind: "string[]", optional: false },
                },
                tsOptionsSort: ["options", "volume"],
                tsOptionsStr: "{options?: Options;volume: string[];}",
              },
            ],
            command: "podman volume rm",
            options: {
              all: { keyName: "all", flag: "--all" },
              force: { keyName: "force", flag: "--force" },
              time: { keyName: "time", flag: "--time", typeValue: "int" },
            },
          },
          ls: {
            usages: ["podman volume ls [options]"],
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
            command: "podman volume ls",
            options: {
              filter: {
                keyName: "filter",
                flag: "--filter",
                typeValue: "stringArray",
              },
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
              noheading: { keyName: "noheading", flag: "--noheading" },
              quiet: { keyName: "quiet", flag: "--quiet" },
            },
          },
        },
        usages: ["podman volume [command]"],
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
        command: "podman volume",
        options: {},
      },
      rename: {
        usages: ["podman rename CONTAINER NAME"],
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
        command: "podman rename",
        options: {},
      },
      inspect: {
        usages: [
          "podman inspect [options] {CONTAINER|IMAGE|POD|NETWORK|VOLUME} [...]",
        ],
        usageMatrix: [
          {
            argsStr: [
              "[options]",
              "{CONTAINER|IMAGE|POD|NETWORK|VOLUME}",
              "[...]",
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
                keyword: "containerImagePodNetworkVolume",
                literal: "{CONTAINER|IMAGE|POD|NETWORK|VOLUME}",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "",
                literal: "[...]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: true,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              containerImagePodNetworkVolume: {
                kind: "string",
                optional: false,
              },
              "": { kind: "string[]", optional: true },
            },
            tsOptionsSort: ["options", "containerImagePodNetworkVolume", ""],
            tsOptionsStr:
              "{options?: Options;containerImagePodNetworkVolume: string;?: string[];}",
          },
        ],
        command: "podman inspect",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          size: { keyName: "size", flag: "--size" },
          type: { keyName: "type", flag: "--type", typeValue: "string" },
        },
      },
      stats: {
        usages: ["podman stats [options] [CONTAINER...]"],
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
        command: "podman stats",
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
      secret: {
        commands: {
          ls: {
            usages: ["podman secret ls [options]"],
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
            command: "podman secret ls",
            options: {
              filter: {
                keyName: "filter",
                flag: "--filter",
                typeValue: "stringArray",
              },
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
              noheading: { keyName: "noheading", flag: "--noheading" },
              quiet: { keyName: "quiet", flag: "--quiet" },
            },
          },
          rm: {
            usages: ["podman secret rm [options] SECRET [SECRET...]"],
            usageMatrix: [
              {
                argsStr: ["[options]", "SECRET", "[SECRET...]"],
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
                    keyword: "secret",
                    literal: "SECRET",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                  {
                    keyword: "secret",
                    literal: "[SECRET...]",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: true,
                    isSpread: true,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  secret: { kind: "string[]", optional: false },
                },
                tsOptionsSort: ["options", "secret"],
                tsOptionsStr: "{options?: Options;secret: string[];}",
              },
            ],
            command: "podman secret rm",
            options: {
              all: { keyName: "all", flag: "--all" },
              ignore: { keyName: "ignore", flag: "--ignore" },
            },
          },
          inspect: {
            usages: ["podman secret inspect [options] SECRET [SECRET...]"],
            usageMatrix: [
              {
                argsStr: ["[options]", "SECRET", "[SECRET...]"],
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
                    keyword: "secret",
                    literal: "SECRET",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                  {
                    keyword: "secret",
                    literal: "[SECRET...]",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: true,
                    isSpread: true,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  secret: { kind: "string[]", optional: false },
                },
                tsOptionsSort: ["options", "secret"],
                tsOptionsStr: "{options?: Options;secret: string[];}",
              },
            ],
            command: "podman secret inspect",
            options: {
              format: {
                keyName: "format",
                flag: "--format",
                typeValue: "string",
              },
              pretty: { keyName: "pretty", flag: "--pretty" },
              showsecret: { keyName: "showsecret", flag: "--showsecret" },
            },
          },
          create: {
            usages: ["podman secret create [options] NAME FILE|-"],
            usageMatrix: [
              {
                argsStr: ["[options]", "NAME", "FILE|-"],
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
                    literal: "NAME",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                  {
                    keyword: "file",
                    literal: "FILE|-",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  name: { kind: "string", optional: false },
                  file: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "name", "file"],
                tsOptionsStr: "{options?: Options;name: string;file: string;}",
              },
            ],
            command: "podman secret create",
            options: {
              driver: {
                keyName: "driver",
                flag: "--driver",
                typeValue: "string",
              },
              driverOpts: {
                keyName: "driverOpts",
                flag: "--driver-opts",
                typeValue: "stringToString",
              },
              env: { keyName: "env", flag: "--env" },
              label: {
                keyName: "label",
                flag: "--label",
                typeValue: "stringArray",
              },
              replace: { keyName: "replace", flag: "--replace" },
            },
          },
          exists: {
            usages: ["podman secret exists SECRET"],
            usageMatrix: [
              {
                argsStr: ["SECRET"],
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
                    keyword: "secret",
                    literal: "SECRET",
                    kind: "argument",
                    isOptionsArg: false,
                    isOptional: false,
                    isSpread: false,
                  },
                ],
                tsOptions: {
                  options: { kind: "Options", optional: true },
                  secret: { kind: "string", optional: false },
                },
                tsOptionsSort: ["options", "secret"],
                tsOptionsStr: "{options?: Options;secret: string;}",
              },
            ],
            command: "podman secret exists",
            options: {},
          },
        },
        usages: ["podman secret [command]"],
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
        command: "podman secret",
        options: {},
      },
      create: {
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
            tsOptionsStr:
              "{options?: Options;image: string;commandArg?: string;}",
          },
        ],
        command: "podman create",
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
      images: {
        usages: ["podman images [options] [IMAGE]"],
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
        command: "podman images",
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
      cp: {
        usages: [
          "podman cp [options] [CONTAINER:]SRC_PATH [CONTAINER:]DEST_PATH",
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
        command: "podman cp",
        options: {
          archive: { keyName: "archive", flag: "--archive" },
          overwrite: { keyName: "overwrite", flag: "--overwrite" },
        },
      },
      update: {
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
      pull: {
        usages: ["podman pull [options] IMAGE [IMAGE...]"],
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
        command: "podman pull",
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
      exec: {
        usages: ["podman exec [options] CONTAINER [COMMAND [ARG...]]"],
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
        command: "podman exec",
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
      version: {
        usages: ["podman version [options]"],
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
        command: "podman version",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
        },
      },
      start: {
        usages: ["podman start [options] CONTAINER [CONTAINER...]"],
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
        command: "podman start",
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
      wait: {
        usages: ["podman wait [options] CONTAINER [CONTAINER...]"],
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
        command: "podman wait",
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
      save: {
        usages: ["podman save [options] IMAGE [IMAGE...]"],
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
        command: "podman save",
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
      kill: {
        usages: ["podman kill [options] CONTAINER [CONTAINER...]"],
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
        command: "podman kill",
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
      init: {
        usages: ["podman init [options] CONTAINER [CONTAINER...]"],
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
        command: "podman init",
        options: { all: { keyName: "all", flag: "--all" } },
      },
      build: {
        usages: ["podman build [options] [CONTEXT]"],
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
        command: "podman build",
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
      run: {
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
              options: { kind: "Options", optional: true },
              image: { kind: "string", optional: false },
              commandArg: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "image", "commandArg"],
            tsOptionsStr:
              "{options?: Options;image: string;commandArg?: string;}",
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
      logs: {
        usages: ["podman logs [options] CONTAINER"],
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
        command: "podman logs",
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
      ps: {
        usages: ["podman ps [options]"],
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
        command: "podman ps",
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
      tag: {
        usages: ["podman tag IMAGE TARGET_NAME [TARGET_NAME...]"],
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
        command: "podman tag",
        options: {},
      },
      diff: {
        usages: ["podman diff [options] {CONTAINER|IMAGE} [{CONTAINER|IMAGE}]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "{CONTAINER|IMAGE}", "[{CONTAINER|IMAGE}]"],
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
                literal: "{CONTAINER|IMAGE}",
                kind: "argument",
                isOptionsArg: false,
                isOptional: false,
                isSpread: false,
              },
              {
                keyword: "containerImage",
                literal: "[{CONTAINER|IMAGE}]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
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
        command: "podman diff",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
        },
      },
      port: {
        usages: ["podman port [options] CONTAINER [PORT]"],
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
        command: "podman port",
        options: { all: { keyName: "all", flag: "--all" } },
      },
      help: {
        usages: ["podman help [command] [flags]"],
        usageMatrix: [
          {
            argsStr: ["[command]", "[flags]"],
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
              {
                keyword: "flags",
                literal: "[flags]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              command: { kind: "string", optional: true },
              flags: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "command", "flags"],
            tsOptionsStr:
              "{options?: Options;command?: string;flags?: string;}",
          },
        ],
        command: "podman help",
        options: {},
      },
      export: {
        usages: ["podman export [options] CONTAINER"],
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
        command: "podman export",
        options: {
          output: { keyName: "output", flag: "--output", typeValue: "string" },
        },
      },
      logout: {
        usages: ["podman logout [options] [REGISTRY]"],
        usageMatrix: [
          {
            argsStr: ["[options]", "[REGISTRY]"],
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
                keyword: "registry",
                literal: "[REGISTRY]",
                kind: "argument",
                isOptionsArg: false,
                isOptional: true,
                isSpread: false,
              },
            ],
            tsOptions: {
              options: { kind: "Options", optional: true },
              registry: { kind: "string", optional: true },
            },
            tsOptionsSort: ["options", "registry"],
            tsOptionsStr: "{options?: Options;registry?: string;}",
          },
        ],
        command: "podman logout",
        options: {
          all: { keyName: "all", flag: "--all" },
          authfile: {
            keyName: "authfile",
            flag: "--authfile",
            typeValue: "string",
          },
          compatAuthFile: {
            keyName: "compatAuthFile",
            flag: "--compat-auth-file",
            typeValue: "string",
          },
        },
      },
      commit: {
        usages: ["podman commit [options] CONTAINER [IMAGE]"],
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
        command: "podman commit",
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
      untag: {
        usages: ["podman untag IMAGE [IMAGE...]"],
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
        command: "podman untag",
        options: {},
      },
      stop: {
        usages: ["podman stop [options] CONTAINER [CONTAINER...]"],
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
        command: "podman stop",
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
      attach: {
        usages: ["podman attach [options] CONTAINER"],
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
        command: "podman attach",
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
      rmi: {
        usages: ["podman rmi [options] IMAGE [IMAGE...]"],
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
        command: "podman rmi",
        options: {
          all: { keyName: "all", flag: "--all" },
          force: { keyName: "force", flag: "--force" },
          ignore: { keyName: "ignore", flag: "--ignore" },
          noPrune: { keyName: "noPrune", flag: "--no-prune" },
        },
      },
      push: {
        usages: ["podman push [options] IMAGE [DESTINATION]"],
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
        command: "podman push",
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
      restart: {
        usages: ["podman restart [options] CONTAINER [CONTAINER...]"],
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
        command: "podman restart",
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
      top: {
        usages: ["podman top [options] CONTAINER [FORMAT-DESCRIPTORS|ARGS...]"],
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
        command: "podman top",
        options: {},
      },
      events: {
        usages: ["podman events [options]"],
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
        command: "podman events",
        options: {
          filter: {
            keyName: "filter",
            flag: "--filter",
            typeValue: "stringArray",
          },
          format: { keyName: "format", flag: "--format", typeValue: "string" },
          noTrunc: { keyName: "noTrunc", flag: "--no-trunc" },
          since: { keyName: "since", flag: "--since", typeValue: "string" },
          stream: { keyName: "stream", flag: "--stream" },
          until: { keyName: "until", flag: "--until", typeValue: "string" },
        },
      },
      info: {
        usages: ["podman info [options]"],
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
        command: "podman info",
        options: {
          format: { keyName: "format", flag: "--format", typeValue: "string" },
        },
      },
    },
    usages: ["podman [options] [command]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "[command]"],
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
    command: "podman",
    options: {
      config: { keyName: "config", flag: "--config", typeValue: "string" },
      connection: {
        keyName: "connection",
        flag: "--connection",
        typeValue: "string",
      },
      help: { keyName: "help", flag: "--help" },
      identity: {
        keyName: "identity",
        flag: "--identity",
        typeValue: "string",
      },
      logLevel: {
        keyName: "logLevel",
        flag: "--log-level",
        typeValue: "string",
      },
      out: { keyName: "out", flag: "--out", typeValue: "string" },
      ssh: { keyName: "ssh", flag: "--ssh", typeValue: "string" },
      storageOpt: {
        keyName: "storageOpt",
        flag: "--storage-opt",
        typeValue: "stringArray",
      },
      url: { keyName: "url", flag: "--url", typeValue: "string" },
      version: { keyName: "version", flag: "--version" },
    },
  };

  type Options = {
    config?: string; // string
    connection?: string; // string
    help?: boolean; // [null]
    identity?: string; // string
    logLevel?: string; // string
    out?: string; // string
    ssh?: string; // string
    storageOpt?: string[]; // stringArray
    url?: string; // string
    version?: boolean; // [null]
  };

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
