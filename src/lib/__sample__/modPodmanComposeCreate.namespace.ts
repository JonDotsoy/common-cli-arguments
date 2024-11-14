export namespace modPodmanComposeCreate {
  const conf = {"usages":["docker compose create [OPTIONS] [SERVICE...]"],"usageMatrix":[{"argsStr":["[OPTIONS]","[SERVICE...]"],"args":[{"keyword":"options","literal":"[OPTIONS]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"service","literal":"[SERVICE...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"service":{"kind":"string[]","optional":true}},"tsOptionsSort":["options","service"],"tsOptionsStr":"{options?: Options;service?: string[];}"}],"command":"podman compose create","options":{"build":{"keyName":"build","flag":"--build"},"dryRun":{"keyName":"dryRun","flag":"--dry-run"},"forceRecreate":{"keyName":"forceRecreate","flag":"--force-recreate"},"noBuild":{"keyName":"noBuild","flag":"--no-build"},"noRecreate":{"keyName":"noRecreate","flag":"--no-recreate"},"pull":{"keyName":"pull","flag":"--pull","typeValue":"string"},"quietPull":{"keyName":"quietPull","flag":"--quiet-pull"},"removeOrphans":{"keyName":"removeOrphans","flag":"--remove-orphans"},"scale":{"keyName":"scale","flag":"--scale","typeValue":"scale"}}};

  type Options = {
    build?: boolean; // [null]
    dryRun?: boolean; // [null]
    forceRecreate?: boolean; // [null]
    noBuild?: boolean; // [null]
    noRecreate?: boolean; // [null]
    pull?: string; // string
    quietPull?: boolean; // [null]
    removeOrphans?: boolean; // [null]
    scale?: unknown; // scale
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