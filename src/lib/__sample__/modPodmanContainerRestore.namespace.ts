export namespace modPodmanContainerRestore {
  const conf = {"usages":["podman container restore [options] CONTAINER|IMAGE [CONTAINER|IMAGE...]"],"usageMatrix":[{"argsStr":["[options]","CONTAINER|IMAGE","[CONTAINER|IMAGE...]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"containerImage","literal":"CONTAINER|IMAGE","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"containerImage","literal":"[CONTAINER|IMAGE...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"containerImage":{"kind":"string[]","optional":false}},"tsOptionsSort":["options","containerImage"],"tsOptionsStr":"{options?: Options;containerImage: string[];}"}],"command":"podman container restore","options":{"all":{"keyName":"all","flag":"--all"},"fileLocks":{"keyName":"fileLocks","flag":"--file-locks"},"ignoreRootfs":{"keyName":"ignoreRootfs","flag":"--ignore-rootfs"},"ignoreStaticIp":{"keyName":"ignoreStaticIp","flag":"--ignore-static-ip"},"ignoreStaticMac":{"keyName":"ignoreStaticMac","flag":"--ignore-static-mac"},"ignoreVolumes":{"keyName":"ignoreVolumes","flag":"--ignore-volumes"},"import":{"keyName":"import","flag":"--import","typeValue":"string"},"importPrevious":{"keyName":"importPrevious","flag":"--import-previous","typeValue":"string"},"keep":{"keyName":"keep","flag":"--keep"},"name":{"keyName":"name","flag":"--name","typeValue":"string"},"pod":{"keyName":"pod","flag":"--pod","typeValue":"string"},"printStats":{"keyName":"printStats","flag":"--print-stats"},"publish":{"keyName":"publish","flag":"--publish","typeValue":"strings"},"tcpEstablished":{"keyName":"tcpEstablished","flag":"--tcp-established"}}};

  type Options = {
    all?: boolean; // [null]
    fileLocks?: boolean; // [null]
    ignoreRootfs?: boolean; // [null]
    ignoreStaticIp?: boolean; // [null]
    ignoreStaticMac?: boolean; // [null]
    ignoreVolumes?: boolean; // [null]
    import?: string; // string
    importPrevious?: string; // string
    keep?: boolean; // [null]
    name?: string; // string
    pod?: string; // string
    printStats?: boolean; // [null]
    publish?: string[]; // strings
    tcpEstablished?: boolean; // [null]
  };

  export type optionsArgument =
    | {options?: Options;containerImage: string[];}
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