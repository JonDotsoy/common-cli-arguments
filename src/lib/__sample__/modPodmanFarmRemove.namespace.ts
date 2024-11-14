export namespace modPodmanFarmRemove {
  const conf = {"usages":["podman farm remove [options] [FARM...]"],"usageMatrix":[{"argsStr":["[options]","[FARM...]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"farm","literal":"[FARM...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"farm":{"kind":"string[]","optional":true}},"tsOptionsSort":["options","farm"],"tsOptionsStr":"{options?: Options;farm?: string[];}"}],"command":"podman farm remove","options":{"all":{"keyName":"all","flag":"--all"}}};

  type Options = {
    all?: boolean; // [null]
  };

  export type optionsArgument =
    | {options?: Options;farm?: string[];}
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