export namespace modPodmanRm {
  const conf = {"usages":["podman rm [options] CONTAINER [CONTAINER...]"],"usageMatrix":[{"argsStr":["[options]","CONTAINER","[CONTAINER...]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"container","literal":"CONTAINER","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"container","literal":"[CONTAINER...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"container":{"kind":"string[]","optional":false}},"tsOptionsSort":["options","container"],"tsOptionsStr":"{options?: Options;container: string[];}"}],"command":"podman rm","options":{"all":{"keyName":"all","flag":"--all"},"cidfile":{"keyName":"cidfile","flag":"--cidfile","typeValue":"stringArray"},"depend":{"keyName":"depend","flag":"--depend"},"filter":{"keyName":"filter","flag":"--filter","typeValue":"stringArray"},"force":{"keyName":"force","flag":"--force"},"ignore":{"keyName":"ignore","flag":"--ignore"},"time":{"keyName":"time","flag":"--time","typeValue":"int"},"volumes":{"keyName":"volumes","flag":"--volumes"}}};

  type Options = {
    all?: boolean; // [null]
    cidfile?: string[]; // stringArray
    depend?: boolean; // [null]
    filter?: string[]; // stringArray
    force?: boolean; // [null]
    ignore?: boolean; // [null]
    time?: number; // int
    volumes?: boolean; // [null]
  };

  export type optionsArgument =
    | {options?: Options;container: string[];}
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