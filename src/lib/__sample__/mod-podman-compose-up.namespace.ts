export namespace modpodmancomposeup {
  const conf = {
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
      attach: { keyName: "attach", flag: "--attach", typeValue: "stringArray" },
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
  };

  type Options = {
    abortOnContainerExit?: boolean; // [null]
    abortOnContainerFailure?: boolean; // [null]
    alwaysRecreateDeps?: boolean; // [null]
    attach?: string[]; // stringArray
    attachDependencies?: boolean; // [null]
    build?: boolean; // [null]
    detach?: boolean; // [null]
    dryRun?: boolean; // [null]
    exitCodeFrom?: string; // string
    forceRecreate?: boolean; // [null]
    menu?: boolean; // [null]
    noAttach?: string[]; // stringArray
    noBuild?: boolean; // [null]
    noColor?: boolean; // [null]
    noDeps?: boolean; // [null]
    noLogPrefix?: boolean; // [null]
    noRecreate?: boolean; // [null]
    noStart?: boolean; // [null]
    pull?: string; // string
    quietPull?: boolean; // [null]
    removeOrphans?: boolean; // [null]
    renewAnonVolumes?: boolean; // [null]
    scale?: unknown; // scale
    timeout?: number; // int
    timestamps?: boolean; // [null]
    wait?: boolean; // [null]
    waitTimeout?: number; // int
    watch?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; service?: string[] };

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
