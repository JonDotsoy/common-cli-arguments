export namespace modPodmanComposeConfig {
  const conf = {
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
  };

  type Options = {
    dryRun?: boolean; // [null]
    environment?: boolean; // [null]
    format?: string; // string
    hash?: string; // string
    images?: boolean; // [null]
    noConsistency?: boolean; // [null]
    noInterpolate?: boolean; // [null]
    noNormalize?: boolean; // [null]
    noPathResolution?: boolean; // [null]
    output?: string; // string
    profiles?: boolean; // [null]
    quiet?: boolean; // [null]
    resolveImageDigests?: boolean; // [null]
    services?: boolean; // [null]
    variables?: boolean; // [null]
    volumes?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; service?: string[] };

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
