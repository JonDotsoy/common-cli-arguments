export namespace modPodmanManifestAdd {
  const conf = {
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
      arch: { keyName: "arch", flag: "--arch", typeValue: "architecture" },
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
      variant: { keyName: "variant", flag: "--variant", typeValue: "Variant" },
    },
  };

  type Options = {
    all?: boolean; // [null]
    annotation?: unknown; // annotation
    arch?: unknown; // architecture
    artifact?: boolean; // [null]
    artifactConfig?: string; // string
    artifactConfigType?: string; // string
    artifactExcludeTitles?: boolean; // [null]
    artifactLayerType?: string; // string
    artifactSubject?: string; // string
    artifactType?: string; // string
    authfile?: string; // string
    creds?: unknown; // [username[:password]]
    features?: unknown; // features
    os?: unknown; // OS
    osVersion?: unknown; // version
    tlsVerify?: boolean; // [null]
    variant?: unknown; // Variant
  };

  export type optionsArgument = {
    options?: Options;
    list: string;
    imageorartifact: string[];
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
