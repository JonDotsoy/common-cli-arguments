export namespace modPodmanVolumeExists {
  const conf = {"usages":["podman volume exists VOLUME"],"usageMatrix":[{"argsStr":["VOLUME"],"args":[{"keyword":"options","literal":"options","kind":"options","isOptional":true,"isOptionsArg":true,"isSpread":false},{"keyword":"volume","literal":"VOLUME","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"volume":{"kind":"string","optional":false}},"tsOptionsSort":["options","volume"],"tsOptionsStr":"{options?: Options;volume: string;}"}],"command":"podman volume exists","options":{}};

  type Options = {
  };

  export type optionsArgument =
    | {options?: Options;volume: string;}
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