import { SlashCommandBuilder } from "@discordjs/builders";
import { Command as SapphireCommand } from "@sapphire/framework";

export abstract class Command extends SapphireCommand {
	protected get defaultChatInputCommand() {
		return new SlashCommandBuilder().setName(this.name).setDescription(this.description);
	}
}

export namespace Command {
	export type AutocompleteInteraction = SapphireCommand.AutocompleteInteraction;
	export type ChatInputInteraction = SapphireCommand.ChatInputInteraction;
	export type Context = SapphireCommand.Context;
	export type ContextMenuInteraction = SapphireCommand.ContextMenuInteraction;
	export type JSON = SapphireCommand.JSON;
	export type Options = SapphireCommand.Options;
	export type Registry = SapphireCommand.Registry;
	export type RunInTypes = SapphireCommand.RunInTypes;
}
