import { parseEnv } from "../../src/lib";

describe("parseEnv tests", () => {
	test("GIVEN valid env THEN returns parsed env", () => {
		const env = {
			NODE_ENV: "development",
			DISCORD_TOKEN: "token"
		};

		expect(parseEnv(env)).toEqual({
			NODE_ENV: "development",
			DISCORD_TOKEN: "token"
		});
	});

	test("GIVEN invalid env THEN throws error", () => {
		const env = {
			NODE_ENV: "invalid"
		};

		expect(() => parseEnv(env)).toThrowError();
	});
});
