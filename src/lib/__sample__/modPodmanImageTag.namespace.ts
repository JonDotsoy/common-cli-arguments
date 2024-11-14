export namespace modPodmanImageTag {
  const conf = {"usages":["podman image tag IMAGE TARGET_NAME [TARGET_NAME...]"],"usageMatrix":[{"argsStr":["IMAGE","TARGET_NAME","[TARGET_NAME...]"],"args":[{"keyword":"options","literal":"options","kind":"options","isOptional":true,"isOptionsArg":true,"isSpread":false},{"keyword":"image","literal":"IMAGE","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"targetName","literal":"TARGET_NAME","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"targetName","literal":"[TARGET_NAME...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"image":{"kind":"string","optional":false},"targetName":{"kind":"string[]","optional":false}},"tsOptionsSort":["options","image","targetName"],"tsOptionsStr":"{options?: Options;image: string;targetName: string[];}"}],"command":"podman image tag","options":{}};

  type Options = {
  };

  export type optionsArgument =
    | {options?: Options;image: string;targetName: string[];}
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