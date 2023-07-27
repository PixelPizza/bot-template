import "./container";
import { Client } from "#lib";
import { container } from "@sapphire/framework";
import path from "node:path";
import "@sapphire/plugin-logger/register";

async function main() {
	const client = new Client();

	container.stores
		.get("listeners")
		.registerPath(path.join(__dirname, "events"));

	await client.login();
}

void main();
