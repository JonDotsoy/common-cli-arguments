export namespace modPodmanComposeScale {
  const conf = {"usages":["docker compose scale [SERVICE=REPLICAS...]"],"usageMatrix":[{"argsStr":["[SERVICE=REPLICAS...]"],"args":[{"keyword":"options","literal":"options","kind":"options","isOptional":true,"isOptionsArg":true,"isSpread":false},{"keyword":"serviceReplicas","literal":"[SERVICE=REPLICAS...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"serviceReplicas":{"kind":"string[]","optional":true}},"tsOptionsSort":["options","serviceReplicas"],"tsOptionsStr":"{options?: Options;serviceReplicas?: string[];}"}],"command":"podman compose scale","options":{"dryRun":{"keyName":"dryRun","flag":"--dry-run"},"noDeps":{"keyName":"noDeps","flag":"--no-deps"}}};

  type Options = {
    dryRun?: boolean; // [null]
    noDeps?: boolean; // [null]
  };

  export type optionsArgument =
    | {options?: Options;serviceReplicas?: string[];}
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