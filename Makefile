.PHONY: pull pull-podman pull-docker build build-esm fmt

fmt:
	bun fmt

pull: pull-podman pull-docker fmt

pull-podman:
	cd ./src/podman && bun pull.ts

pull-docker:
	cd ./src/docker && bun pull.ts

build: build-esm

build-esm: pull
	rm -rf ./lib/esm
	bunx tsc --project tsconfig.esm.json --outDir ./lib/esm
