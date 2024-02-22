import { ApplyOptions } from "@nezuchan/decorators";
import type { LanguageOptions } from "@nezuchan/i18n";
import { LanguagePiece } from "@nezuchan/i18n";
import type { EnUsCommands } from "./commands/index.js";

@ApplyOptions<LanguageOptions>({
    name: "en-US"
})

export class EnUs extends LanguagePiece {
    public get commands(): EnUsCommands {
        return this.container.stores.get("languages").get("en-US/commands") as EnUsCommands;
    }
}
