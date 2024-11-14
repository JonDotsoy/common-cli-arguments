export namespace modPodmanPodPs {
  const conf = {"usages":["podman pod ps [options]"],"usageMatrix":[{"argsStr":["[options]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true}},"tsOptionsSort":["options"],"tsOptionsStr":"{options?: Options;}"}],"command":"podman pod ps","options":{"ctrIds":{"keyName":"ctrIds","flag":"--ctr-ids"},"ctrNames":{"keyName":"ctrNames","flag":"--ctr-names"},"ctrStatus":{"keyName":"ctrStatus","flag":"--ctr-status"},"filter":{"keyName":"filter","flag":"--filter","typeValue":"stringArray"},"format":{"keyName":"format","flag":"--format","typeValue":"string"},"noTrunc":{"keyName":"noTrunc","flag":"--no-trunc"},"noheading":{"keyName":"noheading","flag":"--noheading"},"ns":{"keyName":"ns","flag":"--ns"},"quiet":{"keyName":"quiet","flag":"--quiet"},"sort":{"keyName":"sort","flag":"--sort","typeValue":"string"}}};

  type Options = {
    ctrIds?: boolean; // [null]
    ctrNames?: boolean; // [null]
    ctrStatus?: boolean; // [null]
    filter?: string[]; // stringArray
    format?: string; // string
    noTrunc?: boolean; // [null]
    noheading?: boolean; // [null]
    ns?: boolean; // [null]
    quiet?: boolean; // [null]
    sort?: string; // string
  };

  export type optionsArgument =
    | {options?: Options;}
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