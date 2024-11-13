export namespace modPodmanContainerExec {
  const conf = {
    usages: ["podman container exec [options] CONTAINER [COMMAND [ARG...]]"],
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
      workdir: { keyName: "workdir", flag: "--workdir", typeValue: "string" },
    },
  };

  type Options = {
    detach?: boolean; // [null]
    detachKeys?: string; // string
    env?: string[]; // stringArray
    envFile?: string[]; // stringArray
    interactive?: boolean; // [null]
    preserveFd?: unknown; // uints
    privileged?: boolean; // [null]
    tty?: boolean; // [null]
    user?: string; // string
    workdir?: string; // string
  };

  export type optionsArgument = {
    options?: Options;
    container: string;
    commandArg?: string;
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
