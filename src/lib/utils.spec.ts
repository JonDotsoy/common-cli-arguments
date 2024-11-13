import { it, expect, describe, beforeAll } from "bun:test";
import {
  generateCommandLib,
  generateNameSpaceToFunction,
  parseUsage,
  split,
} from "./utils";
import { podmanRunCommandSpec } from "./__data__/podman-run-command-spec";

it("split a line into an array", async () => {
  const line = "podman machine ssh [options] [NAME] [COMMAND [ARG ...]]";

  expect(Array.from(split(line))).toEqual([
    "podman",
    "machine",
    "ssh",
    "[options]",
    "[NAME]",
    "[COMMAND [ARG ...]]",
  ]);
});

it("parse options with multiple names", () => {
  expect(
    Array.from(parseUsage(["[options] [NAME] [NAME...]"]), (e) => e.tsOptions),
  ).toMatchSnapshot();
});

it("parse options with two names", () => {
  expect(
    Array.from(parseUsage(["[options] [NAME] [NAME]"]), (e) => e.tsOptions),
  ).toMatchSnapshot();
});

it("parse options with multiple container or image", () => {
  expect(
    Array.from(
      parseUsage(["[options] CONTAINER|IMAGE [CONTAINER|IMAGE...]"]),
      (e) => e.tsOptions,
    ),
  ).toMatchSnapshot();
});

it("parse options with container or image", () => {
  expect(
    Array.from(parseUsage(["[options] CONTAINER|IMAGE"]), (e) => e.tsOptions),
  ).toMatchSnapshot();
});

it("parse options with container or image", () => {
  expect(
    Array.from(
      parseUsage(["[options] CONTAINER|IMAGE [CONTAINER|IMAGE]"]),
      (e) => e.tsOptions,
    ),
  ).toMatchSnapshot();
});

it.only("", () => {
  expect(
    Array.from(
      parseUsage(["[options] {CONTAINER|IMAGE|POD|NETWORK|VOLUME} [...]"]),
      (e) => e.tsOptions,
    ),
  ).toMatchSnapshot();
});

it("parse options with container or image to string", () => {
  expect(
    Array.from(
      parseUsage(["[options] CONTAINER|IMAGE [CONTAINER|IMAGE]"]),
      (e) => e.tsOptionsStr,
    ),
  ).toMatchSnapshot();
});

it("generate namespace to function", async () => {
  const tsSource = generateNameSpaceToFunction(
    "name feature",
    podmanRunCommandSpec,
  );

  expect(tsSource).toMatchSnapshot();
  // await Bun.write(
  //   new URL(`__sample__/namespace-podman-run.ts`, import.meta.url),
  //   tsSource,
  // );
});

describe("podman run command", () => {
  beforeAll(async () => {
    const tsSource = generateNameSpaceToFunction(
      "name feature",
      podmanRunCommandSpec,
    );

    await Bun.write(
      new URL(`__sample__/namespace-podman-run-sample1.ts`, import.meta.url),
      tsSource,
    );
  });

  it("parse options argument", async () => {
    const module = await import("./__sample__/namespace-podman-run");

    const args = module.nameFeature.parseOptionsArgument({
      image: "ubuntu",
      options: { arch: "linux/amd64", memory: 500, detach: true },
    });

    expect(args).toEqual([
      "--arch",
      "linux/amd64",
      "--memory",
      "500",
      "--detach",
      "ubuntu",
    ]);
  });
});

describe("", () => {
  it.only("", async () => {
    const commands = await import("./__data__/commands-sample1");

    await generateCommandLib(
      commands,
      new URL(`__sample__/argument-source-mod.ts`, import.meta.url),
    );
  });
});
