export namespace modPodmanContainerCp {
  const conf = {"usages":["podman container cp [options] [CONTAINER:]SRC_PATH [CONTAINER:]DEST_PATH"],"usageMatrix":[{"argsStr":["[options]","[CONTAINER:]SRC_PATH","[CONTAINER:]DEST_PATH"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"containerSrcPath","literal":"[CONTAINER:]SRC_PATH","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"containerDestPath","literal":"[CONTAINER:]DEST_PATH","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"containerSrcPath":{"kind":"string","optional":false},"containerDestPath":{"kind":"string","optional":false}},"tsOptionsSort":["options","containerSrcPath","containerDestPath"],"tsOptionsStr":"{options?: Options;containerSrcPath: string;containerDestPath: string;}"}],"command":"podman container cp","options":{"archive":{"keyName":"archive","flag":"--archive"},"overwrite":{"keyName":"overwrite","flag":"--overwrite"}}};

  type Options = {
    archive?: boolean; // [null]
    overwrite?: boolean; // [null]
  };

  export type optionsArgument =
    | {options?: Options;containerSrcPath: string;containerDestPath: string;}
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