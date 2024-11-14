export namespace modPodmanImageSave {
  const conf = {"usages":["podman image save [options] IMAGE [IMAGE...]"],"usageMatrix":[{"argsStr":["[options]","IMAGE","[IMAGE...]"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"image","literal":"IMAGE","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false},{"keyword":"image","literal":"[IMAGE...]","kind":"argument","isOptionsArg":false,"isOptional":true,"isSpread":true}],"tsOptions":{"options":{"kind":"Options","optional":true},"image":{"kind":"string[]","optional":false}},"tsOptionsSort":["options","image"],"tsOptionsStr":"{options?: Options;image: string[];}"}],"command":"podman image save","options":{"compress":{"keyName":"compress","flag":"--compress"},"format":{"keyName":"format","flag":"--format","typeValue":"string"},"multiImageArchive":{"keyName":"multiImageArchive","flag":"--multi-image-archive"},"output":{"keyName":"output","flag":"--output","typeValue":"string"},"quiet":{"keyName":"quiet","flag":"--quiet"},"uncompressed":{"keyName":"uncompressed","flag":"--uncompressed"}}};

  type Options = {
    compress?: boolean; // [null]
    format?: string; // string
    multiImageArchive?: boolean; // [null]
    output?: string; // string
    quiet?: boolean; // [null]
    uncompressed?: boolean; // [null]
  };

  export type optionsArgument =
    | {options?: Options;image: string[];}
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