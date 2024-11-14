export namespace modPodmanImageHistory {
  const conf = {"usages":["podman image history [options] IMAGE"],"usageMatrix":[{"argsStr":["[options]","IMAGE"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"image","literal":"IMAGE","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"image":{"kind":"string","optional":false}},"tsOptionsSort":["options","image"],"tsOptionsStr":"{options?: Options;image: string;}"}],"command":"podman image history","options":{"format":{"keyName":"format","flag":"--format","typeValue":"string"},"human":{"keyName":"human","flag":"--human"},"noTrunc":{"keyName":"noTrunc","flag":"--no-trunc"},"quiet":{"keyName":"quiet","flag":"--quiet"}}};

  type Options = {
    format?: string; // string
    human?: boolean; // [null]
    noTrunc?: boolean; // [null]
    quiet?: boolean; // [null]
  };

  export type optionsArgument =
    | {options?: Options;image: string;}
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