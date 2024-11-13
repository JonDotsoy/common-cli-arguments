export namespace modpodmannetworkcreate {
  const conf = {
    usages: ["podman network create [options] [NAME]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "[NAME]"],
        args: [
          {
            keyword: "options",
            literal: "[options]",
            kind: "options",
            isOptionsArg: true,
            isOptional: true,
            isSpread: false,
          },
          {
            keyword: "name",
            literal: "[NAME]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          name: { kind: "string", optional: true },
        },
        tsOptionsSort: ["options", "name"],
        tsOptionsStr: "{options?: Options;name?: string;}",
      },
    ],
    command: "podman network create",
    options: {
      disableDns: { keyName: "disableDns", flag: "--disable-dns" },
      dns: { keyName: "dns", flag: "--dns", typeValue: "strings" },
      driver: { keyName: "driver", flag: "--driver", typeValue: "string" },
      gateway: { keyName: "gateway", flag: "--gateway", typeValue: "ipSlice" },
      ignore: { keyName: "ignore", flag: "--ignore" },
      interfaceName: {
        keyName: "interfaceName",
        flag: "--interface-name",
        typeValue: "string",
      },
      internal: { keyName: "internal", flag: "--internal" },
      ipRange: {
        keyName: "ipRange",
        flag: "--ip-range",
        typeValue: "stringArray",
      },
      ipamDriver: {
        keyName: "ipamDriver",
        flag: "--ipam-driver",
        typeValue: "string",
      },
      ipv6: { keyName: "ipv6", flag: "--ipv6" },
      label: { keyName: "label", flag: "--label", typeValue: "stringArray" },
      opt: { keyName: "opt", flag: "--opt", typeValue: "stringArray" },
      route: { keyName: "route", flag: "--route", typeValue: "stringArray" },
      subnet: { keyName: "subnet", flag: "--subnet", typeValue: "stringArray" },
    },
  };

  type Options = {
    disableDns?: boolean; // [null]
    dns?: string[]; // strings
    driver?: string; // string
    gateway?: unknown; // ipSlice
    ignore?: boolean; // [null]
    interfaceName?: string; // string
    internal?: boolean; // [null]
    ipRange?: string[]; // stringArray
    ipamDriver?: string; // string
    ipv6?: boolean; // [null]
    label?: string[]; // stringArray
    opt?: string[]; // stringArray
    route?: string[]; // stringArray
    subnet?: string[]; // stringArray
  };

  export type optionsArgument = { options?: Options; name?: string };

  export function parseOptionsArgument(options: optionsArgument) {
    const optionsArguments = Object.entries(options.options ?? {}).map(
      ([key, value]) => {
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
