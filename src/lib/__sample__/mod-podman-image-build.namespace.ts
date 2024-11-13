export namespace modpodmanimagebuild {
  const conf = {
    usages: ["podman image build [options] [CONTEXT]"],
    usageMatrix: [
      {
        argsStr: ["[options]", "[CONTEXT]"],
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
            keyword: "context",
            literal: "[CONTEXT]",
            kind: "argument",
            isOptionsArg: false,
            isOptional: true,
            isSpread: false,
          },
        ],
        tsOptions: {
          options: { kind: "Options", optional: true },
          context: { kind: "string", optional: true },
        },
        tsOptionsSort: ["options", "context"],
        tsOptionsStr: "{options?: Options;context?: string;}",
      },
    ],
    command: "podman image build",
    options: {
      addHost: { keyName: "addHost", flag: "--add-host", typeValue: "host:ip" },
      allPlatforms: { keyName: "allPlatforms", flag: "--all-platforms" },
      annotation: {
        keyName: "annotation",
        flag: "--annotation",
        typeValue: "stringArray",
      },
      arch: { keyName: "arch", flag: "--arch", typeValue: "string" },
      authfile: {
        keyName: "authfile",
        flag: "--authfile",
        typeValue: "string",
      },
      buildArg: {
        keyName: "buildArg",
        flag: "--build-arg",
        typeValue: "argument=value",
      },
      buildArgFile: {
        keyName: "buildArgFile",
        flag: "--build-arg-file",
        typeValue: "argfile.conf",
      },
      buildContext: {
        keyName: "buildContext",
        flag: "--build-context",
        typeValue: "argument=value",
      },
      cacheFrom: {
        keyName: "cacheFrom",
        flag: "--cache-from",
        typeValue: "stringArray",
      },
      cacheTo: {
        keyName: "cacheTo",
        flag: "--cache-to",
        typeValue: "stringArray",
      },
      cacheTtl: {
        keyName: "cacheTtl",
        flag: "--cache-ttl",
        typeValue: "string",
      },
      capAdd: { keyName: "capAdd", flag: "--cap-add", typeValue: "strings" },
      capDrop: { keyName: "capDrop", flag: "--cap-drop", typeValue: "strings" },
      certDir: { keyName: "certDir", flag: "--cert-dir", typeValue: "string" },
      cgroupParent: {
        keyName: "cgroupParent",
        flag: "--cgroup-parent",
        typeValue: "string",
      },
      cgroupns: {
        keyName: "cgroupns",
        flag: "--cgroupns",
        typeValue: "string",
      },
      compatVolumes: { keyName: "compatVolumes", flag: "--compat-volumes" },
      cppFlag: {
        keyName: "cppFlag",
        flag: "--cpp-flag",
        typeValue: "stringArray",
      },
      cpuPeriod: {
        keyName: "cpuPeriod",
        flag: "--cpu-period",
        typeValue: "uint",
      },
      cpuQuota: { keyName: "cpuQuota", flag: "--cpu-quota", typeValue: "int" },
      cpuShares: {
        keyName: "cpuShares",
        flag: "--cpu-shares",
        typeValue: "uint",
      },
      cpusetCpus: {
        keyName: "cpusetCpus",
        flag: "--cpuset-cpus",
        typeValue: "string",
      },
      cpusetMems: {
        keyName: "cpusetMems",
        flag: "--cpuset-mems",
        typeValue: "string",
      },
      creds: {
        keyName: "creds",
        flag: "--creds",
        typeValue: "[username[:password]]",
      },
      decryptionKey: {
        keyName: "decryptionKey",
        flag: "--decryption-key",
        typeValue: "strings",
      },
      device: { keyName: "device", flag: "--device", typeValue: "stringArray" },
      disableCompression: {
        keyName: "disableCompression",
        flag: "--disable-compression",
      },
      dns: { keyName: "dns", flag: "--dns", typeValue: "/etc/resolv.conf" },
      dnsOption: {
        keyName: "dnsOption",
        flag: "--dns-option",
        typeValue: "strings",
      },
      dnsSearch: {
        keyName: "dnsSearch",
        flag: "--dns-search",
        typeValue: "strings",
      },
      env: { keyName: "env", flag: "--env", typeValue: "stringArray" },
      file: { keyName: "file", flag: "--file", typeValue: "pathname" },
      forceRm: { keyName: "forceRm", flag: "--force-rm" },
      format: { keyName: "format", flag: "--format", typeValue: "format" },
      from: { keyName: "from", flag: "--from", typeValue: "string" },
      groupAdd: {
        keyName: "groupAdd",
        flag: "--group-add",
        typeValue: "strings",
      },
      hooksDir: {
        keyName: "hooksDir",
        flag: "--hooks-dir",
        typeValue: "stringArray",
      },
      httpProxy: { keyName: "httpProxy", flag: "--http-proxy" },
      identityLabel: { keyName: "identityLabel", flag: "--identity-label" },
      ignorefile: {
        keyName: "ignorefile",
        flag: "--ignorefile",
        typeValue: "string",
      },
      iidfile: { keyName: "iidfile", flag: "--iidfile", typeValue: "file" },
      ipc: { keyName: "ipc", flag: "--ipc", typeValue: "path" },
      isolation: {
        keyName: "isolation",
        flag: "--isolation",
        typeValue: "type",
      },
      jobs: { keyName: "jobs", flag: "--jobs", typeValue: "int" },
      label: { keyName: "label", flag: "--label", typeValue: "stringArray" },
      layerLabel: {
        keyName: "layerLabel",
        flag: "--layer-label",
        typeValue: "stringArray",
      },
      layers: { keyName: "layers", flag: "--layers" },
      logfile: { keyName: "logfile", flag: "--logfile", typeValue: "file" },
      manifest: {
        keyName: "manifest",
        flag: "--manifest",
        typeValue: "string",
      },
      memory: { keyName: "memory", flag: "--memory", typeValue: "string" },
      memorySwap: {
        keyName: "memorySwap",
        flag: "--memory-swap",
        typeValue: "string",
      },
      network: { keyName: "network", flag: "--network", typeValue: "string" },
      noCache: { keyName: "noCache", flag: "--no-cache" },
      noHostname: { keyName: "noHostname", flag: "--no-hostname" },
      noHosts: { keyName: "noHosts", flag: "--no-hosts" },
      omitHistory: { keyName: "omitHistory", flag: "--omit-history" },
      os: { keyName: "os", flag: "--os", typeValue: "string" },
      osFeature: {
        keyName: "osFeature",
        flag: "--os-feature",
        typeValue: "feature",
      },
      osVersion: {
        keyName: "osVersion",
        flag: "--os-version",
        typeValue: "version",
      },
      pid: { keyName: "pid", flag: "--pid", typeValue: "path" },
      platform: {
        keyName: "platform",
        flag: "--platform",
        typeValue: "OS/ARCH[/VARIANT]",
      },
      pull: {
        keyName: "pull",
        flag: "--pull",
        typeValue: 'string[="missing"]',
      },
      quiet: { keyName: "quiet", flag: "--quiet" },
      retry: { keyName: "retry", flag: "--retry", typeValue: "int" },
      retryDelay: {
        keyName: "retryDelay",
        flag: "--retry-delay",
        typeValue: "string",
      },
      rm: { keyName: "rm", flag: "--rm" },
      runtimeFlag: {
        keyName: "runtimeFlag",
        flag: "--runtime-flag",
        typeValue: "strings",
      },
      sbom: { keyName: "sbom", flag: "--sbom", typeValue: "preset" },
      sbomImageOutput: {
        keyName: "sbomImageOutput",
        flag: "--sbom-image-output",
        typeValue: "path",
      },
      sbomImagePurlOutput: {
        keyName: "sbomImagePurlOutput",
        flag: "--sbom-image-purl-output",
        typeValue: "path",
      },
      sbomMergeStrategy: {
        keyName: "sbomMergeStrategy",
        flag: "--sbom-merge-strategy",
        typeValue: "strategy",
      },
      sbomOutput: {
        keyName: "sbomOutput",
        flag: "--sbom-output",
        typeValue: "file",
      },
      sbomPurlOutput: {
        keyName: "sbomPurlOutput",
        flag: "--sbom-purl-output",
        typeValue: "file",
      },
      sbomScannerCommand: {
        keyName: "sbomScannerCommand",
        flag: "--sbom-scanner-command",
        typeValue: "command",
      },
      sbomScannerImage: {
        keyName: "sbomScannerImage",
        flag: "--sbom-scanner-image",
        typeValue: "image",
      },
      secret: { keyName: "secret", flag: "--secret", typeValue: "stringArray" },
      securityOpt: {
        keyName: "securityOpt",
        flag: "--security-opt",
        typeValue: "stringArray",
      },
      shmSize: {
        keyName: "shmSize",
        flag: "--shm-size",
        typeValue: "<number><unit>",
      },
      skipUnusedStages: {
        keyName: "skipUnusedStages",
        flag: "--skip-unused-stages",
      },
      squash: { keyName: "squash", flag: "--squash" },
      squashAll: { keyName: "squashAll", flag: "--squash-all" },
      ssh: { keyName: "ssh", flag: "--ssh", typeValue: "stringArray" },
      stdin: { keyName: "stdin", flag: "--stdin" },
      tag: { keyName: "tag", flag: "--tag", typeValue: "name" },
      target: { keyName: "target", flag: "--target", typeValue: "string" },
      timestamp: {
        keyName: "timestamp",
        flag: "--timestamp",
        typeValue: "int",
      },
      ulimit: { keyName: "ulimit", flag: "--ulimit", typeValue: "strings" },
      unsetenv: {
        keyName: "unsetenv",
        flag: "--unsetenv",
        typeValue: "strings",
      },
      unsetlabel: {
        keyName: "unsetlabel",
        flag: "--unsetlabel",
        typeValue: "strings",
      },
      userns: { keyName: "userns", flag: "--userns", typeValue: "path" },
      usernsGidMap: {
        keyName: "usernsGidMap",
        flag: "--userns-gid-map",
        typeValue: "containerGID:hostGID:length",
      },
      usernsGidMapGroup: {
        keyName: "usernsGidMapGroup",
        flag: "--userns-gid-map-group",
        typeValue: "name",
      },
      usernsUidMap: {
        keyName: "usernsUidMap",
        flag: "--userns-uid-map",
        typeValue: "containerUID:hostUID:length",
      },
      usernsUidMapUser: {
        keyName: "usernsUidMapUser",
        flag: "--userns-uid-map-user",
        typeValue: "name",
      },
      uts: { keyName: "uts", flag: "--uts", typeValue: "path" },
      variant: { keyName: "variant", flag: "--variant", typeValue: "variant" },
      volume: { keyName: "volume", flag: "--volume", typeValue: "stringArray" },
    },
  };

  type Options = {
    addHost?: unknown; // host:ip
    allPlatforms?: boolean; // [null]
    annotation?: string[]; // stringArray
    arch?: string; // string
    authfile?: string; // string
    buildArg?: unknown; // argument=value
    buildArgFile?: unknown; // argfile.conf
    buildContext?: unknown; // argument=value
    cacheFrom?: string[]; // stringArray
    cacheTo?: string[]; // stringArray
    cacheTtl?: string; // string
    capAdd?: string[]; // strings
    capDrop?: string[]; // strings
    certDir?: string; // string
    cgroupParent?: string; // string
    cgroupns?: string; // string
    compatVolumes?: boolean; // [null]
    cppFlag?: string[]; // stringArray
    cpuPeriod?: number; // uint
    cpuQuota?: number; // int
    cpuShares?: number; // uint
    cpusetCpus?: string; // string
    cpusetMems?: string; // string
    creds?: unknown; // [username[:password]]
    decryptionKey?: string[]; // strings
    device?: string[]; // stringArray
    disableCompression?: boolean; // [null]
    dns?: unknown; // /etc/resolv.conf
    dnsOption?: string[]; // strings
    dnsSearch?: string[]; // strings
    env?: string[]; // stringArray
    file?: unknown; // pathname
    forceRm?: boolean; // [null]
    format?: unknown; // format
    from?: string; // string
    groupAdd?: string[]; // strings
    hooksDir?: string[]; // stringArray
    httpProxy?: boolean; // [null]
    identityLabel?: boolean; // [null]
    ignorefile?: string; // string
    iidfile?: unknown; // file
    ipc?: unknown; // path
    isolation?: unknown; // type
    jobs?: number; // int
    label?: string[]; // stringArray
    layerLabel?: string[]; // stringArray
    layers?: boolean; // [null]
    logfile?: unknown; // file
    manifest?: string; // string
    memory?: string; // string
    memorySwap?: string; // string
    network?: string; // string
    noCache?: boolean; // [null]
    noHostname?: boolean; // [null]
    noHosts?: boolean; // [null]
    omitHistory?: boolean; // [null]
    os?: string; // string
    osFeature?: unknown; // feature
    osVersion?: unknown; // version
    pid?: unknown; // path
    platform?: unknown; // OS/ARCH[/VARIANT]
    pull?: unknown; // string[="missing"]
    quiet?: boolean; // [null]
    retry?: number; // int
    retryDelay?: string; // string
    rm?: boolean; // [null]
    runtimeFlag?: string[]; // strings
    sbom?: unknown; // preset
    sbomImageOutput?: unknown; // path
    sbomImagePurlOutput?: unknown; // path
    sbomMergeStrategy?: unknown; // strategy
    sbomOutput?: unknown; // file
    sbomPurlOutput?: unknown; // file
    sbomScannerCommand?: unknown; // command
    sbomScannerImage?: unknown; // image
    secret?: string[]; // stringArray
    securityOpt?: string[]; // stringArray
    shmSize?: unknown; // <number><unit>
    skipUnusedStages?: boolean; // [null]
    squash?: boolean; // [null]
    squashAll?: boolean; // [null]
    ssh?: string[]; // stringArray
    stdin?: boolean; // [null]
    tag?: unknown; // name
    target?: string; // string
    timestamp?: number; // int
    ulimit?: string[]; // strings
    unsetenv?: string[]; // strings
    unsetlabel?: string[]; // strings
    userns?: unknown; // path
    usernsGidMap?: unknown; // containerGID:hostGID:length
    usernsGidMapGroup?: unknown; // name
    usernsUidMap?: unknown; // containerUID:hostUID:length
    usernsUidMapUser?: unknown; // name
    uts?: unknown; // path
    variant?: unknown; // variant
    volume?: string[]; // stringArray
  };

  export type optionsArgument = { options?: Options; context?: string };

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
