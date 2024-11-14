export namespace modPodmanDiff {
  const conf = {"usages":["podman diff [options] {CONTAINER|IMAGE} [{CONTAINER|IMAGE}]"],"usageMatrix":[{"argsStr":["[options]","{CONTAINER|IMAGE}","[{CONTAINER|IMAGE}]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"containerImage","literal":"{CONTAINER|IMAGE}","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"containerImage","literal":"[{CONTAINER|IMAGE}]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"containerImage":{"kind":"string[]","optional":false}},"tsOptionsSort":["options","containerImage"],"tsOptionsStr":"{options?: Options;containerImage: string[];}"}],"command":"podman diff","options":{"format":{"keyName":"format","flag":"--format","typeValue":"string"}}};

  type Options = {
    format?: string; // string
  };

  export type optionsArgument =
    | {options?: Options;containerImage: string[];}
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