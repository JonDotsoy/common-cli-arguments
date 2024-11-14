export namespace modPodmanMachineReset {
  const conf = {"usages":["podman machine reset [options]"],"usageMatrix":[{"argsStr":["[options]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true}},"tsOptionsSort":["options"],"tsOptionsStr":"{options?: Options;}"}],"command":"podman machine reset","options":{"force":{"keyName":"force","flag":"--force"}}};

  type Options = {
    force?: boolean; // [null]
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