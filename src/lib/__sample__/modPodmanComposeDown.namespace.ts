export namespace modPodmanComposeDown {
  const conf = {"usages":["docker compose down [OPTIONS] [SERVICES]"],"usageMatrix":[{"argsStr":["[OPTIONS]","[SERVICES]"],"args":[{"keyword":"options","literal":"[OPTIONS]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"services","literal":"[SERVICES]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"services":{"kind":"string","optional":true}},"tsOptionsSort":["options","services"],"tsOptionsStr":"{options?: Options;services?: string;}"}],"command":"podman compose down","options":{"dryRun":{"keyName":"dryRun","flag":"--dry-run"},"removeOrphans":{"keyName":"removeOrphans","flag":"--remove-orphans"},"rmi":{"keyName":"rmi","flag":"--rmi","typeValue":"string"},"timeout":{"keyName":"timeout","flag":"--timeout","typeValue":"int"},"volumes":{"keyName":"volumes","flag":"--volumes"}}};

  type Options = {
    dryRun?: boolean; // [null]
    removeOrphans?: boolean; // [null]
    rmi?: string; // string
    timeout?: number; // int
    volumes?: boolean; // [null]
  };

  export type optionsArgument =
    | {options?: Options;services?: string;}
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