import { expect, it } from "bun:test";
import { commands } from "../podman/commands";
import { generateArgsToTs } from "./command-to-parse";

it("should generate podman diff types", () =>
  expect(generateArgsToTs(commands.podman.commands.diff)).toMatchSnapshot());
it("should generate podman types", () =>
  expect(generateArgsToTs(commands.podman)).toMatchSnapshot());
it("should generate podman attach types", () =>
  expect(generateArgsToTs(commands.podman.commands.attach)).toMatchSnapshot());
it("should generate podman volume ls types", () =>
  expect(
    generateArgsToTs(commands.podman.commands.volume.commands.ls),
  ).toMatchSnapshot());
it("should generate podman volume create types", () =>
  expect(
    generateArgsToTs(commands.podman.commands.volume.commands.create),
  ).toMatchSnapshot());
it("should generate podman run types", () =>
  expect(generateArgsToTs(commands.podman.commands.run)).toMatchSnapshot());
it("should generate podman rm types", () =>
  expect(generateArgsToTs(commands.podman.commands.rm)).toMatchSnapshot());
it("should generate podman rmi types", () =>
  expect(generateArgsToTs(commands.podman.commands.rmi)).toMatchSnapshot());
it("should generate podman build types", () =>
  expect(generateArgsToTs(commands.podman.commands.build)).toMatchSnapshot());
it("should generate podman cp types", () =>
  expect(generateArgsToTs(commands.podman.commands.cp)).toMatchSnapshot());
it("should generate podman tag types", () =>
  expect(generateArgsToTs(commands.podman.commands.tag)).toMatchSnapshot());
it("should generate podman untag types", () =>
  expect(generateArgsToTs(commands.podman.commands.untag)).toMatchSnapshot());
