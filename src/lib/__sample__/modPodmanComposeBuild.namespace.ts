export namespace modPodmanComposeBuild {
  const conf = {"usages":["docker compose build [OPTIONS] [SERVICE...]"],"usageMatrix":[{"argsStr":["[OPTIONS]","[SERVICE...]"],"args":[{"keyword":"options","literal":"[OPTIONS]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"service","literal":"[SERVICE...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"service":{"kind":"string[]","optional":true}},"tsOptionsSort":["options","service"],"tsOptionsStr":"{options?: Options;service?: string[];}"}],"command":"podman compose build","options":{"buildArg":{"keyName":"buildArg","flag":"--build-arg","typeValue":"stringArray"},"builder":{"keyName":"builder","flag":"--builder","typeValue":"string"},"dryRun":{"keyName":"dryRun","flag":"--dry-run"},"memory":{"keyName":"memory","flag":"--memory","typeValue":"bytes"},"noCache":{"keyName":"noCache","flag":"--no-cache"},"pull":{"keyName":"pull","flag":"--pull"},"push":{"keyName":"push","flag":"--push"},"quiet":{"keyName":"quiet","flag":"--quiet"},"ssh":{"keyName":"ssh","flag":"--ssh","typeValue":"string"},"withDependencies":{"keyName":"withDependencies","flag":"--with-dependencies"}}};

  type Options = {
    buildArg?: string[]; // stringArray
    builder?: string; // string
    dryRun?: boolean; // [null]
    memory?: unknown; // bytes
    noCache?: boolean; // [null]
    pull?: boolean; // [null]
    push?: boolean; // [null]
    quiet?: boolean; // [null]
    ssh?: string; // string
    withDependencies?: boolean; // [null]
  };

  export type optionsArgument =
    | {options?: Options;service?: string[];}
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