export namespace modPodmanComposeRun {
  const conf = {"usages":["docker compose run [OPTIONS] SERVICE [COMMAND] [ARGS...]"],"usageMatrix":[{"argsStr":["[OPTIONS]","SERVICE","[COMMAND]","[ARGS...]"],"args":[{"keyword":"options","literal":"[OPTIONS]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"service","literal":"SERVICE","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"command","literal":"[COMMAND]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":false},{"keyword":"args","literal":"[ARGS...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"service":{"kind":"string","optional":false},"command":{"kind":"string","optional":true},"args":{"kind":"string[]","optional":true}},"tsOptionsSort":["options","service","command","args"],"tsOptionsStr":"{options?: Options;service: string;command?: string;args?: string[];}"}],"command":"podman compose run","options":{"build":{"keyName":"build","flag":"--build"},"capAdd":{"keyName":"capAdd","flag":"--cap-add","typeValue":"list"},"capDrop":{"keyName":"capDrop","flag":"--cap-drop","typeValue":"list"},"detach":{"keyName":"detach","flag":"--detach"},"dryRun":{"keyName":"dryRun","flag":"--dry-run"},"entrypoint":{"keyName":"entrypoint","flag":"--entrypoint","typeValue":"string"},"env":{"keyName":"env","flag":"--env","typeValue":"stringArray"},"interactive":{"keyName":"interactive","flag":"--interactive"},"label":{"keyName":"label","flag":"--label","typeValue":"stringArray"},"name":{"keyName":"name","flag":"--name","typeValue":"string"},"noTTY":{"keyName":"noTTY","flag":"--no-TTY"},"noDeps":{"keyName":"noDeps","flag":"--no-deps"},"publish":{"keyName":"publish","flag":"--publish","typeValue":"stringArray"},"quietPull":{"keyName":"quietPull","flag":"--quiet-pull"},"removeOrphans":{"keyName":"removeOrphans","flag":"--remove-orphans"},"rm":{"keyName":"rm","flag":"--rm"},"servicePorts":{"keyName":"servicePorts","flag":"--service-ports"},"useAliases":{"keyName":"useAliases","flag":"--use-aliases"},"user":{"keyName":"user","flag":"--user","typeValue":"string"},"volume":{"keyName":"volume","flag":"--volume","typeValue":"stringArray"},"workdir":{"keyName":"workdir","flag":"--workdir","typeValue":"string"}}};

  type Options = {
    build?: boolean; // [null]
    capAdd?: unknown; // list
    capDrop?: unknown; // list
    detach?: boolean; // [null]
    dryRun?: boolean; // [null]
    entrypoint?: string; // string
    env?: string[]; // stringArray
    interactive?: boolean; // [null]
    label?: string[]; // stringArray
    name?: string; // string
    noTTY?: boolean; // [null]
    noDeps?: boolean; // [null]
    publish?: string[]; // stringArray
    quietPull?: boolean; // [null]
    removeOrphans?: boolean; // [null]
    rm?: boolean; // [null]
    servicePorts?: boolean; // [null]
    useAliases?: boolean; // [null]
    user?: string; // string
    volume?: string[]; // stringArray
    workdir?: string; // string
  };

  export type optionsArgument =
    | {options?: Options;service: string;command?: string;args?: string[];}
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