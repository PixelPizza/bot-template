import "@sapphire/plugin-logger/register";
import { config } from "dotenv";
import parseEnv from "dotenv-parse-variables";
import { ApplicationCommandRegistries, RegisterBehavior, SapphireClient } from "@sapphire/framework";
process.env = parseEnv(config().parsed!) as NodeJS.ProcessEnv;

async function main() {
	const client = new SapphireClient({ intents: [] });

	ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(RegisterBehavior.Overwrite);

	await client.login(process.env.TOKEN);
}

void main();
