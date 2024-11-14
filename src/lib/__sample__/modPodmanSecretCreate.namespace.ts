export namespace modPodmanSecretCreate {
  const conf = {"usages":["podman secret create [options] NAME FILE|-"],"usageMatrix":[{"argsStr":["[options]","NAME","FILE|-"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"name","literal":"NAME","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"file","literal":"FILE|-","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"name":{"kind":"string","optional":false},"file":{"kind":"string","optional":false}},"tsOptionsSort":["options","name","file"],"tsOptionsStr":"{options?: Options;name: string;file: string;}"}],"command":"podman secret create","options":{"driver":{"keyName":"driver","flag":"--driver","typeValue":"string"},"driverOpts":{"keyName":"driverOpts","flag":"--driver-opts","typeValue":"stringToString"},"env":{"keyName":"env","flag":"--env"},"label":{"keyName":"label","flag":"--label","typeValue":"stringArray"},"replace":{"keyName":"replace","flag":"--replace"}}};

  type Options = {
    driver?: string; // string
    driverOpts?: unknown; // stringToString
    env?: boolean; // [null]
    label?: string[]; // stringArray
    replace?: boolean; // [null]
  };

  export type optionsArgument =
    | {options?: Options;name: string;file: string;}
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