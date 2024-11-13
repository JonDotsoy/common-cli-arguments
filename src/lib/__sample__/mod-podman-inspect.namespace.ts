export namespace modpodmaninspect {
  const conf = {"usages":["podman inspect [options] {CONTAINER|IMAGE|POD|NETWORK|VOLUME} [...]"],"usageMatrix":[{"argsStr":["[options]","{CONTAINER|IMAGE|POD|NETWORK|VOLUME}","[...]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"containerImagePodNetworkVolume","literal":"{CONTAINER|IMAGE|POD|NETWORK|VOLUME}","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"","literal":"[...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"containerImagePodNetworkVolume":{"kind":"string","optional":false},"":{"kind":"string[]","optional":true}},"tsOptionsSort":["options","containerImagePodNetworkVolume",""],"tsOptionsStr":"{options?: Options;containerImagePodNetworkVolume: string;?: string[];}"}],"command":"podman inspect","options":{"format":{"keyName":"format","flag":"--format","typeValue":"string"},"size":{"keyName":"size","flag":"--size"},"type":{"keyName":"type","flag":"--type","typeValue":"string"}}};

  type Options = {
    format?: string; // string
    size?: boolean; // [null]
    type?: string; // string
  };

  export type optionsArgument =
    | {options?: Options;containerImagePodNetworkVolume: string;?: string[];}
  ;

  export function parseOptionsArgument(options: optionsArgument) {
    const optionsArguments = Object.entries(options.options ?? {}).map(
      ([key, value]) => {
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