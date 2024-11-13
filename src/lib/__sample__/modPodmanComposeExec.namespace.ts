export namespace modPodmanComposeExec {
  const conf = {
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
      workdir: { keyName: "workdir", flag: "--workdir", typeValue: "string" },
    },
  };

  type Options = {
    detach?: boolean; // [null]
    dryRun?: boolean; // [null]
    env?: string[]; // stringArray
    index?: number; // int
    noTTY?: unknown; // docker
    privileged?: boolean; // [null]
    user?: string; // string
    workdir?: string; // string
  };

  export type optionsArgument = {
    options?: Options;
    service: string;
    command: string;
    args?: string[];
  };

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
