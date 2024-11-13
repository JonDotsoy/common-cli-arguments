export namespace modpodmansystemconnectionadd {
  const conf = {
    usages: ["podman system connection add [options] NAME DESTINATION"],
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
        tsOptionsStr: "{options?: Options;name: string;destination: string;}",
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
  };

  type Options = {
    default?: boolean; // [null]
    identity?: string; // string
    port?: number; // int
    socketPath?: string; // string
  };

  export type optionsArgument = {
    options?: Options;
    name: string;
    destination: string;
  };

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
