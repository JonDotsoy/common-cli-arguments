export namespace modPodmanSystemConnectionDefault {
  const conf = {"usages":["podman system connection default NAME"],"usageMatrix":[{"argsStr":["NAME"],"args":[{"keyword":"options","literal":"options","kind":"options","isOptional":true,"isOptionsArg":true,"isSpread":false},{"keyword":"name","literal":"NAME","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"name":{"kind":"string","optional":false}},"tsOptionsSort":["options","name"],"tsOptionsStr":"{options?: Options;name: string;}"}],"command":"podman system connection default","options":{}};

  type Options = {
  };

  export type optionsArgument =
    | {options?: Options;name: string;}
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