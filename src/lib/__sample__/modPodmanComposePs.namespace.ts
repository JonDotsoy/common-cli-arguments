export namespace modPodmanComposePs {
  const conf = {"usages":["docker compose ps [OPTIONS] [SERVICE...]"],"usageMatrix":[{"argsStr":["[OPTIONS]","[SERVICE...]"],"args":[{"keyword":"options","literal":"[OPTIONS]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"service","literal":"[SERVICE...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"service":{"kind":"string[]","optional":true}},"tsOptionsSort":["options","service"],"tsOptionsStr":"{options?: Options;service?: string[];}"}],"command":"podman compose ps","options":{"all":{"keyName":"all","flag":"--all"},"dryRun":{"keyName":"dryRun","flag":"--dry-run"},"filter":{"keyName":"filter","flag":"--filter","typeValue":"string"},"format":{"keyName":"format","flag":"--format","typeValue":"string"},"noTrunc":{"keyName":"noTrunc","flag":"--no-trunc"},"orphans":{"keyName":"orphans","flag":"--orphans"},"quiet":{"keyName":"quiet","flag":"--quiet"},"services":{"keyName":"services","flag":"--services"},"status":{"keyName":"status","flag":"--status","typeValue":"stringArray"}}};

  type Options = {
    all?: boolean; // [null]
    dryRun?: boolean; // [null]
    filter?: string; // string
    format?: string; // string
    noTrunc?: boolean; // [null]
    orphans?: boolean; // [null]
    quiet?: boolean; // [null]
    services?: boolean; // [null]
    status?: string[]; // stringArray
  };

  export type optionsArgument =
    | {options?: Options;service?: string[];}
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