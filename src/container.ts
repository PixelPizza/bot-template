import { config } from "dotenv-cra";
import { container } from "@sapphire/framework";
import { parseEnv } from "#lib";
config();

declare module "@sapphire/pieces" {
	interface Container {
		env: ReturnType<typeof parseEnv>;
	}
}

container.env = parseEnv();
