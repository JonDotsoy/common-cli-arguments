export namespace modPodmanComposeStats {
  const conf = {"usages":["docker compose stats [OPTIONS] [SERVICE]"],"usageMatrix":[{"argsStr":["[OPTIONS]","[SERVICE]"],"args":[{"keyword":"options","literal":"[OPTIONS]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"service","literal":"[SERVICE]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"service":{"kind":"string","optional":true}},"tsOptionsSort":["options","service"],"tsOptionsStr":"{options?: Options;service?: string;}"}],"command":"podman compose stats","options":{"all":{"keyName":"all","flag":"--all"},"dryRun":{"keyName":"dryRun","flag":"--dry-run"},"format":{"keyName":"format","flag":"--format","typeValue":"string"},"noStream":{"keyName":"noStream","flag":"--no-stream"},"noTrunc":{"keyName":"noTrunc","flag":"--no-trunc"}}};

  type Options = {
    all?: boolean; // [null]
    dryRun?: boolean; // [null]
    format?: string; // string
    noStream?: boolean; // [null]
    noTrunc?: boolean; // [null]
  };

  export type optionsArgument =
    | {options?: Options;service?: string;}
  ;

  export function parseOptionsArgument(options: optionsArgument): string[] {
    const optionsArguments = Object.entries(options.options ?? {}).map(
      ([key, value]:[string,any]) => {
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