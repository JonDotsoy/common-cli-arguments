export namespace modPodmanMachineInit {
  const conf = {"usages":["podman machine init [options] [NAME]"],"usageMatrix":[{"argsStr":["[options]","[NAME]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"name","literal":"[NAME]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"name":{"kind":"string","optional":true}},"tsOptionsSort":["options","name"],"tsOptionsStr":"{options?: Options;name?: string;}"}],"command":"podman machine init","options":{"cpus":{"keyName":"cpus","flag":"--cpus","typeValue":"uint"},"diskSize":{"keyName":"diskSize","flag":"--disk-size","typeValue":"uint"},"ignitionPath":{"keyName":"ignitionPath","flag":"--ignition-path","typeValue":"string"},"image":{"keyName":"image","flag":"--image","typeValue":"string"},"memory":{"keyName":"memory","flag":"--memory","typeValue":"uint"},"now":{"keyName":"now","flag":"--now"},"rootful":{"keyName":"rootful","flag":"--rootful"},"timezone":{"keyName":"timezone","flag":"--timezone","typeValue":"string"},"usb":{"keyName":"usb","flag":"--usb","typeValue":"stringArray"},"userModeNetworking":{"keyName":"userModeNetworking","flag":"--user-mode-networking"},"username":{"keyName":"username","flag":"--username","typeValue":"string"},"volume":{"keyName":"volume","flag":"--volume","typeValue":"stringArray"}}};

  type Options = {
    cpus?: number; // uint
    diskSize?: number; // uint
    ignitionPath?: string; // string
    image?: string; // string
    memory?: number; // uint
    now?: boolean; // [null]
    rootful?: boolean; // [null]
    timezone?: string; // string
    usb?: string[]; // stringArray
    userModeNetworking?: boolean; // [null]
    username?: string; // string
    volume?: string[]; // stringArray
  };

  export type optionsArgument =
    | {options?: Options;name?: string;}
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