export namespace modPodmanFarmUpdate {
  const conf = {"usages":["podman farm update [options] FARM"],"usageMatrix":[{"argsStr":["[options]","FARM"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"farm","literal":"FARM","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"farm":{"kind":"string","optional":false}},"tsOptionsSort":["options","farm"],"tsOptionsStr":"{options?: Options;farm: string;}"}],"command":"podman farm update","options":{"add":{"keyName":"add","flag":"--add","typeValue":"strings"},"default":{"keyName":"default","flag":"--default"},"remove":{"keyName":"remove","flag":"--remove","typeValue":"strings"}}};

  type Options = {
    add?: string[]; // strings
    default?: boolean; // [null]
    remove?: string[]; // strings
  };

  export type optionsArgument =
    | {options?: Options;farm: string;}
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