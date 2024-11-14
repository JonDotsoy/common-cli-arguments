export namespace modPodmanGenerateKube {
  const conf = {"usages":["podman generate kube [options] {CONTAINER...|POD...|VOLUME...}"],"usageMatrix":[{"argsStr":["[options]","{CONTAINER...|POD...|VOLUME...}"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"containerPodVolume","literal":"{CONTAINER...|POD...|VOLUME...}","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"containerPodVolume":{"kind":"string","optional":false}},"tsOptionsSort":["options","containerPodVolume"],"tsOptionsStr":"{options?: Options;containerPodVolume: string;}"}],"command":"podman generate kube","options":{"filename":{"keyName":"filename","flag":"--filename","typeValue":"string"},"podmanOnly":{"keyName":"podmanOnly","flag":"--podman-only"},"replicas":{"keyName":"replicas","flag":"--replicas","typeValue":"int32"},"service":{"keyName":"service","flag":"--service"},"type":{"keyName":"type","flag":"--type","typeValue":"string"}}};

  type Options = {
    filename?: string; // string
    podmanOnly?: boolean; // [null]
    replicas?: unknown; // int32
    service?: boolean; // [null]
    type?: string; // string
  };

  export type optionsArgument =
    | {options?: Options;containerPodVolume: string;}
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