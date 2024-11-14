export namespace modPodmanGenerateSystemd {
  const conf = {"usages":["podman generate systemd [options] {CONTAINER|POD}"],"usageMatrix":[{"argsStr":["[options]","{CONTAINER|POD}"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"containerPod","literal":"{CONTAINER|POD}","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"containerPod":{"kind":"string","optional":false}},"tsOptionsSort":["options","containerPod"],"tsOptionsStr":"{options?: Options;containerPod: string;}"}],"command":"podman generate systemd","options":{"after":{"keyName":"after","flag":"--after","typeValue":"stringArray"},"containerPrefix":{"keyName":"containerPrefix","flag":"--container-prefix","typeValue":"string"},"env":{"keyName":"env","flag":"--env","typeValue":"stringArray"},"files":{"keyName":"files","flag":"--files"},"format":{"keyName":"format","flag":"--format","typeValue":"string"},"name":{"keyName":"name","flag":"--name"},"new":{"keyName":"new","flag":"--new"},"noHeader":{"keyName":"noHeader","flag":"--no-header"},"podPrefix":{"keyName":"podPrefix","flag":"--pod-prefix","typeValue":"string"},"requires":{"keyName":"requires","flag":"--requires","typeValue":"stringArray"},"restartPolicy":{"keyName":"restartPolicy","flag":"--restart-policy","typeValue":"string"},"restartSec":{"keyName":"restartSec","flag":"--restart-sec","typeValue":"uint"},"separator":{"keyName":"separator","flag":"--separator","typeValue":"string"},"startTimeout":{"keyName":"startTimeout","flag":"--start-timeout","typeValue":"uint"},"stopTimeout":{"keyName":"stopTimeout","flag":"--stop-timeout","typeValue":"uint"},"template":{"keyName":"template","flag":"--template"},"wants":{"keyName":"wants","flag":"--wants","typeValue":"stringArray"}}};

  type Options = {
    after?: string[]; // stringArray
    containerPrefix?: string; // string
    env?: string[]; // stringArray
    files?: boolean; // [null]
    format?: string; // string
    name?: boolean; // [null]
    new?: boolean; // [null]
    noHeader?: boolean; // [null]
    podPrefix?: string; // string
    requires?: string[]; // stringArray
    restartPolicy?: string; // string
    restartSec?: number; // uint
    separator?: string; // string
    startTimeout?: number; // uint
    stopTimeout?: number; // uint
    template?: boolean; // [null]
    wants?: string[]; // stringArray
  };

  export type optionsArgument =
    | {options?: Options;containerPod: string;}
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