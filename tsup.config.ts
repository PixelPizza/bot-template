import type { Options } from "tsup";

export const tsup: Options = {
	clean: true,
	dts: false,
	entryPoints: ["src/index.ts", "src/*/**/*.ts", "!src/lib/**/*.ts"],
	format: ["esm"],
	minify: true,
	skipNodeModulesBundle: true,
	sourcemap: false,
	target: "esnext"
};
