export namespace modpodmancomposetop {
  const conf = {
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
  };

  type Options = {
    dryRun?: boolean; // [null]
  };

  export type optionsArgument = { options?: Options; services?: string[] };

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
