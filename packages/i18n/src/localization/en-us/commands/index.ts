import { ApplyOptions } from "@nezuchan/decorators";
import type { LanguageOptions } from "@nezuchan/i18n";
import { LanguagePiece } from "@nezuchan/i18n";
import type { EnUsCommandsUtility } from "./utility.js";

@ApplyOptions<LanguageOptions>({
    name: "en-US/commands"
})

export class EnUsCommands extends LanguagePiece {
    public get utility(): EnUsCommandsUtility {
        return this.container.stores.get("languages").get("en-US/commands/utility") as EnUsCommandsUtility;
    }
}
