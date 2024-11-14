export namespace modPodmanVolume {
  const conf = {"commands":{"prune":{"usages":["podman volume prune [options]"],"usageMatrix":[{"argsStr":["[options]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true}},"tsOptionsSort":["options"],"tsOptionsStr":"{options?: Options;}"}],"command":"podman volume prune","options":{"filter":{"keyName":"filter","flag":"--filter","typeValue":"stringArray"},"force":{"keyName":"force","flag":"--force"}}},"exists":{"usages":["podman volume exists VOLUME"],"usageMatrix":[{"argsStr":["VOLUME"],"args":[{"keyword":"options","literal":"options","kind":"options","isOptional":true,"isOptionsArg":true,"isSpread":false},{"keyword":"volume","literal":"VOLUME","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"volume":{"kind":"string","optional":false}},"tsOptionsSort":["options","volume"],"tsOptionsStr":"{options?: Options;volume: string;}"}],"command":"podman volume exists","options":{}},"reload":{"usages":["podman volume reload"],"usageMatrix":[{"argsStr":[""],"args":[{"keyword":"options","literal":"options","kind":"options","isOptional":true,"isOptionsArg":true,"isSpread":false},{"keyword":"arg","literal":"","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"arg":{"kind":"string","optional":false}},"tsOptionsSort":["options","arg"],"tsOptionsStr":"{options?: Options;arg: string;}"}],"command":"podman volume reload","options":{}},"inspect":{"usages":["podman volume inspect [options] VOLUME [VOLUME...]"],"usageMatrix":[{"argsStr":["[options]","VOLUME","[VOLUME...]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"volume","literal":"VOLUME","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"volume","literal":"[VOLUME...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"volume":{"kind":"string[]","optional":false}},"tsOptionsSort":["options","volume"],"tsOptionsStr":"{options?: Options;volume: string[];}"}],"command":"podman volume inspect","options":{"all":{"keyName":"all","flag":"--all"},"format":{"keyName":"format","flag":"--format","typeValue":"string"}}},"create":{"usages":["podman volume create [options] [NAME]"],"usageMatrix":[{"argsStr":["[options]","[NAME]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"name","literal":"[NAME]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"name":{"kind":"string","optional":true}},"tsOptionsSort":["options","name"],"tsOptionsStr":"{options?: Options;name?: string;}"}],"command":"podman volume create","options":{"driver":{"keyName":"driver","flag":"--driver","typeValue":"string"},"ignore":{"keyName":"ignore","flag":"--ignore"},"label":{"keyName":"label","flag":"--label","typeValue":"stringArray"},"opt":{"keyName":"opt","flag":"--opt","typeValue":"stringArray"}}},"rm":{"usages":["podman volume rm [options] VOLUME [VOLUME...]"],"usageMatrix":[{"argsStr":["[options]","VOLUME","[VOLUME...]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"volume","literal":"VOLUME","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"volume","literal":"[VOLUME...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"volume":{"kind":"string[]","optional":false}},"tsOptionsSort":["options","volume"],"tsOptionsStr":"{options?: Options;volume: string[];}"}],"command":"podman volume rm","options":{"all":{"keyName":"all","flag":"--all"},"force":{"keyName":"force","flag":"--force"},"time":{"keyName":"time","flag":"--time","typeValue":"int"}}},"ls":{"usages":["podman volume ls [options]"],"usageMatrix":[{"argsStr":["[options]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true}},"tsOptionsSort":["options"],"tsOptionsStr":"{options?: Options;}"}],"command":"podman volume ls","options":{"filter":{"keyName":"filter","flag":"--filter","typeValue":"stringArray"},"format":{"keyName":"format","flag":"--format","typeValue":"string"},"noheading":{"keyName":"noheading","flag":"--noheading"},"quiet":{"keyName":"quiet","flag":"--quiet"}}}},"usages":["podman volume [command]"],"usageMatrix":[{"argsStr":["[command]"],"args":[{"keyword":"options","literal":"options","kind":"options","isOptional":true,"isOptionsArg":true,"isSpread":false},{"keyword":"command","literal":"[command]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"command":{"kind":"string","optional":true}},"tsOptionsSort":["options","command"],"tsOptionsStr":"{options?: Options;command?: string;}"}],"command":"podman volume","options":{}};

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