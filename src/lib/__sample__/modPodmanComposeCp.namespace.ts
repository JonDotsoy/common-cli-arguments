export namespace modPodmanComposeCp {
  const conf = {"usages":["docker compose cp [OPTIONS] SERVICE:SRC_PATH DEST_PATH|-"],"usageMatrix":[{"argsStr":["[OPTIONS]","SERVICE:SRC_PATH","DEST_PATH|-"],"args":[{"keyword":"options","literal":"[OPTIONS]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"serviceSrcPath","literal":"SERVICE:SRC_PATH","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"destPath","literal":"DEST_PATH|-","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"serviceSrcPath":{"kind":"string","optional":false},"destPath":{"kind":"string","optional":false}},"tsOptionsSort":["options","serviceSrcPath","destPath"],"tsOptionsStr":"{options?: Options;serviceSrcPath: string;destPath: string;}"}],"command":"podman compose cp","options":{"archive":{"keyName":"archive","flag":"--archive"},"dryRun":{"keyName":"dryRun","flag":"--dry-run"},"followLink":{"keyName":"followLink","flag":"--follow-link"},"index":{"keyName":"index","flag":"--index","typeValue":"int"}}};

  type Options = {
    archive?: boolean; // [null]
    dryRun?: boolean; // [null]
    followLink?: boolean; // [null]
    index?: number; // int
  };

  export type optionsArgument =
    | {options?: Options;serviceSrcPath: string;destPath: string;}
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