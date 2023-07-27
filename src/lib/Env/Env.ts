import { s } from "@sapphire/shapeshift";

const envVariables = s.object({
	NODE_ENV: s.enum<"development" | "production" | "test">(
		"development",
		"production",
		"test"
	),
	DISCORD_TOKEN: s.string
});

export function parseEnv(
	env: { [key: string]: string | undefined } = process.env
) {
	return envVariables.parse(env);
}
