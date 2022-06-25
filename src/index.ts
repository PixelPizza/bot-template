import "@sapphire/plugin-logger/register";
import "@kaname-png/plugin-env/register";
import { config } from "dotenv";
import { ApplicationCommandRegistries, RegisterBehavior } from "@sapphire/framework";
import { Client } from "./lib/Client";
import "./container";
config();

async function main() {
	// Options can be configured in src/lib/Client.ts
	const client = new Client();

	ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(RegisterBehavior.Overwrite);

	await client.login();
}

void main();
