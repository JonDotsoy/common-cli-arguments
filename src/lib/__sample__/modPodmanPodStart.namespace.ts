export namespace modPodmanPodStart {
  const conf = {"usages":["podman pod start [options] POD [POD...]"],"usageMatrix":[{"argsStr":["[options]","POD","[POD...]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"pod","literal":"POD","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"pod","literal":"[POD...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"pod":{"kind":"string[]","optional":false}},"tsOptionsSort":["options","pod"],"tsOptionsStr":"{options?: Options;pod: string[];}"}],"command":"podman pod start","options":{"all":{"keyName":"all","flag":"--all"},"podIdFile":{"keyName":"podIdFile","flag":"--pod-id-file","typeValue":"stringArray"}}};

  type Options = {
    all?: boolean; // [null]
    podIdFile?: string[]; // stringArray
  };

  export type optionsArgument =
    | {options?: Options;pod: string[];}
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