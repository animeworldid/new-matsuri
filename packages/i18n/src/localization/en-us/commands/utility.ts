import { inlineCode } from "@discordjs/builders";
import { ApplyOptions } from "@nezuchan/decorators";
import type { LanguageOptions } from "@nezuchan/i18n";
import { LanguagePiece } from "@nezuchan/i18n";

@ApplyOptions<LanguageOptions>({
    name: "en-US/commands/utility"
})

export class EnUsCommandsUtility extends LanguagePiece {
    public PING_SUCCESS = (): string => "Pong!";
    public PING_SUCCESS_LATENCY = (latency: number): string => `Pong! Took me ${inlineCode(String(latency))}ms to respond.`;
}
