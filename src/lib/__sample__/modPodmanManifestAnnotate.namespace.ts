export namespace modPodmanManifestAnnotate {
  const conf = {
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
      arch: { keyName: "arch", flag: "--arch", typeValue: "architecture" },
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
      subject: { keyName: "subject", flag: "--subject", typeValue: "subject" },
      variant: { keyName: "variant", flag: "--variant", typeValue: "Variant" },
    },
  };

  type Options = {
    annotation?: unknown; // annotation
    arch?: unknown; // architecture
    features?: unknown; // features
    index?: boolean; // [null]
    os?: unknown; // OS
    osFeatures?: unknown; // features
    osVersion?: unknown; // version
    subject?: unknown; // subject
    variant?: unknown; // Variant
  };

  export type optionsArgument = {
    options?: Options;
    list: string;
    imageorartifact: string;
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
