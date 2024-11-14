export namespace modPodmanPodLogs {
  const conf = {"usages":["podman pod logs [options] POD"],"usageMatrix":[{"argsStr":["[options]","POD"],"args":[{"keyword":"options","literal":"[options]","kind":"options","isOptionsArg":true,"isOptional":true,"isSpread":false},{"keyword":"pod","literal":"POD","kind":"argument","isOptionsArg":false,"isOptional":false,"isSpread":false}],"tsOptions":{"options":{"kind":"Options","optional":true},"pod":{"kind":"string","optional":false}},"tsOptionsSort":["options","pod"],"tsOptionsStr":"{options?: Options;pod: string;}"}],"command":"podman pod logs","options":{"color":{"keyName":"color","flag":"--color"},"container":{"keyName":"container","flag":"--container","typeValue":"string"},"follow":{"keyName":"follow","flag":"--follow"},"names":{"keyName":"names","flag":"--names"},"since":{"keyName":"since","flag":"--since","typeValue":"string"},"tail":{"keyName":"tail","flag":"--tail","typeValue":"int"},"timestamps":{"keyName":"timestamps","flag":"--timestamps"},"until":{"keyName":"until","flag":"--until","typeValue":"string"}}};

  type Options = {
    color?: boolean; // [null]
    container?: string; // string
    follow?: boolean; // [null]
    names?: boolean; // [null]
    since?: string; // string
    tail?: number; // int
    timestamps?: boolean; // [null]
    until?: string; // string
  };

  export type optionsArgument =
    | {options?: Options;pod: string;}
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