// import { EnvClient } from "@kaname-png/plugin-env";
import { LogLevel, SapphireClient } from "@sapphire/framework";

export class Client extends SapphireClient {
	public constructor() {
		// Env client before login
		// const env = new EnvClient({});
		super({
			intents: [],
			logger: {
				level: LogLevel.Debug
			},
			env: {
				enabled: true,
				debug: true
			}
		});
	}
}
