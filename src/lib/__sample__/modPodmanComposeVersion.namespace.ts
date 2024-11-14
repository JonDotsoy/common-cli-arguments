export namespace modPodmanComposeVersion {
  const conf = {"usages":["docker compose version [OPTIONS]"],"usageMatrix":[{"argsStr":["[OPTIONS]"],"args":[{"keyword":"options","literal":"[OPTIONS]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true}},"tsOptionsSort":["options"],"tsOptionsStr":"{options?: Options;}"}],"command":"podman compose version","options":{"dryRun":{"keyName":"dryRun","flag":"--dry-run"},"format":{"keyName":"format","flag":"--format","typeValue":"string"},"short":{"keyName":"short","flag":"--short"}}};

  type Options = {
    dryRun?: boolean; // [null]
    format?: string; // string
    short?: boolean; // [null]
  };

  export type optionsArgument =
    | {options?: Options;}
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