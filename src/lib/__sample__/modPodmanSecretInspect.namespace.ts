export namespace modPodmanSecretInspect {
  const conf = {"usages":["podman secret inspect [options] SECRET [SECRET...]"],"usageMatrix":[{"argsStr":["[options]","SECRET","[SECRET...]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"secret","literal":"SECRET","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"secret","literal":"[SECRET...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"secret":{"kind":"string[]","optional":false}},"tsOptionsSort":["options","secret"],"tsOptionsStr":"{options?: Options;secret: string[];}"}],"command":"podman secret inspect","options":{"format":{"keyName":"format","flag":"--format","typeValue":"string"},"pretty":{"keyName":"pretty","flag":"--pretty"},"showsecret":{"keyName":"showsecret","flag":"--showsecret"}}};

  type Options = {
    format?: string; // string
    pretty?: boolean; // [null]
    showsecret?: boolean; // [null]
  };

  export type optionsArgument =
    | {options?: Options;secret: string[];}
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