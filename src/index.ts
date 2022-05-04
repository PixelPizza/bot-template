import "@sapphire/plugin-logger/register";
import { config } from "dotenv";
import { ApplicationCommandRegistries, RegisterBehavior, SapphireClient } from "@sapphire/framework";
config();

async function main() {
	const client = new SapphireClient({ intents: [] });

	ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(RegisterBehavior.Overwrite);

	await client.login(process.env.TOKEN);
}

void main();
