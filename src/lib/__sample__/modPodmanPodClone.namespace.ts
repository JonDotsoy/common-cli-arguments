export namespace modPodmanPodClone {
  const conf = {"usages":["podman pod clone [options] POD NAME"],"usageMatrix":[{"argsStr":["[options]","POD","NAME"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"pod","literal":"POD","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"name","literal":"NAME","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"pod":{"kind":"string","optional":false},"name":{"kind":"string","optional":false}},"tsOptionsSort":["options","pod","name"],"tsOptionsStr":"{options?: Options;pod: string;name: string;}"}],"command":"podman pod clone","options":{"blkioWeight":{"keyName":"blkioWeight","flag":"--blkio-weight","typeValue":"string"},"blkioWeightDevice":{"keyName":"blkioWeightDevice","flag":"--blkio-weight-device","typeValue":"DEVICE_NAME:WEIGHT"},"cgroupParent":{"keyName":"cgroupParent","flag":"--cgroup-parent","typeValue":"string"},"cpuShares":{"keyName":"cpuShares","flag":"--cpu-shares","typeValue":"uint"},"cpus":{"keyName":"cpus","flag":"--cpus","typeValue":"float"},"cpusetCpus":{"keyName":"cpusetCpus","flag":"--cpuset-cpus","typeValue":"string"},"cpusetMems":{"keyName":"cpusetMems","flag":"--cpuset-mems","typeValue":"string"},"destroy":{"keyName":"destroy","flag":"--destroy"},"device":{"keyName":"device","flag":"--device","typeValue":"stringArray"},"deviceReadBps":{"keyName":"deviceReadBps","flag":"--device-read-bps","typeValue":"stringArray"},"deviceWriteBps":{"keyName":"deviceWriteBps","flag":"--device-write-bps","typeValue":"stringArray"},"gidmap":{"keyName":"gidmap","flag":"--gidmap","typeValue":"strings"},"gpus":{"keyName":"gpus","flag":"--gpus","typeValue":"strings"},"hostname":{"keyName":"hostname","flag":"--hostname","typeValue":"string"},"infraCommand":{"keyName":"infraCommand","flag":"--infra-command","typeValue":"string"},"infraConmonPidfile":{"keyName":"infraConmonPidfile","flag":"--infra-conmon-pidfile","typeValue":"string"},"infraName":{"keyName":"infraName","flag":"--infra-name","typeValue":"string"},"label":{"keyName":"label","flag":"--label","typeValue":"stringArray"},"labelFile":{"keyName":"labelFile","flag":"--label-file","typeValue":"stringArray"},"memory":{"keyName":"memory","flag":"--memory","typeValue":"<number>[<unit>]"},"memorySwap":{"keyName":"memorySwap","flag":"--memory-swap","typeValue":"string"},"name":{"keyName":"name","flag":"--name","typeValue":"string"},"pid":{"keyName":"pid","flag":"--pid","typeValue":"string"},"restart":{"keyName":"restart","flag":"--restart","typeValue":"string"},"securityOpt":{"keyName":"securityOpt","flag":"--security-opt","typeValue":"stringArray"},"shmSize":{"keyName":"shmSize","flag":"--shm-size","typeValue":"<number>[<unit>]"},"shmSizeSystemd":{"keyName":"shmSizeSystemd","flag":"--shm-size-systemd","typeValue":"<number>[<unit>]"},"start":{"keyName":"start","flag":"--start"},"subgidname":{"keyName":"subgidname","flag":"--subgidname","typeValue":"string"},"subuidname":{"keyName":"subuidname","flag":"--subuidname","typeValue":"string"},"sysctl":{"keyName":"sysctl","flag":"--sysctl","typeValue":"strings"},"uidmap":{"keyName":"uidmap","flag":"--uidmap","typeValue":"strings"},"userns":{"keyName":"userns","flag":"--userns","typeValue":"string"},"uts":{"keyName":"uts","flag":"--uts","typeValue":"string"},"volume":{"keyName":"volume","flag":"--volume","typeValue":"stringArray"},"volumesFrom":{"keyName":"volumesFrom","flag":"--volumes-from","typeValue":"stringArray"}}};

  type Options = {
    blkioWeight?: string; // string
    blkioWeightDevice?: unknown; // DEVICE_NAME:WEIGHT
    cgroupParent?: string; // string
    cpuShares?: number; // uint
    cpus?: number; // float
    cpusetCpus?: string; // string
    cpusetMems?: string; // string
    destroy?: boolean; // [null]
    device?: string[]; // stringArray
    deviceReadBps?: string[]; // stringArray
    deviceWriteBps?: string[]; // stringArray
    gidmap?: string[]; // strings
    gpus?: string[]; // strings
    hostname?: string; // string
    infraCommand?: string; // string
    infraConmonPidfile?: string; // string
    infraName?: string; // string
    label?: string[]; // stringArray
    labelFile?: string[]; // stringArray
    memory?: number; // <number>[<unit>]
    memorySwap?: string; // string
    name?: string; // string
    pid?: string; // string
    restart?: string; // string
    securityOpt?: string[]; // stringArray
    shmSize?: number; // <number>[<unit>]
    shmSizeSystemd?: number; // <number>[<unit>]
    start?: boolean; // [null]
    subgidname?: string; // string
    subuidname?: string; // string
    sysctl?: string[]; // strings
    uidmap?: string[]; // strings
    userns?: string; // string
    uts?: string; // string
    volume?: string[]; // stringArray
    volumesFrom?: string[]; // stringArray
  };

  export type optionsArgument =
    | {options?: Options;pod: string;name: string;}
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