# @jondotsoy/common-cli

Api to connect with docker cli and podman cli

**Sample:**

```ts
import { podman } from "@jondotsoy/common-cli/podman";

await podman.run({ image: "ubuntu", options: { detach: true } });
```
