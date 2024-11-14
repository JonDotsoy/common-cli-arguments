export namespace modPodmanMachineOs {
  const conf = {"usages":["podman machine os [command]"],"usageMatrix":[{"argsStr":["[command]"],"args":[{"keyword":"options","literal":"options","kind":"options","isOptional":true,"isOptionsArg":true,"isSpread":false},{"keyword":"command","literal":"[command]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"command":{"kind":"string","optional":true}},"tsOptionsSort":["options","command"],"tsOptionsStr":"{options?: Options;command?: string;}"}],"command":"podman machine os","options":{},"commands":{"apply":{"usages":["podman machine os apply [options] IMAGE [NAME]"],"usageMatrix":[{"argsStr":["[options]","IMAGE","[NAME]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"image","literal":"IMAGE","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"name","literal":"[NAME]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"image":{"kind":"string","optional":false},"name":{"kind":"string","optional":true}},"tsOptionsSort":["options","image","name"],"tsOptionsStr":"{options?: Options;image: string;name?: string;}"}],"command":"podman machine os apply","options":{"restart":{"keyName":"restart","flag":"--restart"}}}}};

  type Options = {
  };

  export type optionsArgument =
    | {options?: Options;command?: string;}
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