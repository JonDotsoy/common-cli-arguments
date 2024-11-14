export namespace modPodmanKube {
  const conf = {"commands":{"generate":{"usages":["podman kube generate [options] {CONTAINER...|POD...|VOLUME...}"],"usageMatrix":[{"argsStr":["[options]","{CONTAINER...|POD...|VOLUME...}"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"containerPodVolume","literal":"{CONTAINER...|POD...|VOLUME...}","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"containerPodVolume":{"kind":"string","optional":false}},"tsOptionsSort":["options","containerPodVolume"],"tsOptionsStr":"{options?: Options;containerPodVolume: string;}"}],"command":"podman kube generate","options":{"filename":{"keyName":"filename","flag":"--filename","typeValue":"string"},"podmanOnly":{"keyName":"podmanOnly","flag":"--podman-only"},"replicas":{"keyName":"replicas","flag":"--replicas","typeValue":"int32"},"service":{"keyName":"service","flag":"--service"},"type":{"keyName":"type","flag":"--type","typeValue":"string"}}},"down":{"usages":["podman kube down [options] KUBEFILE|-"],"usageMatrix":[{"argsStr":["[options]","KUBEFILE|-"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"kubefile","literal":"KUBEFILE|-","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"kubefile":{"kind":"string","optional":false}},"tsOptionsSort":["options","kubefile"],"tsOptionsStr":"{options?: Options;kubefile: string;}"}],"command":"podman kube down","options":{"force":{"keyName":"force","flag":"--force"}}},"apply":{"usages":["podman kube apply [options] [CONTAINER...|POD...|VOLUME...]"],"usageMatrix":[{"argsStr":["[options]","[CONTAINER...|POD...|VOLUME...]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"containerPodVolume","literal":"[CONTAINER...|POD...|VOLUME...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"containerPodVolume":{"kind":"string[]","optional":true}},"tsOptionsSort":["options","containerPodVolume"],"tsOptionsStr":"{options?: Options;containerPodVolume?: string[];}"}],"command":"podman kube apply","options":{"caCertFile":{"keyName":"caCertFile","flag":"--ca-cert-file","typeValue":"string"},"file":{"keyName":"file","flag":"--file","typeValue":"string"},"kubeconfig":{"keyName":"kubeconfig","flag":"--kubeconfig","typeValue":"string"},"ns":{"keyName":"ns","flag":"--ns","typeValue":"string"},"service":{"keyName":"service","flag":"--service"}}},"play":{"usages":["podman kube play [options] KUBEFILE|-"],"usageMatrix":[{"argsStr":["[options]","KUBEFILE|-"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"kubefile","literal":"KUBEFILE|-","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"kubefile":{"kind":"string","optional":false}},"tsOptionsSort":["options","kubefile"],"tsOptionsStr":"{options?: Options;kubefile: string;}"}],"command":"podman kube play","options":{"annotation":{"keyName":"annotation","flag":"--annotation","typeValue":"stringArray"},"authfile":{"keyName":"authfile","flag":"--authfile","typeValue":"string"},"configmap":{"keyName":"configmap","flag":"--configmap","typeValue":"Pathname"},"creds":{"keyName":"creds","flag":"--creds","typeValue":"Credentials"},"force":{"keyName":"force","flag":"--force"},"ip":{"keyName":"ip","flag":"--ip","typeValue":"ipSlice"},"logDriver":{"keyName":"logDriver","flag":"--log-driver","typeValue":"string"},"logOpt":{"keyName":"logOpt","flag":"--log-opt","typeValue":"stringArray"},"macAddress":{"keyName":"macAddress","flag":"--mac-address","typeValue":"strings"},"network":{"keyName":"network","flag":"--network","typeValue":"stringArray"},"noHosts":{"keyName":"noHosts","flag":"--no-hosts"},"publish":{"keyName":"publish","flag":"--publish","typeValue":"strings"},"publishAll":{"keyName":"publishAll","flag":"--publish-all"},"quiet":{"keyName":"quiet","flag":"--quiet"},"replace":{"keyName":"replace","flag":"--replace"},"start":{"keyName":"start","flag":"--start"},"tlsVerify":{"keyName":"tlsVerify","flag":"--tls-verify"},"userns":{"keyName":"userns","flag":"--userns","typeValue":"string"},"wait":{"keyName":"wait","flag":"--wait"}}}},"usages":["podman kube [command]"],"usageMatrix":[{"argsStr":["[command]"],"args":[{"keyword":"options","literal":"options","kind":"options","isOptional":true,"isOptionsArg":true,"isSpread":false},{"keyword":"command","literal":"[command]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"command":{"kind":"string","optional":true}},"tsOptionsSort":["options","command"],"tsOptionsStr":"{options?: Options;command?: string;}"}],"command":"podman kube","options":{}};

  type Options = {
  };

  export type optionsArgument =
    | {options?: Options;command?: string;}
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