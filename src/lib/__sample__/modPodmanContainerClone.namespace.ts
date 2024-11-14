export namespace modPodmanContainerClone {
  const conf = {"usages":["podman container clone [options] CONTAINER NAME IMAGE"],"usageMatrix":[{"argsStr":["[options]","CONTAINER","NAME","IMAGE"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"container","literal":"CONTAINER","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"name","literal":"NAME","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"image","literal":"IMAGE","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"container":{"kind":"string","optional":false},"name":{"kind":"string","optional":false},"image":{"kind":"string","optional":false}},"tsOptionsSort":["options","container","name","image"],"tsOptionsStr":"{options?: Options;container: string;name: string;image: string;}"}],"command":"podman container clone","options":{"blkioWeight":{"keyName":"blkioWeight","flag":"--blkio-weight","typeValue":"string"},"blkioWeightDevice":{"keyName":"blkioWeightDevice","flag":"--blkio-weight-device","typeValue":"DEVICE_NAME:WEIGHT"},"cpuPeriod":{"keyName":"cpuPeriod","flag":"--cpu-period","typeValue":"uint"},"cpuQuota":{"keyName":"cpuQuota","flag":"--cpu-quota","typeValue":"int"},"cpuRtPeriod":{"keyName":"cpuRtPeriod","flag":"--cpu-rt-period","typeValue":"uint"},"cpuRtRuntime":{"keyName":"cpuRtRuntime","flag":"--cpu-rt-runtime","typeValue":"int"},"cpuShares":{"keyName":"cpuShares","flag":"--cpu-shares","typeValue":"uint"},"cpus":{"keyName":"cpus","flag":"--cpus","typeValue":"float"},"cpusetCpus":{"keyName":"cpusetCpus","flag":"--cpuset-cpus","typeValue":"string"},"cpusetMems":{"keyName":"cpusetMems","flag":"--cpuset-mems","typeValue":"string"},"destroy":{"keyName":"destroy","flag":"--destroy"},"deviceReadBps":{"keyName":"deviceReadBps","flag":"--device-read-bps","typeValue":"stringArray"},"deviceWriteBps":{"keyName":"deviceWriteBps","flag":"--device-write-bps","typeValue":"stringArray"},"force":{"keyName":"force","flag":"--force"},"memory":{"keyName":"memory","flag":"--memory","typeValue":"<number>[<unit>]"},"memoryReservation":{"keyName":"memoryReservation","flag":"--memory-reservation","typeValue":"<number>[<unit>]"},"memorySwap":{"keyName":"memorySwap","flag":"--memory-swap","typeValue":"string"},"memorySwappiness":{"keyName":"memorySwappiness","flag":"--memory-swappiness","typeValue":"int"},"name":{"keyName":"name","flag":"--name","typeValue":"string"},"pod":{"keyName":"pod","flag":"--pod","typeValue":"string"},"run":{"keyName":"run","flag":"--run"}}};

  type Options = {
    blkioWeight?: string; // string
    blkioWeightDevice?: unknown; // DEVICE_NAME:WEIGHT
    cpuPeriod?: number; // uint
    cpuQuota?: number; // int
    cpuRtPeriod?: number; // uint
    cpuRtRuntime?: number; // int
    cpuShares?: number; // uint
    cpus?: number; // float
    cpusetCpus?: string; // string
    cpusetMems?: string; // string
    destroy?: boolean; // [null]
    deviceReadBps?: string[]; // stringArray
    deviceWriteBps?: string[]; // stringArray
    force?: boolean; // [null]
    memory?: number; // <number>[<unit>]
    memoryReservation?: number; // <number>[<unit>]
    memorySwap?: string; // string
    memorySwappiness?: number; // int
    name?: string; // string
    pod?: string; // string
    run?: boolean; // [null]
  };

  export type optionsArgument =
    | {options?: Options;container: string;name: string;image: string;}
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