export namespace modPodmanMachineStop {
  const conf = {"usages":["podman machine stop [MACHINE]"],"usageMatrix":[{"argsStr":["[MACHINE]"],"args":[{"keyword":"options","literal":"options","kind":"options","isOptional":true,"isOptionsArg":true,"isSpread":false},{"keyword":"machine","literal":"[MACHINE]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"machine":{"kind":"string","optional":true}},"tsOptionsSort":["options","machine"],"tsOptionsStr":"{options?: Options;machine?: string;}"}],"command":"podman machine stop","options":{}};

  type Options = {
  };

  export type optionsArgument =
    | {options?: Options;machine?: string;}
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