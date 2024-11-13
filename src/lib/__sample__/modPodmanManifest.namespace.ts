export namespace modPodmanManifest {
  const conf = {
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
            tsOptionsStr: "{options?: Options;list: string;image?: string[];}",
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
          format: { keyName: "format", flag: "--format", typeValue: "string" },
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
  };

  type Options = {};

  export type optionsArgument = { options?: Options; command?: string };

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
