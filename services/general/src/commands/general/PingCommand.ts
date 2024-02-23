import { SlashCommandBuilder } from "@discordjs/builders";
import type { BaseInteraction } from "@nezuchan/core";
import { ApplyOptions } from "@nezuchan/decorators";
import type { CommandOptions } from "@nezuchan/framework";
import { Command } from "@nezuchan/framework";
import * as schema from "@nezuchan/kanao-schema";
import { eq } from "drizzle-orm";

@ApplyOptions<CommandOptions>({
    name: "ping",
    chatInput: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Check the bot's latency")
        .toJSON()
})

export class PingCommand extends Command {
    public async chatInputRun(interaction: BaseInteraction): Promise<BaseInteraction> {
        const loc = this.container.client.i18n.get(await interaction.fetchUserLocalization());
        const shardCount = await this.container.client.fetchShardCount();
        const currentShardId = Number(BigInt(interaction.guildId!) >> 22n) % shardCount;
        const gatewayStatus = await this.container.client.store.query.status.findFirst({
            where: () => eq(schema.status.shardId, currentShardId)
        });

        return interaction.reply({ content: loc.commands.utility.PING_SUCCESS_LATENCY(gatewayStatus?.latency ?? -1) });
    }
}
