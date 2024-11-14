export namespace modPodmanMachineSsh {
  const conf = {"usages":["podman machine ssh [options] [NAME] [COMMAND [ARG ...]]"],"usageMatrix":[{"argsStr":["[options]","[NAME]","[COMMAND [ARG ...]]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"name","literal":"[NAME]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":false},{"keyword":"commandArg","literal":"[COMMAND [ARG ...]]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"name":{"kind":"string","optional":true},"commandArg":{"kind":"string","optional":true}},"tsOptionsSort":["options","name","commandArg"],"tsOptionsStr":"{options?: Options;name?: string;commandArg?: string;}"}],"command":"podman machine ssh","options":{"username":{"keyName":"username","flag":"--username","typeValue":"string"}}};

  type Options = {
    username?: string; // string
  };

  export type optionsArgument =
    | {options?: Options;name?: string;commandArg?: string;}
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