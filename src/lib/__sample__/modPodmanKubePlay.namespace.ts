export namespace modPodmanKubePlay {
  const conf = {"usages":["podman kube play [options] KUBEFILE|-"],"usageMatrix":[{"argsStr":["[options]","KUBEFILE|-"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"kubefile","literal":"KUBEFILE|-","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"kubefile":{"kind":"string","optional":false}},"tsOptionsSort":["options","kubefile"],"tsOptionsStr":"{options?: Options;kubefile: string;}"}],"command":"podman kube play","options":{"annotation":{"keyName":"annotation","flag":"--annotation","typeValue":"stringArray"},"authfile":{"keyName":"authfile","flag":"--authfile","typeValue":"string"},"configmap":{"keyName":"configmap","flag":"--configmap","typeValue":"Pathname"},"creds":{"keyName":"creds","flag":"--creds","typeValue":"Credentials"},"force":{"keyName":"force","flag":"--force"},"ip":{"keyName":"ip","flag":"--ip","typeValue":"ipSlice"},"logDriver":{"keyName":"logDriver","flag":"--log-driver","typeValue":"string"},"logOpt":{"keyName":"logOpt","flag":"--log-opt","typeValue":"stringArray"},"macAddress":{"keyName":"macAddress","flag":"--mac-address","typeValue":"strings"},"network":{"keyName":"network","flag":"--network","typeValue":"stringArray"},"noHosts":{"keyName":"noHosts","flag":"--no-hosts"},"publish":{"keyName":"publish","flag":"--publish","typeValue":"strings"},"publishAll":{"keyName":"publishAll","flag":"--publish-all"},"quiet":{"keyName":"quiet","flag":"--quiet"},"replace":{"keyName":"replace","flag":"--replace"},"start":{"keyName":"start","flag":"--start"},"tlsVerify":{"keyName":"tlsVerify","flag":"--tls-verify"},"userns":{"keyName":"userns","flag":"--userns","typeValue":"string"},"wait":{"keyName":"wait","flag":"--wait"}}};

  type Options = {
    annotation?: string[]; // stringArray
    authfile?: string; // string
    configmap?: unknown; // Pathname
    creds?: unknown; // Credentials
    force?: boolean; // [null]
    ip?: unknown; // ipSlice
    logDriver?: string; // string
    logOpt?: string[]; // stringArray
    macAddress?: string[]; // strings
    network?: string[]; // stringArray
    noHosts?: boolean; // [null]
    publish?: string[]; // strings
    publishAll?: boolean; // [null]
    quiet?: boolean; // [null]
    replace?: boolean; // [null]
    start?: boolean; // [null]
    tlsVerify?: boolean; // [null]
    userns?: string; // string
    wait?: boolean; // [null]
  };

  export type optionsArgument =
    | {options?: Options;kubefile: string;}
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