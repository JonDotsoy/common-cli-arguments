export namespace modPodmanCommit {
  const conf = {
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
        tsOptionsStr: "{options?: Options;container: string;image?: string;}",
      },
    ],
    command: "podman commit",
    options: {
      author: { keyName: "author", flag: "--author", typeValue: "string" },
      change: { keyName: "change", flag: "--change", typeValue: "stringArray" },
      config: { keyName: "config", flag: "--config", typeValue: "file" },
      format: { keyName: "format", flag: "--format", typeValue: "Format" },
      iidfile: { keyName: "iidfile", flag: "--iidfile", typeValue: "file" },
      includeVolumes: { keyName: "includeVolumes", flag: "--include-volumes" },
      message: { keyName: "message", flag: "--message", typeValue: "string" },
      pause: { keyName: "pause", flag: "--pause" },
      quiet: { keyName: "quiet", flag: "--quiet" },
      squash: { keyName: "squash", flag: "--squash" },
    },
  };

  type Options = {
    author?: string; // string
    change?: string[]; // stringArray
    config?: unknown; // file
    format?: unknown; // Format
    iidfile?: unknown; // file
    includeVolumes?: boolean; // [null]
    message?: string; // string
    pause?: boolean; // [null]
    quiet?: boolean; // [null]
    squash?: boolean; // [null]
  };

  export type optionsArgument = {
    options?: Options;
    container: string;
    image?: string;
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
